document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const nascimento = document.getElementById("nascimento").value;
  const sexo = document.querySelector('input[name="sexo"]:checked')?.value || "";
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const sangue = document.getElementById("sangue").value;

  const novoCadastro = {
    nome,
    nascimento,
    sexo,
    peso,
    altura,
    sangue
  };

  const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];


  cadastros.push(novoCadastro);


  localStorage.setItem("cadastros", JSON.stringify(cadastros));

  alert("Perfil salvo com sucesso!");

 
  e.target.reset();
});





document.getElementById("nascimento").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); 

  if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
  if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5, 9);

  e.target.value = value.slice(0, 10); 
});


document.getElementById("peso").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");

});

document.getElementById("altura").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");

});