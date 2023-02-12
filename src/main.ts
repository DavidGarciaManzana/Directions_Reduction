export function dirReduc(arr: string[]): string[] {

    function arrayRemove(array: string[], index: number) {
        
        return array.splice(index, 1)
    }

    let removeConsecutiveMoves = (array: string[], lastDirection: string): string[] | void => {
        
        for (let i = 0; i < array.length; i++) {
            if (lastDirection == "NORTH" && arr[i] == "SOUTH") {
                
                arrayRemove(array, i)
                arrayRemove(array, i - 1)
                // console.log(array)
                return array
            } else if (lastDirection == "SOUTH" && arr[i] == "NORTH") {
                arrayRemove(array, i)
                arrayRemove(array, i - 1)
                // console.log(array)
                return array
            } else if (lastDirection == "EAST" && arr[i] == "WEST") {
                arrayRemove(array, i)
                arrayRemove(array, i - 1)
                // console.log(array)
                return array
            } else if (lastDirection == "WEST" && arr[i] == "EAST") {
                arrayRemove(array, i)
                arrayRemove(array, i - 1)
                // console.log(array)
                return array
            }
            lastDirection = array[i]
        }


    }



    const contariesConsecutiveWordsExists = (arr: string[]) => {
        let lastDirection = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "SOUTH" && lastDirection == "NORTH" || arr[i] == "NORTH" && lastDirection == "SOUTH" || arr[i] == "EAST" && lastDirection == "WEST" || arr[i] == "WEST" && lastDirection == "EAST") {
                return true
            }
            lastDirection = arr[i]
        }
        return false
    }

    while (contariesConsecutiveWordsExists(arr)) {
        removeConsecutiveMoves(arr, arr[0])
    }

    return arr;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))//, ["WEST"]);
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]))//, []);