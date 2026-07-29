const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");
const anoAtual = document.getElementById("anoAtual");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("menu-aberto");

        const menuEstaAberto = menu.classList.contains("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
        botaoMenu.textContent = menuEstaAberto ? "✕" : "☰";
    });
}

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}