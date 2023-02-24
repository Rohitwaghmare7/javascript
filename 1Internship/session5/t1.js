var a = prompt("Enter your age : ");

if(0 < a <= 18){
    document.write("you are 18 years old"+"<br>");

    var c = 18 - a;
    document.write(c+" years remaining to complete 18 years");
}
else if(18 < a < 50){
    document.write("you are under 50"+"<br>");

    var d = 50 - a; 
    document.write(d+"remaining to complete 50 years");
}
else if(50 < a < 70){
    document.write("you are under 70"+"<br>");

    var e = 70 - a; 
    document.write(e+"remaining to complete 70 years");
}
else{
    document.write("you are Exceed 70");
}
   
