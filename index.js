function alteraCorBotao(button, cor) {
    const alteraCor = document.getElementById(button);
    alteraCor.style.backgroundColor = (cor);
    console.log(cor)
}

function retornaCorBotao(button, cor) {
    const retornaCor = document.getElementById(button);
    retornaCor.style.backgroundColor = (cor);
}

function home () {
    window.open("./index.html")
}

function painelQuemSomos() {
    const element = document.getElementsByClassName("containerConteudoMenu")[0];
        element.innerHTML = 
        `<div class="containerConteudoMenuEsquerdoQuemSomos">
        <b>Instalados no município de Dionísio Cerqueira, oferecemos serviços de hospedagem há 20 anos.</b>
        <div><br></div>
        <b>Visão:</b> Ser a melhor opção de hospedagem da região da tŕiplice fronteira para clientes que buscam repouso confortável com simplicidade e excelente relação entre custo e benefício.
        <div><br></div>
        <b>Missão:</b> Oferecer serviços de hospedagem com atendimento rápido, simples e sem burocracia prezando pelo bom atendimento, higiene e conforto com preços acessíveis. <br>
        <div><br></div>
        <b>Valores:</b> Honestidade; Simplicidade; Tradição; Prestatividade e Liberdade.
    </div>
    
    <div class="containerConteudoMenuDireitoQuemSomos">
        <img loading='lazy' class='imgContainerConteudoMenuDireitoQuemSomos' src='./fundoQuemSomos.jpg' alt=''>
    </div>`

};

function painelServicos() {
    const element = document.getElementsByClassName("containerConteudoMenu")[0];
    element.innerHTML = 
    `<div class="containerConteudoMenuEsquerdoServicos">
        Oferecemos serviço de hospedagem com quartos individuais e coletivos; 
        <div><br></div>
        Possuímos uma cozinha bem equipada para quem deseja preparar 
        pequenos pratos, porém não oferecemos alimentação;
        <div><br></div> 
        Possuímos quartos com banheiro e quartos com banheiros compartilhados; 
        <div><br></div>
        Realizamos a limpeza do quarto e troca de toalhas uma vez ao dia.
    </div>
    <div class="containerConteudoMenuDireitoServicos">
        <img loading='lazy' class='imgContainerConteudoMenuDireitoServicos' src='./euAmoDionisioCerqueira.jpg' alt=''>
    </div>`                        
}                        

function painelQuartos() {
    const element = document.getElementsByClassName("containerConteudoMenu")[0];
    element.innerHTML = 
        `<div class="containerQuartos">
            <div class="containerQuartosVertical">
                <div class="tituloQuartos"> <b> CASAL </b> </div>
                <div class="quarto1" onclick="clickQuarto('QuartoCasal')"> </div>
                <div class="tituloQuartos"> <b> CASAL + SOLTEIRO </b> </div>
                <div class="quarto2" onclick="clickQuarto('QuartoCasalSolteiro')"> </div>
            </div>

            <div class="containerQuartosVertical">
                <div class="tituloQuartos"> <b> CASAL + 2 SOLTEIROS </b> </div>
                <div class="quarto3" onclick="clickQuarto('QuartoCasal2Solteiros')"></div>
                <div class="tituloQuartos"> <b> 2 SOLTEIROS </b> </div>
                <div class="quarto4" onclick="clickQuarto('Quarto2Solteiros')"> </div>
            </div>

            <div class="containerQuartosVertical">
                <div class="tituloQuartos"> <b> 2 CASAL + SOLTEIRO </b> </div>
                <div class="quarto5" onclick="clickQuarto('Quarto2CasalSolteiro')"> </div>
                <div class="tituloQuartos"> <b> SOLTEIRO / WC COMPARTILHADO </b> </div>
                <div class="quarto6" onclick="clickQuarto('QuartoSolteiro')"></div>
            </div>

        </div>`;
}


function clickQuarto(quarto) {
    window.open(`./index${quarto}.html`,"nome","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=300,left=400,width=640,height=380");    
}

function painelLocalizacao() {
    const element = document.getElementsByClassName("containerConteudoMenu")[0];
    element.innerHTML = 
    `<div class="containerConteudoMenuEsquerdoLocalizacao">
        Localizados no Município de Dionísio Cerqueira - SC.
        <div><br></div>
        Rua 7 de Setembro, 809 - Centro - CEP 89.950-000
        <div><br></div>
        <b>Contato: (049) 3644-1748</b>
        <div><br></div>
        O mapa ao lado é interativo e você pode utilizá-lo para navegar 
        e encontrar nossa localização com facilidade.
    </div>
    
    <div class='imgContainerConteudoMenuDireitoLocalização'> 
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22074.
        165904102723!2d-53.64712927142808!3d-26.250902165446142!2m3!1f0!2f0!3f0!3
        m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fa7732635a7739%3A0x46a188c9ff26275f!
        2sPalace%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1661186036001!5m2!1spt-BR!2sbr' 
        width='700px' height='310px' style='border:0; border-radius:5px;' allowfu
        llscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'> 
    </div>`;
}

function painelReserva() {
    const element = document.getElementsByClassName("containerConteudoMenu")[0];
    element.innerHTML = 
    `<div class="containerConteudoMenuEsquerdoReserva">
        Nossas reservas são feitas por de contato telefônico pelo número:
        <div><br></div> 
        <b>(049) 3644-1748.</b>
        <div><br></div>
        Você pode entrar em contato 
        pelo whatsapp no número: 
        <div><br></div>
        <b>(049) 99159-6632.</b>
        <div><br></div>
        Ou click no botão ao lado para iniciar o whatsapp automaticamente.
    </div>
    
    <div class="containerConteudoMenuDireitoReserva">
        <a href='https://api.whatsapp.com/send?phone=5549991596632&text=Ol%C3%A1.%20Gostaria%20de%20fazer%20uma%20reserva.'>
        <input class='botaoContato' type='button' value='Whatsapp'>   
    </div>`;   
}

