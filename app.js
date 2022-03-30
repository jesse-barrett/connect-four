//Game class initializes the game
class Game {
  board = new Board();
  player = new Player();
  playAgain = document
    .getElementById("play-again")
    .addEventListener("click", this.restart);

  //start function begins a game
  start() {
    this.board.setup();

    //listen for the chips to be clicked
    let chipArray = this.board.chipObjArray;
    for (let i = 0; i < chipArray.length; i++) {
      if (i < chipArray.length - 7) {
        chipArray[i].chip.addEventListener("click", this.click.bind(this));
      }
    }
  }

  //restart the game easily by reloading the browser
  restart() {
    location.reload();
  }

  //run this function whenever a chip is clicked
  click(event) {
    this.changeChip();
    this.checkWin(this.player.playerOne);
    this.checkWin(this.player.playerTwo);
  }

  //function that changes the color of a chip based on the current player
  changeChip() {
    //get all chip elements from the page
    let chips = document.querySelectorAll("circle");

    //get the id of the clicked chip
    let id = parseInt(event.target.dataset.id);

    //the chip is valid to be clicked on if its not already taken AND the chip under it is taken
    if (
      chips[id + 7].classList.contains("taken") &&
      !chips[id].classList.contains("taken")
    ) {
      //mark the piece as taken
      chips[id].classList.add("taken");
      console.log(id + ": valid");

      //if it is player one's turn, make the chip red
      if (this.player.currentPlayer == 1) {
        chips[id].classList.add("player-one");
        this.player.changePlayer();
      }
      //if it is player two's turn, make the chip yellow
      else if (this.player.currentPlayer == 2) {
        chips[id].classList.add("player-two");
        this.player.changePlayer();
      }
    } else {
      console.log(id + ": invalid");
    }
  }

  //run this function to award a win
  grantWin() {
    //get the victory screen element
    let win = document.getElementById("victory");

    //get the span element where the winner will be displayed
    let span = document.getElementById("player");

    //set the player to be displayed
    if (this.player.currentPlayer !== 1) {
      span.innerHTML = "Player One";
    } else {
      span.innerHTML = "Player Two";
    }

    //display the victory screen with a fade-in
    win.style.display = "flex";
    win.classList.add("animate");
  }

  //run this function to check for a win
  checkWin(player) {
    //get all chip elements from the page
    let chips = document.querySelectorAll("circle");

    //get the id of the clicked chip
    let id = parseInt(event.target.dataset.id);

    //check for VERTICAL wins across the board
    for (let i = 7; i < 35; i++) {
      if (
        //any chip belongs to the specified player
        chips[i].classList.contains(player) && //AND the chips above and below and one further BELOW belong to the specified player
        chips[i + 7].classList.contains(player) &&
        chips[i - 7].classList.contains(player) &&
        chips[i + 14].classList.contains(player)
      ) {
        //award the win to the specified player
        this.grantWin();
        return;
      } else if (
        //any chip belongs to the specified player
        chips[i].classList.contains(player) && //OR the chips above and below and one further ABOVE belong to the specified player
        chips[i + 7].classList.contains(player) &&
        chips[i - 7].classList.contains(player) &&
        chips[i - 14].classList.contains(player)
      ) {
        //award the win to the specified player
        this.grantWin();
        return;
      }
    }
    //check for HORIZONTAL wins across the board
    for (let row = 0; row < 6; row++) {
      for (let i = 1; i < 6; i++) {
        if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //AND the chips above and below and one further BELOW belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i + 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        } else if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //OR the chips above and below and one further ABOVE belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i - 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        }
      }
      for (let i = 8; i < 13; i++) {
        if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //AND the chips above and below and one further BELOW belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i + 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        } else if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //OR the chips above and below and one further ABOVE belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i - 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        }
      }
      for (let i = 22; i < 27; i++) {
        if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //AND the chips above and below and one further BELOW belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i + 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        } else if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //OR the chips above and below and one further ABOVE belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i - 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        }
      }
      for (let i = 29; i < 34; i++) {
        if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //AND the chips above and below and one further BELOW belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i + 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        } else if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //OR the chips above and below and one further ABOVE belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i - 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        }
      }
      for (let i = 36; i < 41; i++) {
        if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //AND the chips above and below and one further BELOW belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i + 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        } else if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //OR the chips above and below and one further ABOVE belong to the specified player
          chips[i + 1].classList.contains(player) &&
          chips[i - 1].classList.contains(player) &&
          chips[i - 2].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        }
      }
    }

