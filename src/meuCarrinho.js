function abrirCarrinho(){
    document.getElementById("carrinho").classList.add("right-[0]")
    document.getElementById("carrinho").classList.remove("right-[-360px]")
}
function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0]")
    document.getElementById("carrinho").classList.add("right-[-360px]")
}

export function inicializarCarrinho(){
    const botonFecharCarrinho = document.getElementById("fechar-carrinho")
    const botonAbrirCarrinho = document.getElementById("abrir-carrinho")

    botonFecharCarrinho.addEventListener("click", fecharCarrinho)
    botonAbrirCarrinho.addEventListener("click", abrirCarrinho)
}