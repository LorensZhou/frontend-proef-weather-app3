
import cities from "../constants/cities.js";

function invalidCityNamesCheck(cityNamesInfields){
    const validCityNames = new Set(cities.map(city => city.name));

    const invalidCityIndices = [];

    cityNamesInfields.forEach((cityName, index) => {
        // Check if the cityName is NOT an empty string before validating against the cities list
        if (cityName !== "") {
            if (!validCityNames.has(cityName)) {
                invalidCityIndices.push(index);
            }
        }
        // If cityName IS "", we simply do nothing and move to the next iteration
    });
    return invalidCityIndices;
}

export default invalidCityNamesCheck;