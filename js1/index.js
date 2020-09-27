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
  day = day.toFixed(0);
}