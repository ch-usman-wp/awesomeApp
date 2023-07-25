import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render([ <h1>Hello</h1>,<p>World!</p> ],  document.getElementById("root") );

// pure js 
var h1 = document.createElement("h1");
h1.innerHTML = "Hello Usman";
document.getElementById("root").appendChild(h1)