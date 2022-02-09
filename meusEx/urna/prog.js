var visor = document.getElementById("visor")
var img = document.getElementById("imagem")
var candidato = document.getElementById("Candidato")


function pressNum(num) {
    var btnNum = num.value
    if (candidato.textContent == "VOTO COMPUTADO COM SUCESSO!") {
        alert ("Voto já realizado")
    }
    else if (visor.textContent.length < 2) {
        visor.innerHTML += btnNum    
    } 
    checarCandidato()  
}

function corrige() {
    if (candidato.textContent == "VOTO COMPUTADO COM SUCESSO!") {
        alert ("Voto já realizado")
    }
    else {
        visor.innerHTML = ""
        img.src = "http://g37.com.br/imagens/90596/justica-eleitoral-de-divinopolis-so-atendera-por-agendamento-eletronico-devido-ao-coronavirus_13320201554150.png" 
        candidato.innerHTML = "VISOR DE CANDIDATO"
    }

    if (candidato.textContent == "VOTO COMPUTADO COM SUCESSO!") {
        alert ("Voto já realizado")
    }
}
function nulo() {
    

}
function confirma() {

    if (visor.textContent != "13" && visor.textContent != "17") {
        alert ("Candidato inválido")
    }
    else {
        img.src = "https://www.kindpng.com/picc/m/80-807690_check-mark-well-icon-internet-circle-good-correct.png"
        candidato.innerHTML = "VOTO COMPUTADO COM SUCESSO!"
        visor.innerHTML = ""
    }
}

function checarCandidato() {
    if (visor.textContent == "17") {
        img.src = "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/09/23/2021-09-23T195503Z_1_LYNXMPEH8M0US_RTROPTP_3_POLITICA-BOLSONARO-REDESSOCIAIS.JPG" 
        candidato.innerHTML = "JAIR MESSIAS BOLSONARO"
    }
    else if (visor.textContent == "13") {
        img.src = "https://exame.com/wp-content/uploads/2021/05/LULA-RICARDO-STUCKERT.jpg" 
        candidato.innerHTML = "LUIS INÁCIO LULA DA SILVA"
    }
    
}
   
