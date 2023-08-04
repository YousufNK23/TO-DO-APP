function bmi() {
    var weight = parseInt(document.getElementById("num1").value);
    var height = parseInt(document.getElementById("num2").value);
    var inches = parseInt(document.getElementById("num3").value);

    var totalinches = (height * 12) + inches;

    var totalcentimeters = totalinches * 2.54;

    var totalmeters = totalcentimeters / 100;
    var bmi = weight / (totalmeters * totalmeters);

    res = "Enter your all fields";

    if (bmi > 25) {
        document.getElementById("res").style.backgroundColor = "#FFD700"
        res = "You are overweight!";
    } else if (bmi < 18) {
        document.getElementById("res").style.backgroundColor = "red";
        res = "You are underweight!";
    } else  if (bmi > 18) {
        document.getElementById("res").style.backgroundColor = "green";
        res = "You are healthy MashaAllah!";
    }
    document.getElementById("ans").value = bmi.toFixed(2);
    document.getElementById("res").innerHTML = res;
}