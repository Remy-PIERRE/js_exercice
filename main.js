console.log("Hello !");

function initHTML() {
  const header = document.createElement("header");
  header.className = "header--container";

  const form = document.createElement("form");
  form.id = "formFruitAdd";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "inputFruitName";
  input.placeholder = "Ajoutez un fruit";

  const button = document.createElement("button");
  button.id = "buttonFruitAdd";
  button.className = "btn--add";

  const img = document.createElement("img");
  img.src = "./public/ajouter.png";
  img.alt = "Un icône ajouter pour le bouton permettant d'ajouter un fruit";

  button.appendChild(img);
  form.appendChild(input);
  form.appendChild(button);
  header.appendChild(form);

  const table = document.querySelector("table");
  document.body.insertBefore(header, table);
}

initHTML();
