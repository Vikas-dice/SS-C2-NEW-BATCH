//Features
// Add Item
// Read Item
// Delete Item
// Update Item
//------------------///
// AddItem

let btn = document.getElementById("btn")
let ul = document.getElementById("items")

ul.addEventListener("dblclick", function (crazy) {
    ul.removeChild(crazy.target)
})

btn.addEventListener("click", function () {
    let txtBox = document.getElementById("txtBox").value
    if (txtBox.length === 0) {
        alert("Please Insert Some Text")
    } else {
        let list = document.getElementById("items")//<ul></ul>
        let li = document.createElement("li")//<li></li>
        li.appendChild(document.createTextNode(txtBox))
        li.className = "list-group-item"
        list.appendChild(li)
        document.getElementById("txtBox").value = ""
    }
})