var e = prompt("Enter first value")
var d = prompt("Enter second value")
var c = prompt("Enter  operator")

var a = parseInt(e)
var b = parseInt(d)

// switch (c) {
//     case "+": document.write(a+b)
//         break;
//     case "-": document.write(a-b)
//         break;
//     case "*": document.write(a*b)
//         break; 
//     case "/": document.write(a/b)
//         break;       
//     default:
//         break;
// }

if (c == "+") {
    document.write(a+b)
} else if (c == "-"){
    document.write(a-b)
} else if (c == "/"){
    document.write(a/b)
} else if (c == "*"){
    document.write(a*b)
}