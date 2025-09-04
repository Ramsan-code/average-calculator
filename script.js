
function submit() {

    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const n3 = parseFloat(document.getElementById("num3").value);
    const n4 = parseFloat(document.getElementById("num4").value);

    const average = (n1 + n2 + n3 + n4)

    const result = average / 4;
    console.log(result);


    // document.getElementById("result").innerHTML = result;
};

function clearResult() {
    document.getElementById("result").innerHTML = "";
}