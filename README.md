# 01_Codecool_jatek
## Orientation Week, 1st Team work, - "Codecool Jatek" - Code.org

### Project: 
- Finished project to play - [https://studio.code.org/projects/gamelab/t2qjCPQz-raleZds4jsZyt7QJnxBce05LFxnZ-qC0IA/edit/#](https://studio.code.org/projects/gamelab/t2qjCPQz-raleZds4jsZyt7QJnxBce05LFxnZ-qC0IA)
- Timi branch - https://github.com/fakecrash1/01_Codecool_jatek/blob/Timi-branch/01_Codecool_Jatek.js

- Actual Test Version: [https://studio.code.org/projects/gamelab/jn8XbisiBAkPs_j_JSgrK5-i6EIzZPLShItBjy4qhic](https://studio.code.org/projects/gamelab/jn8XbisiBAkPs_j_JSgrK5-i6EIzZPLShItBjy4qhic)

- Experimental version: [https://studio.code.org/projects/gamelab/lAYWHDYIBKqBLnknxsREx3gaO1yhbC7kumCdPDorAE8](https://studio.code.org/projects/gamelab/lAYWHDYIBKqBLnknxsREx3gaO1yhbC7kumCdPDorAE8)

## Documentation 

### This JavaScript code appears to be for a simple game where two heroes (hero1 and hero2) compete to catch a book thrown by a boss character. The heroes can move left and right, and jump to catch the book. Each time a hero catches the book, their counter increases by one. The game ends when one of the heroes reaches a score of 10, at which point they are declared a "Full-Stack Developer".

Here's a brief summary of what each part of the code does:

Sprites Creation: The code starts by creating sprites for the background, endGame screen, two heroes, the boss, the book, and the welcome screen. Sprites are 2D graphics that are used in this game to represent the characters, objects, and backgrounds.

Settings: The speed of the heroes and the initial counters for each hero are set.

Draw Function: This function is called repeatedly and is responsible for updating the game screen. It draws the sprites, updates the score display, and handles the movement and actions of the heroes.

Controls: The controls for moving the heroes left and right, making them jump, and throwing the book are defined. The 'a' and 'd' keys control the left and right movement of hero1, while the 'w' key makes hero1 jump. Similarly, the 'left' and 'right' keys control the movement of hero2, and the 'up' key makes hero2 jump. The 'space' key is used to start the game and throw the book.

Book Throw: This function makes the book visible, sets its position to the boss's location, and gives it a random velocity in the X and Y directions.

Collision Detection: The code checks if the book is touching either of the heroes. If it is, the respective hero's counter is incremented, the book is made invisible, and a new book is thrown.

End Game: If either hero's counter reaches 10, the game ends. All characters are made invisible, the endGame screen is displayed, and a message is shown declaring the winning hero a "Full-Stack Developer".

Date Logging: The current date is logged to the console.

Please note that this code seems to be written for a specific game development library that provides functions like createSprite(), setAnimation(), drawSprites(), keyDown(), and isTouching(). Without this library, the code will not work.





Regenerate response



## Team name: "kávészünet"

# Authors:
- Farkas Attila
- Farkas Marci
- Szolnoki Attila
- Takács Tímea
