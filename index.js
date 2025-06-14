// Code your solution here
const cityDrivers = drivers.filter(function(driver){
   return driver.city==="Nairobi";
});

// driversName=[driver 1. driver 2, driver 2]
function findMatching(driversName, nameToMatch){
    const matchingDrivers= driversName.filter(function(driverName){
       return driverName.toLowerCase() ===nameToMatch.toLowerCase();        
    });
    return matchingDrivers
}


//fuzzyMatch
function fuzzyMatch(driversName, letterToMatch){
    const fuzzyDrivers = driversName.filter(function(driverName){
    return driverName.startsWith(letterToMatch);
    });
    return fuzzyDrivers;
}

//matchName function
function matchName(arrayObject, nameToMatch){
    const namePropertyMatch = arrayObject.filter(function(driver){
        return driver.name===nameToMatch;

    });
    return namePropertyMatch;
}