let r, g, b, color, database;
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCa0TlNwRg1yYij8jMVwAKt-UfsH9AC7Ms",
    authDomain: "text-visibility.firebaseapp.com",
    databaseURL: "https://text-visibility.firebaseio.com",
    projectId: "text-visibility",
    storageBucket: "",
    messagingSenderId: "459974708907"
  };
  firebase.initializeApp(config);
  database = firebase.database();


window.onload = function() {
    document.getElementById("box").style.backgroundColor = makeColor();
};

function makeColor(){
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    color = 'rgb('+ r + ',' + g +','+ b +')';
    document.getElementById("col-red").innerHTML = r;
    document.getElementById("col-green").innerHTML = g;
    document.getElementById("col-blue").innerHTML = b;
    console.log(color);
    return color;
}


function saveData(obj) {
    textValue = obj.value;
    let colorDatabase = database.ref('colors');

    var data = {
        r: r, 
        b: b, 
        g: g,
        label : textValue
    }
    console.log(data);

    let color = colorDatabase.push(data, finished);
    console.log("Firebase granted key: " + color.key);
}

function finished(err) {
    if (err) {
        console.log("error");
        console.log(err);
    } else {
        console.log("success");
    }
}