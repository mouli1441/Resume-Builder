function addNewWEField() {
    // console.log("Adding New Field");

let newnode = document.createElement("textarea");
newnode.classList.add("form-control");
newnode.classList.add("weField");
newnode.setAttribute("rows",3);

let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newnode , weAddButtonOb);

}