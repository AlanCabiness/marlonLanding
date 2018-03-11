function getjobs(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:51718/api/Posting", false );
    xmlHttp.send(null);
    var response = eval(xmlHttp.responseText);
    for (var i=0; i<response.length;i++){
        var data = response[i];
        var element = document.getElementById('jobsTable');
        element.innerHTML+="<tr id='row'><td>"+data.jobTitle+"</td><td>"+data.company+"</td><td>"+data.description+"</td><td>"+data.location+"</td><td id='buttonRow'><button class='applybutton' onclick='apply(this.parentNode.id, document.getElementById(this.parentNode.id).parentNode.children[0].innerText)' id='tempID'>"+"Apply"+"</button></td></tr>";
        //${id:"applyButton"+i}.appendTo("body");
        $('#row').prop("id", ("row"+i));
        $('#tempID').prop("id", ("applyButton"+i));
        $('#buttonRow').prop("id", ("buttonRow"+i));
    }
    //return JSON.parse(xmlHttp.responseText);
}
function filterKey(){
    var input, filter, table, tr, td, i;
    input = document.getElementById('keysearch');
    filter = input.value.toUpperCase();
    table = document.getElementById('jobsTable');
    tr = table.getElementsByTagName("tr");

    for (var i=1; i < tr.length; i++) {
        if(tr[i].textContent.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }
        else {
            tr[i].style.display = "none";
        }

    }
}

function apply(butid, jobName){
    //tdid = document.getElementById('butid').parentNode.id;
    document.getElementById(butid).innerHTML="<img src='img/check.gif' width='60' height='60'>";
    var data = new FormData();
    data.append('userName', localStorage.loggedUser);
    data.append('jobName', jobName);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://localhost:51718/api/student/score", false );
    xmlHttp.send(data);
}

function getJobsCompany(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:51718/api/Posting", false );
    xmlHttp.send(null);
    var response = eval(xmlHttp.responseText);
    for (var i=0; i<response.length;i++){
        var data = response[i];
        var element = document.getElementById('companyJobsTable');
        if (data.company == localStorage.loggedUser){
            element.innerHTML+="<tr><td>"+data.jobTitle+"</td><td>"+data.description+"</td><td>"+data.location+"</td><td>"+data.userAndScore.length+"</td><td id='buttonRow'><button class='applybutton' onclick='jobsModal(document.getElementById(this.parentNode.id).parentNode.children[0].innerText)' id='tempID'>"+"MarlonFit"+"</button></td></tr>";
            //${id:"applyButton"+i}.appendTo("body");
            $('#nameColumn').prop("id", ("nameColumn"+i));
            $('#tempID').prop("id", ("applyButton"+i));
            $('#buttonRow').prop("id", ("buttonRow"+i));
        }
    }
    //return JSON.parse(xmlHttp.responseText);
}

function jobsModal(jobName) {
    // Get the modal
    document.getElementById('bestFitTable').innerHTML="<tr class='header'><th>Name</th><th>Phone</th><th>Email</th><th>MarlonScore</th></tr>";
    var modal = document.getElementById('jobsModal');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", ("http://localhost:51718/api/Posting/"+jobName), false );
    xmlHttp.send(null);
    var data = JSON.parse(xmlHttp.responseText);
    for (var i=0; i<data.userAndScore.length; i++){
        var user = data.userAndScore[i];
        var element = document.getElementById('bestFitTable');
        element.innerHTML
        var request2 = new XMLHttpRequest();
        var email = user[0]
        request2.open( "GET", ("http://localhost:51718/api/student/"+email), false);
        request2.send(null)
        var userData = JSON.parse(request2.responseText);

        element.innerHTML+="<tr><td>"+userData.name+"</td><td>"+userData.phoneNumber+"</td><td>"+userData.email+"</td><td>"+user[1]+"</td></tr>";
        //${id:"applyButton"+i}.appendTo("body");
        $('#nameColumn').prop("id", ("nameColumn"+i));
        $('#tempID').prop("id", ("applyButton"+i));
        $('#buttonRow').prop("id", ("buttonRow"+i));
    }



}
function companyFilterKey(){
    var input, filter, table, tr, td, i;
    input = document.getElementById('companyKeySearch');
    filter = input.value.toUpperCase();
    table = document.getElementById('companyJobsTable');
    tr = table.getElementsByTagName("tr");

    for (var i=1; i < tr.length; i++) {
        if(tr[i].textContent.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }
        else {
            tr[i].style.display = "none";
        }

    }
}
