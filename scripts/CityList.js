import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()

const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

// Define a function that builds a string of city names. Needs a parameter for assignments array.
export const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let citiesString = ""
    // Iterate the array of assignment objects
    for (const assignment of assignments) {
        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            if (city.id === assignment.cityId)
            // Add the name of the matching city to the array of city names
            citiesString = `${city.name} and ${assignment}`
        }
    }
    // After the loop is done, return the string
    return citiesString
}