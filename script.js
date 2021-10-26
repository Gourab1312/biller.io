

// Logic of working of the home page

showTask(); //for by default calling when the page ereal

let username = document.getElementById("name");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let addbtn = document.getElementById("add");

addbtn.addEventListener("click", function () {
  let nameval = username.value;
  let quantityval = quantity.value;
  let priceval = price.value;

  if (nameval.trim() != 0 && quantityval.trim() != 0 && priceval.trim() != 0) {
    let webtask = localStorage.getItem("localtask");

    if (webtask == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(webtask);
    }

    taskObj.push([nameval, quantityval, priceval]);

    localStorage.setItem("localtask", JSON.stringify(taskObj));

    showTask();
  }
});

function showTask() {
  let webtask = localStorage.getItem("localtask");

  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }

  let html = "";
  let table = document.getElementById("tablebody");

  taskObj.forEach((item, index) => {
    html += `
        <tr>
              <th scope="row">${index + 1}</th>
              <td>${item[0]}</td>
              <td>${item[1]}</td>
              <td>${item[2] * item[1]}</td>
              <td><button class="btn btn-primary" id="del" onclick="deleteitem(${index})">Delete</button>
            </tr>
        `;
  });

  tablebody.innerHTML = html;
}

// for deleting individual elements 
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showTask();
}

function add(){
    // for viewing the total amount of money
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let total = 0;
    taskObj.forEach(element => {
        total += element[2] * element[1];
    });

    document.getElementById("total").innerHTML = "Total amount to be paid is only Rupees "+total;


    document.getElementById('divfinalbtn').innerHTML = " ";
}