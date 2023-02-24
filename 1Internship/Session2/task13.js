var a = prompt("enter a number");

var b = isNaN(a);
console.log(b);

if(b == true) {
    document.write("Error Enter a number");
}

else{
    document.write("You entered a number");
}