import { getDeckId } from "./index.js";

export class Game {
  constructor(player1, player2, deck) {
    this.player1 = player1;
    this.player2 = player2;
    this.deck = deck;
    this.table = [];
    this.currentPlayer = player1;
    this.lastPlayer = player2;
    this.currentTurn = 0;
    this.player2Banner = document.querySelector("#player2");
    this.player1Banner = document.querySelector("#player1");

    this.changeTurn = () => {
      // console.log(this.player1)
      // console.log(this.player2)
      if (this.currentTurn == 0) {
        this.player2Banner.classList.remove("lastPlayer");
        this.player1Banner.classList.add("lastPlayer");
        this.currentPlayer = player2;
        this.lastPlayer = player1;
        this.currentTurn = 1;
      } else {
        this.player2Banner.classList.add("lastPlayer");
        this.player1Banner.classList.remove("lastPlayer");
        this.currentPlayer = player1;
        this.lastPlayer = player2;
        this.currentTurn = 0;
      }
    };

    this.openPopup = () => {
      let popup = document.querySelector(".popup");
      let winner = document.querySelector("h1");
      let loser = document.querySelector("h2");
      document.querySelector("#player1").classList.add('lastPlayer')
      document.querySelector("#close-popup").addEventListener("click", this.closePopup);
      if (player1.pile.length > player2.pile.length) {
        winner.innerHTML = `Player 1 VENCEU com ${player1.pile.length} cartas`;
        loser.innerHTML = `Player 2 PERDEU com ${player2.pile.length} cartas`;
      } else if (player1.pile.length < player2.pile.length) {
        winner.innerHTML = `Player 2 VENCEU com ${player2.pile.length} cartas`;
        loser.innerHTML = `Player 1 PERDEU com ${player1.pile.length} cartas`;
      } else {
        winner.innerHTML = `Empate`;
        winner.style.color = `white`;
        loser.innerHTML = ``;
      }
      popup.classList.add("open-popup");
    };

    this.closePopup = () => {
      let popup = document.querySelector(".popup");
      popup.classList.remove("open-popup");
      // let table = document.querySelector("#table");
      // let hand1 = document.querySelector("#hand1");
      // let hand2 = document.querySelector("#hand2");
      // let pile1 = document.querySelector("#pile1");
      // let pile2 = document.querySelector("#pile2");
      // while (table.firstChild) {table.removeChild(table.firstChild)}
      // while (hand1.firstChild) {hand1.removeChild(hand1.firstChild)}
      // while (hand2.firstChild) {hand2.removeChild(hand2.firstChild)}
      // while (pile1.firstChild) {pile1.removeChild(pile1.firstChild)}
      // while (pile2.firstChild) {pile2.removeChild(pile2.firstChild)}
      location.reload()
      getDeckId();
    };
  }
}
