let champions;

async function getChampionList() {
    try {
        // Usar la API expuesta desde preload.js en lugar de fs
        champions = await window.api.getChampions();
        return champions;
    } catch (error) {
        console.error("Error loading champion list:", error);
    }
}

function getRandomChampion() {
    if (!champions || !champions.data) {
        throw new Error("Champion list not loaded yet. Please call getChampionList first.");
    }

    const championNames = Object.keys(champions.data);
    const randomIndex = Math.floor(Math.random() * championNames.length);
    const randomChampionKey = championNames[randomIndex];
    return champions.data[randomChampionKey];
}

async function ranChampionNameGen() {
    await getChampionList();
    const randomChampion = getRandomChampion();
    const array = [randomChampion.name, randomChampion.title, randomChampion.blurb, randomChampion.id];
    return array;
}

async function main() {
    await getChampionList();
    const randomChampion = getRandomChampion();
    return randomChampion.name;
}

main();

// Cambiar module.exports por export
export { ranChampionNameGen };
