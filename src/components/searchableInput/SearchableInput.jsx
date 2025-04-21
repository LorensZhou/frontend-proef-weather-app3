

import React, { useState, useRef, useEffect } from "react"; // Import useRef
import './SearchableInput.css'

function SearchableInput(
    {   items,
        onSearch,
        label = "Search",
        maxSuggestions,
        inputId,
        inputName,
        disabled = false,
        initialValue,
    })
{
    const [searchValue, setSearchValue] = useState(initialValue || "");

    useEffect(() => {
        console.log(`SearchableInput (${inputId}): initialValue prop gewijzigd naar`, initialValue); // Debugging log
        // Werk de interne state bij naar de nieuwe waarde van de prop
        setSearchValue(initialValue || "");

        // BELANGRIJK: We moeten hier mogelijk ook de parent state bijwerken,
        // vooral als de initieel geladen waarde later wordt leeggemaakt door blur.
        // De huidige handleBlur wist alleen de interne state.
        // Als je wilt dat de parent state ook leeg is als de initieel geladen waarde
        // wordt gewist door blur ZONDER selectie, moet je onSearch oproepen.
        // Echter, onSearch wordt nu alleen bij selectie aangeroepen.
        // Laten we vasthouden aan het patroon dat de parent state pas bij selectie/submit wordt bijgewerkt.
        // De parent state wordt immers al gezet in de Profile useEffect.
        // Dit useEffect hier zorgt er alleen voor dat de input display de parent state reflecteert bij updates.

    }, [initialValue]); // <-- Dependency array: deze effect draait als 'initialValue' verandert.

    // const [searchValue, setSearchValue] = useState( "");
    // Renamed for clarity: true means show the dropdown
    const [showSuggestionsDropdown, togShowSuggestionsDropdown] = useState(false);

    // Use a ref to track if the user is clicking a suggestion item
    const isSelectingItemRef = useRef(false);

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        // Show dropdown on input change, as long as there's input
        togShowSuggestionsDropdown(true);
        // If they are typing again after maybe selecting, reset ref
        isSelectingItemRef.current = false;
    };

    const handleItemClick = (item) => {
        // Set the input value to the selected item
        setSearchValue(item);
        // Call the parent's onSearch handler with the selected item
        onSearch(item);
        // Hide the dropdown after selection
        togShowSuggestionsDropdown(false);
        // Reset the ref after the selection is complete
        isSelectingItemRef.current = false;
    };

    const handleSuggestionMouseDown = () => {
        // When the user starts pressing the mouse button down on a suggestion item,
        // set the ref to true. This happens BEFORE the input loses focus (blur).
        // onMouseDown is now on the suggestion item and not on somewhere else
        isSelectingItemRef.current = true;
    };

    const handleBlur = (event) => {
        // Use a timeout to allow the potential mouseup/click event on a
        // suggestion item to register BEFORE we decide to hide the dropdown or clear input.
        setTimeout(() => {
            // If isSelectingItemRef is false, it means the blur happened
            // and the user was NOT clicking on a suggestion item.

            if (!isSelectingItemRef.current) {
                console.log("Blurred without selecting. Clearing input.");
                if (!items.find ((item) => item === event.target.value)){
                    setSearchValue('');
                    console.log( "target.value komt niet voor in items array.");
                }
                togShowSuggestionsDropdown(false);
            } else {
                console.log("Blurred while selecting or just finished selecting. Hiding dropdown.");
                // If they were selecting, just hide the dropdown.
                // The handleItemClick would have already set the value.
                togShowSuggestionsDropdown(false);
                // Reset the ref here too, in case the click handler didn't fire for some reason,
                // or for situations like mousedown on item -> drag mouse away -> blur.
                isSelectingItemRef.current = false;
            }
            // Ensure the ref is reset regardless after the timeout
            isSelectingItemRef.current = false;
        }, 100); // A small delay (e.g., 100ms) is usually sufficient
    };

    const handleFocus = () => {
        // Show suggestions when the input is focused
        togShowSuggestionsDropdown(true);
        // Reset the ref when input is focused
        isSelectingItemRef.current = false;
    }


    // Filter items for display in the dropdown
    const filteredItems = items.filter((item) =>
        // Show suggestions only if there's a search term AND the dropdown should be shown
        searchValue && showSuggestionsDropdown &&
        // Item matches the search term (case-insensitive)
        item.toLowerCase().includes(searchValue.toLowerCase()) &&
        // Don't show the exact current value as a suggestion (optional, but common)
        item !== searchValue
    ).slice(0, maxSuggestions);


    return (
        <div className="dropdown-container">
            <label htmlFor={inputId}>{label}</label>
            <div className="search-container">
                    <input
                        type="text"
                        id={inputId}
                        name={inputName}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={handleFocus} // Use the new focus handler
                        onBlur={handleBlur}
                        disabled={disabled}
                        autoComplete="off" // Often good to turn off browser autocomplete for custom ones
                    />

                    {/* Render dropdown only if showSuggestionsDropdown is true and there are filtered items */}
                    {showSuggestionsDropdown && filteredItems.length > 0 && (
                        <div className="dropdown">
                            {filteredItems.map((item) => (
                                <div key={item}
                                     className="dropdown-row"
                                     onClick={() => handleItemClick(item)}
                                    // If this handle is not triggered then the mouse selection is somewhere else
                                     onMouseDown={handleSuggestionMouseDown}

                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            );
            }

            export default SearchableInput;