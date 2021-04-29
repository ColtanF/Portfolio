function submitForm() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    let body = message + '%0d%0a%0d%0afrom ' + name + '%0d%0a' + email

    window.open('mailto:coltan.franke@gmail.com?subject=' + subject + '&body=' + body)
}