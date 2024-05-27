function validateForm(event) {
    event.preventDefault();

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (this.status == 200 && this.readyState == 4) {
            document.getElementById("result").style.visibility = "visible";
            document.getElementById("result").innerHTML = this.responseText;
        }
    }

    xhttp.open('POST', 'accounts.php');
    xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhttp.send('username='+document.getElementById("name").value+'&password='+document.getElementById("pass").value);
}

document.getElementById("name").addEventListener("click", function() {
    document.getElementsByClassName("placeholder")[0].classList.add("phEffect");
});

document.getElementById("pass").addEventListener("click", function() {
    document.getElementsByClassName("placeholder")[1].classList.add("phEffect");
})