    //check for DIAGONAL wins
    for (let row = 0; row < 2; row++) {
      for (let i = 16; i < 19; i++) {
        if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //AND the chips diagonally down and to the right belong to the specified player
          chips[i + 8].classList.contains(player) &&
          chips[i - 8].classList.contains(player) &&
          chips[i + 16].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        } else if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //OR the chips diagonally up and to the left belong to the specified player
          chips[i + 8].classList.contains(player) &&
          chips[i - 8].classList.contains(player) &&
          chips[i - 16].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        }
      }
      for (let i = 23; i < 26; i++) {
        if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //AND the chips diagonally down and to the right belong to the specified player
          chips[i + 8].classList.contains(player) &&
          chips[i - 8].classList.contains(player) &&
          chips[i + 16].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        } else if (
          //any chip belongs to the specified player
          chips[i].classList.contains(player) && //OR the chips diagonally up and to the left belong to the specified player
          chips[i + 8].classList.contains(player) &&
          chips[i - 8].classList.contains(player) &&
          chips[i - 16].classList.contains(player)
        ) {
          //award the win to the specified player
          this.grantWin();
          return;
        }
      }
      //check for diagonal wins THE OTHER WAY
      for (let row = 0; row < 2; row++) {
        for (let i = 16; i < 19; i++) {
          if (
            //any chip belongs to the specified player
            chips[i].classList.contains(player) && //AND the chips diagonally down and to the left belong to the specified player
            chips[i + 6].classList.contains(player) &&
            chips[i - 6].classList.contains(player) &&
            chips[i + 12].classList.contains(player)
          ) {
            //award the win to the specified player
            this.grantWin();
            return;
          } else if (
            //any chip belongs to the specified player
            chips[i].classList.contains(player) && //OR the chips diagonally up and to the right belong to the specified player
            chips[i + 6].classList.contains(player) &&
            chips[i - 6].classList.contains(player) &&
            chips[i - 12].classList.contains(player)
          ) {
            //award the win to the specified player
            this.grantWin();
            return;
          }
        }
        for (let i = 23; i < 26; i++) {
          if (
            //any chip belongs to the specified player
            chips[i].classList.contains(player) && //AND the chips diagonally down and to the left belong to the specified player
            chips[i + 6].classList.contains(player) &&
            chips[i - 6].classList.contains(player) &&
            chips[i + 12].classList.contains(player)
          ) {
            //award the win to the specified player
            this.grantWin();
            return;
          } else if (
            //any chip belongs to the specified player
            chips[i].classList.contains(player) && //OR the chips diagonally up and to the right belong to the specified player
            chips[i + 6].classList.contains(player) &&
            chips[i - 6].classList.contains(player) &&
            chips[i - 12].classList.contains(player)
          ) {
            //award the win to the specified player
            this.grantWin();
            return;
          }
        }
      }
    }
  }
}

//Player class handles the current player and awards victory to them
class Player {
  playerOne = "player-one";
  playerTwo = "player-two";
  currentPlayer = 1;
  winner = 0;

  changePlayer() {
    if (this.currentPlayer == 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }
}

//Board class draws the board and handles the operations that take place on it
class Board {
  //properties for how to draw the board
  width = 800;
  height = 620;
  fill = "rgb(52, 126, 224)";
  stroke = "rgb(34, 88, 161)";
  strokeWidth = 10;

  //properties that manage chips
  chipObjArray = []; //array of chip OBJECTS
  // chipElArray = []; //array of chip ELEMENTS
  // id = []; //array of chip id's

  //method for drawing the board and the chips
  setup() {
    //draw the board
    let board = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    board.setAttribute("width", this.width);
    board.setAttribute("height", this.height);
    board.setAttribute("fill", this.fill);
    board.setAttribute("stroke", this.stroke);
    board.setAttribute("stroke-width", this.strokeWidth);
    document.getElementById("game").appendChild(board);

    //draw the chips
    for (let i = 0; i < 49; i++) {
      this.chipObjArray[i] = new Chip();
      if (i < 7) {
        this.chipObjArray[i].draw(i + 1, 0, i);
      } else if (i < 14) {
        this.chipObjArray[i].draw(i + 1 - 7, 1, i);
      } else if (i < 21) {
        this.chipObjArray[i].draw(i + 1 - 14, 2, i);
      } else if (i < 28) {
        this.chipObjArray[i].draw(i + 1 - 21, 3, i);
      } else if (i < 35) {
        this.chipObjArray[i].draw(i + 1 - 28, 4, i);
      } else if (i < 42) {
        this.chipObjArray[i].draw(i + 1 - 35, 5, i);
      } else {
        this.chipObjArray[i].draw(i + 1 - 42, 6, i);
        this.chipObjArray[i].chip.setAttribute("class", "taken");
      }
    }
  }
}

//Chip class contains instructions on how to draw chips to the screen
class Chip {
  //properties for how to draw a chip
  cx = 100;
  cy = 60;
  r = 40;
  fill = "rgb(255, 255, 255)";
  stroke = "rgb(34, 88, 161)";
  strokeWidth = 10;
  chip = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  //method for drawing a chip
  draw(xIndex, yIndex, chipIndex) {
    //manipulate cy and cx so that they're values are accuratley reflected in the Board's chipArray[]
    this.cx = this.cx * xIndex;
    this.cy = this.cy + yIndex * 100;

    //set the attributes
    this.chip.setAttribute("cx", this.cx);
    this.chip.setAttribute("cy", this.cy);
    this.chip.setAttribute("r", this.r);
    this.chip.setAttribute("fill", this.fill);
    this.chip.setAttribute("stroke", this.stroke);
    this.chip.setAttribute("stroke-width", this.strokeWidth);

    //this attribute will help us keep track of chips and reference them later
    this.chip.setAttribute("data-id", chipIndex);

    //add the element to the screen
    document.getElementById("game").appendChild(this.chip);
  }
}

//initialize the game
let game = new Game();
game.start();
