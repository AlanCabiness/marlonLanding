function sendResume(filename){
    var file = document.getElementById('fileUpload').uploadedFile.files[0];
    var reader  = new FileReader();
    reader.onload= function(){
        text = reader.result;
        text = text.replace(/\r\n/g, " ");
        text = text.split(" ");
        var data = new FormData();
        for (var i = 0; i < text.length; i++) {
            data.append('newResume[]', text[i]);
        }
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "PUT", ("http://localhost:51718/api/student/"+localStorage.email), false );
        xmlHttp.send(data);
    };
    reader.readAsText(file);
}

function createJob(){
    var data = new FormData();
    //data.append('JobTitle', document.getElementById('newJob').jobTitle.value);
    data.append('Company', localStorage.loggedUser);
    data.append('Location', document.getElementById('newJob').location.value);
    data.append('Description', document.getElementById('newJob').description.value);
    var keys = document.getElementById('newJob').keywords.value;
    keys = keys.replace(/\n/g, " ");
    keys = keys.split(" ");
    for (var i = 0; i < keys.length; i++) {
        data.append('Keywords[]', keys[i]);
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", ("http://localhost:51718/api/Posting/"+document.getElementById('newJob').jobTitle.value), false );
    xmlHttp.send(data);

}