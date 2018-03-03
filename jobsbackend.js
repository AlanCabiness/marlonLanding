function getjobs(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:51718/api/student/"+email, false );
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}