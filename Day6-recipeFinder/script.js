document.addEventListener('DOMContentLoaded', () => {
    // Elements from the DOM
    const searchBox = document.getElementById('search-box'); // Input box for search queries
    const searchBtn = document.getElementById('search-btn'); // Button to trigger the search
    const recipeContainer = document.querySelector('.recipe-container'); // Container to display search results
    const title = document.getElementById('title'); // Title element to display status messages

    // Function to search for recipes based on the query
    const searchElement = async (query) => {
        try {
            // Clear previous results and update the title
            recipeContainer.innerHTML = "";
            title.innerText = "Finding recipe...";

            // Fetch data from the API
            const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await resp.json();
            
            // Update the title after fetching data
            title.innerText = "Your Result";

            // Iterate over the fetched meals and create HTML for each one
            data.meals.forEach(element => {
                const div = document.createElement('div');
                div.classList.add('meals-info'); // Add a class for styling
                div.innerHTML = `
                    <img src="${element.strMealThumb}" alt="${element.strMeal}">
                    <h3>Name: ${element.strMeal}</h3>
                    <h3>Category: ${element.strCategory}</h3>
                    <h3>Area: ${element.strArea}</h3>
                    <button class="recipeButton" data-id="${element.idMeal}">View Recipe</button>
                `;
                recipeContainer.appendChild(div); // Add the new element to the recipe container
            });

            // Add event listeners to "View Recipe" buttons
            document.querySelectorAll('.recipeButton').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.dataset.id; // Get the ID of the selected recipe
                    localStorage.setItem('selectedRecipeId', id); // Save the ID to localStorage
                    window.open(`recipe-details.html?id=${id}`, '_blank'); // Open the details page in a new tab
                });
            });
        } catch (error) {
            // Handle errors and update the title
            title.innerText = "Error Finding the recipe";
        }
    };

    // Add an event listener to the search button
    searchBtn.addEventListener('click', () => {
        const searchedItem = searchBox.value.trim(); // Get and trim the search query
        if (searchedItem) {
            searchElement(searchedItem); // Call the search function with the query
        } else {
            title.innerText = "Please enter a search term."; // Prompt user to enter a search term
        }
    });
});
