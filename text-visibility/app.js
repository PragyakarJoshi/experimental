
window.onload = function() {
    document.getElementById("box").style.backgroundColor = generateColor();
};

function generateColor(){
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    var color = 'rgb('+ r + ',' + g +','+ b +')';
    console.log(color);
    return color;
}




