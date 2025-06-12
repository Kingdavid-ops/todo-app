// const heading = document.getElementById('heading');
// const h1 = document.getElementsByClassName('h1')[2];
// console.log(h1);

// const tag = document.getElementsByTagName('h1')[1];
// console.log(tag);

// const p = document.getElementsByClassName('p')[0];
// console.log(p);

// const text = document.getElementById('text');
// console.log(text);

// const enter = document.getElementById('enter');
// console.log(enter);


// querry selector is used to select querries like getElement.


const input = document.getElementById('text');
const enter = document.querySelector("#enter");
const ul = document.querySelector("ul");
const info = document.querySelector("#info");

enter.addEventListener("click", () => {
    if ((input.value != 0)) {

        info.innerHTML = null;
        const remove = document.createElement("input");
        remove.setAttribute("type", "button");
        remove.setAttribute("class", "big");
        remove.setAttribute("value", "❌");
        const list = document.createElement("div");
        list.setAttribute("class", "list");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        list.appendChild(remove);
        ul.appendChild(list);
        input.value = "";

        // Add click event to li for line-through
        li.addEventListener("click", () => {
            li.classList.toggle("done");
        });

        remove.addEventListener("click", () => {
            list.remove();
        });
    } else {
        alert("Input field cannot be empty")
    }
});

input.addEventListener("keypress", (event) => {
    if (input.value != 0 && event.keyCode === 13) {

        info.innerHTML = null;
        const remove = document.createElement("input");
        remove.setAttribute("type", "button");
        remove.setAttribute("class", "big");
        remove.setAttribute("value", "❌");
        const list = document.createElement("div");
        list.setAttribute("class", "list");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        list.appendChild(remove);
        ul.appendChild(list);
        input.value = "";

       
        li.addEventListener("click", () => {
            li.classList.toggle("done");
        });

        remove.addEventListener("click", () => {
            list.remove();
        });
    }
});








