import { getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walkerCities) => {
    // Define an empty array to store all of the assignment objects
    let walkerCitiesAssignment = []
    // Iterate the array value of walkerCities
    for (const walker of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (walker.id === walkerCities.walkerId) {
            // If it does, add the current object to the array of assignments
            walkerCitiesAssignment.push(walker)
        }
    }
    // After the loop is done, return the assignments array
    return walkerCitiesAssignment
}