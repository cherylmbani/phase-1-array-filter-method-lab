// Code your solution here
const driversMatch = drivers.filter(function findMatching(driversarray, name){

    return driversMatch.toLowerCase()===name.toLowerCase();
});

function findMatching(driversArray, nameToMatch){
    const result = driversArray.filter(function(driverName){
        return driverName.toLowerCase() === nameToMatch;
    });
    return result;

}
const drivers=["bobby", "cheryl", "bobby"];