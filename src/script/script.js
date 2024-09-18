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