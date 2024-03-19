
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function DDFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}




  var slider = document.getElementById("myRange");
  var output = document.getElementById("val");
  output.innerHTML=slider.value;
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
