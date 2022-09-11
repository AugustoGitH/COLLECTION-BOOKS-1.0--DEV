const carrinho = [

]
const infosPagsBooks = [

]

function addBookCart(card, thiss){
    if(thiss == true){
        let idObject = card.parentNode.parentNode.parentNode.id
        let cardObject = AllBooks[idObject]
        carrinho.push(cardObject)
        saveCarLocalS()
    }else if(thiss == false){
        carrinho.push(card)
        saveCarLocalS()
    }
    
    
}
function saveCarLocalS(){
    orderIdCarBook()
    localStorage.setItem("carrinhoSave", JSON.stringify(carrinho))
    localStorage.setItem("quantityCart", JSON.stringify(carrinho.length))
    countItemsCart()
}
function orderIdCarBook(){
    carrinho.forEach((book, i)=>{
        book.id = i
    })
}
function countItemsCart(){
    let arrayCart = localStorage.getItem("quantityCart")
    circle_countCart.innerHTML = arrayCart

    // circle_countCart.innerHTML = JSON.parse(localStorage.getItem("carrinhoSave")).length
}

// function definedQuantity(buttAdd, buttDown){
//     let value = 0
//     let quantity = value
//     buttAdd.addEventListener("click", ()=>{
//         quantity = value++
        
//     })
//     buttDown.addEventListener("click", ()=>{
//         quantity = value--
//     })
//     return quantity
// }

