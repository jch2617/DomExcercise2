/* Select the section with an id of container 
without using querySelector. */
let section1 = document.getElementById('container');

/* Select the section with an id of container 
using querySelector */
let section2 = document.querySelector('section');

/* Select all of the list items with a class of "second" */
let second = document.getElementsByClassName('second');
for (let elements of second) {
    console.log(elements.innerText);  
  }

/*Select a list item with a class of third, but only the list 
item inside of the ol tag */

let newthird = document.getElementsByClassName('third')[1].textContent;

/* Give the section with an id of container the text "Hello!" */

let link = `Hello!`;
let node = document.createElement("h1");
node.innerHTML = link;
document.getElementById("container").appendChild(node);

/* Add the class "main" to the div with a class of footer */

let fuß = document.getElementsByClassName('footer')[0];
fuß.classList.add("main");

/* Remove the class main on the div with a class of footer */

let removefuß = document.getElementsByClassName('footer')[0];
removefuß.classList.remove("main");

/* Create a new li element and add text of "four*/
/* Append the li to the ul element.  */

var newli = document.createElement('li');                 // Create a <li> node
var textnode = document.createTextNode("four");         // Create a text node
newli.appendChild(textnode);                              // Append the text to <li>
document.querySelector("ul").appendChild(newli);

/* Loop over all of the li's inside the ol tag and give them a background color of
"green". */

let grinch = document.getElementsByTagName("ol")[0].children;
    for (let elements of grinch) {
      elements.style.backgroundColor = "green";  
    }

/* Remove the div with a class of footer.  */

let bye = document.querySelector('.footer');
bye.remove();

// console logs vvvvvvv
console.log(section1);
console.log(section2);
console.log(second);
console.log(newthird);
console.log(hi);
console.log(fuß);
console.log(removefuß);
