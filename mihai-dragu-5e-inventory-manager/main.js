/*
const container = document.querySelector('.items');

const loadItems = async () => {
  let uri = 'http://localhost:3000/items';
  const res = await fetch(uri);
  const items = await res.json();
  console.log(items);
  let template = '';
  items.forEach(item => {
    template += `
      <div class="item">
        <h2>${item.name}</h2>
        <p>${item.type}</p>
        <p>${item.subtype}</p>
        <p>${item.cost} GP</p>
        <p>${item.weight} lbs</p>
      </div>
    `
  });
  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => loadItems());
*/


let inputSearch = (document.getElementById('search').value.trim().toLowerCase());
let root = 'http://localhost:3000/items';
let itemsContainer = document.getElementById('itemsContainer');
let searchInput = document.getElementById('search');

const createItemCard = (item) => {
  let itemCard = document.createElement('div');
  let itemTitle = document.createElement('h3');
  let itemType = document.createElement('p');
  let itemCost = document.createElement('p');
  let itemWeight = document.createElement('p');
  let addButton = document.createElement('button');
  let infoButton = document.createElement('button');
  itemCard.className = 'item-card';
  itemTitle.className = 'item-title';
  itemType.className = 'item-type';
  itemCost.className = 'item-cost';
  itemWeight.className = 'item-weight';
  addButton.className = 'add-button';
  infoButton.className = 'info-button';
  addButton.innerText = 'Add';
  infoButton.innerText = 'More';
  itemTitle.textContent = item.name;
  itemType.textContent = item.type;
  itemCost.textContent = `${item.cost} GP`;
  itemWeight.textContent = `${item.weight} lbs`;
  
  itemCard.appendChild(itemTitle);
  itemCard.appendChild(itemType);
  itemCard.appendChild(itemCost);
  itemCard.appendChild(itemWeight);
  itemCard.appendChild(infoButton);
  itemCard.appendChild(addButton);
  itemsContainer.appendChild(itemCard);
}

const loadItems = async () => {
  let url = root + inputSearch;
  const res = await fetch(url);
  const items = await res.json();
  console.log(items);
  itemsContainer.innerHTML = '';
  items.forEach((item) => {
    createItemCard(item);
  });
}

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    inputSearch = searchInput.value.trim().toLowerCase();
    loadItems();
  }
});

document.getElementById('search-glass').addEventListener('click', function() {
  inputSearch = searchInput.value.trim().toLowerCase();
  loadItems();
})

loadItems();


const defaultSelectedSize = document.getElementById("size");
defaultSelectedSize.value = "medium";
const defaultSelectedMultiplier = document.getElementById("multiplier");
defaultSelectedMultiplier.value = "1";









const getSizeMultiplier = () => {
  let size = document.getElementById("size").value;
  let sizeMutiplier;
  if (size === "tiny") {
    sizeMutiplier = 0.25;
  } else if (size === "small") {
    sizeMutiplier = 0.5;
  } else if (size === "medium") {
    sizeMutiplier = 1;
  } else if (size === "large") {
    sizeMutiplier = 2;
  } else if (size === "huge") {
    sizeMutiplier = 4;
  } else if (size === "gargantuan") {
    sizeMutiplier = 8;
  }
  return sizeMutiplier;
};
getSizeMultiplier();

const getVariantMultiplier = () => {
  let multiplier = parseInt(document.getElementById('multiplier').value);
  let variantMultiplier = multiplier;
  return variantMultiplier;
}
getVariantMultiplier();

const calculateCarryingCapacity = () => {
  let strScore = parseInt(document.getElementById("strScore").value);
  let carryingcapacity = ((strScore * 15) * getSizeMultiplier() ) * getVariantMultiplier();
  console.log(`Your carrying capacity is ${carryingcapacity} lbs.`);
  return carryingcapacity;
}
calculateCarryingCapacity();

