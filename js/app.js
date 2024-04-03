console.log('Ciao')

//COSTANTI ELEMENTI DOM
const formElement = document.getElementById('form-preventivo')
const lavoro = document.getElementById('lavoro');
const buttonElement = document.getElementById('submit')

console.log(formElement,lavoro)

//Collegare il form con l'evento submit evitando che la pagina si ricarchi
formElement.addEventListener('submit', function(event){
    event.preventDefault();
    //CALCOLARE IL PREZZO DEL PREVENTIVO
    //--costante lavoro e prezzo orario per tipo di lavoro
    const oreLavoro = 10;
    //--calcolare il prezzo base in base al tipo di lavoro
    let prezzoOrario = 0
    if(lavoro.value === "1"){
       prezzoOrario = 20.50
    } else if (lavoro.value === "2"){
       prezzoOrario = 15.30
    } else if (lavoro.value === "3"){
       prezzoOrario = 33.60
    } else {
        console.log('error!, non hai selezionato nessun lavoro')
    }
    const prezzoBase = oreLavoro * prezzoOrario
    console.log(prezzoBase)
})



//--calcolare lo sconto