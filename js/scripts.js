console.log("P17173509");

function myFunction1() {
    var x = document.getElementById("headernav");
    if (x.className === "headernav") {
        x.className += " responsive";
    } else {
        x.className = "headernav";
    }
}

function myFunction() {
    alert("Thank You For Purchasing!");
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(52.6298007, -1.1418311),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}