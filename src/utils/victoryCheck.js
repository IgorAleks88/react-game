export default function victoryCheck () {
    const cardArray = document.querySelectorAll('.card-container');
    let result = true;
    for (let i = 0; i < cardArray.length; i += 1) {
        if (cardArray[i].dataset.active === 'true') {
            result = false;
            break;
        }
    }
    return result;
}
