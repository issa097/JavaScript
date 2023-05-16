let title = document.getElementById("title");
let price = document.getElementById("pricee");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let category = document.getElementById("category");
let total = document.getElementById("total");
let submitt = document.getElementById("submit");
let update = document.getElementById("update");
let sbt = document.getElementById("searchbytitle");
let sbc = document.getElementById("searchbycategory");
let delet = document.getElementById("delete");
let deleteALL = document.getElementById("deleteAll");
let search = document.getElementById("search");
let temp = "";
let mood = "create";
function getprice() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.style.background = "red";
  }
}
let pros = [];
if (localStorage.product != null) {
  pros = JSON.parse(localStorage.product);
} else {
  pros = [];
}

submitt.onclick = function () {
  let datapro = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
  };
  if (mood === "create") {
    if (datapro.count > 1) {
      for (let i = 0; i < datapro.count; i++) {
        pros.push(datapro);
      }
    } else {
      pros.push(datapro);
    }
    total.style.background = "red";
  } else {
    pros[temp] = datapro;
    mood = "create";
    count.style.display = "block";
    submitt.innerHTML = "create";
  }
price.style.color='red'
  localStorage.setItem("product", JSON.stringify(pros));

  showdata();
  cleardata();
};

function showdata() {
  total.style.background = "red";

  let table = "";
  for (let i = 0; i < pros.length; i++) {
    
    table += `
    
    <tr>
    <td>${i}</td>
    <td>${pros[i].title}</td>
    <td  style="color: red;">${pros[i].price}</td>
    <td>${pros[i].taxes}</td>
    <td>${pros[i].ads}</td>
    <td  style="color: red;">${pros[i].discount}</td>
    <td>${pros[i].total}</td>
    <td>${pros[i].category}</td>
    <td><button onclick='upda(${i})' id="update">update</button></td>
    <td><button  onclick='dele(${i})' id="delete">delete</button></td>
  </tr>
    `;
  }

  document.getElementById("tbody").innerHTML = table;

  if (pros.length > 0) {
    deleteALL.innerHTML = `
    <button onclick='deleAll()'>deleteAll</button>
 `;
  } else {
    deleteALL.innerHTML = "";
  }
}
showdata();

function cleardata() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  count.value = "";
  category.value = "";
  total.innerHTML = "";
}

function dele(i) {
  pros.splice(i, 1);
  localStorage.product = JSON.stringify(pros);
  showdata();
}

function deleAll() {
  pros.splice(0);
  localStorage.clear();
  showdata();
}

function upda(i) {
  title.value = pros[i].title;
  price.value = pros[i].price;
  taxes.value = pros[i].taxes;
  ads.value = pros[i].ads;
  discount.value = pros[i].discount;
  count.style.display = "none";
  category.value = pros[i].category;
  total.innerHTML = pros[i].total;
  submitt.innerHTML = "update";
  mood = "update";
  temp = i;
}

let moodsrch = "title";
function searchdata(id) {
  if (id == "searchbytitle") {
    moodsrch = "title";
  } else {
    moodsrch = "category";
  }
  search.style.cssText = `
        color:black;
        background:white
        `;

  search.placeholder = "search by " + moodsrch;

  search.value = "";

  search.focus();
  showdata();
}

function searchdata2(value) {
  let table = "";
  for (let i = 0; i < pros.length; i++) {
    if (moodsrch == "title") {
      if (pros[i].title.includes(value))
        table += `
        
            <tr>
            <td>${i}</td>
            <td>${pros[i].title}</td>
            <td>${pros[i].price}</td>
            <td>${pros[i].taxes}</td>
            <td>${pros[i].ads}</td>
            <td>${pros[i].discount}</td>
            <td>${pros[i].total}</td>
            <td>${pros[i].category}</td>
            <td><button onclick='upda(${i})' id="update">update</button></td>
            <td><button  onclick='dele(${i})' id="delete">delete</button></td>
        </tr>
            `;
    } else {
      if (pros[i].category.includes(value))
        table += `
        
            <tr>
            <td>${i}</td>
            <td>${pros[i].title}</td>
            <td>${pros[i].price}</td>
            <td>${pros[i].taxes}</td>
            <td>${pros[i].ads}</td>
            <td>${pros[i].discount}</td>
            <td>${pros[i].total}</td>
            <td>${pros[i].category}</td>
            <td><button onclick='upda(${i})' id="update">update</button></td>
            <td><button  onclick='dele(${i})' id="delete">delete</button></td>
        </tr>
            `;
    }
  }
  document.getElementById("tbody").innerHTML = table;
}
