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
    event.preventDefault(); // Impede a página de recarregar

    // Pega os valores digitados
    const descricao = document.querySelector("#desc").value;
    const valor = document.querySelector("#valor").value;

    // Cria um novo item de lista (LI)
    const li = document.createElement("li");
    li.innerHTML = `<span>${descricao}</span> <span>R$ ${valor}</span>`;
    
    // Adiciona o item na sua lista da tela principal
    listaTransacoes.appendChild(li);

    // Fecha a modal e limpa o formulário
    toggleModal();
    form.reset();

    //Código Funcionando
    //Para continuar revisando - https://www.devmedia.com.br/criando-form-de-contato-com-html5-css3-e-javascript/29415
});