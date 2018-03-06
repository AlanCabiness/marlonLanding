function createUser(){
    var data = new FormData();
    data.append('name', document.getElementById('newUser').name.value);
    data.append('PhoneNumber', document.getElementById('newUser').phone.value);
    data.append('Email', document.getElementById('newUser').email.value);
    data.append('Password', document.getElementById('newUser').password.value);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://localhost:51718/api/student/post", false );
    xmlHttp.send(data);
}

function login(){
    var email = document.getElementById('loginUser').email.value;
    if (Number.isInteger(eval(email))){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://localhost:51718/api/student/"+email, false );
        xmlHttp.send(null);

        //var response = xmlHttp.responseText;
        var data =  JSON.parse(xmlHttp.responseText);
        //console.log(data.name);
        //alert(data.name);
        if (data.password){
            localStorage.session = "loggedin";
            localStorage.loggedUser = data.name;
        }
        else{
            alert("incorrect username or password, please try again");
        }
    }



}