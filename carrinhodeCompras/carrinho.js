const quantityProduct_carPag = document.querySelector(".quantityProduct_carPag")


function attValoresResumo(){
    let array = JSON.parse(localStorage.getItem("arrayCartInfosPag"))
    let nwarray = array.map((el)=>{
        return el.subtotal
    })
    let valueSubTBooks = nwarray.reduce((acc, el)=>{
        return acc + el
    })
    localStorage.setItem("subTotalBooks", valueSubTBooks)
    let valorTotalBooks = "R$"+Number(JSON.parse(JSON.stringify(localStorage.getItem("subTotalBooks")))).toFixed(2)
    document.querySelector("#infoSubTotal").innerHTML = valorTotalBooks
    document.querySelector("#infoTotal").innerHTML = valorTotalBooks
}

function continueCompr(){
    localStorage.setItem("arrayCartInfosPag", infosPagsBooks)
    localStorage.setItem("carrinhoSave", carrinho)
}
function verityQnth(){
    if(JSON.parse(localStorage.getItem("carrinhoSave")).length == "1"){
        return " produto"
    }else{
        return " produtos"
    }
}
function limparCarrinho(){
    localStorage.removeItem("carrinhoSave")
    localStorage.removeItem("arrayCartInfosPag")
    localStorage.removeItem("quantityCart")
    location.reload()

}
document.addEventListener("DOMContentLoaded", ()=>{
    quantityProduct_carPag.innerHTML = JSON.parse(localStorage.getItem("carrinhoSave")).length + verityQnth()
    innerCardsCartWindow()
    adicionarArrayBoPag()
    attValoresResumo()
    // let displayQuantityBook = document.querySelectorAll(".displayQuantityBook")
    // displayQuantityBook.forEach((el, id)=>{
    //     el.innerText = JSON.parse(localStorage.getItem("arrayCartInfosPag"))[id].quantity
    // })
})
