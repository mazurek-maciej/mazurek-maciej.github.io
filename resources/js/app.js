function openService1(evt, service) {
  var i, x, tablinks;
  x = document.getElementsByClassName("service1");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(service).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

function openService2(evt, service) {
  var i, x, tablinks;
  x = document.getElementsByClassName("service2");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(service).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

