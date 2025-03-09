import recipes from "./recipes.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("recipes-container");

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Creating rating stars dynamically
        let stars = "";
        for (let i = 0; i < 5; i++) {
            stars += i < recipe.rating
                ? `<span aria-hidden="true" class="icon-star">⭐</span>`
                : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }

        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p><strong>Author:</strong> ${recipe.author}</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">${stars}</span>
            <h4>Ingredients:</h4>
            <ul>
                ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join("")}
            </ul>
            <h4>Instructions:</h4>
            <ol>
                ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join("")}
            </ol>
        `;

        container.appendChild(recipeCard);
    });

    // Search feature
    document.getElementById("search-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const query = document.getElementById("search-bar").value.toLowerCase();
        container.innerHTML = "";
        
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        );

        if (filteredRecipes.length === 0) {
            container.innerHTML = `<p>No recipes found.</p>`;
        } else {
            filteredRecipes.forEach(recipe => {
                const recipeCard = document.createElement("div");
                recipeCard.classList.add("recipe-card");
                let stars = "";
                for (let i = 0; i < 5; i++) {
                    stars += i < recipe.rating
                        ? `<span aria-hidden="true" class="icon-star">⭐</span>`
                        : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
                }
                recipeCard.innerHTML = `
                    <h3>${recipe.name}</h3>
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <p><strong>Author:</strong> ${recipe.author}</p>
                    <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
                    <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">${stars}</span>
                `;
                container.appendChild(recipeCard);
            });
        }
    });
});
