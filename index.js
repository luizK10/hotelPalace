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
    element.innerHTML = `<b>Instalados no município de Dionísio Cerqueira, oferecemos serviços de hospedagem há 20 anos.</b>
    <div><br></div>
    <b>Visão:</b> Ser a melhor opção de hospedagem da região da tŕiplice fronteira para clientes que buscam repouso confortável com simplicidade e excelente relação entre custo e benefício.
    <div><br></div>
    <b>Missão:</b> Oferecer serviços de hospedagem com atendimento rápido, simples e sem burocracia prezando pelo bom atendimento, higiene e conforto com preços acessíveis. <br> <br>
    <div><br></div>
    <b>Valores:</b> Honestidade; Simplicidade; Tradição; Prestatividade e Liberdade.

    <style>
        .textoConteudo {
            display: flex;
            text-align: justify;
            margin-left: 30px;
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(58, 80, 145);
            font-size: 16px;
            flex-direction: column;
            height: 90%;
            width: 90%;
        };
        </style>`;
    element2.innerHTML = 
        `<style> 
            .containerConteudoMenuDireito { 
                display: flex; 
                justify-content: center; 
                height: 100%; 
                width: 50%; 
                border-radius: 5px 5px 10px 10px; 
            } 
        </style> 
            <figure> 
                <img loading='lazy' class='imgContainerConteudo' src='./fundoQuemSomos.jpg' alt=''> 
                    <style> 
                        .imgContainerConteudo { 
                            justify-content: center; 
                            height: 100%; 
                            width: 100%; 
                            border-radius: 5px 5px 10px 10px; 
                        } 
                    </style>`;
}

function painelServicos() {
    const element = document.getElementsByClassName("textoConteudo")[0];
    const element2 = document.getElementsByClassName("containerConteudoMenuDireito")[0];
    element.innerHTML = `Oferecemos serviço de hospedagem com quartos individuais e coletivos; 
                        <div><br></div>
                        Possuímos uma cozinha bem equipada para quem deseja preparar 
                        pequenos pratos, porém não oferecemos alimentação;
                        <div><br></div> 
                        Possuímos quartos com banheiro e quartos com banheiros compartilhados; 
                        <div><br></div>
                        Realizamos a limpeza do quarto e troca de toalhas uma vez ao dia.
                        <style>
                            .textoConteudo {
                                margin: 20px;
                                font-family: Arial, Helvetica, sans-serif;
                                color: rgb(58, 80, 145);
                                font-size: 17px;
                                flex-direction: column;
                                display: flex;
                                height: 90%;
                                width: 90%;
                            };
                        </style>`

    element2.innerHTML = `<style> 
                        .containerConteudoMenuDireito { 
                            display: flex; 
                            justify-content: center; 
                            height: 100%; 
                            width: 50%; 
                            border-radius: 5px 5px 10px 10px; 
                        } 
                        </style> 
                            <figure> 
                            <img loading='lazy' class='imgContainerConteudo' src='./recepcao2.jpeg' alt=''> 
                            <style> 
                                .imgContainerConteudo { 
                                    justify-content: center; 
                                    height: 100%; 
                                    width: 100%; 
                                    border-radius: 5px 5px 10px 10px; 
                                } 
                            </style>`;
}

function painelQuartos() {
    const element = document.getElementsByClassName("textoConteudo")[0];
    /*const element2 = document.getElementsByClassName("containerConteudoMenuDireito")[0];*/
    element.innerHTML = 
        `<div class="quartosSuperior">
            <div class="quartos">
                <img class="quartosFotos" src="./quarto3.jpeg" alt="">CASAL + SOLTEIRO
            </div>
            <div class="quartos">
                <img class="quartosFotos" src="./quarto2.jpeg" alt="">1 CASAL / 2 SOLTEIROS
            </div>
            <div class="quartos">
                <img class="quartosFotos" src="./quarto4.jpeg" alt="">CASAL
            </div>
        </div>
        <div class="quartosInferior">
            <div class="quartos">
                <img class="quartosFotos" src="./quarto5.jpeg" alt="">2 SOLTEIROS
            </div>
            <div class="quartos">
                <img class="quartosFotos" src="./quarto6.jpeg" alt="">1 SOLTEIRO        
            </div>
            <div class="quartos">
                <img class="quartosFotos" src="./quarto7.jpeg" alt="">WC COMPARTILHADO
            </div>
        </div>
    <style>
        .textoConteudo {
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(58, 80, 145);
            font-size: 17px;
            flex-direction: column;
            display: flex;
            height: 100%;
            width: 100%;
            background-color: rgb(82, 196, 177);
            border-radius: 40px 5px 10px 0px;
        };

        .containerConteudoMenuEsquerdo {
            margin: 0px;
            display: flex;
            height: 308px;
            width: 50%;
            border-radius: 40px 5px 10px 0px;
            background: linear-gradient(to right, rgb(196, 206, 204), rgb(82, 196, 177));
        }
        .quartos {
            display: flex;
            margin: 1px;
            font-family: 'Paytone One', sans-serif;
            font-size: 14px;
            flex-direction: column;
            justify-content: center;
            height: 95%;
            width: 33%;
            border-style: solid;
            border-radius: 40px 0px 25px 0px;
            border-color: white;
            text-indent: 5px;
            
        }
        .quartosSuperior {
            display: flex;
            height: 100%;
            width: 100%;
            
        }
        .quartosInferior {
            display: flex;
            height: 100%;
            width: 100%;
            
        }
        .quartosFotos {
            display: flex;
            border-radius: 40px 0px 25px 0px;
            height: 100%;
            width: 100%;
        }
    </style>` 
}

