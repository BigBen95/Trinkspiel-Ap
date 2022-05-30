let stufe = "stufe1"
const WoPTL = new gsap.timeline()
async function getWoPData (){
    try {
        const GetElements = await fetch('./assets/JS/WoP.JSON');
        const jsonElements = await GetElements.json();

        const wahrheitBtn = document.querySelector("#wahrheit-btn")
        const pflichtBtn = document.querySelector("#pflicht-btn")

            wahrheitBtn.addEventListener("click", ()=>{
                renderElements(jsonElements, "wahrheit", stufe )
                WoPTL.to('.headline', 0.6, {width: 200})
                        .to('h1', 0.6, {x: 40},'-=0.6')
            })
            pflichtBtn.addEventListener("click", ()=>{
                renderElements(jsonElements, "pflicht", stufe )
                WoPTL.to('.headline', 0.6, {width: 120})
                .to('h1', 0.6, {x: -255},'-=0.6')
            })

    }
    catch (error){
        console.log(error)
    }
}
getWoPData()

function renderElements(renderElements , task, stufe){
    const toDo = document.querySelector("#WoPtoDo")
    function randomContent(AllContent){
        let content = AllContent
        const randomNumber = [Math.floor(Math.random()*content.length)]
        let question = content[randomNumber]
        // console.log(randomNumber , question,)
        content.splice(randomNumber, 1)
        console.log(content.length)
        toDo.innerHTML = question
    }
    if(task == "wahrheit"){
        switch (stufe){
            case "stufe1":
                randomContent(renderElements.Wahrheit.stufe1.Fragen)
                break;
            case "stufe2":
                randomContent(renderElements.Wahrheit.stufe2.Fragen)
                break;
            case "stufe3":
                randomContent(renderElements.Wahrheit.stufe3.Fragen)
                break;
            case "stufe4":
                randomContent(renderElements.Wahrheit.stufe4.Fragen)
                break;
        }    
    }
    else if(task == "pflicht"){
        switch (stufe){
            case "stufe1":
                randomContent(renderElements.Pflicht.stufe1.Pflichten)
                break;
            case "stufe2":
                randomContent(renderElements.Pflicht.stufe2.Pflichten)
                break;
            case "stufe3":
                randomContent(renderElements.Pflicht.stufe3.Pflichten)
                break;
            case "stufe4":
                randomContent(renderElements.Pflicht.stufe4.Pflichten)
                break;
        }    
    }

}

