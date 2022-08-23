function alteraCorBotao(button, cor) {
    const alteraCor = document.getElementById(button);
    alteraCor.style.backgroundColor = (cor);
    console.log(cor)
}

function retornaCorBotao(button, cor) {
    const retornaCor = document.getElementById(button);
    retornaCor.style.backgroundColor = (cor);
}

function painelQuemSomos() {
    const element = document.getElementsByClassName("textoConteudo")[0];
    const element2 = document.getElementsByClassName("containerConteudoMenuDireito")[0];
    element.innerHTML = "<b>Instalados no município de Dionísio Cerqueira, oferecemos serviços de hospedagem há 20 anos.</b> <br> <br> <p> <b>Visão:</b> Ser a melhor opção de hospedagem da região da tŕiplice fronteira para clientes que buscam repouso confortável com simplicidade e excelente relação entre custo e benefício. </p> <br> <p> <b>Missão:</b> Oferecer serviços de hospedagem com atendimento rápido, simples e sem burocracia prezando pelo bom atendimento, higiene e conforto com preços acessíveis. </p> <br> <p> <b>Valores:</b> Honestidade; Simplicidade; Tradição; Prestatividade e Liberdade.</p>";
    element2.innerHTML = "<style> .containerConteudoMenuDireito { display: flex; justify-content: center; height: 100%; width: 50%; border-radius: 5px 5px 10px 10px; } </style> <figure> <img loading='lazy' class='imgContainerConteudo' src='./fundoQuemSomos.jpg' alt=''> <style> .imgContainerConteudo { justify-content: center; height: 100%; width: 100%; border-radius: 5px 5px 10px 10px; } </style>";
}

function painelServicos() {
    const element = document.getElementsByClassName("textoConteudo")[0];
    const element2 = document.getElementsByClassName("containerConteudoMenuDireito")[0];
    element.innerHTML = "Oferecemos serviço de hospedagem com quartos individuais e coletivos; <br> <br> Possuímos uma cozinha bem equipada para quem deseja preparar pequenos pratos, porém não oferecemos alimentação; <br> <br> Possuímos quartos com banheiro e quartos com banheiros compartilhados; <br> <br> Realizamos a limpeza do quarto e troca de toalhas uma vez ao dia.";
    element2.innerHTML = "<style> .containerConteudoMenuDireito { display: flex; justify-content: center; height: 100%; width: 50%; border-radius: 5px 5px 10px 10px; } </style> <figure> <img loading='lazy' class='imgContainerConteudo' src='./recepcao2.jpeg' alt=''> <style> .imgContainerConteudo { justify-content: center; height: 100%; width: 100%; border-radius: 5px 5px 10px 10px; } </style>";
}

function painelLocalizacao() {
    const element = document.getElementsByClassName("textoConteudo")[0];
    const element2 = document.getElementsByClassName("containerConteudoMenuDireito")[0];
    element.innerHTML = "Localizados no Município de Dionísio Cerqueira - SC. <br> <br> Rua 7 de Setembro, 809 - Centro - CEP 89.950-000 <br> <br> <b>Contato: (049) 3644-1748 </b><br> <br> O mapa ao lado é interativo e você pode utilizá-lo para navegar e encontrar nossa localização com facilidade. ";
    element2.innerHTML = "<style> .containerConteudoMenuDireito { display: flex; justify-content: center; height: 100%; width: 90%; border-radius: 5px 5px 10px 10px; } </style> <div class='imgContainerConteudo'> <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22074.165904102723!2d-53.64712927142808!3d-26.250902165446142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fa7732635a7739%3A0x46a188c9ff26275f!2sPalace%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1661186036001!5m2!1spt-BR!2sbr' width='700px' height='310px' style='border:0; border-radius:5px;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'> </div>";
}

function painelReserva() {
    const element = document.getElementsByClassName("textoConteudo")[0];
    const element2 = document.getElementsByClassName("containerConteudoMenuDireito")[0];
    element.innerHTML = "Nossas reservas são feitas por de contato telefônico pelo número: <br> <br> <b> (049) 3644-1748. </b> <br> <br> Você pode entrar em contato pelo whatsapp no número: <br> <br> <b< (049) 99159-6632. </b> <br> <br> <b> Ou click no botão ao lado para iniciar o whatsapp automaticamente. </b>";
    element2.innerHTML = "<style> .containerConteudoMenuDireito { display: flex; justify-content: center; background-color: rgb(82, 196, 177); center; height: 100%; width: 90%; border-radius: 90px 90px 10px 90px } </style> <a href='https://api.whatsapp.com/send?phone=5549991596632&text=Ol%C3%A1.%20Gostaria%20de%20fazer%20uma%20reserva.'> <input class='contato' type='button' value='Whatsapp' onmouseenter='realcaBotao()' onmouseout='voltaBotao()'> <style> .contato {  margin-top: 50px; cursor: pointer; border-style: solid;border-color: white; border-radius: 50% 50% 50% 2%;font-size: 40px; height: 200px; width: 200px; color: white; background-color: rgb(45, 230, 28); }</style> ";
}

function realcaBotao() {

}

function voltaBotao() {
    
}
/*
const createDiv2 = document.createElement("div"); //informa o elemento que será criado
createDiv2.innerText = "123"; // atribui valor ao novo elemento.
const bodySelect2 = document.querySelector("body"); // informa dentro de onde o elemento será criado.
const selectBefore = bodySelect2.querySelector("h3"); // informa antes de qual elemento o novo elemento será criado. (before = antes)
bodySelect2.insertBefore(createDiv2, selectBefore); // insere (qual elemento, antes de qual elemento)
*/

//Abaixo, exemplo de como alterar o conteúdo que aparece na página e também o código HTML interno
//através do JS.

//const elementH3 = document.querySelector("h3");
//elementH3.innerHTML = "Conteúdo alterado <s>novamente</s>."

//na página, o novamente aparecerá com um ris