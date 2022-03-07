const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObject;
  if (cart) {
    cartObject = JSON.parse(cart);
  } else {
    cartObject = {};
  }
  return cartObject;
};
const displayProduct = (name) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};
const loadDatafromLocal = () => {
  const cart = getCart();
  console.log(cart);
  for (const item in cart) {
    displayProduct(item);
  }
};
loadDatafromLocal();
const addItem = () => {
  const nameField = document.getElementById("product-name");
  const name = nameField.value;
  if (!name) {
    return;
  }
  displayProduct(name);
  addProductToCart(name);

  nameField.value = "";
};

const addProductToCart = (name) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }

  const cartStringyfy = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringyfy);
  console.log(cart);
};

const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};
