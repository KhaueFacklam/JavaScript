//Dropables
const dropZones = document.querySelectorAll(".dropZone");
dropZones.forEach((dropZone) => {
  dropZone.addEventListener("dragover", dragover);
  dropZone.addEventListener("drop", drop);
});
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
  verifica(value, handCard, this);
}

//Draggables - executado dentro na função render
function getCardsImg() {
  const cardsImg = document.querySelectorAll("img");
  cardsImg.forEach((cardImg) => {
    cardImg.addEventListener("dragstart", dragstart);
    cardImg.addEventListener("dragend", dragend);
  });
}
function dragstart() {
  this.classList.add("is-dragging");
}
function dragend() {
  this.classList.remove("is-dragging");
}

//ENCAPSULAR - while(deck.remaing > 0){tudo} verifica maior pilha

function verifica(value, handCard, dropZone) {
  let flag = false
  let mesa = document.querySelector("#table");
  let pile1 = document.querySelector("#pile1");
  let pile2 = document.querySelector("#pile2");
  // let tableText = document.querySelector('#table').innerHTML
  if (dropZone == mesa) {
    table.map((c) => {
      if (c.code.includes(value)) {//verifica se tem carta com mesmo valor
        flag = true
        let cardPile = table.splice(table.indexOf(c), 1);
        player2.pile.push(cardPile[0]);
        player2.hand.map((c) => {
          if (c.image == handCard) {
            let cardPile = player2.hand.splice(player2.hand.indexOf(c), 1);
            player2.pile.push(cardPile[0]);
          }
        });
      }
    });
    if (!flag) {
      player2.hand.map(c => {
        if(c.image.includes(handCard)){
          table.push(c)
          player2.hand.splice(player2.hand.indexOf(c), 1);
        }
      })
    }
  }
  // if(dropZone == pile1){
  //   console.log(card);
  //   console.log(dropZone);
  // }
  // if(dropZone == pile2){
  //   console.log(card);
  //   console.log(dropZone);
  // }
  renderPile2();
}

var deckId;
var deck = [];
var table = [];
function Player(hand, pile) {
  this.hand = hand;
  this.pile = pile;
}

const player1 = new Player([], []);
const player2 = new Player([], []);

//GERA DECK ID
const getDeckId = async () => {
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
  setTable();
  setHand();
};
//DA A MESA
function setTable() {
  if (table.length == 0) {
    for (let index = 0; index < 4; index++) {
      let card = deck.cards.pop();
      table.push(card);
    }
    renderTable();
  } else {
    console.log(`Mesa com cartas`);
    console.log(table);
  }
}
//DA AS MAOS
function setHand() {
  if (player1.hand.length == 0) {
    for (let i = 0; i < 3; i++) {
      let card = deck.cards.pop();
      player1.hand.push(card);
    }
  } else {
    console.log(`Player1 com cartas`);
  }
  if (player2.hand.length == 0) {
    for (let i = 0; i < 3; i++) {
      let card = deck.cards.pop();
      player2.hand.push(card);
    }
    renderHand();
  } else {
    console.log(`Player2 com cartas`);
  }
}

/*play(){
  
  //OPÇÕES DE AÇÃO DO JOGADOR
  pegarDaMesa()
  roubarMonte()
  descartarNaMesa()
  
}*/

//FUNÇÕES PARA RENDER
//renderPile1()
//renderHand1()
//renderMesa()
//renderPile2()
//renderHand2()

// const renderMesa = async () => {
//   let cards = await listingPile('mesa')
//   let table = document.querySelector("#table");
//   cards.mesa.cards.map(card => {
//     let cardImg = document.createElement("img");
//     cardImg.src = card.image;
//     cardImg.classList.add('cardImg')
//     table.appendChild(cardImg);
//   });
//   getCardsImg()
// }

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
  table.map((card) => {
    let cardImg = document.createElement("img");
    cardImg.src = card.image;
    cardImg.classList.add("cardImg");
    tableDom.appendChild(cardImg);
  });
  getCardsImg();
}

function renderPile2() {
  let pile2Dom = document.querySelector("#pile2");
  player2.pile.map((card) => {
    let cardImg = document.createElement("img");
    cardImg.src = card.image;
    cardImg.classList.add("cardImg");
    pile2Dom.appendChild(cardImg);
  });
  getCardsImg();
}

getDeckId();
