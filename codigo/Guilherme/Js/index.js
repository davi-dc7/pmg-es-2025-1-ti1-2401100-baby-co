// ----- Navegação entre seções -----
const navItems = document.querySelectorAll('.nav_info');
const sideContent = document.querySelectorAll('.side > div');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');


    sideContent.forEach(div => {
      div.style.display = 'none';
    });

 
    const targetDiv = document.querySelector(`.${target}`);
    if (targetDiv) {
      targetDiv.style.display = 'block';
    }

  
    navItems.forEach(nav => {
      nav.style.backgroundColor = '';
      nav.style.color = '';
    });
    item.style.backgroundColor = '#004F44';
    item.style.color = '#fff';
  });
});

// Ativa a primeira aba ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  if (navItems.length > 0) {
    navItems[0].click();
  }

  // ----- Cadastro de dados do bebê -----
  const form = document.getElementById("formCadastro");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const peso = document.getElementById("peso").value;
      const idade = document.getElementById("idade").value;

      const dados = {
        peso: parseFloat(peso),
        idade: parseInt(idade)
      };

      try {
        const response = await fetch("http://localhost:3000/dadosBebe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dados)
        });

        if (response.ok) {
          alert("Dados cadastrados com sucesso!");
          form.reset();
        } else {
          alert("Erro ao cadastrar os dados.");
        }
      } catch (error) {
        console.error("Erro:", error);
        alert("Erro de conexão com o servidor.");
      }
    });
  }
});
