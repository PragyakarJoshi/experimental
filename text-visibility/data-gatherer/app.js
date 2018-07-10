window.onload = function () {
    makeColor();
};

let r, g, b, color, fbdb;

var config = {
    apiKey: "AIzaSyCa0TlNwRg1yYij8jMVwAKt-UfsH9AC7Ms",
    authDomain: "text-visibility.firebaseapp.com",
    databaseURL: "https://text-visibility.firebaseio.com",
    projectId: "text-visibility",
    storageBucket: "",
    messagingSenderId: "459974708907"
};
firebase.initializeApp(config);
fbdb = firebase.database();

function makeColor() {
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById("col-red").innerHTML = r;
    document.getElementById("col-green").innerHTML = g;
    document.getElementById("col-blue").innerHTML = b;
    document.getElementById("box").style.backgroundColor = color;
    return color;
}


function saveData(obj) {
    textValue = obj.value;
    let colorDb = fbdb.ref('colors');

    var data = {
        r: r,
        b: b,
        g: g,
        label: textValue
    }

    let color = colorDb.push(data, check);
    console.log("Firebase granted key: " + color.key);
    console.log(data);
}

function check(error) {
    if (error) {
        console.log("Failed to Save data.");
        console.log(error);
    } else {
        console.log("Sucessfully saved data to DB");
        makeColor();
    }
}