
const cards = document.getElementsByClassName("card1");
const cardzzzz = document.querySelector(".section-two");

const highlight = (event, index) => {
  cards[index].classList.remove("card");
  cards[index].classList.add("card_hover");
  cards[index].children[2].style.backgroundColor = "white";
  cards[index].children[2].style.color = "#003C43";

  for (let i = 0; i < 6; i++) {
    cards[index].children[3].children[i].children[0].style.backgroundColor =
      "white";
  }
};

const unhighlight = (event, index) => {
  cards[index].classList.add("card");
  cards[index].classList.remove("card_hover");
  cards[index].children[2].style.backgroundColor = "#003C43";
  cards[index].children[2].style.color = "white";
  for (let i = 0; i < 6; i++) {
    cards[index].children[3].children[i].children[0].style.backgroundColor =
      "white";
  }
};
cards[0].addEventListener("mouseover", (event) => highlight(event, 0));
cards[0].addEventListener("mouseout", (event) => unhighlight(event, 0));

cards[1].addEventListener("mouseover", (event) => highlight(event, 1));
cards[1].addEventListener("mouseout", (event) => unhighlight(event, 1));

cards[2].addEventListener("mouseover", (event) => highlight(event, 2));
cards[2].addEventListener("mouseout", (event) => unhighlight(event, 2));

// nav bar

const burger = document.querySelector(".burger");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {
  links.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});
// app.js

// Function to update prices based on selected currency
function updatePrices(currency) {
    const priceElements = document.querySelectorAll('.price h1');
    const annualPriceElements = document.querySelectorAll('.price span');

    // Conversion rates for different currencies
    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110.67,
        AUD: 1.30,
        INR: 75.10,
    CNY: 6.46
    };

    // Update prices based on the selected currency
    priceElements.forEach(element => {
        const originalPrice = parseFloat(element.dataset.originalPrice);
        const conversionRate = conversionRates[currency];
        if (!isNaN(originalPrice) && conversionRate !== undefined) {
            const convertedPrice = originalPrice * conversionRate;
            element.textContent = `${convertedPrice.toFixed(2)} ${currency}/mo`;
        } else {
            element.textContent = 'Price not available';
        }
    });

    annualPriceElements.forEach(element => {
        const originalPrice = parseFloat(element.dataset.originalPrice);
        const conversionRate = conversionRates[currency];
        if (!isNaN(originalPrice) && conversionRate !== undefined) {
            const convertedPrice = originalPrice * 12 * conversionRate;
            element.textContent = `$${convertedPrice.toFixed(2)} billed annually`;
        } else {
            element.textContent = 'Price not available';
        }
    });
}

// Event listener for currency selection change
document.getElementById('currency-selector').addEventListener('change', function() {
    const selectedCurrency = this.value;
    updatePrices(selectedCurrency);
});

// Initial call to update prices with default currency (USD)
updatePrices('USD');
