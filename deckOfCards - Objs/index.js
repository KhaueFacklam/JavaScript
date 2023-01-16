import { Game } from "./Game.js";
import { Player } from "./Player.js";

var deckId;
var deck = [];
var flag2 = false;

//GERA DECK ID
export const getDeckId = async () => {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const data = await response.json();
  deckId = data.deck_id;
  getDeck();
};
//CRIA DECK ARRAY
const getDeck = async () => {
  const response = await fetch(
    `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
  );
  deck = await response.json();
  deck.cards.forEach((card) => {
    if (card.code == "AD") {
      card.image = "https://deckofcardsapi.com/static/img/AD.png";
    }
  });
  initGame();
};

//INICIA JOGO ----------------------------------------------------------------------------------------------
function initGame() {
  const player1 = new Player("player1", [], []);
  const player2 = new Player("player2", [], []);
  const game = new Game(player1, player2, deck.cards);
  document.querySelector('#player2').classList.add("lastPlayer");

  //VERIFICA VENDCEDOR / CARTAS EM JOGO -------------------------------------------------------------------
  function verifyGame() {
    getDropZones();
    if (game.deck.length < 1 && game.player1.hand.length == 0 && game.player2.hand.length == 0) {
      game.openPopup();
    }
    if (game.currentPlayer.hand.length == 0 && game.lastPlayer.hand.length == 0) {
      setHand();
    }
    if (game.table.length == 0) {
      setTable();
    }
  }

  //DÁ A MESA ----------------------------------------------------------------------------------------------
  function setTable() {
    if (game.table.length == 0) {
      for (let index = 0; index < 4; index++) {
        let card = game.deck.pop();
        game.table.push(card);
      }
      renderTable();
    } else {
      console.log(`Mesa com cartas`);
    }
  }
  //DÁ AS MAOS ----------------------------------------------------------------------------------------------
  function setHand() {
    if (player1.hand.length == 0) {
      for (let i = 0; i < 3; i++) {
        let card = game.deck.pop();
        player1.hand.push(card);
      }
    } else {
      console.log(`Player1 com cartas`);
    }
    if (player2.hand.length == 0) {
      for (let i = 0; i < 3; i++) {
        let card = game.deck.pop();
        player2.hand.push(card);
      }
      renderHand();
    } else {
      console.log(`Player2 com cartas`);
    }
  }

  //DROPZONES ----------------------------------------------------------------------------------------------
  function getDropZones() {
    var dropZones = document.querySelectorAll(".dropZone");
    dropZones.forEach((dropZone) => {
      dropZone.addEventListener("dragover", dragover);
      dropZone.addEventListener("drop", drop);
    });
    if (game.currentPlayer.name == "player1") {
      if (game.lastPlayer.pile.length == 0) {
        dropZones[0].removeEventListener("dragover", dragover);
        dropZones[0].removeEventListener("drop", drop);
        dropZones[2].removeEventListener("dragover", dragover);
        dropZones[2].removeEventListener("drop", drop);
      } else {
        dropZones[2].removeEventListener("dragover", dragover);
        dropZones[2].removeEventListener("drop", drop);
        dropZones[0].addEventListener("dragover", dragover);
        dropZones[0].addEventListener("drop", drop);
      }
    }
    if (game.currentPlayer.name == "player2") {
      if (game.lastPlayer.pile.length == 0) {
        dropZones[2].removeEventListener("dragover", dragover);
        dropZones[2].removeEventListener("drop", drop);
        dropZones[0].removeEventListener("dragover", dragover);
        dropZones[0].removeEventListener("drop", drop);
      } else {
        dropZones[0].removeEventListener("dragover", dragover);
        dropZones[0].removeEventListener("drop", drop);
        dropZones[2].addEventListener("dragover", dragover);
        dropZones[2].addEventListener("drop", drop);
      }
    }
  }
  function dragover(e) {
    e.preventDefault();
    const cardImgBeingDragged = document.querySelector(".is-dragging");
    this.appendChild(cardImgBeingDragged);
  }
  function drop(e) {
    e.preventDefault();
    let value = e.dataTransfer
      .getData("Text")
      .charAt(e.dataTransfer.getData("Text").length - 6);
    let handCard = e.dataTransfer.getData("Text");
    verifyPlay(value, handCard, this);
  }

  //DRAGGABLES CARD ------------------------------------------------------------------------------
  function getCardsImg() {
    if (game.currentPlayer.name == "player1") {
      const cardsImgLast = document.querySelectorAll("#hand2 > img");
      cardsImgLast.forEach((cardImg) => {
        cardImg.removeEventListener("dragstart", dragstart);
        cardImg.removeEventListener("dragend", dragend);
        cardImg.classList.remove("cardImgCurrent");
      });
      const cardsImgCurrent = document.querySelectorAll("#hand1 > img");
      cardsImgCurrent.forEach((cardImg) => {
        cardImg.addEventListener("dragstart", dragstart);
        cardImg.addEventListener("dragend", dragend);
        cardImg.classList.add("cardImgCurrent");
      });
    }
    if (game.currentPlayer.name == "player2") {
      const cardsImgLast = document.querySelectorAll("#hand1 > img");
      cardsImgLast.forEach((cardImg) => {
        cardImg.removeEventListener("dragstart", dragstart);
        cardImg.removeEventListener("dragend", dragend);
        cardImg.classList.remove("cardImgCurrent");
      });
      const cardsImgCurrent = document.querySelectorAll("#hand2 > img");
      cardsImgCurrent.forEach((cardImg) => {
        cardImg.addEventListener("dragstart", dragstart);
        cardImg.addEventListener("dragend", dragend);
        cardImg.classList.add("cardImgCurrent");
      });
    }
  }
  function dragstart() {
    this.classList.add("is-dragging");
  }
  function dragend() {
    this.classList.remove("is-dragging");
  }

  //VERIFICA JOGADA ----------------------------------------------------------------------------------------------
  function verifyPlay(value, handCard, dropZone) {
    let flag = false;
    let mesa = document.querySelector("#table");
    var pile1 = document.querySelector("#pile1");
    var pile2 = document.querySelector("#pile2");
    if (dropZone == mesa) { //SE JOGOU NA MESA
      game.table.map((c) => {
        if (c.code.includes(value)) {
          flag = true;
          let cardPile = game.table.splice(game.table.indexOf(c), 1);
          game.currentPlayer.pile.push(cardPile[0]);
          game.currentPlayer.hand.map((c) => {
            if (c.image == handCard) {
              let cardPile = game.currentPlayer.hand.splice(
                game.currentPlayer.hand.indexOf(c),
                1
              );
              game.currentPlayer.pile.push(cardPile[0]);
            }
          });
        }
      });
      if (!flag) {
        game.currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)) {
            game.table.push(c);
            game.currentPlayer.hand.splice(
              game.currentPlayer.hand.indexOf(c),
              1
            );
          }
        });
      }
    }
    if (dropZone == pile1) { //SE JOGOU NO MONTE ADVERSÁRIO
      if (
        game.lastPlayer.pile[game.lastPlayer.pile.length - 1].code.includes(
          value
        )
      ) {
        game.currentPlayer.pile = game.currentPlayer.pile.concat(
          game.lastPlayer.pile
        );
        game.currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)) {
            game.currentPlayer.pile.push(c);
            game.currentPlayer.hand.splice(
              game.currentPlayer.hand.indexOf(c),
              1
            );
          }
        });
        game.lastPlayer.pile = [];
      } else {
        flag2 = true;
        game.currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)) {
            game.table.push(c);
            game.currentPlayer.hand.splice(
              game.currentPlayer.hand.indexOf(c),
              1
            );
          }
        });
      }
    }
    if (dropZone == pile2) { //SE JOGOU NO MONTE ADVERSÁRIO
      if (
        game.lastPlayer.pile[game.lastPlayer.pile.length - 1].code.includes(
          value
        )
      ) {
        game.currentPlayer.pile = game.currentPlayer.pile.concat(
          game.lastPlayer.pile
        );
        game.currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)) {
            game.currentPlayer.pile.push(c);
            game.currentPlayer.hand.splice(
              game.currentPlayer.hand.indexOf(c),
              1
            );
          }
        });
        game.lastPlayer.pile = [];
      } else {
        flag2 = true;
        game.currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)) {
            game.table.push(c);
            game.currentPlayer.hand.splice(
              game.currentPlayer.hand.indexOf(c),
              1
            );
          }
        });
      }
    }

    //CHAMADA DE FUNÇÕES DO JOGO -------------------------------------------------------------------------------
    renderPile(dropZone);
    renderTable();
    game.changeTurn();
    getCardsImg();
    verifyGame();
  }

  //RENDERS ----------------------------------------------------------------------------------------------
  function renderHand() {
    let hand1 = document.querySelector("#hand1");
    player1.hand.map((card) => {
      let cardImg = document.createElement("img");
      cardImg.src = card.image;
      cardImg.classList.add("cardImg");
      hand1.appendChild(cardImg);
    });
    let hand2 = document.querySelector("#hand2");
    player2.hand.map((card) => {
      let cardImg = document.createElement("img");
      cardImg.src = card.image;
      cardImg.classList.add("cardImg");
      hand2.appendChild(cardImg);
    });
    getCardsImg();
  }

  function renderTable() {
    let tableDom = document.querySelector("#table");
    while (tableDom.firstChild) {
      tableDom.removeChild(tableDom.firstChild);
    }
    game.table.map((card) => {
      let cardImg = document.createElement("img");
      cardImg.src = card.image;
      cardImg.classList.add("cardImg");
      tableDom.appendChild(cardImg);
    });
    getCardsImg();
  }
  
  function renderPile(dropZone) {
    let pileDomCurrent;
    let mesa = document.querySelector("#table");
    let pileDom1 = document.querySelector("#pile1");
    let pileDom2 = document.querySelector("#pile2");
    if (game.currentPlayer.name == "player1") {
      pileDomCurrent = document.querySelector("#pile1");
    }
    if (game.currentPlayer.name == "player2") {
      pileDomCurrent = document.querySelector("#pile2");
    }
    if (dropZone == mesa) {
      while (pileDomCurrent.firstChild) {
        pileDomCurrent.removeChild(pileDomCurrent.firstChild);
      }
    }
    if (dropZone == pileDom1 || dropZone == pileDom2) {
      if (dropZone == pileDom1 && flag2 == true) {
        pileDom1.removeChild(pileDom1.lastChild);
        while (pileDom2.firstChild) {
          pileDom2.removeChild(pileDom2.firstChild);
        }
        flag2 = false;
      } else if (dropZone == pileDom2 && flag2 == true) {
        pileDom2.removeChild(pileDom2.lastChild);
        while (pileDom1.firstChild) {
          pileDom1.removeChild(pileDom1.firstChild);
        }
        flag2 = false;
      } else {
        while (pileDom1.firstChild) {
          pileDom1.removeChild(pileDom1.firstChild);
        }
        while (pileDom2.firstChild) {
          pileDom2.removeChild(pileDom2.firstChild);
        }
      }
    }
    if (game.currentPlayer.pile.length != 0) {
      let cardImg = document.createElement("img");
      cardImg.src =
        game.currentPlayer.pile[game.currentPlayer.pile.length - 1].image;
      cardImg.classList.add("cardImg");
      pileDomCurrent.appendChild(cardImg);
      getCardsImg();
    }
  }

  //CHAMADA DE FUNÇÕES NO FINAL DO INITGAME
  getDropZones();
  setTable();
  setHand();
}

getDeckId();
