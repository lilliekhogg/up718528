function todaysDate() {

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth()+1; //January is 0!
  var year = today.getFullYear();

  if(day<10) {
      day='0'+day
  }

  if(month<10) {
      month='0'+month
  }

  var currentDay = day+'/'+month+'/'+year;
  document.getElementById("MyDate").innerText = currentDay;
  document.getElementById("MyDate").textContent = currentDay;

}
todaysDate();
