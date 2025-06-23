// script.js
// Adicione aqui interações extras, como animações suaves ou scroll automático

document.addEventListener("DOMContentLoaded", () => {
  const botaoWhatsApp = document.querySelector(".botao");

  botaoWhatsApp.addEventListener("mouseover", () => {
    botaoWhatsApp.style.transform = "scale(1.05)";
  });

  botaoWhatsApp.addEventListener("mouseout", () => {
    botaoWhatsApp.style.transform = "scale(1)";
  });
});

