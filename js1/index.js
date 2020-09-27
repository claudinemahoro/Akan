function getAkan() {
  var input = document.getElementById("birth").value;
  var myDate = new Date(input);
  var gender= document.querySelector('input[name="Gender"]:checked').value;
  yyyy = myDate.getFullYear();
  mm = myDate.getMonth();
  mm = mm+1;
  dd = myDate.getDate();
  var c =(yyyy-1)/100+1;
  var cc = parseFloat(c);
  var day = parseFloat(( ((cc/4) -2*cc-1) + ((5*yyyy/4)) + ((26*(mm+1)/10)) + dd )) % 7;
  var dayOfWeek = day.toFixed(0);
  var days =['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  var femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

  if (input='' && gender==''){
    alert("Enter your birthday and gender please!");
  }
  else if(day == 0 && gender == "Male"){
    document.getElementById("answer").innerHTML = maleNames[0] + " ,you were born " + days[0];
    }
   else if(day == 0 && gender == "Female"){
      document.getElementById("answer").innerHTML = femaleNames[0] + " ,you were born " + days[0];
    }
  else if(day == 1 && gender == "Male"){
      document.getElementById("answer").innerHTML = maleNames[1] + " ,you were born " + days[1];
    }
  else if(day == 1 && gender == "Female"){
        document.getElementById("answer").innerHTML = femaleNames[1] + " ,you were born " + days[1];
    }
  else if(day == 2 && gender == "Male"){
      document.getElementById("answer").innerHTML = maleNames[2] + " ,you were born " + days[2];
      }
  else if(day == 2 && gender == "Female"){
        document.getElementById("answer").innerHTML = femaleNames[2] + " ,you were born " + days[2];
      }
}