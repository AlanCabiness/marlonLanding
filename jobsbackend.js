function getjobs(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:51718/api/Posting", false );
    xmlHttp.send(null);
    var response = eval(xmlHttp.responseText);
    for (var i=0; i<response.length;i++){
        var data = response[i];
        var element = document.getElementById('jobsTable');
        element.innerHTML+="<tr><td>"+data.jobName+"</td><td>"+data.description+"</td><td>"+data.keywords+"</td><td id='buttonRow'><button class='applybutton' onclick='apply(this.parentNode.id)' id='tempID'>"+"Apply"+"</button></td></tr>";
        //${id:"applyButton"+i}.appendTo("body");
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

function apply(butid){
    //tdid = document.getElementById('butid').parentNode.id;
    document.getElementById(butid).innerHTML="<img src='img/check.gif' width='60' height='60'>";
}