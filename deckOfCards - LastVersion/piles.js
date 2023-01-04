var deckId;
var deck = [];
var table = [];

const player1 = new Player('player1', [], []);
const player2 = new Player('player2', [], []);
//Obj PLAYER
function Player(name, hand, pile) {
  this.name = name;
  this.hand = hand;
  this.pile = pile;
}

var currentPlayer = player1;
var lastPlayer = player2;
var currentTurn = 0;

//DOM
//Dropzones
function getDropZones(){
  var dropZones = document.querySelectorAll(".dropZone");
  dropZones.forEach((dropZone) => {
    dropZone.addEventListener("dragover", dragover);
    dropZone.addEventListener("drop", drop);
  });
  if (currentPlayer.name == 'player1') {
    if (lastPlayer.pile.length == 0) {
      dropZones[0].removeEventListener("dragover", dragover);
      dropZones[0].removeEventListener("drop", drop);
      dropZones[2].removeEventListener("dragover", dragover);
      dropZones[2].removeEventListener("drop", drop);
    }else {
      dropZones[2].removeEventListener("dragover", dragover);
      dropZones[2].removeEventListener("drop", drop);
      dropZones[0].addEventListener("dragover", dragover);
      dropZones[0].addEventListener("drop", drop);
    }
  }
  if (currentPlayer.name == 'player2') {
    if (lastPlayer.pile.length == 0) {
      dropZones[2].removeEventListener("dragover", dragover);
      dropZones[2].removeEventListener("drop", drop);
      dropZones[0].removeEventListener("dragover", dragover);
      dropZones[0].removeEventListener("drop", drop);
    }else {
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
  verifica(value, handCard, this);
}

//DRAGGABLES - executado dentro na função render
function getCardsImg() {
    if (currentPlayer.name == 'player1') {
        const cardsImgLast = document.querySelectorAll("#hand2 > img");
        cardsImgLast.forEach(cardImg => {
            cardImg.removeEventListener("dragstart", dragstart);
            cardImg.removeEventListener("dragend", dragend);
            cardImg.classList.remove("cardImgCurrent");
        });
        const cardsImgCurrent = document.querySelectorAll("#hand1 > img");
        cardsImgCurrent.forEach(cardImg => {
          cardImg.addEventListener("dragstart", dragstart);
          cardImg.addEventListener("dragend", dragend);
          cardImg.classList.add("cardImgCurrent");
        });
    }
    if (currentPlayer.name == 'player2') {
        const cardsImgLast = document.querySelectorAll("#hand1 > img");
        cardsImgLast.forEach((cardImg) => {
            cardImg.removeEventListener("dragstart", dragstart);
            cardImg.removeEventListener("dragend", dragend);
            cardImg.classList.remove("cardImgCurrent");
        });
        const cardsImgCurrent = document.querySelectorAll("#hand2 > img");
        cardsImgCurrent.forEach(cardImg => {
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
      else {
        currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)){
            table.push(c)
            currentPlayer.hand.splice(currentPlayer.hand.indexOf(c), 1);
          }
        })
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
    else {
        currentPlayer.hand.map((c) => {
          if (c.image.includes(handCard)){
            table.push(c)
            currentPlayer.hand.splice(currentPlayer.hand.indexOf(c), 1);
          }
        })
      }
    }
  renderPile(dropZone);
  renderTable();
  changeTurn();
  getCardsImg();
}

//RENDERS
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
  let pileDomCurrent;
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
    getDropZones();
    if (currentPlayer.hand.length == 0 && lastPlayer.hand.length == 0) {
        setHand()
    }
    if (table.length == 0) {
      setTable()
    }
    console.log(deck.cards.length);
    if (deck.cards.length == 0) {
        if (player1.pile.length > player2.pile.length) {
            alert(`Player 1 VENCEU com ${player1.pile.length} cartas no MONTE`)
        }
        else if (player1.pile.length < player2.pile.length) {
            alert(`Player 2 VENCEU com ${player1.pile.length} cartas no MONTE`)
        }
        else {
            alert('Os burros empataram!')
        }
    }
}

getDeckId();
getDropZones();
getCardsImg();