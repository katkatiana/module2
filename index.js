0/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", 
    location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]
 
// creo una funzione che prende in ingresso due parametri che corrisponderanno a title e location dell'array di oggetti ("database")
/**
 * 
 * @param {*} jobType Job Type
 * @param {*} jobLocation Job Location
 * @returns An object with 2 properties ()
 */

const mySearch = function(jobType, jobLocation) {  
  let found = false; //dichiaro una variabile booleana per vagliare il caso in cui non ci siano corrispondenze
  let arrSearch = [] //dichiaro un array vuoto che andrò a riempire con i risultati della ricerca
  let finalObj = {result: [], count : 0} //dichiaro un oggetto vuoto che raccoglierà i risultati ottenuti e il numero finale di ricerche corrispondenti
  //per entrare in ogni elemento dell'array, genero un loop che parta da 0 e si ripeta per ogni elemento contenuto nell'array jobs
  for (let i = 0; i < jobs.length; i++) { 
    const everyJobType = jobs[i].title.toLowerCase() //conservo il valore della proprietà title in una variabile e rendo tutti i caratteri minuscoli
    const everyLocation = jobs[i].location.toLowerCase() //stesso ragionamento di sopra ma con il valore di location
    /* imposto le condizioni della ricerca, ovvero la funzione dovrà cercare se tra i due parametri in ingresso forniti e i valori di title 
     e location c'è corrispondenza anche se sono scritti in minuscolo e se sono corrispondenze parziali (rendo la funzione case insensitive)*/
    if ((everyJobType.includes(jobType.toLowerCase())) && (everyLocation.includes(jobLocation.toLowerCase()))) { 
      found = true;
      arrSearch.push(jobs[i]) //se le condizioni sono soddisfatte, riempie l'oggetto con i valori degli oggetti dell'array jobs iniziale (database)
    }  
  }
  if (!found) { //se le condizioni non sono soddisfatte, la booleana risulterà falsa e si stamperà un messaggio di no results
    console.log("Sorry, no results found")
  }
  finalObj.result = arrSearch; //si riempie l'oggetto finale che uscirà in console con i valori dell'array generato
  finalObj.count = arrSearch.length //si aggiunge come proprietà dell'oggetto il numero di elementi trovati pari alla lunghezza dell'array
  return finalObj
}
/* const firstTry = mySearch("cust", "")
console.log(firstTry) */


// PARTE 2
//per riuscire ad ottenere i risultati ricavati dalla ricerca della funzione mySearch() serve rendere i parametri di ingresso della funzione corrispondenti agli input dell'HTML
const collectAndShow = function() {
  const firstInput = document.querySelector("input#job-type-search").value //ricavo e conservo i valori (prioprietà .value) degli input differenziati per id
  const secondInput = document.querySelector("input#location-search").value
  const values = document.querySelector("ul") //seleziono l'ul ancora privo di li
  const finalCounter = document.querySelector("#counter")
  if((firstInput === "") || (secondInput === "")) {
    values.innerHTML = ""
    finalCounter.innerText = ""
    alert("You have to insert Job type and Location first")
  } else {
    const objResults = mySearch(firstInput, secondInput) //conservo il valore di ritorno della funzione mySearch in cui i due parametri corrispondono al valore degli input
    finalCounter.innerText = "Results found: " + objResults.count
    values.innerHTML = ""
    //genero e riempio la lista rendendo ogni li uguale alle due proprietà dell'iesimo elemento dell'array result contenuto nell'oggetto objResults
    for (let i = 0; i < objResults.result.length; i++) {
       values.innerHTML += `<li>${objResults.result[i].title} ${objResults.result[i].location}</li>`

       /*  altra soluzione possibile usando .createElement() + .appendChild()
      const everyLi = document.createElement("li")
      everyLi.innerText = objResults.result[i].title + objResults.result[i].location
      values.appendChild(everyLi) */
    }
  }
}

