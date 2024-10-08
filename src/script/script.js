// revelar senha 
var IconSenha = document.getElementById("view-password");
var inputPassword = document.getElementById("senha");

function RevelaSenha() {
    if (IconSenha.classList.contains("bi-eye")) {
        IconSenha.classList.replace("bi-eye", "bi-eye-slash");
        inputPassword.type = "text";
        console.log("Senha Revelada");
    } else if (IconSenha.classList.contains("bi-eye-slash")) {
        IconSenha.classList.replace("bi-eye-slash", "bi-eye");
        inputPassword.type = "password";
        console.log("Senha Oculta");
    } else {
        console.log("Erro: Invalid icon class.");
    }
}

// sitema de aba na home do vendedor
const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {

    // mudando botão clicado
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');


    // mudando página (aparece/desaparece)
    const contents = document.querySelectorAll('.content');

    contents.forEach(content => content.classList.remove('show'));

    const contentID = tab.getAttribute('content-id');
    const content = document.getElementById(contentID);

    content.classList.add('show');

    // mudando titulo
    document.title = contentID;

}

const VerificaPedido = document.getElementById("VerificaPedido");
const resume_order = document.getElementById("resume_order");
const CloseOrder = document.getElementById("close-view-order");

VerificaPedido.addEventListener("click", function () {
    // Ação a ser executada após o clique
    console.log("Verificação de pedido aberta");
    resume_order.style.top = "0";
});

CloseOrder.addEventListener("click", function () {
    // Ação a ser executada após o clique
    console.log("Verificação de pedido fechado");
    resume_order.style.top = "100vh";
});