let botoes = '';

for (let i = 0; i <= 10; i++) {
    console.log(i);
    let botao = `<button name="botao" class = "btn btn-primary">${i}</button>`
    
    botoes = botoes + '&nbsp' + botao;
    // botoes += `&nbsp;${botao}`;
    // console.log(botoes);
}

document.getElementById("valores").innerHTML = botoes;


const arrayBotao = document.getElementsByName("botao");

console.log(typeof arrayBotao);
console.log(arrayBotao);
console.log(arrayBotao.length);
console.log(arrayBotao[10].innerText);

arrayBotao.forEach(function(){
    
})