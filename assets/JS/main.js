// Einstellungen
const openMenu = document.getElementById("language-settings")
const languageMenu = document.getElementById("languageMenu")

openMenu.addEventListener("click" , ()=>{
    languageMenu.classList.remove("hidden")
})
languageMenu.addEventListener("click" , ()=>{
    languageMenu.classList.add("hidden")
})

// Sprachauswahl
const germanLanguage = document.getElementById("germanLanguage")
const englishLanguage = document.getElementById("englishLanguage")

germanLanguage.addEventListener("click" , ()=>{
    console.log("deutsch")
})
englishLanguage.addEventListener("click" , ()=>{
    console.log("english")
})