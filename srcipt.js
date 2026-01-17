const foodContainer = document.querySelector(".food-list");

const meals = {
  burger: [
    {
      id: 1,
      image: "./images/Burger.png",
      title: "Cheeseburger With Salad",
      price: 18,
      count: 1,
    },
    {
      id: 2,
      image: "./images/Burger.png",
      title: "Beef Burger",
      price: 15,
      count: 1,
    },
    {
      id: 3,
      image: "./images/Burger.png",
      title: "Royel Cheeseburger",
      price: 16,
      count: 1,
    },
    {
      id: 4,
      image: "./images/Burger.png",
      title: "Black Gambugrer ",
      price: 14,
      count: 1,
    },
    {
      id: 5,
      image: "./images/Burger.png",
      title: "Chicken Burger",
      price: 15,
      count: 1,
    },
  ],
  pizza: [
    {
      id: 6,
      image: "./images/pizza.png",
      title: "Pepperoni",
      price: 10,
      count: 1,
    },
  ],
  sandwich: [
    {
      id: 7,
      image: "./images/sandwich.png",
      title: "Clab",
      price: 12,
      count: 1,
    },
  ],
  asian: [
    {
      id: 8,
      image: "./images/asian-food.png",
      title: "Osh",
      price: 14,
      count: 1,
    },
  ],
  setMenu: [
    {
      id: 9,
      image: "./images/set-menu.png",
      title: "Pizza kombo",
      price: 20,
      count: 1,
    },
  ],
};

function showMeals(cat) {
  foodContainer.innerHTML = "";
  meals[cat].map((item, index) => {
    foodContainer.innerHTML += `
        <li class="food-item">
          <img src=${item.image} alt="Cheeseburger with salad image" />
          <h3>${item.title}</h3>
          <span>$${item.price}</span>
          <button onclick='addToCard(${item.id})'>Add To Card</button>
        </li>
        `;
  });
}
showMeals("burger");

function filterCat(cat) {
  showMeals(cat);
}

// const headerMenu = document.querySelector(".header-menu");
// const iconEl = document.querySelector("i");
// const modalContainer = document.querySelector(".modal-container");
// const modal = document.querySelector(".modal");

// headerMenu.addEventListener("click", () => {
//   if (iconEl.classList.contains("fa-bars")) {
//     iconEl.classList.remove("fa-bars");
//     iconEl.classList.add("fa-x");
//     modalContainer.style.transform = "translateX(-25px)";
//   } else {
//     iconEl.classList.remove("fa-x");
//     iconEl.classList.add("fa-bars");
//     modalContainer.style.transform = "translateX(-370px)";
//   }
// });

const basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToCard(id) {
  for (let k in meals) {
    const filterCatergory = meals[k].find((item) => item.id == id);

    if (filterCatergory) {
      basket.push(filterCatergory);
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  }
}

// function showBasket() {
//   modal.innerHTML = "";
//   basket.map((item) => {
//     modal.innerHTML += `
//      <img src=${item.image} />
//      <h2>${item.title}</h2>

//     `;
//   });
// }

// showBasket();
