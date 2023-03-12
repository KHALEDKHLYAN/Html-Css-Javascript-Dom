
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

    let p1 = 5;
    let p2 = 7;
    document.getElementById("myBtn").addEventListener("click", function() {
        myFunction(p1, p2);
    });

    function myFunction(a, b) {
        document.getElementById("demo").innerHTML = a * b;
    }
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const num3 = document.getElementById('num3');

    num1.addEventListener('input', updateSum);
    num2.addEventListener('input', updateSum);

    function updateSum() {
      const sum = Number(num1.value) + Number(num2.value);
      num3.value = sum;
    }