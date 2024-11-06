function getRandomSummoners(count) {
    const SummonerList = require('./summoners.json');
    const SummonerIds = Object.keys(SummonerList.data.summoners);
    
    const summonersArray = [] 


    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * SummonerIds.length);
        const randomSummoner = SummonerIds[randomIndex];

        if (!summonersArray.includes(randomSummoner)) {
            summonersArray.push(randomSummoner);
        } else {
            i--;
        }
    }
    return summonersArray
}

module.exports = {
    getRandomSummoners
}