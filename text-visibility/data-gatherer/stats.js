let colorByvisibility = {
    'light': [],
    'dark': []
}

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
let ref = fbdb.ref('colors');
ref.once('value', getData);

function getData(results) {
    let data  = results.val();
    let keys = Object.keys(data);
    document.getElementById('stat-total').innerHTML = keys.length;

    for (let key of keys){
        let record = data[key];
        let colr = 'rgb('+ record.r + ',' +  record.g + ',' + record.b +')';
        colorByvisibility[record.label].push(colr)
    }
    
    document.getElementById('stat-light').innerHTML = colorByvisibility.light.length;
    document.getElementById('stat-dark').innerHTML = colorByvisibility.dark.length;
}

