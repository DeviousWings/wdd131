import recipes from "./recipes.mjs";

/**
 * Generates a random number between 0 and num (exclusive)
 * @param {number} num - The upper limit (not inclusive)
 * @returns {number} A random integer
 */
function random(num) {
    return Math.floor(Math.random() * num);
}

/**
 * Selects and returns a random recipe from the imported list
 * @returns {object} A random recipe object
 */
function getRandomListEntry(list) {
    return list[random(list.length)];
}

/**
 * Generates HTML for the recipe tags
 * @param {Array} tags - Array of tag strings
 * @returns {string} HTML string for tags
 */
function tagsTemplate(tags) {
    return `<ul class="recipe__tags">
        ${tags.map(tag => `<li>${tag}</li>`).join("")}
    </ul>`;
}

/**
 * Generates HTML for the star rating
 * @param {number} rating - The rating out of 5
 * @returns {string} HTML string for star ratings
 */
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 0; i < 5; i++) {
        html += i < rating
            ? `<span aria-hidden="true" class="icon-star">⭐</span>`
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }

    html += `</span>`;
    return html;
}

/**
 * Generates the HTML template for a recipe
 * @param {object} recipe - The recipe object
 * @returns {string} HTML string for displaying the recipe
 */
function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="Image of ${recipe.name}" />
        <figcaption>
            ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
            ${ratingTemplate(recipe.rating)}
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

/**
 * Renders a list of recipes into the output element.
 * @param {Array} recipeList - Array of recipe objects
 */
function renderRecipes(recipeList) {
    const container = document.getElementById("recipe-display");
    
    // If no recipes match the search, display a "No results found" message
    if (recipeList.length === 0) {
        container.innerHTML = `<p class="no-results">No results found. Try a different search term.</p>`;
    } else {
        // Convert all recipe objects into HTML and set innerHTML
        container.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");
    }
}

/**
 * Filters recipes based on a search term.
 * @param {string} query - The user's input from the search bar
 */
function filterRecipes(query) {
    const lowerCaseQuery = query.toLowerCase();

    const filteredRecipes = recipes
        .filter(recipe =>
            recipe.name.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
        )
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

    renderRecipes(filteredRecipes);
}

/**
 * Handles the search form submission.
 * Prevents default behavior and filters recipes based on input.
 * @param {Event} event - The event object
 */
function searchHandler(event) {
    event.preventDefault(); // Prevent page refresh

    const searchInput = document.getElementById("search-bar").value.trim();
    if (searchInput) {
        filterRecipes(searchInput);
    } else {
        init(); // Reset to a random recipe if search is empty
    }
}

/**
 * Initializes the page with a random recipe and search functionality
 */
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]); // Convert single recipe object into an array

    // Attach event listener to search form
    document.getElementById("search-form").addEventListener("submit", searchHandler);
}

// Run init when the page loads
document.addEventListener("DOMContentLoaded", init);





// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.getElementById("recipe-display");

//     recipes.forEach(recipe => {
//         let stars = "";
//         for (let i = 0; i < 5; i++) {
//             stars += i < recipe.rating
//                 ? `<span aria-hidden="true" class="icon-star">⭐</span>`
//                 : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
//         }

//         const recipeCard = document.createElement("div");
//         recipeCard.classList.add("recipe-content");

//         recipeCard.innerHTML = `
//             <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
//             <div class="recipe-details">
//                 <h3>${recipe.name}</h3>
//                 <p><strong>Author:</strong> ${recipe.author}</p>
//                 <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
//                 <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">${stars}</span>
//                 <h4>Ingredients:</h4>
//                 <ul>
//                     ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join("")}
//                 </ul>
//                 <h4>Instructions:</h4>
//                 <ol>
//                     ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join("")}
//                 </ol>
//             </div>
//         `;

//         container.appendChild(recipeCard);
//     });
// });
