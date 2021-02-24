/* eslint-disable no-loop-func */
export default function autoPlay (gameArray) {
    const cardArray = document.querySelectorAll('.card-container');
    let i = 0;
    function openPairOfCards () {
        let timeout = 0;
        const currentCard = cardArray[i];
        if (currentCard.dataset.active === 'true') {
            const currentItem = currentCard.dataset.item;
            const secondCurrentItem = cardArray[gameArray.lastIndexOf(currentItem)];
            currentCard.classList.add('card-container__rotate');
            secondCurrentItem.classList.add('card-container__rotate');
            currentCard.dataset.active = false;
            secondCurrentItem.dataset.active = false;
            i += 1;
            timeout = 750;
        } else {
            i += 1;
            timeout = 0;
        }
        if (i < cardArray.length) {setTimeout(openPairOfCards, timeout);}
    }
    openPairOfCards();
}
