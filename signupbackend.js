/*document.getElementById('newUser').phone.addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});*/
function createUser(){
    var data = new FormData();
    var email = document.getElementById('newUser').email.value;
    var duplicate = new XMLHttpRequest();
    duplicate.open( "GET", "http://localhost:51718/api/student/"+email, false );
    duplicate.send(null);
    var dupeobj = JSON.parse(duplicate.responseText);
    if (dupeobj.email == "null"){
        data.append('name', document.getElementById('newUser').name.value);
        data.append('PhoneNumber', document.getElementById('newUser').phone.value);
        data.append('Email', document.getElementById('newUser').email.value);
        data.append('Password', document.getElementById('newUser').password.value);
        data.append('UserType', 'candidate');
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", "http://localhost:51718/api/student/post", false );
        xmlHttp.send(data);

    }
    else{
        alert("User with that email already exists");
    }

}

function login(){
    var email = document.getElementById('loginUser').email.value;
    var password = document.getElementById('loginUser').password.value;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:51718/api/student/"+email, false );
    xmlHttp.send(null);

    //var response = xmlHttp.responseText;
    var data =  JSON.parse(xmlHttp.responseText);
    //console.log(data.name);
    //alert(data.name);
    if (password == data.password && data.userType == 'candidate'){
        localStorage.session = "loggedin";
        localStorage.loggedUser = data.name;
        localStorage.userType = data.userType;
        localStorage.email = data.email;
    }
    else{
        alert("incorrect username or password, please try again");
    }


}