export default function shuffleArray (arr) {
    const copyArr = arr.slice();
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        const randIndex = Math.floor(Math.random() * copyArr.length);
        const newItem = {
            item: copyArr[randIndex].item,
            isActive: true,
            isRotate: false
        };
        result.push(newItem);
        copyArr.splice(randIndex, 1);
    }
    return result;
}
