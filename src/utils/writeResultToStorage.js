export default function writeResultToStorage (difficulty, turns) {
    let statistic = {
        6: [],
        9: [],
        12: []
    };
    if (localStorage.getItem('gameStatistic')) {
        statistic = JSON.parse(localStorage.getItem('gameStatistic'));
    }
    const currentDate = new Date().toUTCString().slice(0, -4);
    const newScore = {
        date: currentDate,
        turns: turns
    };
    statistic[difficulty].push(newScore);
    localStorage.setItem('gameStatistic', JSON.stringify(statistic));
}
