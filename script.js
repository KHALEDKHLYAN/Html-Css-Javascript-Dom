
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


// animating with Javascript
const myMove = () => {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}