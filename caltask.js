
function countdown(count, callback) {
    if (count >= 1) {
      document.getElementById('countdown').innerText = count;
      setTimeout(() => {
        countdown(count - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  // Display message after countdown
  function displayMessage() {
    setTimeout(() => {
      document.getElementById('countdown').innerText = "Happy Independence Day";
    }, 1000);
  }
  
  // Start the countdown
  countdown(10, displayMessage);


