function calculateAge() {
    var dob = new Date(document.getElementById("dob").value);
    var today = new Date();

    var ageInYears = today.getFullYear() - dob.getFullYear();
    var ageInDays = Math.floor((today - dob) / (1000 * 60 * 60 * 24));
    var ageInMinutes = Math.floor((today - dob) / (1000 * 60));

    document.getElementById("result").innerHTML = "Your age is: " + ageInYears + " years, " + ageInDays + " days, and " + ageInMinutes + " minutes.";
}
