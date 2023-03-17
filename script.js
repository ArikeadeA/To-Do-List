const newItem = document.getElementById('new-item');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new item to the list
function addItem() {
  if (newItem.value === '') {
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="item-text">${newItem.value}</span>
    <span>
      <button class="edit-btn">Edit</button>
      <button class="remove-btn">Remove</button>
    </span>
  `;
  todoList.appendChild(li);

  // Clear the input field after adding the item
  newItem.value = '';

  // Add event listeners to the edit and remove buttons for the new item
  const editBtn = li.querySelector('.edit-btn');
  const removeBtn = li.querySelector('.remove-btn');
  editBtn.addEventListener('click', editItem);
  removeBtn.addEventListener('click', removeItem);
}

// Function to edit an item in the list
function editItem(event) {
  const itemText = event.target.parentNode.parentNode.querySelector('.item-text');
  const newText = prompt('Edit item:', itemText.textContent);
  if (newText === null || newText === '') {
    return;
  }
  itemText.textContent = newText;
}

// Function to remove an item
