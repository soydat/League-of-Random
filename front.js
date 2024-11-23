// Importar la función desde randomizer.js usando sintaxis ES6
import { ranChampionNameGen } from './randomizer.js';

function first_button() {
    console.log("first button function ejecutada")
    const intro = document.querySelector("#intro");
    const mainMenu = document.querySelector("#main__menu");
    const boton = document.querySelector("#first_button");
    const modal = document.querySelector("#modal");
    const acceptBtn = document.querySelector("#accept-btn");
    const cancelBtn = document.querySelector("#cancel-btn");

    boton.addEventListener("click", () => {
        modal.style.display = "flex"; 
    });

    acceptBtn.addEventListener("click", () => {
        intro.remove();
        modal.style.display = "none";
        mainMenu.style.display = "flex"
    });

    cancelBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

async function RandomizerElement() {
    console.log("Cargando randomizer.js");

    // Obtener datos usando las APIs expuestas
    const itemData = await window.api.getItems();
    const summonerData = await window.api.getSummoners();

    const MainContainerEl = document.querySelector(".generatedchamp__container");
    const loadingScreenEl = document.querySelector('#loadingscreen');
    const randomChampEl = document.querySelector("#randomChamp");
    const randomButton = document.querySelector("#randomButton");
    const randomTitleChampEl = document.querySelector("#randomTitleChamp");
    const randomChampDescriptionEl = document.querySelector("#randomChampDescription");
    const background = document.querySelector(".background");
    const csaImg = document.querySelector("#randomImgChamp");
    const itemSlots = document.querySelectorAll(".item-slot");
    const summonerSlots = document.querySelectorAll(".summoner-slot");
    const titulo = document.querySelector('#tituloapp');
    const filtersTab = document.querySelector('.filter__container');
    const versionEl = document.querySelector('.version');
    const mainBackgroundEl = document.querySelector('.main-background');
    
    // Mostrar el filtro desde el inicio
    filtersTab.style.display = "none";

    // Funciones auxiliares para items y summoners
    function getRandomItems(count) {
        const itemIds = Object.keys(itemData.data);
        const randomItems = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * itemIds.length);
            randomItems.push(itemIds[randomIndex]);
        }
        return randomItems;
    }

    function getRandomSummoners(count) {
        const summonerIds = Object.keys(summonerData.data);
        const randomSummoners = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * summonerIds.length);
            randomSummoners.push(summonerIds[randomIndex]);
        }
        return randomSummoners;
    }
    
    randomButton.addEventListener("click", async () => {
            filtersTab.style.display = "flex";
            filtersTab.style.left = "0";
            filtersTab.style.padding = "0 0 25px 20px";
            randomButton.style.margin = "60px 0px 0px 350px";
            const soloCampeonFiltro = document.querySelector("#only-champion").checked;
            const soloItemsFiltro = document.querySelector('#only-items').checked;
            const championAndItemFiltro = document.querySelector('#championAndItem').checked;
    
            mainBackgroundEl.style.backgroundImage = "none";
            titulo.style.display = "none";
            MainContainerEl.style.padding = "18px 25px";
            versionEl.style.display = "none";
    
            if (soloCampeonFiltro) {
                loadingScreenEl.style.display = 'flex';
                const res = await ranChampionNameGen();
                MainContainerEl.style.display = "flex";
                randomChampEl.textContent = res[0];
                randomTitleChampEl.textContent = res[1];
                randomChampDescriptionEl.textContent = res[2];
                const champion = res[3];
                
                    const path = champion + "_0.jpg";
                    const url = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + path;
                    background.style.backgroundImage = url;
                    const csaPath = champion + ".png";
                    const csaUrl = "url('https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/" + csaPath;
        
                    csaImg.style.backgroundImage = csaUrl;
                    csaImg.style.display = "flex";
                    
                    setTimeout(()=>{
                        loadingScreenEl.style.display = 'none';
                    }, 2000)
            } else if (soloItemsFiltro) {
                    loadingScreenEl.style.display = 'flex';
                    itemSlots.forEach(slot => slot.style.backgroundImage = '');
                    const randomItems = getRandomItems(6);
                    
                    itemSlots.forEach((slot, index) => {
                        const itemPath = "url('https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/" + randomItems[index] + ".png')";
                        slot.style.backgroundImage = itemPath;
                    });
                    setTimeout(()=>{
                        loadingScreenEl.style.display = 'none';
                    }, 2000)
            } else if (championAndItemFiltro) {
                loadingScreenEl.style.display = 'flex';
                const res = await ranChampionNameGen();
                MainContainerEl.style.display = "flex";
                randomChampEl.textContent = res[0];
                randomTitleChampEl.textContent = res[1];
                randomChampDescriptionEl.textContent = res[2];
                const champion = res[3];
                
                const path = champion + "_0.jpg";
                const url = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + path;
                const csaPath = champion + ".png";
                const csaUrl = "url('https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/" + csaPath;
        
                itemSlots.forEach(slot => slot.style.backgroundImage = '');
                    summonerSlots.forEach(slot => slot.style.background = '');
                    
                    const randomItems = getRandomItems(6);
                    const randomSummoners = getRandomSummoners(2);
                    
                    itemSlots.forEach((slot, index) => {
                        const itemPath = "url('https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/" + randomItems[index] + ".png')";
                        slot.style.backgroundImage = itemPath;
                    });
                    
                    summonerSlots.forEach((slot, index) => {
                        const sumPath = "url('https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/Summoner" + randomSummoners[index] + ".png')";
                        slot.style.backgroundImage = sumPath;
                    });
                    
                    background.style.backgroundImage = url;
                    csaImg.style.backgroundImage = csaUrl;
                    csaImg.style.display = "flex";
                    setTimeout(()=>{
                        loadingScreenEl.style.display = 'none';
                    }, 2000)
            }
    });
}

function optionsMenu() {
    const optionsButtonEl = document.querySelector('.optionsButton');
    const randomizerTabEl = document.querySelector('.randomizer__container');
    const optionsTabEl = document.querySelector('.optionsTab');
    const backFromOptionsButtonEl = document.querySelector('.backFromOptionsButton');

    optionsButtonEl.addEventListener("click", () => {
        optionsButtonEl.style.display = "none";
        randomizerTabEl.style.display = "none";
        optionsTabEl.style.display = "flex";
    });

    backFromOptionsButtonEl.addEventListener("click", () => {
        optionsTabEl.style.display = "none";
        randomizerTabEl.style.display = "flex";
        optionsButtonEl.style.display = "flex";
    });
}

function main() {
    console.log("main function ejecutada");
    first_button();
    console.log("main function ejecutada 2");
    RandomizerElement();
    console.log("main function ejecutada 3");
    optionsMenu();
    console.log("main function ejecutada 4");
}

main();
