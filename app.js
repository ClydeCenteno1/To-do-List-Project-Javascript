let todoList = [];

while (true) {
    let input = prompt("What do you want: ");

    if (input.toLowerCase() === "new") {
        while (true) {
            let add = prompt("Add to-do [q to stop]: ");
            todoList.push(add);

            if (add.toLowerCase() === "q") {
                todoList.pop();
                break;
            }
        }
    }

    else if (input.toLowerCase() === "list") {
        console.log("************");
        for (let i = 0; i <= todoList.length - 1; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("************");
    }

    else if (input.toLowerCase() === "delete") {
        let remove = parseInt(prompt("Index to remove: "));
        if (isNaN(remove) || remove < 0 || remove >= todoList.length) {
            alert("Enter a valid index!")
        }
        else {
            console.log("Successfully removed item");
            todoList.splice(remove, 1);
        }
    }

    else if (input.toLowerCase() === "quit") {
        break;
    }

    else {
        alert("Enter a valid choice!")
    }
}