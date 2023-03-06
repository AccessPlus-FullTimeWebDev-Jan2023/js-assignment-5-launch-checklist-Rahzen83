// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget");
    div.innerHTML =
                ` <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
}

function validateInput(testInput) {
    let numberInput = Number(testInput);

    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(numberInput)) {
        return "Not a Number";
    }
    else if (isNaN(numberInput) === false) {
        return "Is a Number"
    }

}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilot = getElementById("pilotStatus");
    let copilot = getElementById("copilotStatus");
    let fuelLevel = getElementById("fuelStatus");
    let cargoLevel = getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("All fields are required")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Enter valid input")

    } else {
        list.style.visibility = visible;
        pilot.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilot.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById(launchStatus);
        if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelLevel.innerHTML = "Fuel level too low for launch";
            cargoLevel.innerHTML = "Cargo mass low enough to launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#c7254e";
        
        } else if(fuelLevel >= 10000 && cargoLevel > 10000){
            fuelLevel.innerHTML = "Fuel level high enough for launch";
            cargoLevel.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#c7254e";

    } else if(fuelLevel < 10000 && cargoLevel > 10000){
        fuelLevel.innerHTML = "Fuel level too low for launch";
        cargoLevel.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "#c7254e";
    } else{
          fuelLevel.innerHTML = "Fuel level high enough for launch";
          cargoLevel.innerHTML = "Cargo mass low enough to launch";
          launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "#419f6a";

    }
}
    }


    async function myFetch() {
        let planetsReturned;

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            return response.json()
        });

        return planetsReturned;
    }

    function pickPlanet(planets) {
        let planetNumber = Math.floor(Math.random()*planets.length);
        return planets[planetNumber];
    }

    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet;
    module.exports.myFetch = myFetch;
