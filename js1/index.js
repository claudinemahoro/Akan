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

}