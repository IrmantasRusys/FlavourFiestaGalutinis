import { getTime } from "./module.js";

/**
 * Filtruojame vietinio saugyklos raktus ir grąžiname tuos, kurie prasideda su "cookio-recipe".
 * @returns {Array<String>} -
 */
const getSavedRecipes = () => {
  return Object.keys(window.localStorage).filter((item) =>
    item.startsWith("cookio-recipe")
  );
};

/**
 * Sugeneruojame recepto kortelės HTML struktūrą.
 * @param {Object} recipe
 * @param {Number} index
 * @returns {HTMLElement}
 */
const createRecipeCard = (recipe, index) => {
  const { image, label: title, totalTime: cookingTime, uri } = recipe;
  const recipeId = uri.slice(uri.lastIndexOf("_") + 1);
  const isSaved = window.localStorage.getItem(`cookio-recipe${recipeId}`);

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.animationDelay = `${100 * index}ms`;

  card.innerHTML = `
    <figure class="card-media img-holder">
      <img src="${image}" width="195" height="195" loading="lazy" alt="${
    title ?? "Untitled"
  }" class="img-cover">
    </figure>

    <div class="card-body">
      <h3 class="title-small">
        <a href="./detail.html?recipe=${recipeId}" class="card-link">${
    title ?? "Untitled"
  }</a>
      </h3>

      <div class="meta-wrapper">
        <div class="meta-item">
          <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
          <span class="label-medium">${getTime(cookingTime).time || "<1"} ${
    getTime(cookingTime).timeUnit
  }</span>
        </div>

        <button class="icon-btn has-state ${
          isSaved ? "saved" : "removed"
        }" aria-label="Add to saved recipes" onclick="saveRecipe(this, '${recipeId}')">
          <span class="material-symbols-outlined bookmark-add" aria-hidden="true">bookmark_add</span>
          <span class="material-symbols-outlined bookmark" aria-hidden="true">bookmark</span>
        </button>
      </div>
    </div>
  `;

  return card;
};

/**
 * Rodo išsaugotus receptus arba pranešimą, jei nėra išsaugotų receptų.
 */
const renderSavedRecipes = () => {
  const savedRecipes = getSavedRecipes();
  const $savedRecipeContainer = document.querySelector(
    "[data-saved-recipe-container]"
  );

  $savedRecipeContainer.innerHTML = `<h2 class="headline-small section-title">All Saved Recipes</h2>`;

  const $gridList = document.createElement("div");
  $gridList.classList.add("grid-list");

  if (savedRecipes.length) {
    savedRecipes.forEach((savedRecipe, index) => {
      const recipe = JSON.parse(
        window.localStorage.getItem(savedRecipe)
      ).recipe;
      const $card = createRecipeCard(recipe, index);
      $gridList.appendChild($card);
    });
  } else {
    $savedRecipeContainer.innerHTML += `<p class="body-large">You don't saved any recipes yet!</p>`;
  }

  $savedRecipeContainer.appendChild($gridList);
};

renderSavedRecipes();
