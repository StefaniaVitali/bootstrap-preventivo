console.log('Ciao')

//COSTANTI ELEMENTI DOM
const formElement = document.getElementById('form-preventivo')
const lavoro = document.getElementById('lavoro');
const buttonElement = document.getElementById('submit');
const promoElement = document.getElementById('promo-code');
const paragraphElement = document.getElementById('prezzo-finale-text');
const nameField = document.getElementById('nome');
const surnameField = document.getElementById('cognome');
const emailField = document.getElementById('email');

const coupon = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

//Collegare il form con l'evento submit evitando che la pagina si ricarchi
formElement.addEventListener('submit', function(event){
    event.preventDefault();
    //VALIDARE CAMPO NOME
    //VALIDARE CAMPO COGNOME
    //CALCOLARE IL PREZZO DEL PREVENTIVO 
    //--costante lavoro e prezzo orario per tipo di lavoro
    const oreLavoro = 10;
    //--calcolare il prezzo base in base al tipo di lavoro
    let prezzoOrario = 0
    //--SE il valore è uguale a 1 il prezzo orario 20.50
    if(lavoro.value === "1"){
       lavoro.classList.remove('is-invalid')
       document.getElementById('select-validation').innerHTML =""
       document.getElementById('select-validation').classList.remove('invalid-feedback')
       prezzoOrario = 20.50
     //-- ALTRIMENTI SE il valore è uguale a 2 il prezzo orario 15.30   
    } else if (lavoro.value === "2"){
       lavoro.classList.remove('is-invalid')
       document.getElementById('select-validation').innerHTML =""
       document.getElementById('select-validation').classList.remove('invalid-feedback') 
       prezzoOrario = 15.30
    //-- ALTRIMENTI SE il valore è uguale a 3 il prezzo orario 33.60    
    } else if (lavoro.value === "3"){
       lavoro.classList.remove('is-invalid')
       document.getElementById('select-validation').innerHTML =""
       document.getElementById('select-validation').classList.remove('invalid-feedback')
       prezzoOrario = 33.60
    //-- ALTRIMENTI non è possibile calcolare il preventivo  
    } else {
       lavoro.classList.add('is-invalid')
       document.getElementById('select-validation').innerHTML =`Non hai selezionato nessuna tipolagia di lavoro valida: non è possibile calcolare il tuo preventivo`
       document.getElementById('select-validation').classList.add('invalid-feedback')
      }
    //calcola il prezzo base 
    const prezzoBase = oreLavoro * prezzoOrario
    console.log(prezzoBase) 
    let sconto = 0
    //--calcolare lo sconto
    //---costante sconto 25% 
    if(coupon.includes(promoElement.value)){
      sconto = prezzoBase * 0.25
      promoElement.classList.add('is-valid')
      promoElement.classList.remove('is-invalid')
      document.getElementById('promo-validation').innerHTML = `Complimenti, hai diritto allo sconto del 25%`
      document.getElementById('promo-validation').classList.remove('invalid-feedback')
      document.getElementById('promo-validation').classList.add('valid-feedback')
    } else if (promoElement.value === ""){
      sconto = 0
      promoElement.classList.remove('is-valid', 'is-invalid')
      document.getElementById('promo-validation').innerHTML = ""
      document.getElementById('promo-validation').classList.remove('valid-feedback', 'invalid-feedback')

    } else{
      promoElement.classList.remove('is-valid')
      promoElement.classList.add('is-invalid')
      document.getElementById('promo-validation').innerHTML = `Il codice inserito non è valido`
      document.getElementById('promo-validation').classList.add('invalid-feedback')
      
    }   
    const prezzoFinale = prezzoBase - sconto
    console.log(prezzoFinale, sconto)  
    
    // --stampare il prezzo in forma umana
    let boldPrice = prezzoFinale.toFixed(2).split('');
    // console.log(boldPrice);
    let nonBoldPrice = boldPrice.splice(-3);
    let pointDecimal = nonBoldPrice.splice(0,1,",")
    // console.log(pointDecimal, nonBoldPrice)
    // console.log(boldPrice)  

    
    paragraphElement.innerHTML = `<span class="h3 fw-bolder"> &euro; ${boldPrice.join('')}</span><span class="h4 fw-light">${nonBoldPrice.join('')}</span>`
});


//FUNZIONI

function validationNoDigit (text){
  const numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
  const textDivided = text.split('')
  for (let i = 0; i <= textDivided.length; i++)  {
       if (numbersArray.includes(textDivided[i])) {
          let digitNumber = true
       } else {
          let digitNumber = false
       }
         
  }   
   return digitNumber
};
