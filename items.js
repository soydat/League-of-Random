function getRandomItems(count) {
    const itemsList = require('./items.json');
    const itemIds = Object.keys(itemsList.data);
    const elixirFilter = ["Elixir of Iron", "Elixir of Sorcery", "Elixir of Wrath"];
    const potionFilter = ["Health Potion", "Refillable Potion"];
    const jungleItems = ["Scorchclaw Pup", "Gustwalker Hatchling", "Mosstomper Seedling"];
    const doranItems = ["Doran's Shield", "Doran's Blade", "Doran's Ring", "Cull"];
    const suppItem = "World Atlas"
    const wards = ["Control Ward"]

    const purchasableItems = itemIds.filter(itemId => {
        const item = itemsList.data[itemId];
        return (
            item.inStore !== false &&
            item.gold &&                            
            item.gold.purchasable === true &&       
            item.gold.base > 0 && 
            item.maps["11"] === true &&
            item.name != elixirFilter[0] && item.name != elixirFilter[1] && item.name != elixirFilter[2] &&
            item.name != potionFilter[0] && item.name != potionFilter[1] &&
            item.name != jungleItems[0] && item.name != jungleItems[1] && item.name != jungleItems[2] &&
            item.name != doranItems[0] && item.name != doranItems[1] && item.name != doranItems[2] && item.name != doranItems[3] &&
            item.name != suppItem && item.name != wards && !item.into
        );
    });

    const randomItems = [];
    const usedIndices = new Set();

    while (randomItems.length < count && randomItems.length < purchasableItems.length) {
        const randomIndex = Math.floor(Math.random() * purchasableItems.length);

        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            randomItems.push(purchasableItems[randomIndex]);
        }
    }

    return randomItems;
}

module.exports = {
    getRandomItems
}