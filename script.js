const mapMap = new Map();
const linesMap = new Map();
const bollardsMap = new Map();
mapMap.set("lines", linesMap);
mapMap.set("bollards", bollardsMap);
const countries = new Set();

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
  const fetchedData = await (await fetch("./pages/lines.html")).text();

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
      generateSelectOption(country);
    }
  }
};

fetchLines();

const fetchBollards = async () => {
  const fetchedData = await (await fetch("./pages/bollards.html")).text();

  const tempElement = document.createElement("html");
  tempElement.innerHTML = fetchedData;

  Array.from(tempElement.querySelectorAll(".country")).forEach(
    (countryElement) => {
      const country = countryElement.textContent.replace(/[^0-9a-z ]/gi, "");
      bollardsMap.set(
        country,
        generateImageUrl(countryElement.previousElementSibling.src)
      );
      generateSelectOption(country);
    }
  );
};

fetchBollards();

const generateImageUrl = (imageSrc) => {
  return "https://geohints.com" + new URL(imageSrc).pathname;
};

const generateSelectOption = (country) => {
  if (!countries.has(country)) {
    const option = document.createElement("option");
    option.value = country;
    countriesDatalist.appendChild(option);
    countries.add(country);
  }
};

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
  const value = mapMap.get(selectedGuessMethod)?.get(country);
  const valueIsUrl = value.includes("http");
  const imageElement = document.querySelector(
    `.country-${field}-holder > .value-image`
  );
  imageElement.src = valueIsUrl ? value : "";
  imageElement.classList.toggle("hidden", !valueIsUrl);
  document.querySelector(`.country-${field}-holder > .value`).textContent =
    valueIsUrl ? "" : value;
};
