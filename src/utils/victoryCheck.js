export default function victoryCheck (gameArray) {
    let result = true;
    for (let i = 0; i < gameArray.length; i += 1) {
        if (gameArray[i].isActive) {
            result = false;
            break;
        }
    }
    return result;
}
