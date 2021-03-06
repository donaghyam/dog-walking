import { getCities, getWalkers } from "./database.js"
import { assignedCityNames } from "./CityList.js"
import { getWalkerCities } from "./database.js"
import { cityNameAssignment } from "./Assignments.js"


// define variable to hold array of walkers
const walkers = getWalkers()
// define variable to hold array of walkerCitites
const walkerCities = getWalkerCities()
const cityList = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const city = filterWalkerCitiesByWalker(walker) // function takes in walker parameter. returns city object
                    const cityName = cityNameAssignment(city)
                    window.alert(`${walker.name} services ${cityName}`)
                }
            }
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

// The function needs the walker information, so define a parameter
export const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    let walkerCitiesAssignment = []
    // Iterate the array value of walkerCities
    for (const city of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (walker.id === city.walkerId) {
            // If it does, add the current object to the array of assignments
            walkerCitiesAssignment.push(city.cityId)
        }
    }
    return walkerCitiesAssignment
}


