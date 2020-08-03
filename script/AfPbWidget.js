<!DOCTYPE html>
<html lang="sv">
<head>
<title>Logopedjobb.se</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
  <style>
h2 {font-size: 1px;}
body, html {
  height: 100%;
  font-family: "Inconsolata", sans-serif;
}

.bgimg {
  background-position: center;
  background-size: cover;
  background-image: url("https://logopedjobb.github.io/LOG101/Header1.jpg");
  min-height: 50%;
}

.menu {
  display: none;
}
    h3 {color: w3-text-white;}
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
  float: left;
  font-size: 14px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  cursor: pointer;
  font-size: 14px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>
  </head>
<body>
<!-- Dropdown in navigation bar -->
<div class="navbar">
  <a href="index4.html">Hem</a>
  <a href="index2.html">Om</a>
  <div class="dropdown">
  <button class="dropbtn" onclick="myFunction()">Område
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown">
   <a href="county/01stockholmslan.html">Stockholms län</a>
  <a href="county/03uppsalalan.html">Uppsala län</a>
  <a href="county/04sodermanlandslan.html">Södermanlands län</a>
  <a href="county/05ostergotlandslan.html">Östergötlands län</a>
    <a href="county/06jonkopingslan.html">Jönköpings län</a>
    <a href="county/07kronobergslan.html">Kronobergs län</a>
    <a href="county/08kalmarlan.html">Kalmar län</a>
    <a href="county/09gotlandslan.html">Gotlands län</a>  </div>
  </div> 
</div>
  
<!-- Header with image -->
<header class="bgimg w3-display-container w3-grayscale-min" id="home">
  <div class="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
    <span class="w3-tag"></span>
  </div>
  <div class="w3-display-middle w3-center">
    <span class="w3-border-white" style="font-size:50px"><br>Logopedjobb.se<br><h4><i>Bara jobb för logopeder</i></h4></span>
  </div>
  <div class="w3-display-bottomright w3-center w3-padding-large">
    <span class="w3-text-light-grey"></span>
  </div>
</header>

<!-- Add a background color and large text to the whole page -->
<div class="w3-sand w3-grayscale w3-large">

<!-- Alljobs-widget -->
<div class="w3-container" id="about">
  <div class="w3-content" style="max-width:400px">
    <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">Lediga jobb</span></h5></div>
    <div
        id="afWidgetContainer"
        data-limit="32"
        data-showexpired="false"
        data-q="logoped"
        data-occupationalid="BnhE_hcg_H2c"
        data-places="Sverige"
        data-modal="false"
    style="
                text-align: "left";
                font-weight: 500;
                border: 3px solid #733ACA;
                width: 40%;
                margin: 10px auto;
                border-radius: 5px;
              "
        >
    </div
    >
    <div><strong>Antal lediga logopedjobb i Sverige:</strong><div id="afJobCount"></div></div>

  <!-- Script for AFWidget -->
<script src="https://widgets.jobtechdev.se/alljobads/script/AfPbWidget.js"></script>
<div>

<!-- Footer -->
<footer class="w3-center w3-light-grey w3-padding-48 w3-large">
  <p>                                       <a href="index.html">Logopedjobb.se</a>                                       </p>
</footer>
<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
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
</script>

</body>
</html>
