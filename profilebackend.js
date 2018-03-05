function sendResume(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://localhost:51718/api/fileup", false );
    xmlHttp.send(document.getElementById("fileUpload").uploadedFile.value);
    alert(xmlHttp.responseText);
}