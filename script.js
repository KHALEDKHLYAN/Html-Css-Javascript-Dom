
document.getElementById("demo").innerHTML = "Date : " + Date();

// In JavaScript, document.write() can be used to write directly to the HTML output stream:
document.write(Date());

const validateForm = () => {
    let x = document.forms[ "myForm" ][ "fname" ].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}