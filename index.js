// code your solution here
function superbowlWin(record){

    const value = record.find(element => element.result === "W")
    if(value === undefined) {
        return undefined
    } 

    return value.year
}