function painelLocalizacao() {
    const element = document.getElementsByClassName("textoConteudo")[0];
    const element2 = document.getElementsByClassName("containerConteudoMenuDireito")[0];
    element.innerHTML = `Localizados no Município de Dionísio Cerqueira - SC.
                        <div><br></div>
                        Rua 7 de Setembro, 809 - Centro - CEP 89.950-000
                        <div><br></div>
                        <b>Contato: (049) 3644-1748</b>
                        <div><br></div>
                        O mapa ao lado é interativo e você pode utilizá-lo para navegar 
                        e encontrar nossa localização com facilidade.
                        <style>
                            .textoConteudo {
                                margin: 20px;
                                font-family: Arial, Helvetica, sans-serif;
                                color: rgb(58, 80, 145);
                                font-size: 17px;
                                flex-direction: column;
                                display: flex;
                                height: 90%;
                                width: 90%;
                        };
                        </style>`;

    element2.innerHTML = `<style> 
                        .containerConteudoMenuDireito { 
                            display: flex; 
                            justify-content: center; 
                            height: 100%; 
                            width: 90%; 
                            border-radius: 5px 5px 10px 10px; 
                            } 
                            </style> 
                                <div class='imgContainerConteudo'> 
                                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22074.
                                    165904102723!2d-53.64712927142808!3d-26.250902165446142!2m3!1f0!2f0!3f0!3
                                    m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fa7732635a7739%3A0x46a188c9ff26275f!
                                    2sPalace%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1661186036001!5m2!1spt-BR!2sbr' 
                                    width='700px' height='310px' style='border:0; border-radius:5px;' allowfu
                                    llscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'> 
                                </div>`;
}

function painelReserva() {
    const element = document.getElementsByClassName("textoConteudo")[0];
    const element2 = document.getElementsByClassName("containerConteudoMenuDireito")[0];
    element.innerHTML = `Nossas reservas são feitas por de contato telefônico pelo número:
                        <div><br></div> 
                        <b>(049) 3644-1748.</b>
                        <div><br></div>
                        Você pode entrar em contato 
                        pelo whatsapp no número: 
                        <div><br></div>
                        <b>(049) 99159-6632.</b>
                        <div><br></div>
                        Ou click no botão ao lado para iniciar o whatsapp automaticamente.
                        <style>
                            .textoConteudo {
                                margin: 20px;
                                font-family: Arial, Helvetica, sans-serif;
                                color: rgb(58, 80, 145);
                                font-size: 17px;
                                flex-direction: column;
                                display: flex;
                                height: 90%;
                                width: 90%;
                            };
                        </style>`;

    element2.innerHTML = `<style> 
                        .containerConteudoMenuDireito { 
                            display: flex; 
                            justify-content: 
                            center; background-color: 
                            rgb(82, 196, 177); center; 
                            height: 100%; width: 90%; 
                            border-radius: 90px 90px 10px 90px } 
                        </style> 
                            <a href='https://api.whatsapp.com/send?phone=5549991596632&text=Ol%C3%A1.%20Gostaria%20de%20fazer%20uma%20reserva.'>
                            <input class='contato' type='button' value='Whatsapp'> 
                                <style> 
                                .contato {  
                                    margin-top: 50px; 
                                    cursor: pointer; 
                                    border-style: solid;
                                    border-color: white; 
                                    border-radius: 50% 50% 50% 2%;
                                    font-size: 40px; 
                                    height: 200px; 
                                    width: 200px; 
                                    color: white;
                                background-color: rgb(45, 230, 28); 
                                }
                                </style> `;
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