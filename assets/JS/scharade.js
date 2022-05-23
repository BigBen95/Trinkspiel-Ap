const cards = document.querySelectorAll('.cards');
cards.forEach(card => card.addEventListener('click', flipWord));

let CardIsClicked = false;
function clicked() {
    CardIsClicked = true;
}
cards.forEach(card => card.addEventListener('click', clicked));


function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const array = ["Wildschwein", "Baby", "Zahnarzt", "Poledance", "Glatteis","Zombie","Kuh melken", "Osterhase","Hexe","Strippen / Stripper",
"Flügel","Disko","Fisch","Motorrad","Auto","Ersticken","Mundgeruch","Schlagzeug","Enttäuscht","Scherz","Puppe","Langeweile","Roboter",
"Trampolin", "Eiscreme", "Kissen", "Videospiele", "Blinzeln", "Zahnpasta", "Mücke", "Verrückt", "Lehrer","Schnürsenkel","Hitze","Lippenstift","Scherz",
"Shoppen","Entspannen","Schwimmen","Dehnen","Pflaster abziehen","Mundspülung","Weinen","Parfüm auftragen","Schreibmaschine", "Ein Streichholz anzünden",
"Regenschirm öffnen", "Sägen", "Krücken","Gib mir Fünf!","Blumen pflücken","Leiter","Steinschleuder","Scooter","Sterne","Bett","Fische füttern","Blut abnehmen",
"Maiskolben" ,"Toaster" ,"Heimlicher Verehrer", "Verdorbener Apfel" ,"Tätowierung" ,"Golfwagen" ,"Hawaii" ,"Lederhosen" ,"Seestern", "Limousinenfahrer",
"Grübchen", "Wasserbett", "Thermometer" ,"Einen Pickel ausdrücken", "Auszeit" ,"Bienenstich", "Ängstliche Katze", "Faulenzer", "Rasierschaum",
"Internet" ,"Lampe", "Kaffeeautomat", "Müllsack" ,"Rappen", "Ablehnung", "Kaputt", "Kuscheldecke", "Camping", "Ikea" ,"Ehe", "Scheidung", "Smog", "Organisieren",
"Nerd", "Jetlag" ,"Schwermetall", "Hausarrest", "Internet", "Psychologe" ,"Arbeitslos", "PhobieHosenträger", "Mozart" ,"Darmspiegelung" ,"Werbung","Déjà-vu" ,"Verkäufer",
"Astronaut" ,"Holz", "Rolltreppe","Musik", "Knoten", "Hippie", "Naschkatze", "Hängematte", "Polizeiauto", "Plattenspieler", "Raubüberfall" ,"Klempner",
"Versicherung","Feminismus", "Käse", "Pflanzen", "gießen" ,"Angeln", "Albtraum", "Zahnarzt", "Schach", "spielen" ,"Krampf" ,"Rasenmäher" ,"Spiegel" ,"Nagellackentferner" ,"Selbstgespräch",
"Jagd", "Autoreparatur", "Wandern" ,"Blut spenden" ,"Eine Rede halten", "Haare flechten", "Schlüssel verlieren", "Beine rasieren" ,"Locken machen", "Herzdruckmassage",
"Vögel beobachten", "Piercing", "Reifen aufpumpen", "Rückwärtssalto", "Eine Granate werfen", "Eine Gitarre stimmen", "Seekrank" ,"Picknick" ,"Eine Auszeichnung gewinnen",
"Schloss knacken" ,"Zelt aufstellen", "Parade", "Rollstuhl", "Bodyguard" ,"Notaufnahme" ,"Münztelefon" ,"Sternschnuppe" ,"Voodoo", "Kopfschmerzen",
"Physiotherapeut" ,"Nagellack", "Fingerabdruck", "Computer Virus", "Zauberhut", "Saftbox", "Mikroskop" ,"Rettungsweste" ,"Harfe", "Katzenklo", "Tiefkühlpizza", "Facelifting",
"Pubertät", "Bewerbung", "Sarkasmus" ,"Tinnitus" ,"Geld verschwenden", "Botox", "Nackt", "Nervige Kollegen", "Glas", "Wein", "Ein Kind gebären" ,"Schulden", "Arbeitslos" ,"Freiheit",
"Ehe", "Vaping", "Existenzielle", "Krise" ,"Kater" ,"Ziele", "Komasaufen", "Gartenarbeit" ,"Beförderung" ,"Reif", "Weinverkostung","Schwanger","Rechnungen bezahlen","Alte Leute",
"Burn-Out", "Schmusen" ,"Erschöpft", "Hipster" ,"Stress" ,"Schlaflosigkeit", "Reisen", "Urlaub" ,"Fehler" ,"Sekretär/in", "Kuchen backen",
"Junggesellinnenparty" ,"Ausziehen (Kleidung)" ,"Wäsche waschen" ,"Locher", "Zigarette", "Fitnessstudio" ,"Nagelstudio" ,"Tattoo stechen", "Friseursalon" ,"Gras rauchen",
"Shots trinken" ,"Menstruation" ,"Wahlen", "Arbeiten", "Mittagspause", "Gefeuert werden", "Müde" ,"Frauenarzt / Frauenärztin", "Verkehrspolizist", "Den Müll rausbringen",
"Auto putzen", "Jalousien öffnen", "Glühbirne wechseln", "Ein Taxi herwinken", "Grillen", "Meditieren", "Handlesen", "Wäsche zusammenlegen", "Augenbrauen zupfen",
"Haare glätten", "Model", "Abstauben" ,"Blind Date","Yoga", "Twerking" ,"Bräunungsspray","Parken" ,"Zauberwürfel",
"Splitter aus dem Fuß entfernen", "Uhr", "Ausklappbare Couch" ,"Drive-thru" ,"Steh-Tisch" ,"Bierbauch" ,"Kugelsichere Weste" ,"Gangster", "Fettpölsterchen", "Getränkehalter",
"Giftmüll", "Kalender" ,"Mädchen", "Zungenkuss", "Wimpernzange", "Fettabsaugung", "Anmachspruch" ,"Buddha" ,"Shampoo" ,"Tunnelblick", "Nasenkorrektur", "Herzschmerz",
"Falten" ,"Airbag" ,"Tee trinken" ,"Nackt schwimmen"

];
const result = getRandomItem(array);
function flipWord() {
    if (CardIsClicked) {
        document.getElementById("word1").textContent = getRandomItem(array);
        CardIsClicked = false;
    }
}


document.getElementById("timer").addEventListener("click", () =>{
let timeleft = 60;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 60 - timeleft;
  timeleft -= 1;
}, 1000);
})

