function sendResume(filename){
    var file = document.getElementById('fileUpload').uploadedFile.files[0];
    var reader  = new FileReader();
    reader.readAsText(file);
    var text = reader.result;
    text = text.replace(/\r\n/g, " ");
    text = text.split(" ");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://localhost:51718/api/parsed", false );
    xmlHttp.send(text);
}