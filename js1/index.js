function getAkan() {
  var input = document.getElementById("birth").value;
  var myDate = new Date(input);
  var gender= document.querySelector('input[name="Gender"]:checked').value;
  yyyy = myDate.getFullYear();
  mm = myDate.getMonth();
  mm = mm+1;
  dd = myDate.getDate();
}