var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("counter").innerHTML = xhttp.responseText;
  }
};
xhttp.open(
  "GET",
  "https://ykpr9675sb.execute-api.eu-west-2.amazonaws.com/default/CRCVisitorCounter",
  true
);
xhttp.send();  