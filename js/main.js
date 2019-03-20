let randomUsers = [];
//let userCard = document.querySelectorAll(".user__container__card");

function fetchUsers() {
  fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => data.results)
    .then(users => users.map(user => {
      let name = `${capitalize(user.name.first)} ${capitalize(user.name.last)}`;
      let cell = user.cell;
      let email = user.email;
      let picture = user.picture.large;
      let smallPicture = user.picture.thumbnail;
      let objectUser = {
        "name": name,
        "cell": cell,
        "email": email,
        "picture": picture,
        "smallPicture": smallPicture
      }
      randomUsers.push(objectUser);
      console.log('random1:', randomUsers)
    }))
    .then(() => setTimeout(createUserCard, 1000))
    .then(() => {
      let userCard = document.querySelectorAll(".user__container__card");

          console.log('Caca: ', userCard);
          userCard.onclick = toggleUserCard;
        });
}

fetchUsers();

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function createUserCard() {
  randomUsers.map(randomUser => {
    const { name, cell, email, picture, smallPicture } = randomUser;

    // Crear nodos
    const usersList = document.querySelector(".users__list");
    const containerUserCard = document.createElement("li");
    const containerBackground = document.createElement("div");
    const opacity = document.createElement("div");
    const img = document.createElement("img");
    const smallImg = document.createElement("img");
    const containerName = document.createElement("div");
    const containerTextName = document.createElement("div");
    const textName = document.createElement("h3");
    const workContact = document.createElement("span");
    const iconArrow = document.createElement("i");
    const containerUserData = document.createElement("div");
    const containerPhone = document.createElement("div");
    const iconPhone = document.createElement("i");
    const containerTextPhone = document.createElement("div");
    const textPhone = document.createElement("p");
    const mobile = document.createElement("span");
    const containerEmail = document.createElement("div");
    const iconMail = document.createElement("i");
    const containerTextMail = document.createElement("div");
    const textMail = document.createElement("p");
    const work = document.createElement("span");
    
    containerUserCard.append(containerBackground, containerName, containerUserData);
    containerBackground.appendChild(opacity);
    opacity.appendChild(img);
    containerName.append(smallImg, containerTextName, iconArrow);
    containerTextName.append(textName, workContact);
    containerUserData.append(containerPhone, containerEmail);
    containerPhone.append(iconPhone, containerTextPhone);
    containerTextPhone.append(textPhone, mobile);
    containerEmail.append(iconMail, containerTextMail);
    containerTextMail.append(textMail, work);

    // Crear clases
    containerUserCard.className = "user__container__card";
    containerBackground.className = "background__container";
    opacity.className = "opacity";
    img.className = "user__img";
    smallImg.className = "small__img";
    containerName.className = "user__container__name";
    containerTextName.className = "user__container__text__name";
    textName.className = "name";
    iconArrow.className = "flaticon-angle-arrow-down";
    containerUserData.className = "user__container__data hidden";
    containerPhone.className = "user__container__phone";
    containerTextPhone.className = "user__container__text__phone";
    iconPhone.className = "flaticon-receptor-de-telfono";
    textPhone.className = "phone";
    containerEmail.className = "user__container__email";
    containerTextMail.className = "user__container__text__email";
    iconMail.className = "flaticon-sobre";
    textMail.className = "email";
    

    // Contenidos
    img.setAttribute('src', `${picture}`);
    img.setAttribute('alt', `${name}`);
    smallImg.setAttribute('src', `${smallPicture}`)
    smallImg.setAttribute('alt', `small ${name}`);

    const nameUser = document.createTextNode(`${name}`);
    const mailUser = document.createTextNode(`${email}`);
    const phoneUser = document.createTextNode(`${cell}`);
    const textWorkContact = document.createTextNode('Work contact');
    const textWork = document.createTextNode('Work');
    const textMobile = document.createTextNode('Mobile');

    textName.appendChild(nameUser);
    textMail.appendChild(mailUser);
    textPhone.appendChild(phoneUser);
    workContact.appendChild(textWorkContact);
    work.appendChild(textWork);
    mobile.appendChild(textMobile);
    usersList.appendChild(containerUserCard);
  });
  console.log('RandomUsers: ', randomUsers)
}
//setTimeout(createUserCard, 2000);



function toggleUserCard() {
  for(let i = 0; i<userCard.length; i++) {
    let userData = document.querySelector(".user__container__data");
    userData.classList.toggle("hidden");}
  
}
//userCard.addEventListener('click', toggleUserCard);
/*
OTRA FORMA DE HACER LA PETICIÓN

function fetchUsers() {
  fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => data.results)
    .then(users => {
      for (let i = 0; i < users.length; i++) {
        let name = `${capitalize(users[i].name.title)} ${capitalize(users[i].name.first)} ${capitalize(users[i].name.last)}`;
        let gender = users[i].gender;
        let cell = users[i].cell;
        let email = users[i].email;
        let location = `${users[i].location.street}, ${users[i].location.city} ${users[i].location.state} ${users[i].location.postcode}`;
        let nationality = users[i].nat;
        let picture = users[i].picture.large;
        let objectUser = {
          "name": name,
          "gender": gender,
          "cell": cell,
          "email": email,
          "location": location,
          "nationality": nationality,
          "picture": picture
        }
        randomUsers.push(objectUser);
      }
    })
    .catch(error => console.log(error));
}

fetchUsers();
*/