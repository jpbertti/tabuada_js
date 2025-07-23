
// cria a variavel botão.
let botoes = '';

// para cada botao até 10x (defini a quantidade)
for (let i = 0; i <= 10; i++) {
    // console.log(i);
    // novo valor para a variavel botão
    let botao = `<button name="botao" class = "btn btn-primary">${i}</button>`

    // conjunto de botões = botão + botão ate o maximo estipulado no for
    botoes = botoes + '&nbsp' + botao;

    // botoes += `&nbsp;${botao}`; 
    // console.log(botoes); 
}

// mostrar no id (local no HTML) o conjunto de botões criados
document.getElementById("valores").innerHTML = botoes;


// cria uma nova variavel
const arrayBotao = document.getElementsByName("botao");

// console.log(typeof arrayBotao);
// console.log(arrayBotao);

arrayBotao.forEach(function (btnAtual) {
    // console.log(btnAtual.innerText);
    btnAtual.addEventListener("click", function () {
        //    alert(`Olá ${btnAtual.innerText}`);
        let tabela = btnAtual.innerHTML;
        let conjunto = '';
        for (let i = 0; i <= 10; i++) {
            conjunto += `${tabela} x ${i} = ${tabela * i} <br>`
        }

        document.getElementById("resultado").innerHTML = conjunto;
    });
})