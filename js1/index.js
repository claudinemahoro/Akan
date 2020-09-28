function getAkan() {
    var userInput = document.getElementById("birth").value;
    var myDate = new Date(userInput);
yyyy = myDate.getFullYear();
mm = myDate.getMonth();
mm = mm+1;
dd = myDate.getDate();
var gender= document.querySelector('input[name="Gender"]:checked').value;
var c =(yyyy-1)/100+1;
var cc = parseFloat(c);
var day = parseFloat(( ((cc/4) -2*cc-1) + ((5*yyyy/4)) + ((26*(mm+1)/10)) + dd )) % 7;
day = day.toFixed(0);
var days =['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById('answer').innerHTML= answer;
if (input='' && gender==''){
    alert("Enter values for answer");
 }
 
else if(day == 0 && gender == "Male"){
  document.getElementById("answer").innerHTML = "kwasi" + " ,you were born " + days[0];
}
else if(day == 1 && gender == "Male"){
    document.getElementById("answer").innerHTML = "Kwadwo"+ " ,you were born " + days[1];
}
else if(day == 2 && gender == "Male"){
    document.getElementById("answer").innerHTML = "kwabena" +" ,you were born " + days[2];
}
else if(day == 3 && gender == "Male"){
    document.getElementById("answer").innerHTML = "Kwaku" +" ,you were born " + days[3];
}
else if(day == 4 && gender == "Male"){
    document.getElementById("answer").innerHTML = "Yaw" +" ,you were born " + days[4];;
}
else if(day == 5 && gender == "Male"){
    document.getElementById("answer").innerHTML = "Kofi" +" ,you were born " + days[5];;
}
else if(day == 6 && gender == "Male"){
    document.getElementById("answer").innerHTML = "Kwame" +" ,you were born " + days[6];;
}
else if(day == 0 && gender == "Female"){
    document.getElementById("answer").innerHTML = "Akosua" +" ,you were born " + days[0];;
}
else if(day == 1 && gender == "Female"){
    document.getElementById("answer").innerHTML = "Adwoa" +" ,you were born " + days[1];;
}
else if(day == 2 && gender == "Female"){
    document.getElementById("answer").innerHTML = "Abenaa" +" ,you were born " + days[2];;
}
else if(day == 3 && gender == "Female"){
   document.getElementById("answer").innerHTML = "Akua" +" ,you were born " + days[3];;
}
else if(day == "4" && gender == "Female"){
    document.getElementById("answer").innerHTML = "Yaa" +" ,you were born " + days[4];;
   
}
else if(day == 5 && gender == "Female"){
    document.getElementById("answer").innerHTML = "Afua" +" ,you were born " + days[5];;
}
else if(day == 6 && gender == "Female"){
    document.getElementById("answer").innerHTML = "Ama" +" ,you were born " + days[6];;
}

}