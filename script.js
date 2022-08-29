const mapMap = new Map();
const linesMap = new Map();
mapMap.set("lines", linesMap);

const countriesDatalist = document.createElement("datalist");
countriesDatalist.id = "countriesDatalist";
document.body.appendChild(countriesDatalist);
document
  .querySelector("#countryInputA")
  .setAttribute("list", "countriesDatalist");
document
  .querySelector("#countryInputB")
  .setAttribute("list", "countriesDatalist");

const fetchLines = async () => {
  const fetchedData = await (
    await fetch("http://localhost:8282/https://geohints.com/Lines.html")
  ).text();

  const tempElement = document.createElement("html");
  tempElement.innerHTML = fetchedData;

  const beginElement = Array.from(tempElement.querySelectorAll("h3")).find(
    (element) => element.innerText.trim() === "By country:"
  );
  let nextSibling = beginElement;
  while (nextSibling !== null) {
    nextSibling = nextSibling.nextSibling;
    if (
      nextSibling.tagName !== "B" &&
      nextSibling.textContent.trim().length > 1
    ) {
      const splitText = nextSibling.textContent.split(":");
      if (splitText[1] === undefined) {
        break;
      }
      const country = splitText[0].trim();
      linesMap.set(country, splitText[1].trim());
      const option = document.createElement("option");
      option.value = country;
      countriesDatalist.appendChild(option);
    }
  }
};

fetchLines();

let selectedGuessMethod;
const handleGuessMethodSelection = (event) => {
  if (mapMap.has(event.target.value)) {
    selectedGuessMethod = event.target.value;
  }
};

const handleCountryASelection = (event) => {
  const selectedCountry = event.target.value;
  if (mapMap.get(selectedGuessMethod).has(selectedCountry)) {
    handleCountrySelection("a", selectedCountry);
  }
};

const handleCountryBSelection = (event) => {
  const selectedCountry = event.target.value;
  if (mapMap.get(selectedGuessMethod).has(selectedCountry)) {
    handleCountrySelection("b", selectedCountry);
  }
};

const handleCountrySelection = (field, country) => {
  document.querySelector(`.country-${field}-holder > .name`).textContent =
    country;
  document.querySelector(`.country-${field}-holder > .value`).textContent =
    mapMap.get(selectedGuessMethod)?.get(country);
};
