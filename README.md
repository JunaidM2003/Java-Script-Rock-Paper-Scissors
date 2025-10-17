# Rock-Paper-Scissors Web Game

This repository features a complete implementation of the classic **Rock-Paper-Scissors** game, designed as a modern, interactive web application.  
The project demonstrates proficiency in **core web development technologies**, with a focus on **persistent user data management** and a **clean, responsive interface**.

---

## Key Technical Specifications

The application is built with a **modular structure**, separating presentation from logic to ensure maintainability and scalability.

### Component Files

| Component        | Files                          | Purpose                                                                                  |
|-----------------|-------------------------------|------------------------------------------------------------------------------------------|
| **Presentation (UI/UX)** | `RockPaperScissorsProjects.html` | Defines the game's structure, including buttons for moves and dedicated containers for results and scores. |
| **Styling**     | Inline `<style>` (within HTML) | Implements a dark-mode aesthetic with high contrast, clear typography, and large, touch-friendly move buttons. |
| **Game Logic**  | `RockPaperScissors.js`        | Manages all core game functions including randomization, move comparison, and score management. |

---

## Core Functionality & Logic

The **JavaScript** component handles the game state and persistent score tracking efficiently.

### Persistent Score Tracking
- Player scores (Wins, Losses, Ties) are automatically stored using the browser's **localStorage API**.  
- This ensures scores **persist across sessions**, improving continuity for the user.

### Game Resolution (`playGame` function)
This central function orchestrates the gameplay:

1. Calls `pickComputerMove()` to generate a pseudorandom opponent move using `Math.random()`.  
2. Applies the rules of Rock-Paper-Scissors to determine the winner.  
3. Updates the score object, saves it back to **localStorage**, and dynamically updates the DOM to display the result and both moves (Player vs. Computer).  

### State Management
The score state is initialized by attempting to parse any existing data from **localStorage**.  
If no data is found, it defaults to a new score object.

```javascript
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };
```

---


## Try it live
https://rockpaperscissorswebgame2003.netlify.app/
