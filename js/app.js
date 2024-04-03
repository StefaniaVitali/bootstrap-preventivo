console.log('Ciao')

//COSTANTI ELEMENTI DOM
const formElement = document.getElementById('form-preventivo')
const lavoro = document.getElementById('lavoro');
const buttonElement = document.getElementById('submit');
const promoElement = document.getElementById('promo-code');
const paragraphElement = document.getElementById('prezzo-finale-text')

const coupon = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

console.log(formElement,lavoro)
//Collegare il form con l'evento submit evitando che la pagina si ricarchi
formElement.addEventListener('submit', function(event){
    event.preventDefault();
    //CALCOLARE IL PREZZO DEL PREVENTIVO
    //--costante lavoro e prezzo orario per tipo di lavoro
    const oreLavoro = 10;
    //--calcolare il prezzo base in base al tipo di lavoro
    let prezzoOrario = 0
    //--SE il valore è uguale a 1 il prezzo orario 20.50
    if(lavoro.value === "1"){
       prezzoOrario = 20.50
     //-- ALTRIMENTI SE il valore è uguale a 2 il prezzo orario 15.30   
    } else if (lavoro.value === "2"){
       prezzoOrario = 15.30
    //-- ALTRIMENTI SE il valore è uguale a 3 il prezzo orario 33.60    
    } else if (lavoro.value === "3"){
       prezzoOrario = 33.60
    //-- ALTRIMENTI non è possibile calcolare il preventivo  
    } else {
        console.log('error!, non hai selezionato nessun lavoro') //==> bisogna sistemarlo
    }
    //calcola il prezzo base 
    const prezzoBase = oreLavoro * prezzoOrario
    console.log(prezzoBase) 
    let sconto = 0
    //--calcolare lo sconto
    //---costante sconto 25% 
    if(coupon.includes(promoElement.value)){
      sconto = prezzoBase * 0.25
    } 

    const prezzoFinale = prezzoBase - sconto
    console.log(prezzoFinale, sconto)
   
    let boldPrice = prezzoFinale.toFixed(2).split('');
    console.log(boldPrice);
    let nonBoldPrice = boldPrice.splice(-3).join('');
    console.log(nonBoldPrice)
    console.log(boldPrice)  
    
    paragraphElement.innerHTML = `<span class="h4 fw-bold">${boldPrice.join('')}</span>${nonBoldPrice}euro`
     

  //fine formElemento
});

//proviamo a dividere il risultato



