// Create basic structure
const h1 = document.createElement('h1');
h1.textContent = 'MyBookList';
document.body.appendChild(h1);

// Create form group div
const formDiv = document.createElement('div');
formDiv.className = 'form-group';
document.body.appendChild(formDiv);

// Input fields
const fields = [
  { id: 'title', placeholder: 'Title' },
  { id: 'author', placeholder: 'Author' },
  { id: 'isbn', placeholder: 'ISBN' }
];

fields.forEach(field => {
  const input = document.createElement('input');
  input.id = field.id;
  input.placeholder = field.placeholder;
  input.style.margin = '5px';
  formDiv.appendChild(input);
});

// Submit button
const submitBtn = document.createElement('button');
submitBtn.id = 'submit';
submitBtn.textContent = 'Submit';
submitBtn.style.margin = '5px';
formDiv.appendChild(submitBtn);

// Table
const table = document.createElement('table');
table.className = 'table table-striped';
table.style.width = '100%';
table.style.marginTop = '20px';
table.style.borderCollapse = 'collapse';
document.body.appendChild(table);

// Table Head
const thead = document.createElement('thead');
const headRow = document.createElement('tr');
['Title', 'Author', 'ISBN#', 'Action'].forEach(text => {
  const th = document.createElement('th');
  th.textContent = text;
  th.style.border = '1px solid black';
  th.style.padding = '8px';
  headRow.appendChild(th);
});
thead.appendChild(headRow);
table.appendChild(thead);

// Table Body
const tbody = document.createElement('tbody');
tbody.id = 'book-list';
table.appendChild(tbody);

// Submit Handler
submitBtn.addEventListener('click', function () {
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  if (!title || !author || !isbn) {
    alert('Please fill in all fields');
    return;
  }

  const row = document.createElement('tr');

  [title, author, isbn].forEach(val => {
    const td = document.createElement('td');
    td.textContent = val;
    td.style.border = '1px solid black';
    td.style.padding = '8px';
    row.appendChild(td);
  });

  // Delete button
  const actionTd = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.className = 'delete';
  delBtn.textContent = 'Clear';
  delBtn.style.backgroundColor = 'red';
  delBtn.style.color = 'white';
  delBtn.style.border = 'none';
  delBtn.style.padding = '5px 10px';
  delBtn.style.cursor = 'pointer';
  delBtn.onclick = () => row.remove();
  actionTd.appendChild(delBtn);
  actionTd.style.border = '1px solid black';
  actionTd.style.padding = '8px';
  row.appendChild(actionTd);

  tbody.appendChild(row);

  // Clear input fields
  fields.forEach(field => document.getElementById(field.id).value = '');
});
