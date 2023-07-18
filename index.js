let plans = document.querySelector("#plans");
let form = document.querySelector("form");
let container = document.querySelector(".container");
let error = document.querySelector("#error");
let photo = document.getElementById('photo');



form.addEventListener("submit", (e) => {
  addCard(e);
});

function addCard(e) {
  e.preventDefault();

  if (plans.value === "") {
    error.innerHTML = "Should not be empty";
    return;
  }

  error.innerHTML = "";
  generateCards();
}

let cards = [];

function generateCards() {
  let newCard = {
    plans: plans.value,
    active: false,
    id: Math.random(),
  };

  if (plans.value !== "") {
    cards.push(newCard);
  }

  container.innerHTML = cards
    .map(
      (el, index) =>
        `
        <div class="box">
          <h2>${el.plans}</h2>
          <button class="done" onclick="deleteCard(${index})">Done</button>
        </div>
      `
    )
    .join("");

  plans.value = "";
}

function deleteCard(index) {
  cards.splice(index, 1);
  generateCards();
}

generateCards();

photo.addEventListener('mousemove', () => {
    photo.style.opacity = '0';
  });

  photo.addEventListener('mouseleave', () => {
    photo.style.opacity = '1';
  });