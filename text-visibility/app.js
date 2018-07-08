
window.onload = function() {
    document.getElementById("box").style.backgroundColor = makeColor();
};

function makeColor(){
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    var color = 'rgb('+ r + ',' + g +','+ b +')';
    document.getElementById("col-red").innerHTML = r;
    document.getElementById("col-green").innerHTML = g;
    document.getElementById("col-blue").innerHTML = b;
    console.log(color);
    return color;
}

