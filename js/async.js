let randomUsers = [];
let userCard = '';

const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=20');
  const json = await response.json();
  const users = json.results;

  users.map(user => {
    const { name, cell, email, picture } = user;
    let objectUser = {
      "name": `${capitalize(name.first)} ${capitalize(name.last)}`,
      "cell": cell,
      "email": email,
      "picture": picture.large,
      "smallPicture": picture.thumbnail
    }
    randomUsers.push(objectUser);
  });
  
  createUserCard();

  const listUsers = document.querySelectorAll(".user__container__card");

  function displayDataUsers() {
    this.childNodes[5].classList.toggle('hidden');
    this.childNodes[3].childNodes[5].classList.toggle('open');
  }

  listUsers.forEach(click => click.addEventListener('click', displayDataUsers));
}

fetchUsers();

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function createUserCard() {
  randomUsers.map(randomUser => {
    const { name, cell, email, picture, smallPicture } = randomUser;
    
    const usersList = document.querySelector(".users__list");
    userCard += `
      <li class="user__container__card">
        <div class="background__container">
          <div class="opacity">
            <img class="user__img" src="${picture}" alt="${name}">
          </div>
        </div>
        <div class="user__container__name">
          <img class="small__img" src="${smallPicture}" alt="${name}">
          <div class="user__container__text__name">
            <h3 class="name">${name}</h3>
            <span>Work contact</span>
          </div>
          <i class="flaticon-angle-arrow-down"></i>
        </div>
        <div class="user__container__data hidden">
          <div class="user__container__phone">
            <i class="flaticon-receptor-de-telfono"></i>
            <div class="user__container__text__phone">
              <p class="phone">${cell}</p>
              <span>Mobile</span>
            </div>
          </div>
          <div class="user__container__email">
            <i class="flaticon-sobre"></i>
            <div class="user__container__text__email">
              <p class="email">${email}</p>
              <span>Work</span>
            </div>
          </div>
        </div>
      </li>`;
    usersList.innerHTML = userCard;
  });
}

