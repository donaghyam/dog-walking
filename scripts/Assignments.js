import { CityList } from "./CityList.js"
import { getCities, getPets, getWalkerCities, getWalkers } from "./database.js"
import { filterWalkerCitiesByWalker } from "./Walkers.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cityList = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"
    // Iterate through pets to display which pet is being walked by which walker
    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers) // function takes in pet and walker parameters. returns walker object
        const city = filterWalkerCitiesByWalker(currentPetWalker) // function takes in walker parameter. returns city object
        const cityName = cityNameAssignment(city)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${cityName} 
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

export const cityNameAssignment = (cityArray) => {
    let cityNameArray = []
    for (const city of cityArray) {
        for (const name of cityList) {
            if (city === name.id){
                cityNameArray.push(name.name)
            }
        }
    }
    return cityNameArray
}