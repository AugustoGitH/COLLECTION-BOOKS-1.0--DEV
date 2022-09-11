function btnProgres(i){
    let container = document.querySelectorAll(".carrosel_livros")
    container[i].scrollBy({ 
        left: 500,
        behavior: 'smooth' 
    })
}
function btnRegres(i){
    let container = document.querySelectorAll(".carrosel_livros")
    container[i].scrollBy({ 
        left: -500,
        behavior: 'smooth' 
    })
}

function iconBackPage(){
    if(sectionCards.classList.contains("none")){
        sectionCards.classList.remove("none")
        removeCardHtml()
        appendCardsWindow(AllBooks, "Mais_vendidos")
        appendCardsWindow(AllBooks, "Populares")
        openInfosExtraBooks()

    }else{
        return
    }
}






function openInfosExtraBooks(){
    let img_card = document.querySelectorAll(".img_card")
    img_card.forEach((card)=>{
        card.addEventListener("click", ()=>{
            let book = AllBooks[card.parentNode.id]
            createDivInfoExtras(book)
            
        })
    })
}

function SearchBooks(){
    let value_search = document.querySelector(".value_search")
    let valuer = value_search.value
    if(valuer == ""){
        alertInput(value_search)
        
    }else{
        mostrarBooksresultsSearch()
        value_search.value = ""
    }

}

function verifySearch(obj){
    let stringNome = obj.name_book.toLowerCase()
    let resultNome = document.querySelector(".value_search").value.toLowerCase()

    let stringNomeNOARRAY = stringNome.replace(/\s/g, '')
    let resultNomeNOARRAY = resultNome.replace(/\s/g, '')

    let NewresultNome = resultNome.split(" ") //Resposta

    let newStrArr = stringNome.split(" ") //Pergunta

    if((resultNomeNOARRAY == stringNomeNOARRAY)){
        return true
    }else{
        return false
    }
}

function mostrarBooksresultsSearch(){
    let novaArray = AllBooks.filter(verifySearch)
    sectionCards.classList.add("none")
    removeCardHtml()
    appendCardsWindow(novaArray, "cardsFilters")
}
const iconSearch = document.querySelector(".iconSearch")
const circle_countCart = document.querySelector(".circle_countCart")


iconSearch.addEventListener("click", SearchBooks)

document.addEventListener("DOMContentLoaded",()=>{
    appendCardsWindow(AllBooks, "Mais_vendidos")
    appendCardsWindow(AllBooks, "Populares")
    openInfosExtraBooks()
    countItemsCart()

})


