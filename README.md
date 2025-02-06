# asov-rock-paper-scissors
building a Rock paper Scissors game
# Rock, Paper, Scissors Game

## Overview

This is a simple Rock, Paper, Scissors game where you can compete against either a bot or another player (PvP mode). The game tracks scores and allows you to play multiple rounds, keeping a persistent score across page reloads.

## Features

- **Choice Options**: Rock, Paper, Scissors
- **Game Modes**:
  - **PvE Mode**: Play against a bot that predicts your next move.
  - **PvP Mode**: Play against another player.
- **Persistent Score**: Scores are saved using `localStorage` to retain them even after page refresh.
- **Replay Option**: After each round, a replay button allows you to play again.
- **Draw Option**: If both players select the same option, it's a draw.

## Game Rules

1. **Rock** beats **Scissors**.
2. **Scissors** beats **Paper**.
3. **Paper** beats **Rock**.
4. If both players select the same option, it's a **Draw**.

### Scoring:
- **Player** scores a point if they win a round.
- **Bot** scores a point if the bot wins a round.
- **Scores** are displayed at the top of the screen and saved to `localStorage`.

## Game Modes

### 1. Player vs Bot (PvE Mode):
- In this mode, you play against the bot.
- The bot predicts your next move based on your last 5 moves. If there are no prior moves, the bot picks randomly.
- After each round, the result is displayed, and your score is updated.

### 2. Player vs Player (PvP Mode):
- Two players alternate making their moves.
- The first player selects their option, and the second player selects theirs.
- Once both players have made their choices, the winner is displayed, and the scores are updated.

## Gameplay Instructions

1. **Choose Your Option**: Click on any of the option images (Rock, Paper, or Scissors) to make your choice.
2. **Play the Round**: If you are in PvP mode, the second player will also need to make their choice. If you are in PvE mode, the bot will automatically choose its option.
3. **Check the Result**: The result of the round will be displayed (Win, Lose, or Draw).
4. **Replay**: After a round ends, click the **Replay** button to play again.

## Features of the Game

- **Persistent Scores**: The scores for both the player and bot are saved in `localStorage`, so they persist even after the page is refreshed.
- **Bot Move Prediction**: The bot tries to predict your next move based on your last choices and counters accordingly.
- **Replayability**: After each round, you can choose to play again using the **Replay** button.
- **Mode Selection**: Choose between PvP and PvE modes using the mode selection dropdown.

## Getting Started

To play the game, simply open the HTML file in your browser. No server-side setup is required.

1. Clone or download the repository.
2. Open the `index.html` file in your browser to start the game.

## Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is open-source and available under the [MIT License](LICENS
