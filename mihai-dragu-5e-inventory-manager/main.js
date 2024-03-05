
const updateCharacterName = () => {
  const name = document.querySelector('#name');
  const characterNameDisplay = document.querySelector('#characterNameDisplay');
  name.addEventListener('input',  () => {
    characterNameDisplay.textContent = name.value;
  });
}
updateCharacterName();

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
  //console.log(`Your carrying capacity is ${carryingcapacity} lbs.`);
  let maxCapacity = document.getElementById('maxCapacity');
  maxCapacity.innerText = carryingcapacity;
  return carryingcapacity;
}
calculateCarryingCapacity();

const calculateEncumberanceStatus = () => {
  const strScore = parseInt(document.querySelector('#strScore').value);
  const carryingCapacity = calculateCarryingCapacity();
  const currentLoad = parseFloat(document.querySelector('#totalWeight').textContent);
  let encumberanceStatus = document.querySelector('#encumberanceStatus');
  const fiveTimes = 5 * strScore;
  if (currentLoad <= carryingCapacity ) {
    encumberanceStatus.innerText = 'not encumbered';
  } else if ( currentLoad > carryingCapacity && currentLoad <= (carryingCapacity + fiveTimes)) {
    encumberanceStatus.innerText = 'encumbered';
  } else if ( currentLoad > (carryingCapacity + fiveTimes) && currentLoad <= (carryingCapacity + (2* fiveTimes))) {
    encumberanceStatus.innerText = 'heavily encumbered';
  } else if ( currentLoad > (carryingCapacity + (2* fiveTimes))) {
    encumberanceStatus.innerText = 'imobile';
  }
};


const checkEncumberanceStatus = () => {
  calculateEncumberanceStatus();
};

setInterval(checkEncumberanceStatus, 1000);

let inputSearch = (document.getElementById('search').value.trim()).toLowerCase();
let root = 'http://localhost:3000/items';
let noFilter = '';
let searchWeapons = '?type=Weapon';
let searchArmor = '?type=Armor';
let searchAdventuringGear = '?type=Adventuring%20Gear';
const filterSelection = document.getElementById('filter-select');
let itemShop = document.getElementById('itemShop');
let searchInput = document.getElementById('search');
let selectedFilter = ''; 


const createItemCards = (item) => {
  let itemCard = document.createElement('div');
  let itemTitle = document.createElement('h3');
  let itemType = document.createElement('p');
  let itemCost = document.createElement('p');
  let itemWeight = document.createElement('p');
  let itemSubType = document.createElement('p');
  let buttonsContainer = document.createElement('div');
  let showInfoButton = document.createElement('button');
  showInfoButton.addEventListener('click', () => {
    showModal(item);
  });
  let addItemButton = document.createElement('button');
  addItemButton.addEventListener('click', () => {
    addItem(item);
});
  

  itemCard.className = 'item-card';
  itemTitle.className = 'item-title';
  itemType.className = 'item-type';
  itemCost.className = 'item-cost';
  itemWeight.className = 'item-weight';
  showInfoButton.className = 'show-information-button';
  addItemButton.className = 'add-item-button';
  buttonsContainer.className ='buttons-container';

  itemSubType.textContent = `${item.subtype}`;
  itemTitle.textContent = `${item.name}`;
  itemType.textContent = `Type: ${item.type}`;
  itemCost.textContent = `Cost: ${item.cost} GP`;
  itemWeight.textContent = `Weight: ${item.weight} lbs`;
  showInfoButton.innerText = 'Show Info';

  addItemButton.innerText = 'Add';
  
  itemCard.appendChild(itemTitle);
  itemCard.appendChild(itemType);
  itemCard.appendChild(itemCost);
  itemCard.appendChild(itemWeight);
  
  itemCard.appendChild(buttonsContainer);
  buttonsContainer.appendChild(showInfoButton);
  buttonsContainer.appendChild(addItemButton);
  itemShop.appendChild(itemCard);
}

