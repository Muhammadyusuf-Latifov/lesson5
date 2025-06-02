let elSelect = document.querySelector(".capital-choose");
let elCountryList = document.querySelector(".country-list")
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
  list.innerHTML = ""
  arr.forEach(item => {
    let elItem = document.createElement("li")
    list.appendChild(elItem);
    elItem.outerHTML = `
    <li class=" w-[264px] shadow-md rounded-md">
  <img class="h-[160px] object-cover" src="${item.flag}" alt="flag-img" width="264" height="160">
  <div class="p-[24px]">
    <strong class="text-[18px] font-extrabold">${item.name}</strong>
    <p class="text-[14px] mt-[16px]">Population: <span>${item.population}</span></p>
    <p class="text-[14px] mt-[16px]">Region:  <span> ${item.name}</span></p>
    <p class="text-[14px] mt-[16px]">Capital: <span>  ${item.capital}</span></p>
  </div>
  <div  class="p-[10px] flex justify-between">
    <button class="w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">Like</button>
    <button class="w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">Save</button>
    <button class="w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">More</button>
  </div>
</li>
   `;
  
  })
}
renderCountry(countries, elCountryList);
// render-country

// select change
elSelect.addEventListener("change", function(evn) {
  let changeValue = evn.target.value
  if (changeValue == "all") {
    renderCountry(countries, elCountryList);
  } else {
    
    let filterList = countries.filter(item => item.capital.toLowerCase() == changeValue)
    renderCountry(filterList, elCountryList);
  }
})
// select change
