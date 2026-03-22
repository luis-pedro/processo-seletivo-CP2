// 1. Selecionando os elementos
const btnNovaTransacao = document.querySelector("#add-btn");
const btnFecharModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const form = document.querySelector("#transacao-form");
const listaTransacoes = document.querySelector("#transacao-list");

// 2. Função que abre/fecha
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

// 3. Evento para abrir a modal ao clicar no botão principal
btnNovaTransacao.addEventListener("click", () => {
    toggleModal();
});

// 4. Evento para fechar ao clicar no X
[btnFecharModal, fade].forEach((elemento) => {
    elemento.addEventListener("click", () => toggleModal());
});

// 5. Lógica de Cadastrar e exibir na tela
form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // Pega os valores digitados (Adicionamos a categoria aqui)
    const descricao = document.querySelector("#desc").value;
    const valor = document.querySelector("#valor").value;
    const categoria = document.querySelector("#categoria").value;  // Nova linha
    const dataAtual = new Date().toLocaleDateString('pt-BR');      // Nova linha

    // Cria o novo item de lista
    const li = document.createElement("li");
    
    // IMPORTANTE
    li.className = "transacao-item"; 

    // Isso daqui faz ter 4 colunas ( a antiga não estava funcionando )
    li.innerHTML = `
        <span class="titulo">${descricao}</span>
        <span class="valor-entrada">R$ ${valor}</span>
        <span>${categoria}</span>
        <span>${dataAtual}</span>
    `;
    
    listaTransacoes.appendChild(li);

    toggleModal(); /*Não esquecer de adicionar o toggleModal porque se não a janela não fecha*/
    form.reset(); /*Limpa os Inputs do Formulário*/

    //Código Funcionando
    //Para continuar revisando - https://www.devmedia.com.br/criando-form-de-contato-com-html5-css3-e-javascript/29415
});