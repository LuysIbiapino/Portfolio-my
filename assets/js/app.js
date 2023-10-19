// Ativa o menu suspense
const burger = document.querySelector("#burger-menu");

// ativa a funcionalidade para abrir os links que estão no menu 
const ul = document.querySelector("nav ul");

// após click a tela é levada para o topo
const scrollUp = document.querySelector("#scroll-up");

// todos os Links então âncorados na classe "nav-link"
const navLink = document.querySelectorAll(".nav-link");

const submit = document.querySelector("submit-btn");

//Funcão do  menu suspense
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Fecha o  menu suspense após clicar em algum link
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Função de elevação ao topo da tela
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Funcao que emite um alerta quando o  botão submit é clicado
document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("contact-form").addEventListener("submit", ()=>{
    window.alert("Email Enviado Com Sucesso")
  }) 
})