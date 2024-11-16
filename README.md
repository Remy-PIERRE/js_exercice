# Exercice Javascript

## Liens utiles

[Exemple d'un reset CSS](https://www.joshwcomeau.com/css/custom-css-reset/)

## Objectif

Cette série d'exercices va permettre d'utiliser un ensemble de méthodes utiles à la manipulation du DOM, à la manipulation des collections (array && object).

## Mise en place du projet :

- créer un fichier <code>index.html</code> (raccourcis VSCode = <code>!</code>)

  - balise <code>head</code> :
    - balise <code>meta - charset</code> (déjà remplie via le raccourcis VSCode)
    - balise <code>meta - viewport</code> (déjà remplie via le raccourcis VSCode)
    - balise <code>title</code> et titre associé (ex: "Exercices HTML, CSS & JS")
    - balise <code>meta - description</code> et une description associée (ex: "Voici une série d'exercices me permettant d'améliorer ma pratique avec les langages HTML, CSS & Javascript")
  - balise <code>body</code> :
    - la laisser vide pour le moment

- créer un fichier <code>style.css</code>

  - lier le fichier CSS au fichier HTML via la balise <code>link - rel="stylesheet"</code> à placer dans <code>head</code>
  - y ajouter un reset css basique (cf liens utiles)

- créer un fichier <code>main.js</code>

  - lier le fichier JS au fichier HTML via la balise <code>script - src</code> à placer en bas de <code>body</code>
  - y ajouter une ligne <code>console.log("hello !");</code> pour s'assurer via la console du navigateur que les fichiers sont bien liés

- créer un dossier <code>public</code> dans lequel nous insererons les images liées au projet

## Manipulation du DOM avec Javascript

Nous allons commencer par ajouter la structure du fichier HTML via JS.

### HEADER

- créer une fonction <code>initHTML</code> puis appelez la à la fin de votre code JS
  - dans celle-ci ajouter les instructions permettant de :
    - créer les balises <code>header, form, input, button, img</code>
      - <code>header</code> : lui donner la classe "header--container"
      - <code>form</code> : lui donner l'id "formFruitAdd"
      - <code>input</code> : lui donner le type "text", l'id "inputFruitName", le placeholder "Ajoutez un fruit"
      - <code>button</code> : lui donner la class "btn--add", l'id "buttonFruitAdd"
      - <code>img</code>: lui donner le src "./public/ajouter.png", l'alt "Un icône ajouter pour le bouton permettant d'ajouter un fruit"
    - insérer les balises dans le DOM pour que les éléments soient organisés de la manière suivante :

```html
<body>
  <header>
    <form>
      <input />
      <button>
        <img />
      </button>
    </form>
  </header>
</body>
```

- ajouter les classes css dans le fichier .css :

  - le résultat attendu doit ressembler à ceci :

![image](./public/screen_header.png)

<details>
<summary>Voici un exemple CSS (click)</summary>

```css
/* HEADER */
.header--container {
  width: 100%;
  height: 80px;
  padding: 0 40px;
  background: #0c4a6e;
  display: flex;
  align-items: center;
}

.header--container form {
  display: flex;
  align-items: center;
  gap: 40px;
}

.header--container input {
  width: 280px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #333;
  border-radius: 4px;
}

.btn--add {
  height: 40px;
  width: 40px;
  padding: 0;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn--add img {
  width: 100%;
  height: auto;
  object-fit: fill;
}
```

</details>

### TABLE

Le tableau permettant d'afficher les fruits sera inséré directement dans le HTML.

- ajouter le code suivant dans la balise <code>body</code> :

<details>
<summary>Afficher le code HTML :</summary>

```html
<table class="table--container">
  <thead>
    <tr>
      <td>Nom</td>
      <td>Action</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cerise</td>
      <td>
        <button class="btn--delete">
          <img
            src="./public/poubelle.png"
            alt="Un icône poubelle pour le bouton permettant d'e supprimer un fruit"
          />
        </button>
      </td>
    </tr>
    <tr>
      <td>Pomme</td>
      <td>
        <button class="btn--delete">
          <img
            src="./public/poubelle.png"
            alt="Un icône poubelle pour le bouton permettant d'e supprimer un fruit"
          />
        </button>
      </td>
    </tr>
    <tr>
      <td>Framboise</td>
      <td>
        <button class="btn--delete">
          <img
            src="./public/poubelle.png"
            alt="Un icône poubelle pour le bouton permettant d'e supprimer un fruit"
          />
        </button>
      </td>
    </tr>
  </tbody>
</table>
```

</details>

<details>
<summary>Et le CSS associé :</summary>

```css
/* TABLE */
.table--container {
  width: calc(100% - 80px);
  margin: 40px;
  border-collapse: collapse;
}

.table--container thead {
  font-size: 16px;
  font-weight: bold;
}

.table--container thead tr {
  height: 40px;
}

.table--container tbody tr {
  height: 60px;
}

.table--container tbody tr:nth-child(odd) {
  background: #eee;
}

.table--container td {
  padding: 0 12px;
}

.btn--delete {
  height: 28px;
  width: 28px;
  padding: 0;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn--delete img {
  width: 100%;
  height: auto;
  object-fit: fill;
}
```

</details>

- Le résultat est il celui attendu ?
  - trouver une solution dans la fonction <code>initHTML</code> pour remettre les balises <code>header</code> & <code>table</code> dans le bon ordre.
