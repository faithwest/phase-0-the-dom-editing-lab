
//Adding newHeader variable
let newHeader = document.createElement("h1");
//newHeader content 
newHeader.textContent = "My HTML adventure";

//Adding newparagraph variable
let newParagraph = document.createElement("p");
newParagraph.innerHTML = "Get <strong>Ready</strong> To <em>Start<em>";

//adding newlink variable
let newLink = document.createElement("a");
newLink.textContent = "Start";
newLink.href = "https://developer.mozilla.org/en-US/docs/Web/HTML";

//creating a tableand in it follows thead,
let newTable = document.createElement("table");

// new <tr> element
let newRow = document.createElement("tr");

//new <td> element
let newCell = document.createElement("td");

// Appending <a> tag to the <p> paragraph
//appending the newLink to paragraph
newParagraph.appendChild(newLink);

// Appending <td>  to the <tr> row
newRow.appendChild(newCell);

// Appending <tr> row to the <table>
newTable.appendChild(newRow);

//appending the newHeader,newParagraph,newTable to the body   
let parentElement = document.body;
parentElement.appendChild(newTable);
parentElement.appendChild(newParagraph);
parentElement.appendChild(newHeader);
// Write your code here!