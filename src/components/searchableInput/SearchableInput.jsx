import {useState} from "react";
import './SearchableInput.css'

function SearchableInput(
    {   items,
        onSearch,
        label = "Search",
        maxSuggestions,
        inputId,
        inputName,})
{
    const [searchValue, setSearchValue] = useState("");
    const [itemClicked, toggleItemClicked] = useState(false);

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        toggleItemClicked(false); // Show dropdown on input change
    };

    const handleItemClick = (item) => {
        setSearchValue(item);
        onSearch(item);
        toggleItemClicked(true); // Hide dropdown after selection
    };

    const handleBlur = () => {
        // Keep dropdown visible if input is focused or a dropdown item is hovered
        // This is a basic implementation; a more robust solution might involve
        // tracking focus on dropdown items as well.
        setTimeout(() => {
            toggleItemClicked(true);
        }, 100); // Small delay to allow clicks on dropdown items
    };

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
                    // onFocus={() => toggleDropdownVisible(true)}
                    onBlur={handleBlur}
                />

                    <div className="dropdown">
                        {items.filter((item) =>
                                    searchValue && !itemClicked &&
                                    item.toLowerCase().includes(searchValue.toLowerCase()) &&
                                    item !== searchValue)
                            .slice(0, maxSuggestions)
                            .map((item) => (
                                <div
                                    key={item}
                                    className="dropdown-row"
                                    onClick={() => handleItemClick(item)}>
                                    {item}
                                </div>
                            ))}
                    </div>
            </div>
        </div>
    );
}

export default SearchableInput;


