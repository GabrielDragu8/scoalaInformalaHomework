let inputSearch = (document.getElementById('search').value.trim()).toLowerCase();
let root = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
let container = document.getElementById('container');
let searchInput = document.getElementById('search');
let banner = document.getElementById('banner');


function createRecipeCard(recipe) {
  let recipeCard = document.createElement('div');
  let recipeImg = document.createElement('img');
  let recipeTitle = document.createElement('h3');
  let recipeButton = document.createElement('button');
  recipeCard.className = 'recipe-card';
  recipeButton.className = 'recipe-button';
  recipeImg.src = recipe.strMealThumb;
  recipeImg.className = 'recipe-image';
  recipeTitle.textContent = recipe.strMeal;
  recipeTitle.className = 'recipe-title';
  recipeButton.innerText = 'Get Recipe';
  
  recipeCard.appendChild(recipeImg);
  recipeCard.appendChild(recipeTitle);
  recipeCard.appendChild(recipeButton);
  container.appendChild(recipeCard);
}

function loadRecipes () {
  fetch(root + inputSearch, {
    method: 'GET',
  }).then(function(response) {
    return response.json();
  }).then(function(jsonResp) {
    console.log(jsonResp);
    container.innerHTML='';
    jsonResp.meals.forEach(function (recipe) {
      createRecipeCard(recipe);
    }); 
  }).catch(function() {
    alert('Please enter a valid ingredient');
  });
}

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    inputSearch = searchInput.value.trim().toLowerCase();
    loadRecipes();
  }
});

document.getElementById('search-glass').addEventListener('click', function() {
  inputSearch = searchInput.value.trim().toLowerCase();
  loadRecipes();
})

loadRecipes();


// i will work on this part

/*
function getRecipeInfo (id) {
  fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
    method: 'GET',
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    data.meals.forEach(function(recipe) {
      createRecipeBanner(recipe);
    });
  });
}
//

function createRecipeBanner(recipe) {
  let recipeBanner = document.createElement('div');
  recipeBanner.className = 'recipe-banner';
  let recipeTitleBanner = document.createElement('h2');
  recipeTitleBanner.className = 'recipe-title-banner';
  recipeTitleBanner.textContent = recipe.strMeal;
  let recipeSubTitleBanner = document.createElement('h3');
  recipeSubTitleBanner.className = 'recipe-subtitle-banner';
  recipeSubTitleBanner.textContent = 'Instructions:';
  let recipeInstructions = document.createElement('p');
  recipeInstructions.className = 'recipe-intructions';
  let recipeIngredient = document.createElement('span');
  recipeIngredient.className = 'recipe-ingredient';
  recipeIngredient.innerText = `${inputSearch}`;
  let recipeImageBanner = document.createElement(img);
  recipeImageBanner.className = 'recipe-image-banner';
  recipeImageBanner.src = recipe.strMealThumb;
  let recipeVideoAnchor = document.createElement('a');
  recipeVideoAnchor.innerText = 'Watch Video';
  recipeVideoAnchor.className = 'recipe-video-anchor';

  recipeBanner.appendChild(recipeTitleBanner);
  recipeBanner.appendChild(recipeIngredient);
  recipeBanner.appendChild(recipeSubTitleBanner);
  recipeBanner.appendChild(recipeInstructions);
  recipeBanner.appendChild(recipeImageBanner);
  recipeBanner.appendChild(recipeVideoAnchor);

  document.body.appendChild(recipeBanner);
}

banner.addEventListener('click', function(event) {
  if (event === 'click') {
    createRecipeBanner();
  }
})

getRecipeInfo();

*/