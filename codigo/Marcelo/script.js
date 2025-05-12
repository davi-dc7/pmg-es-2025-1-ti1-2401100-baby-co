document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const dados = {
        mae: document.getElementById("mae").value,
        nascimento_mae: document.getElementById("nascimento_mae").value,
        pai: document.getElementById("pai").value,
        nascimento_pai: document.getElementById("nascimento_pai").value,
    };

    // Salvando como JSON em localStorage
    localStorage.setItem("cadastroPais", JSON.stringify(dados));

    alert("Cadastro salvo com sucesso!");
});