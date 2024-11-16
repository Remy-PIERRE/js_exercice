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

function handleFruitAdd() {
  document
    .querySelector("#formFruitAdd")
    .addEventListener("submit", handleFormFruitAddSubmit);

  function handleFormFruitAddSubmit(event) {
    event.preventDefault();

    const value = event.target.querySelector("#inputFruitName").value.trim();

    if (!value) {
      return console.log(
        "Veuillez entrer le nom d'un fruit pour valider ce formulaire"
      );
    }

    // createFruitRowFromNothing(value);
    createFruitRowFromTemplate(value);

    event.target.querySelector("#inputFruitName").value = "";
  }

  function createFruitRowFromNothing(value) {
    const row = document.createElement("tr");

    const cellName = document.createElement("td");
    cellName.innerText = value;

    const cellAction = document.createElement("td");

    const button = document.createElement("button");
    button.className = "btn--delete";

    const img = document.createElement("img");
    img.src = "./public/poubelle.png";
    img.alt =
      "Un icône poubelle pour le bouton permettant de supprimer un fruit";

    button.appendChild(img);
    cellAction.appendChild(button);
    row.appendChild(cellName);
    row.appendChild(cellAction);

    document.querySelector("tbody").appendChild(row);
  }

  function createFruitRowFromTemplate(value) {
    const template = document.querySelector("#templateFruitRow");
    const clone = template.content.cloneNode(true);

    clone.querySelector("td").innerText = value;

    clone
      .querySelector("button")
      .addEventListener("click", handleFruitButtonClick);

    document.querySelector("tbody").appendChild(clone);
  }

  function handleFruitButtonClick(event) {
    const row = event.target.closest("tr");
    row.remove();
  }
}

handleFruitAdd();
