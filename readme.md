# League of Random
![a preview image of the main menu](https://github.com/soydat/League-of-Random/blob/main/media/preview.jpeg?raw=true)

## Project Overview

League of Random is a desktop application designed to generate random combinations of champions, items, and summoner spells for League of Legends. This tool allows players to explore new setups and embrace exciting in-game challenges, sparking creativity and adding a fresh layer of fun.

## Key Features
![a preview image of the random generator](https://github.com/soydat/League-of-Random/blob/main/media/preview2.jpeg?raw=true)

### Random Champion Generation
- Returns a randomly selected champion with their name, title, and a brief description.

### Random Item Generation
- Assigns six random items to the generated champion, crafting a unique build each time.

### Random Summoner Spell Generation
- Selects two summoner spells at random to complement the champion's setup.

### Custom Filters
- **Champion Only:** Generates only a random champion.
- **Items Only:** Generates only an item setup without champions or spells.
- **Champion and Items:** Generates a champion along with items, excluding spells.

## Technologies Used

- **Electron:** Powers the desktop application framework.
- **JavaScript (Node.js):** Handles backend logic and DOM manipulation.
- **HTML and CSS:** Structures and styles the user interface.
- **League of Legends API (Data Dragon):** Provides images and data for champions, items, and spells.

## Development Steps

### Initial Setup
- Configure the development environment with Electron.
- Set up basic project structure with HTML, CSS, and JavaScript.

### Feature Implementation
- **Champion Generation:** Uses the `ranChampionNameGen()` function to retrieve details for a random champion.
- **Item and Spell Generation:** Employs custom modules (`items.js` and `summoners.js`) to randomly generate items and summoner spells.

### Filter Integration
- Adds filter options allowing users to specify which elements to generate.

### User Interface
- Designs an intuitive interface with clear options for generating random configurations.
- Handles user interaction with click events and dynamic DOM updates.

## How to Use the Application

### Download and Installation
1. Clone this repository to your local machine.
2. Run `npm install` to install dependencies.
3. Start the application with `npm start`.

### Usage
- Select your desired filters.
- Click the generate button to view random results.

### Current Language:
- The project is currently available only in Spanish.

### Contributions:
- I welcome pull requests for code optimizations, improvements, or additions that enhance the program, including adding support for other languages.

## Credits
This project was developed by Franco Nahuel Almeida. All rights reserved.
