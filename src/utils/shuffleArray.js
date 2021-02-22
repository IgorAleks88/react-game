export default function shuffleArray (arr) {
    const copyArr = arr.slice();
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        const randIndex = Math.floor(Math.random() * copyArr.length);
        result.push(copyArr[randIndex]);
        copyArr.splice(randIndex, 1);
    }
    return result;
}
