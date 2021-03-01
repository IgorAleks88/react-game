/* eslint-disable no-loop-func */
export default function autoPlay (gameArray, setGameArray) {
    let i = 0;
    function openPairOfCards () {
        let timeout = 0;
        const currentCard = gameArray[i];
        if (currentCard.isActive) {
            const newGameArray = gameArray.slice();
            const currentItem = newGameArray[i].item;
            for (let j = newGameArray.length - 1; j > i; j -= 1) {
                if (newGameArray[j].item === currentItem) {
                    newGameArray[i].isActive = false;
                    newGameArray[j].isActive = false;
                    newGameArray[i].isRotate = true;
                    newGameArray[j].isRotate = true;
                    setGameArray(newGameArray);
                    break;
                }
            }
            i += 1;
            timeout = 750;
        } else {
            i += 1;
            timeout = 0;
        }
        if (i < gameArray.length) {setTimeout(openPairOfCards, timeout);}
    }
    openPairOfCards();
}
