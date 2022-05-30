
const CardButton = document.querySelector("#newCard")
const CardChallenge = document.querySelector("#toDo")
const CardName = document.querySelectorAll(".CardName")
const newCardName = document.querySelectorAll(".newCardName")
const CardImgSymbol = document.querySelectorAll("#CardPicture img")
const newCardImgSymbol = document.querySelectorAll("#newCardPicture img")


let Cards = ["Kreuz 2", "Kreuz 3" ,"Kreuz 4", "Kreuz 5" , "Kreuz 6", "Kreuz 7" , "Kreuz 8" , "Kreuz 9" ,"Kreuz 10" ,"Kreuz B" , "Kreuz D" , "Kreuz K" , "Kreuz A",
             "Herz 2", "Herz 3" ,"Herz 4", "Herz 5" , "Herz 6", "Herz 7" , "Herz 8" , "Herz 9" ,"Herz 10" ,"Herz B" , "Herz D" , "Herz K" , "Herz A",
            "Pik 2", "Pik 3" ,"Pik 4", "Pik 5" , "Pik 6", "Pik 7" , "Pik 8" , "Pik 9" ,"Pik 10" ,"Pik B" , "Pik D" , "Pik K" , "Pik A",
            "Karo 2", "Karo 3" ,"Karo 4", "Karo 5" , "Karo 6", "Karo 7" , "Karo 8" , "Karo 9" ,"Karo 10" ,"Karo B" , "Karo D" , "Karo K" , "Karo A"]


CardButton.addEventListener("click" , ()=> {
    getRandomCard()
})

function getRandomCard (){
    let CardsCount = Cards.length
    let CardIndex = getRandomNumber(Cards.length)
    let UsedCard = Cards.splice(CardIndex , 1)
    console.log(UsedCard)
    if (UsedCard.length < 1){
        CardName.innerHTML = "Noch nicht voll ?"
        CardChallenge.innerHTML = "Dann starte eine neue Runde!"
        CardButton.innerHTML = "Neues Spiel !"
        CardButton.addEventListener("click" , ()=>{window.location.reload()})
    }
    else {
        newCardName.forEach((child)=>{child.innerHTML = UsedCard[0].split(' ')[1];})
        setTimeout(()=>{CardName.forEach((child)=>{child.innerHTML = UsedCard[0].split(' ')[1];})}, 990)
        const CardValue = UsedCard[0].split(' ')[1]
        const CardSymbol = UsedCard[0].split(' ')[0]

        switch (CardValue){
            case "2":
                CardChallenge.innerHTML = "Verteile 2 Schlücke";
                break;
            case "3":
                CardChallenge.innerHTML = "Trink 1 Schluck";
                break;
            case "4":
                CardChallenge.innerHTML = "Trink 2 Schlücke & Verteile 2 Schlücke";
                break;
            case "5":
                CardChallenge.innerHTML = "Alle Männer trinken";
                break;
            case "6":
                CardChallenge.innerHTML = "Alle Frauen trinken";
                break;
            case "7":
                CardChallenge.innerHTML = "Du bist der Daumen Master";
                break;
            case "8":
                CardChallenge.innerHTML = "Such dir einen Trinkpartner aus";
                break;
            case "9":
                CardChallenge.innerHTML = "Reimen";
                break;
            case "10":
                CardChallenge.innerHTML = "Alle Trinken";
                break;
            case "B":
                CardChallenge.innerHTML = "Kategorie";
                break;
            case "D":
                CardChallenge.innerHTML = "Du bist Fragenmeister";
                break;
            case "K":
                CardChallenge.innerHTML = "Ein König wurde gezogen";
                break;
            case "A":
                CardChallenge.innerHTML = "Du darfst dir eine Regel aussuchen";
                break;
        }
        switch (CardSymbol){
            case "Herz":
                newCardName.forEach((child)=>{child.style.color = "#a31919"})
                setTimeout(()=>{CardName.forEach((child)=>{child.style.color = "#a31919"})}, 990)
                newCardImgSymbol.forEach((child)=>{child.setAttribute("src", "./assets/icons/KartenSymbole/Herz.svg")})
                setTimeout(()=>{CardImgSymbol.forEach((child)=>{child.setAttribute("src", "./assets/icons/KartenSymbole/Herz.svg")})}, 990)
                break;
            case "Karo":
                newCardName.forEach((child)=>{child.style.color = "#a31919"})
                setTimeout(()=>{CardName.forEach((child)=>{child.style.color = "#a31919"})}, 990)
                newCardImgSymbol.forEach((child)=>{child.setAttribute("src", "./assets/icons/KartenSymbole/Karo.svg")})
                setTimeout(()=>{CardImgSymbol.forEach((child)=>{child.setAttribute("src", "./assets/icons/KartenSymbole/Karo.svg")})}, 990)
                break;
            case "Kreuz":
                newCardName.forEach((child)=>{child.style.color = "#000000"})
                setTimeout(()=>{CardName.forEach((child)=>{child.style.color = "#000000"})}, 990)
                newCardImgSymbol.forEach((child)=>{child.setAttribute("src", "./assets/icons/KartenSymbole/Kreuz.svg")})
                setTimeout(()=>{CardImgSymbol.forEach((child)=>{child.setAttribute("src", "./assets/icons/KartenSymbole/Kreuz.svg")})}, 990)
                break;
            case "Pik":
                newCardName.forEach((child)=>{child.style.color = "#000000"})
                setTimeout(()=>{CardName.forEach((child)=>{child.style.color = "#000000"})}, 990)
                newCardImgSymbol.forEach((child)=>{child.setAttribute("src", "./assets/icons/KartenSymbole/Pik.svg")})
                setTimeout(()=>{CardImgSymbol.forEach((child)=>{child.setAttribute("src", "./assets/icons/KartenSymbole/Pik.svg")})}, 990)
                break;

                
        }
    }
    


    function getRandomNumber(CardsCount){
        return Math.floor(Math.random() * CardsCount);
    }
}