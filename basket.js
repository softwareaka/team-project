let basket = JSON.parse(localStorage.getItem("basket"));

const basketItems = document.querySelector("#basket-items");

console.log(basket);

function showBasket() {
  basketItems.innerHTML = "";
  basket.map((item, index) => {
    basketItems.innerHTML += `
    <tr>
    <td>
      <div class="item-info">
        <img
          src='${item.image}'
          alt="${item.title}"
          class="item-image"
        />
        <span class="item-title">${item.title}</span>
      </div>
    </td>
    <td class="quantity">
      <div class="quantity-controls">
        <button class="quantity-btn" onclick='decrement(${item.id})'>−</button>
        <span>${item.count}</span>
        <button class="quantity-btn" onclick='increment(${item.id})'>+</button>
      </div>
    </td>
    <td class="price">$${item.price}.00</td>
    <td class="total-price">$${item.count * item.price}.00</td>
    <td class="delete-btn">
      <button onclick="removeItem(${item.id})">
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>
    </td>
  </tr>
        `;
  });
}

showBasket();

function increment(id) {
  basket.map((item) => {
    if (item.id === id) {
      item.count++;
      localStorage.setItem("basket", JSON.stringify(basket));
      showBasket();
    }
  });
}

function decrement(id) {
  basket.map((item) => {
    if (item.id === id) {
      if (item.count > 1) {
        item.count--;
        localStorage.setItem("basket", JSON.stringify(basket));
        showBasket();
      }
    }
  });
}

function removeItem(id) {
  basket = basket.filter((item) => item.id !== id);

  localStorage.setItem("basket", JSON.stringify(basket));
  showBasket();
}
