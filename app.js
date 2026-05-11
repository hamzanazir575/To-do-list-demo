const input = document.querySelector('#tasks');
const btn = document.querySelector('#addBtn');
const ul = document.querySelector('#taskList');

function addTask() {
  const value = input.value.trim();
  if (!value) return;

  const span = document.createElement('span');
  span.textContent = value;
  const newListItem = document.createElement('li');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('delete-btn');

  newListItem.appendChild(span);
  newListItem.appendChild(deleteBtn);
  ul.appendChild(newListItem);

  input.value = '';
}

btn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  } else {
    const li = e.target.closest('li');
    if (li) {
      li.querySelector('span').classList.toggle('completed');
    }
  }
});
