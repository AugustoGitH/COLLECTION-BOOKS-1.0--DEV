const sectionCards = document.querySelector(".sectionCards")
const containerP = document.querySelector(".containerP")




function criarCardsAmosterHTML(Book, contain){
    let container = document.querySelector("#"+ contain)

    let card_book = document.createElement("div")
    card_book.classList.add("card_book")
    card_book.id = Book.id
    container.appendChild(card_book)

    const img_card = document.createElement("div")
    img_card.classList.add("img_card")
    card_book.appendChild(img_card)

    const saibamais_card = document.createElement("div")
    saibamais_card.classList.add("saibamais_card")
    img_card.appendChild(saibamais_card)

    const P_saibamiasCard = document.createElement("p")
    P_saibamiasCard.classList.add("P_saibamiasCard")
    saibamais_card.appendChild(P_saibamiasCard)
    P_saibamiasCard.innerText = "Saiba Mais"


    let img = document.createElement("img")
    img_card.appendChild(img)

    let descricao_card = document.createElement("div")
    descricao_card.classList.add("descricao_card")
    card_book.appendChild(descricao_card)

    let titulo_card = document.createElement("p")
    titulo_card.classList.add("titulo_card")
    descricao_card.appendChild(titulo_card)

    let descr = document.createElement("p")
    descr.classList.add("descr")
    descricao_card.appendChild(descr)

    let span_card = document.createElement("span")
    descricao_card.appendChild(span_card)

    let valor_card = document.createElement("p")
    valor_card.classList.add("valor_card")
    span_card.appendChild(valor_card)

    const btn_car = document.createElement("i")
    btn_car.classList.add("btn_car","bx", "bxs-cart-alt")
    span_card.appendChild(btn_car)
    btn_car.addEventListener("click", function(){
        // addBookCart(this, true)
        addBookCart(this, true)

    })


    let imagemEnderec = "/Assets/Capa_Books/"+Book.imgUrl

    img.src = imagemEnderec
    titulo_card.innerText = Book.name_book
    descr.innerText = Book.descript_book
    valor_card.innerText = "R$"+Book.valor_book.toFixed(2)
    
}


function removeCardHtml(){
    let card_book = document.querySelectorAll(".card_book")
    card_book.forEach((card)=>{
        card.remove()
    })
}
function appendCardsWindow(ColectionBook, container){
    if(container == CLASSAMOSTER_MAISVENDIDOS || container == CLASSAMOSTER_POPULARES || container == CLASSAMOSTER_PREMIADOS){
        function verifyMaisvendidos(el){
            return el.class_amoster === container
        }
        let Collection = ColectionBook.filter(verifyMaisvendidos)
        Collection.forEach((bookObject)=>{
            criarCardsAmosterHTML(bookObject, container)
        })
    }else{
        ColectionBook.forEach((book)=>{
            criarCardsAmosterHTML(book, container)
        })
    }
    
}
function filterBooksClass(classe){
    function filterBooks(book){
        return book.class_book == classe
    }
    let newcollectio = AllBooks.filter(filterBooks)
    appendCardsWindow(newcollectio, "cardsFilters")
    openInfosExtraBooks()
}

function AtualizarDocumentFilter(classe, obj){
    if(!sectionCards.classList.contains("none")){
        sectionCards.classList.add("none")
    }
    removeCardHtml()
    filterBooksClass(classe)
    checkedfil(obj)
    // if(sectionCards.classList.contains("none")){
    //     removeCardHtml()
    //     filterBooksClass(classe)
    // }else{
    //     sectionCards.classList.add("none")
    //     removeCardHtml()
    //     filterBooksClass(classe)
    // }
    
}

function checkedfil(obj){
    let btnFilter = document.querySelectorAll(".btnFilter")
    btnFilter.forEach((btn)=>{
        btn.classList.remove("checked")
    })
    obj.classList.add("checked")


}


function createDivInfoExtras(book){
    let InfosExtras_container = document.createElement("div")
    InfosExtras_container.classList.add("InfosExtras_container")
    document.body.appendChild(InfosExtras_container)

    let InExC_cardContainer = document.createElement("div")
    InExC_cardContainer.classList.add("InExC_cardContainer")
    InfosExtras_container.appendChild(InExC_cardContainer)

    let iconClose = document.createElement("i")
    iconClose.classList.add("iconClose", "bx", "bxs-x-circle")
    InExC_cardContainer.appendChild(iconClose)

// ADDEVENT iconclose
    iconClose.addEventListener("click", ()=>{
        closePage(InfosExtras_container)
        BlockOverBody("scroll")
    })


    let InExC_cardContent = document.createElement("div")
    InExC_cardContent.classList.add("InExC_cardContent")
    InExC_cardContainer.appendChild(InExC_cardContent)

    let InExC_img = document.createElement("div")
    InExC_img.classList.add("InExC_img")
    InExC_cardContent.appendChild(InExC_img)

    let img = document.createElement("img")
    InExC_img.appendChild(img)

    let InExC_description = document.createElement("div")
    InExC_description.classList.add("InExC_description")
    InExC_cardContent.appendChild(InExC_description)

    let InExC_title = document.createElement("h1")
    InExC_title.classList.add("InExC_title")
    InExC_description.appendChild(InExC_title)

    let InExC_descricao = document.createElement("p")
    InExC_descricao.classList.add("InExC_descricao")
    InExC_description.appendChild(InExC_descricao)

    let InExC_capa = document.createElement("p")
    InExC_capa.classList.add("InExC_capa")
    InExC_description.appendChild(InExC_capa)

    let InExC_valor = document.createElement("p")
    InExC_valor.classList.add("InExC_valor")
    InExC_description.appendChild(InExC_valor)


    let btn_comprarBook = document.createElement("button")
    btn_comprarBook.classList.add("btn_comprarBook")
    InExC_description.appendChild(btn_comprarBook)
    btn_comprarBook.innerText = "Comprar agora"
    btn_comprarBook.addEventListener("click", ()=>{
        window.open("carrinhodeCompras/carrinho.html", "janelaNova")
        addBookCart(book, false)
    })

    let display_lenEnredo = document.createElement("div")
    display_lenEnredo.classList.add("display_lenEnredo")
    InExC_description.appendChild(display_lenEnredo)

    let lenEnredo = document.createElement("p")
    lenEnredo.classList.add("lenEnredo")
    display_lenEnredo.appendChild(lenEnredo)

    let imagemEnderec = "/Assets/Capa_Books/"+book.imgUrl

    img.src = imagemEnderec
    InExC_title.innerText = book.name_book
    InExC_descricao.innerText = book.descript_book
    InExC_capa.innerText = "Capa " + book.capa_book
    InExC_valor.innerText = "Valor: R$" + book.valor_book.toFixed(2)
    lenEnredo.innerText = book.enredo_book


    BlockOverBody("block")
}
function BlockOverBody(cond){
    if(cond == "block"){
        document.body.style.overflow = "hidden"
    }else if(cond == "scroll"){
        document.body.style.overflow = "auto"  
    }
    
    
}
function closePage(page){
    page.remove()
    BlockOverBody("scroll")
}

function alertInput(input){
    input.classList.add("tremer")
    setTimeout(()=>{
        input.classList.remove("tremer")
    }, 1000)
}



