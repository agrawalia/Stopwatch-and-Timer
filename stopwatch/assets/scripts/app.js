const stopwatch = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let running = false;

const startClock = () =>{
  if(running == false){
    running = true;
    calC();
  }
};

const calC = () => {
  if(running == true) {
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);
    
    sec = sec + 1;

    if(sec == 60){
      min = min +1;
      sec = 0;
    }

    if(min == 60){
      hr = hr +1;
      min = 0;
      sec = 0;
    }

    if(sec < 10) sec = '0' + sec;
    if(min < 10) min = '0' + min;
    if(hr < 10) hr = '0' + hr;

    stopwatch.innerHTML = hr + ':' + min + ':' + sec;
    setTimeout("calC()", 1000);

  }
  };

  const stopClock = () =>{
    if(running == true)
      running = false;
  };

  const resetClock = () =>{
    stopwatch.innerHTML = '00:00:00';
    running =false;
    hr= 0;
    min =0;
    sec=0;

  };

