fetch('https://ykpr9675sb.execute-api.eu-west-2.amazonaws.com/default/CRCVisitorCounter') 
  .then(response => response.json()) 
  .then(data => document.getElementById("counter").innerHTML);
  