let elSelect = document.querySelector(".capital-choose");
let elCountryList = document.querySelector(".country-list");
let searchEl = document.querySelector(".search-input");
let likeBtnEl = document.querySelector(".like-count");
let saveEl = document.querySelector(".save-btn");
let modalWrapEl = document.querySelector(".modal-wrapper");
let modalInEl = document.querySelector(".modal-inner");
// Select part
function createOptionToSelect(arr, list) {
  // list.innerHTML = "";
  arr.forEach((item) => {
    let elOption = document.createElement("option");
    elOption.value = item.capital.toLowerCase();
    elOption.textContent = item.capital;
    list.appendChild(elOption);
  });
}

createOptionToSelect(countries, elSelect);
// Select part

// render-country
function renderCountry(arr, list) {
  list.innerHTML = "";
  arr.forEach((item) => {
    let elItem = document.createElement("li");
    list.appendChild(elItem);
    elItem.outerHTML = `
    <li class=" w-[264px] shadow-md rounded-md">
  <img class="h-[160px] object-cover" src="${
    item.flag
  }" alt="flag-img" width="264" height="160">
  <div class="p-[24px]">
    <strong class="text-[18px] font-extrabold">${item.name}</strong>
    <p class="text-[14px] mt-[16px]">Population: <span>${
      item.population
    }</span></p>
    <p class="text-[14px] mt-[16px]">Region:  <span> ${item.name}</span></p>
    <p class="text-[14px] mt-[16px]">Capital: <span>  ${item.capital}</span></p>
  </div>
  <div  class="p-[10px] flex justify-between">
    <button onclick="handleLikeBtn(${item.id})" class="${
      item.isLiked ? "bg-red-500 text-white" : ""
    } w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">Like</button>
    <button onclick="handleSave(${item.id})" class="${
      item.isBasket ? "bg-green-500 text-white" : ""
    } w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">Save</button>
    <button onclick="handleMore(${
      item.id
    })" class="w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">More</button>
  </div>
</li>
   `;
  });
}
renderCountry(countries, elCountryList);
// render-country

// select change
elSelect.addEventListener("change", function (evn) {
  let changeValue = evn.target.value;
  if (changeValue == "all") {
    renderCountry(countries, elCountryList);
  } else {
    let filterList = countries.filter(
      (item) => item.capital.toLowerCase() == changeValue
    );
    renderCountry(filterList, elCountryList);
  }
});
// select change

// Search part
searchEl.addEventListener("input", function (evt) {
  let result = countries.filter(
    (item) =>
      item.name.toLowerCase().includes(evt.target.value.toLowerCase()) ||
      item.population.toString().includes(evt.target.value)
  );
  renderCountry(result, elCountryList);
});
// Search part

// like part
function handleLikeBtn(id) {
  let findObj = countries.find((item) => item.id == id);
  findObj.isLiked = !findObj.isLiked;
  renderCountry(countries, elCountryList);
  likeBtnEl.textContent = countries.filter((item) => item.isLiked).length;
}
function likeBtnClick() {
  let res = countries.filter((item) => item.isLiked);
  renderCountry(res, elCountryList);
}
// like part
// -----------------------------------------------------------------------
// save part
function handleSave(id) {
  let findObj = countries.find((item) => item.id == id);
  findObj.isBasket = !findObj.isBasket;

  renderCountry(countries, elCountryList);
  saveEl.textContent = countries.filter((item) => item.isBasket).length;
}
function saveClick() {
  let last = countries.filter((item) => item.isBasket);
  renderCountry(last, elCountryList);
}
// save part
// more part
function handleMore(id) {
  let findObj = countries.find((item) => item.id == id);
  modalWrapEl.classList.remove("scale-0");
  modalInEl.innerHTML = `
<div class="flex items-center justify-between">
       <img class="h-[160px] object-cover" src="${findObj.flag}" alt="flag-img" width="264" height="160">
      <div class="p-[24px]">
          <strong class="text-[18px] font-extrabold">${findObj.name}</strong>
          <p class="text-[14px] mt-[16px]">Population: <span>${findObj.population}</span></p>
          <p class="text-[14px] mt-[16px]">Region:  <span> ${findObj.name}</span></p>
          <p class="text-[14px] mt-[16px]">Capital: <span>  ${findObj.capital}</span></p>
      </div>
</div>
  `;
}
modalWrapEl.addEventListener(
  "click",
  (e) => e.target.id && modalWrapEl.classList.add("scale-0")
);

// more part
