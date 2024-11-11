function addItem() {
    const userInput = prompt("Enter the information to add:");

    if (userInput === null || userInput.trim() === "") {
        alert("Please enter valid information!");
    } else {
        const itemList = document.getElementById("itemList");

        const li = document.createElement("li");
        li.textContent = userInput;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            itemList.removeChild(li);
        };

        li.appendChild(deleteButton);

        itemList.appendChild(li);
    }
}
