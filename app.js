const input = document.getElementById('mainInput');
const ul = document.getElementById('myUl');
const addButton = document.getElementById('add');
const liList = document.getElementsByTagName('li');
const itemLeft = document.getElementsByClassName('todo-count')[0];
const liItems = document.getElementsByClassName('list');

function addItem() {
  if (input.value.length !== 0) {
    const li = document.createElement('li');
    li.setAttribute('class', 'list');
    const span = document.createElement('span');
    span.appendChild(document.createTextNode('  X'));
    span.setAttribute('class', 'remove');
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(span);
    ul.appendChild(li);
    input.value = '';
  } else {
    // alert('the input is empty, write something you wanna do please!!');
  }
  itemToBeDone();
}

function removeItem(e) {
  const el = e.target;
  let spanContainer;
  if (el.classList.contains('remove')) {
    spanContainer = el.parentNode;
    ul.removeChild(spanContainer);
  }
  itemToBeDone();
}

function checkItem(e) {
  const el = e.target;
  if (el.classList.contains('list')) {
    el.classList.toggle('check');
  }
  itemToBeDone();
}

function checkALL() {
  console.log(liItems);
  for (let i = 0; i < liItems.length; i++) {
    if (liItems[i].classList.contains('check')) {
      liItems[i].classList.remove('check');
    }
    liItems[i].classList.toggle('check');
  }
  itemToBeDone();
}

function itemToBeDone() {
  let counter = 0;
  for (let i = 0; i < liList.length; i++) {
    if (!liList[i].classList.contains('check')) {
      counter++;
    }
  }

  itemLeft.innerText = `${counter} item left`;
}

function activeItems() {
  for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.display = 'block';
    if (liItems[i].classList.contains('check')) {
      liItems[i].style.display = 'none';
    }
  }
}

function completedItems() {
  for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.display = 'block';
    if (!liItems[i].classList.contains('check')) {
      liItems[i].style.display = 'none';
    }
  }
}

function showAll() {
  for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.display = 'block';
  }
}

itemToBeDone();

ul.addEventListener('click', removeItem);
ul.addEventListener('click', checkItem);

addButton.addEventListener('click', () => {
  addItem();
});

document.body.onkeyup = e => {
  if (e.keyCode === 13) {
    addItem();
  }
};
