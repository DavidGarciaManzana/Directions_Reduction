const dirReduc = (arr: string[]): string[] => {
    const contrariesConsecutiveWordsExists = (arr: string[]): boolean => {
        let lastDirection = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "SOUTH" && lastDirection == "NORTH" || arr[i] == "NORTH" && lastDirection == "SOUTH" || arr[i] == "EAST" && lastDirection == "WEST" || arr[i] == "WEST" && lastDirection == "EAST") {
                return true;
            };
            lastDirection = arr[i];
        }
        return false;
    }

    const arrayRemove = (array: string[], index: number) => {
        return array.splice(index, 1);
    }

    const removeFirstTwoConsecutiveMoves = (array: string[]): string[] | void => {
        let lastDirection = array[0]
        for (let i = 0; i < array.length; i++) {
            if (lastDirection == "NORTH" && arr[i] == "SOUTH") {
                arrayRemove(array, i);
                arrayRemove(array, i - 1);
                return array;
            } else if (lastDirection == "SOUTH" && arr[i] == "NORTH") {
                arrayRemove(array, i);
                arrayRemove(array, i - 1);
                return array;
            } else if (lastDirection == "EAST" && arr[i] == "WEST") {
                arrayRemove(array, i);
                arrayRemove(array, i - 1);
                return array;
            } else if (lastDirection == "WEST" && arr[i] == "EAST") {
                arrayRemove(array, i);
                arrayRemove(array, i - 1);
                return array;
            }
            lastDirection = array[i];
        }
    }

    
    //1.-Make sure there are words to remove and look after remove other words
    while (contrariesConsecutiveWordsExists(arr)) {
        //2.-Remove the first two contrary words 
        removeFirstTwoConsecutiveMoves(arr)
    };
    return arr;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))//, ["WEST"]);
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]))//, []);