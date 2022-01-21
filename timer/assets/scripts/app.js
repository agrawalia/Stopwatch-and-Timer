function updateTimer() {
  let from = Date.parse("Jan 22, 2022 10:31:00");
  let now = new Date();
  let diff = from-now;

  let days = Math.floor(diff/(1000*60*60*24));
  let hours = Math.floor(diff/(1000*60*60));
  let mins = Math.floor(diff/(1000*60));
  let secs = Math.floor(diff/(1000));

  let d = days;
  let h = hours - days*24;
  let m = mins - hours*60;
  let s = secs - mins*60;

 const timer =  document.getElementById("timer");

 timer.innerHTML = '<div>' + d + '<span> Days </span></div>' + h +'<span> Hours </span></div>'
                    + m + '<span> Mins </span></div>' + s + '<span> Secs </span></div>';
}

setInterval('updateTimer()',1000);