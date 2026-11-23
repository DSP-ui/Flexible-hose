
function calculate() {

    // READ INPUT VALUES

    const totalLength = parseFloat(
        document.getElementById("totalLength").value
    );

    const radius = parseFloat(
        document.getElementById("radius").value
    );

    const singleDimension = parseFloat(
        document.getElementById("singleDimension").value
    );

    const od = parseFloat(
        document.getElementById("od").value
    );


    // VALIDATE INPUTS

    const values = [
        totalLength,
        radius,
        singleDimension,
        od
    ];

    const valid = values.every(value =>
        Number.isFinite(value) &&
        value >= 0 &&
        value <= 10000
    );

    if (!valid) {
        alert("Molimo unesite ispravne vrijednosti.");
        return;
    }


    // CALCULATIONS

    const arc = radius * Math.PI / 2;

    const R = radius;

    const Rin = radius - (od / 2);

    const Rout = radius + (od / 2);

    const A = singleDimension;

    const C = singleDimension - radius;

    const D = totalLength - C - arc;

    const B = D + radius;


    // UPDATE TECHNICAL DRAWING

    updateDrawing(A, B, C, D, R, Rin, Rout);

}


// UPDATE DRAWING LABELS

function updateDrawing(A, B, C, D, R, Rin, Rout) {

    function format(value) {
        return Number(value.toFixed(2)).toString() + " mm";
    }

    document.getElementById("drawA").textContent =
        format(A);

    document.getElementById("drawB").textContent =
        format(B);

    document.getElementById("drawC").textContent =
        format(C);

    document.getElementById("drawD").textContent =
        format(D);

    document.getElementById("drawR").textContent =
        "R " + format(R);

    document.getElementById("drawRin").textContent =
        "R inside " + format(Rin);

    document.getElementById("drawRout").textContent =
        "R outside " + format(Rout);

}


// ENTER KEY SUPPORT

document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        calculate();
    }

});


// INITIAL CALCULATION WHEN PAGE OPENS

window.addEventListener("DOMContentLoaded", function() {
    calculate();
});
