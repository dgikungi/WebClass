const steve = document.getElementById('name');
// console.log(steve);
steve.innerHTML = "This has been modified";
const gender = document.getElementsByTagName('p')[1];
// console.log(gender);
gender.innerHTML = "Prefer not to say";

// const para = document.querySelector("p").style.backgroundColor="green";
const paras = document.querySelectorAll("p")[1];
// console.log(paras);
paras.style.backgroundColor="red";

const dp = document.getElementById("dp").src="placeholder.jpg";

// creating paragraph element
let paragraph = document.createElement("p");
let node = document.createTextNode("This is a paragraph");
paragraph.appendChild(node);
let element = document.getElementById("dynamic");
element.appendChild(paragraph);

function clickBtn(){
    const list = document.getElementsByClassName("drinks")[0];
    // console.log(list);
    list.getElementsByClassName("drink")[1].innerHTML="Juice";
}