const loadItems = async (filter, search) => {
  try {
    let url = root;
    if (filter === 'Weapon' || filter === 'Armor' || filter === 'Adventuring Gear') {
      url += `?type=${encodeURIComponent(filter)}`;
      console.log(filter);
    } else if (filter === 'Miscellaneous' || filter === 'Ammunition' || filter === "Artisan's tools" || filter === 'Tools' || filter === 'Musical instrument') {
      url += `?subtype=${encodeURIComponent(filter)}`;
      console.log(filter);
    }
    const response = await fetch(url);
    let data = await response.json();
    
    if (search) {
      data = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    console.log(data); 
    itemShop.innerHTML = '';
    data.forEach(item => {
      createItemCards(item);
    });
  } catch (error) {
    console.error('Error loading items:', error);
    alert('Error loading items.');
  }
};

searchInput.addEventListener('input', () => {
  const search = searchInput.value.trim().toLowerCase();
  const selectedFilter = filterSelection.value;

  loadItems(selectedFilter, search);
});

document.getElementById('search-glass').addEventListener('click', () => {
  const search = searchInput.value.trim().toLowerCase();
  const selectedFilter = filterSelection.value;
  loadItems(selectedFilter, search);
});

filterSelection.addEventListener('change', () => {
  const selectedFilter = filterSelection.value;
  const search = searchInput.value.trim().toLowerCase();
  loadItems(selectedFilter, search);
});
loadItems('', '');

// modal

const showModal = (item) => {
    let modalCard = document.createElement('dialog');
    let itemTitle = document.createElement('h2');
    let itemType = document.createElement('p');
    let itemSubType = document.createElement('p');
    let itemCost = document.createElement('p');
    let itemWeight = document.createElement('p');
    let addItemButton = document.createElement('button');
    let closeButton = document.createElement('button');
    let buttonsContainer = document.createElement('div');

    modalCard.className = 'modal-card';
    itemTitle.className = 'item-title';
    itemType.className = 'item-type';
    itemSubType.className = 'item-type';
    itemCost.className = 'item-cost';
    itemWeight.className = 'item-weight';
    addItemButton.className = 'add-item-button';
    addItemButton.addEventListener('click', () => {
      addItem(item);
    });
    closeButton.className = 'close-button';
    buttonsContainer.className ='buttons-container-modal';

    itemTitle.textContent = `${item.name}`;
    itemType.textContent = `Type: ${item.type}`;
    itemSubType.textContent = `Sub-type: ${item.subtype}`;
    itemCost.textContent = `Cost: ${item.cost} GP`;
    itemWeight.textContent = `Weight: ${item.weight} lbs`;
    addItemButton.innerText = 'Add';
    closeButton.innerText = 'X';
    modalCard.innerHTML = '';
    modalCard.appendChild(itemTitle);
    modalCard.appendChild(itemType);
    modalCard.appendChild(itemSubType);
    modalCard.appendChild(itemCost);
    modalCard.appendChild(itemWeight);
    
    if (item.type === 'Armor') {
      let armorClass = document.createElement('p');
      let armorStrReq = document.createElement('p');
      let armorStealth = document.createElement('p');
      armorClass.textContent = `AC: ${item.armorClass}`;
      armorStrReq.textContent = `Strenght requirement: ${item.strenghtReq}`;
      armorStealth.textContent = `Stealth disadvantage: ${item.stealthDisAdv}`; 
      modalCard.appendChild(armorClass);
      modalCard.appendChild(armorStrReq);
      modalCard.appendChild(armorStealth);
      
    } else if (item.type === 'Weapon') {
      let weaponDmg = document.createElement('p');
      let weaponDmgType = document.createElement('p');
      let weaponRange = document.createElement('p');
      let weaponProperties = document.createElement('p');
      weaponDmg.textContent = `Damage die: ${item.damage}`;
      weaponDmgType.textContent = `Damage type: ${item["damage-type"]}`;
      weaponRange.textContent = `Range: ${item.range}`;
      weaponProperties.textContent = `Properties: ${item.properties}`;
      modalCard.appendChild(weaponDmg);
      modalCard.appendChild(weaponDmgType);
      modalCard.appendChild(weaponRange);
      modalCard.appendChild(weaponProperties);
    } else if (item.type === 'Adventuring Gear') {
      let itemDescription = document.createElement('p');
      itemDescription.textContent = `Description: ${item.description}`;
      modalCard.appendChild(itemDescription);
    } else if (item.subtype === 'Miscellaneous') {
      let itemDescription = document.createElement('p');
      itemDescription.textContent = `Description: ${item.description}`;
      modalCard.appendChild(itemDescription);
    } else if (item.subtype === 'Ammunition') {
      let itemDescription = document.createElement('p');
      itemDescription.textContent = `Description: ${item.description}`;
      modalCard.appendChild(itemDescription);
    } else if (item.subtype === 'Tools') {
      let itemDescription = document.createElement('p');
      itemDescription.textContent = `Description: ${item.description}`;
      modalCard.appendChild(itemDescription);
    } else if (item.subtype === "Artisan's tools") {
      let itemDescription = document.createElement('p');
      itemDescription.textContent = `Description: ${item.description}`;
      modalCard.appendChild(itemDescription);
    } else if (item.subtype === 'Musical instrument') {
      let itemDescription = document.createElement('p');
      itemDescription.textContent = `Description: ${item.description}`;
      modalCard.appendChild(itemDescription);
    } else {
      console.log('nu merge');
    }

    modalCard.appendChild(buttonsContainer);
    buttonsContainer.appendChild(addItemButton);
    buttonsContainer.appendChild(closeButton);
    

    document.body.appendChild(modalCard);
    modalCard.showModal();

    closeButton.addEventListener('click', () => {
      modalCard.close();
    });
};

// inventory

let inventory = [];
let totalWeight = 0;

const addItem = (item) => {
  const existingItem = inventory.find(invItem => invItem.id === item.id);
  if (existingItem) {
    existingItem.qty++;
  } else {
    inventory.push({ ... item, qty: 1});
  }

  updateInventory();
}

const removeItem = (itemToRemove) => {
  inventory = inventory.filter(item => item !== itemToRemove);
};

const updateInventory = () => {
  const inventoryContainer = document.getElementById('inventory');
  inventoryContainer.innerHTML = '';

  let totalWeight = 0;
  let totalValue = 0;

  inventory.forEach(item => {
    let itemCard = document.createElement('div');
    itemCard.className = 'inventory-item';

    let itemName = document.createElement('p');
    itemName.className = 'inventory-item-title';
    

    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'plus-minus-containter';

    if (item.qty > 1 ) {
      itemName.textContent = `${item.name} (Qty: ${item.qty})`;
    } else {
      itemName.textContent = `${item.name}`;
    }
    
    let itemWeight = document.createElement('p');
    itemWeight.className = 'inventory-item-weight';
    let itemTotalWeight = item.weight * item.qty;
    let itemTotalValue = item.cost * item.qty;
    itemWeight.textContent = `Weight: ${itemTotalWeight} lbs | Value: ${itemTotalValue} GP`;

    let incrementButton = document.createElement('button');
    incrementButton.className = 'increment-button';
    incrementButton.innerText = '+';
    incrementButton.addEventListener('click', () => {
      item.qty++;
      updateInventory();
    });

    let decrementButton = document.createElement('button');
    decrementButton.className = 'decrement-button';
    decrementButton.innerText = '-';
    decrementButton.addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        removeItem(item);
      }
      updateInventory();
    });

    let infoButton = document.createElement('button');
    infoButton.className = 'inventory-info-button';
    infoButton.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
    infoButton.addEventListener('click', () => {
      showModal(item);
    });

    let removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => {
      removeItem(item);
      updateInventory();
    });
    buttonsContainer.appendChild(incrementButton);
    buttonsContainer.appendChild(decrementButton);
    buttonsContainer.appendChild(infoButton);
    itemCard.appendChild(itemName);
    itemCard.appendChild(buttonsContainer);
    itemCard.appendChild(itemWeight);
    

    itemCard.appendChild(removeButton);
    inventoryContainer.appendChild(itemCard);

    totalWeight += itemTotalWeight;
    totalValue += itemTotalValue;
  });

  updateTotalQuantity(totalWeight);
  updateTotalValue(totalValue);
}

const updateTotalQuantity = (totalWeight) => {
  let totalQty = 0;
  inventory.forEach(item => {
    totalQty += item.qty;
  });

  document.getElementById('totalQuantity').textContent = totalQty;
  document.getElementById('totalWeight').textContent = parseFloat(totalWeight).toFixed(2);
}

const updateTotalValue = (totalValue) => {
  document.querySelector('#totalValue').textContent = parseFloat(totalValue).toFixed(2);
}