function createCardCartWindow(book){
    let container = document.querySelector(".products_list")

    let li = document.createElement("li")
    li.classList.add("productsCardss")
    li.id = book.id
    container.appendChild(li)
    
    let spanFlex = document.createElement("span")
    spanFlex.classList.add("spanFlex")
    li.appendChild(spanFlex)

    let img_carPagLI = document.createElement("div")
    img_carPagLI.classList.add("img_carPagLI")
    spanFlex.appendChild(img_carPagLI)

    let img = document.createElement("img")
    img_carPagLI.appendChild(img)

    let description_carPagLI = document.createElement("div")
    description_carPagLI.classList.add("description_carPagLI")
    spanFlex.appendChild(description_carPagLI)

    let titleBook_carPagLI = document.createElement("p")
    titleBook_carPagLI.classList.add("titleBook_carPagLI")
    description_carPagLI.appendChild(titleBook_carPagLI)


    let optionsInfos_carPagLI = document.createElement("span")
    optionsInfos_carPagLI.classList.add("optionsInfos_carPagLI")
    li.appendChild(optionsInfos_carPagLI)

    let quantityDisplay_carPagLI = document.createElement("div")
    quantityDisplay_carPagLI.classList.add("quantityDisplay_carPagLI")
    optionsInfos_carPagLI.appendChild(quantityDisplay_carPagLI)



    let upButton_carPagLI = document.createElement("i")
    upButton_carPagLI.classList.add("bx", "bx-chevron-up","upButton_carPagLI", "buttonSelectQ")
    quantityDisplay_carPagLI.appendChild(upButton_carPagLI)

    let displayQuantityBook = document.createElement("p")
    displayQuantityBook.classList.add("displayQuantityBook")
    quantityDisplay_carPagLI.appendChild(displayQuantityBook)

    let downButton_carPagLI = document.createElement("i")
    downButton_carPagLI.classList.add("bx", "bx-chevron-down","downButton_carPagLI", "buttonSelectQ")
    quantityDisplay_carPagLI.appendChild(downButton_carPagLI)

    let quantity = 1
    displayQuantityBook.innerText = quantity

    upButton_carPagLI.addEventListener("click", (ev)=>{
        let idContent = ev.target.parentNode.parentNode.parentNode.id
        if(quantity < 4){
            quantity += 1
            addquantityClick(quantity, idContent)
            // addquantityClick(quantity,[ev.target.parentNode.id])
            displayQuantityBook.innerText = quantity
        }else{
            return
        }
    })
    downButton_carPagLI.addEventListener("click", (ev)=>{
        let idContent = ev.target.parentNode.parentNode.parentNode.id
        if(quantity > 1){
            quantity -= 1
            addquantityClick(quantity, idContent)
            displayQuantityBook.innerText = quantity
        }else{
            return
        }
    })
    
    


    let trash_carPagLI = document.createElement("i")
    trash_carPagLI.classList.add("bx", "bxs-trash","trash_carPagLI")
    optionsInfos_carPagLI.appendChild(trash_carPagLI)
    trash_carPagLI.addEventListener("click", (ev)=>{
        remveitemCarrinho(ev)

    })

    let span_1 = document.createElement("span")
    optionsInfos_carPagLI.appendChild(span_1)
    let p_1 = document.createElement("p")
    span_1.appendChild(p_1)
    p_1.innerText = "Preço unitário"

    let valueunity_carPagLI = document.createElement("p")
    valueunity_carPagLI.classList.add("valueunity_carPagLI")
    span_1.appendChild(valueunity_carPagLI)



    let span_2 = document.createElement("span")
    optionsInfos_carPagLI.appendChild(span_2)
    let p_2 = document.createElement("p")
    p_2.innerText = "Sub-Total"
    span_2.appendChild(p_2)
    let valuetotal_carPagLI = document.createElement("p")
    valuetotal_carPagLI.classList.add("valuetotal_carPagLI")
    span_2.appendChild(valuetotal_carPagLI)


    let imagemEnderec = "/Assets/Capa_Books/"+book.imgUrl
    titleBook_carPagLI.innerText = book.name_book
    img.src = imagemEnderec
    valueunity_carPagLI.innerText = "R$"+book.valor_book.toFixed(2)
    valuetotal_carPagLI.innerText = "R$"+book.valor_book.toFixed(2)


}
function remveitemCarrinho(ev){
    let id = ev.target.parentNode.parentNode.id
    console.log(id)
    let carrinhos = JSON.parse(localStorage.getItem("carrinhoSave"))
    let infosPagCarr = JSON.parse(localStorage.getItem("arrayCartInfosPag"))
    carrinho.splice(id, 1)
    infosPagCarr.splice(id, 1)
    localStorage.setItem("arrayCartInfosPag", JSON.stringify(carrinhos))
    console.log(carrinhos)
    
    
}
function adicionarArrayBoPag(){
    let arrayCart = JSON.parse(localStorage.getItem("carrinhoSave"))

    arrayCart.forEach((book)=>{
        infosPagsBooks.push(createbookInfPag(book.name_book, book.valor_book))
    })
    localStorage.setItem("arrayCartInfosPag", JSON.stringify(infosPagsBooks))
    
}
function createbookInfPag(nomBook, valBook){
    let book = {
        nome: nomBook,
        valor: valBook,
        quantity: 1,
        subtotal: valBook
    }
    return book
}
function addquantityClick(quantity, id){
    infosPagsBooks[id].quantity = quantity
    infosPagsBooks[id].subtotal = quantity*infosPagsBooks[id].valor
    localStorage.setItem("arrayCartInfosPag", JSON.stringify(infosPagsBooks))
    let subtotalsubs = document.querySelectorAll(".valuetotal_carPagLI")
    subtotalsubs[id].innerHTML = "R$" + (quantity*infosPagsBooks[id].valor).toFixed(2)
    attValoresResumo()
    
}
// function addQuantityClick(quantity){
//     let buttonSelectQ = document.querySelectorAll(".buttonSelectQ")
//     buttonSelectQ.forEach((butt)=>{
//         butt.addEventListener("click", ()=>{
//             localStorage.setItem("quantityItens", JSON.stringify(quantity))
//             let arrayCart = JSON.parse(localStorage.getItem("carrinhoSave"))
//             objectComprabook(arrayCart, quantity)
//             localStorage.setItem("carrinhoSave", JSON.stringify(arrayCart))
//         })
//     })
// }
// function atualizarSubTotal(quantity){
//     localStorage.setItem("quantityItens", JSON.stringify(quantity))
// }
function innerCardsCartWindow(){
    let arrayCart = JSON.parse(localStorage.getItem("carrinhoSave"))
    arrayCart.forEach(card => {
        createCardCartWindow(card)
    });
}
function mostrarcardsCar(){
    if(localStorage.length == 0){
        createPOOP("O carrinho está vazio:)")
    }else{
        location.href="/carrinhodeCompras/carrinho.html"
        innerCardsCartWindow()
    }
}
function createPOOP(mensage){
    let cartCount_header = document.querySelector("#cartCount_header")
    let poopVazio = document.createElement("div")
    poopVazio.classList.add("poopVazio")
    cartCount_header.appendChild(poopVazio)

    let poopVazioP = document.createElement("p")
    poopVazio.appendChild(poopVazioP)
    poopVazioP.innerText = mensage

    setTimeout(()=>{
        cartCount_header.removeChild(poopVazio)
    }, 2000)

}
