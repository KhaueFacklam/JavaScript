var deckId;
var deck = [];
var table = [];

const player1 = new Player('player1', [], []);
const player2 = new Player('player2', [], []);

//DOM
//Dropzones
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

//DRAGGABLES - executado dentro na função render
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

//GAME
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
    for (let index = 0; index < 10; index++) {
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
    for (let i = 0; i < 8; i++) {
      let card = deck.cards.pop();
      player1.hand.push(card);
    }
  } else {
    console.log(`Player1 com cartas`);
  }
  if (player2.hand.length == 0) {
    for (let i = 0; i < 8; i++) {
      let card = deck.cards.pop();
      player2.hand.push(card);
    }
    renderHand();
  } else {
    console.log(`Player2 com cartas`);
  }
}
//VERIFICA JOGADA
function verifica(value, handCard, dropZone) {
  let flag = false;
  let mesa = document.querySelector("#table");
  let pile1 = document.querySelector("#pile1");
  let pile2 = document.querySelector("#pile2");
  // let tableText = document.querySelector('#table').innerHTML
  if (dropZone == mesa) {
    table.map((c) => {
      if (c.code.includes(value)) {
        //verifica se tem carta com mesmo valor
        flag = true;
        let cardPile = table.splice(table.indexOf(c), 1);
        currentPlayer.pile.push(cardPile[0]);
        currentPlayer.hand.map((c) => {
          if (c.image == handCard) {
            let cardPile = currentPlayer.hand.splice(currentPlayer.hand.indexOf(c), 1);
            currentPlayer.pile.push(cardPile[0]);
          }
        });
      }
    });
    if (!flag) {
      currentPlayer.hand.map((c) => {
        if (c.image.includes(handCard)) {
          table.push(c);
          currentPlayer.hand.splice(currentPlayer.hand.indexOf(c), 1);
        }
      });
    }
  }
  
    if(dropZone == pile1){
      if(lastPlayer.pile[lastPlayer.pile.length - 1].code.includes(value)){
        currentPlayer.pile = currentPlayer.pile.concat(lastPlayer.pile)
        currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)){
            currentPlayer.pile.push(c)
            currentPlayer.hand.splice(currentPlayer.hand.indexOf(c), 1);
          }
        })
        lastPlayer.pile = []
      }
    }
    if(dropZone == pile2){
      if(lastPlayer.pile[lastPlayer.pile.length - 1].code.includes(value)){
        currentPlayer.pile = currentPlayer.pile.concat(lastPlayer.pile)
        currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)){
            currentPlayer.pile.push(c)
            currentPlayer.hand.splice(currentPlayer.hand.indexOf(c), 1);
          }
        })
        lastPlayer.pile = []
      }
    }
  renderPile(dropZone);
  renderTable();
  changeTurn();
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
  while (tableDom.firstChild) {
    tableDom.removeChild(tableDom.firstChild);
  }
  table.map((card) => {
    let cardImg = document.createElement("img");
    cardImg.src = card.image;
    cardImg.classList.add("cardImg");
    tableDom.appendChild(cardImg);
  });
  getCardsImg();
}

function renderPile(dropZone) {
    // let pileDom1 = document.querySelector("#pile1");
    //   let pileDom2 = document.querySelector("#pile2");
    //   if (currentPlayer.name == 'player1') {
    //     while (pileDom2.firstChild) {
    //       pileDom2.removeChild(pileDom2.firstChild);
    //           console.log('1');
    //     }
    //   }
    //   if (currentPlayer.name == 'player2') {
    //     while (pileDom1.firstChild) {
    //       pileDom1.removeChild(pileDom1.firstChild);
    //           console.log('2');
    //     }
    // }
  let pileDomCurrent;//player2.pile
  let mesa = document.querySelector("#table");
  let pileDom1 = document.querySelector("#pile1");
  let pileDom2 = document.querySelector("#pile2");
  
  if(currentPlayer.name == 'player1'){
    pileDomCurrent = document.querySelector("#pile1");
  } 
  if(currentPlayer.name == 'player2'){
    pileDomCurrent = document.querySelector("#pile2");
  }
  if(dropZone == mesa){
    while (pileDomCurrent.firstChild) {
      pileDomCurrent.removeChild(pileDomCurrent.firstChild);
    }
  }
  if(dropZone == pileDom1 || dropZone == pileDom2){ 
    console.log('entrou');
    while (pileDom1.firstChild) {
      pileDom1.removeChild(pileDom1.firstChild);
    }
    while (pileDom2.firstChild) {
      pileDom2.removeChild(pileDom2.firstChild);
    }
  }
  if (currentPlayer.pile.length != 0) {
    let cardImg = document.createElement("img");
    cardImg.src = currentPlayer.pile[currentPlayer.pile.length - 1].image;
    cardImg.classList.add("cardImg");
    pileDomCurrent.appendChild(cardImg);
    getCardsImg();    
  }
}

getDeckId();

//Obj PLAYER
function Player(name, hand, pile) {
  this.name = name;
  this.hand = hand;
  this.pile = pile;
}

var currentPlayer = player1;
var lastPlayer = player2;
var currentTurn = 0;

function changeTurn(){
    if (currentTurn == 0) {
        currentPlayer = player2
        lastPlayer = player1
        currentTurn = 1
      } else {
        currentPlayer = player1
        lastPlayer = player2
        currentTurn = 0
    }
}

// let pileDom1 = document.querySelector("#pile1");
//   let pileDom2 = document.querySelector("#pile2");
//   if (currentPlayer.name == 'player1') {
//     while (pileDom2.firstChild) {
//       pileDom2.removeChild(pileDom2.firstChild);
//           console.log('cuwhile');
//       }
//   }
//   if (currentPlayer.name == 'player2') {
    
//   }