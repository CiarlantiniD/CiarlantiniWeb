
var ex = {folderImgName: "",title: "",description: "",features: "",techtags: "",
date: "", version: "",gender: "",language: "",type: "",os: "",processor: "",memory: "",graphics: "",storage: "",net: "",notes: "",staff: "",ssNumber : 0}

var thisWork;

function OnLoad(){
    thisWork = works[0]; // modificar por selector de Nombres por el titulo

    LoadWebMeta();

    LoadBanner();
    LoadTitle();
    LoadDescription();
    LoadFeatures();
    LoadTechTags();
    LoadDetails();
    LoadStaff();
    LoadRequeriments();
    LoadScreenShots();
    LoadShereLinks();
}

function LoadWebMeta(){
    // + Cargar titulo de la pagina
    // + Description

    // + og:Tittle
    // + og:Image
    // + og:Description
}

function LoadBanner(){
    // + Cargar banner según dirección asignada
}

function LoadTitle(){
    document.getElementById("title").textContent= thisWork.title;
}

function LoadDescription(){
    document.getElementById("description").textContent= thisWork.description;
}

function LoadFeatures(){
    var result = "";
    thisWork.features.split(";").forEach(element => {
        result = result + "· " + element + "\r\n";
    });

    document.getElementById("features").textContent= result;
}

function LoadTechTags(){

    thisWork.techtags.split(";").forEach(element => {
        var elementDiv = document.createElement("div");
        elementDiv.appendChild(document.createTextNode(element));
        elementDiv.classList.add("TechTag");

        document.getElementById('techtags').appendChild(elementDiv);
    });
}



function LoadDetails(){
    document.getElementById("details-date").textContent= thisWork.date;
    document.getElementById("details-version").textContent= thisWork.version;
    document.getElementById("details-gender").textContent= thisWork.gender;
    document.getElementById("details-language").textContent= thisWork.language;
    document.getElementById("details-type").textContent= thisWork.type;
}

function LoadStaff(){
    var result = "";
    thisWork.staff.split(";").forEach(element => {
        result = result + element + "\r\n";
    });
    document.getElementById("staff").textContent= result;
}

function LoadRequeriments(){
    document.getElementById("requirements-os").textContent= thisWork.os;
    document.getElementById("requirements-processorMemory").textContent= thisWork.processor + " / " + thisWork.memory;
    document.getElementById("requirements-storage").textContent= thisWork.storage;
    document.getElementById("requirements-graphics").textContent= thisWork.graphics;
    document.getElementById("requirements-net").textContent= thisWork.net;
    document.getElementById("requirements-notes").textContent= thisWork.notes;
}

function LoadScreenShots(){

    for(i = 1; i <= 6 ; i++){

        var a = document.getElementById("ss"+ i);
        var b = document.getElementById("ssImg"+ i);

        if (i <= thisWork.ssNumber){
            
            a.href = "../img/" + thisWork.folderImgName + "/" + i + ".jpg";
    
            b.src = "../img/" + thisWork.folderImgName + "/" + i + ".jpg";
            b.alt = thisWork.title + " Screenshots";
            b.classList.add("screenShots");
        }
        else{
            b.classList.add("elementOff");
        }  
    }
}


function LoadShereLinks(){

    var linkArray = [thisWork.link1, thisWork.link2, thisWork.link3, thisWork.link4];
    var i = 1;

    linkArray.forEach(element => {
        var link = document.getElementById("link"+ i);
        var div = document.getElementById("linkbox"+ i);

        if(0 <= element.search("itch.io")){
            link.href = element;
            div.textContent = "Itch.Io";
            div.classList.add("linksboxItchIo");
        }
        else{
            div.classList.add("elementOff");
        }

        /*

        .linksboxTwitter{color: #2AA3EF;}
.linksboxTwitter:hover{color: white; background-color: #2AA3EF; border: 3px solid #2AA3EF;}

.linksboxLinkedIn{color: #1178B3;}
.linksboxLinkedIn:hover{color: white; background-color: #1178B3; border: 3px solid #1178B3;}

.linksboxSteam{color: #b52ac2;}
.linksboxSteam:hover{color: white; background-color: #b52ac2; border: 3px solid #b52ac2;}

.linksboxReedit{color: #FC471E;}
.linksboxReedit:hover{color: white; background-color: #FC471E; border: 3px solid #FC471E;}

.linksboxItchIo{color: #F75D60;}
.linksboxItchIo:hover{color: white; background-color: #F75D60; border: 3px solid #F75D60;}

.linksboxGoogleDrive{color: #F9BB2D;}
.linksboxGoogleDrive:hover{color: white; background-color: #F9BB2D; border: 3px solid #F9BB2D;}

.linksboxGitHub{color: #582E7C;}
.linksboxGitHub:hover{color: white; background-color: #582E7C; border: 3px solid #582E7C;}

.linksboxVimeo{color: #5f93ab;}
.linksboxVimeo:hover{color: white; background-color: #5f93ab; border: 3px solid #5f93ab;}





*/

        i++;
    });

    /*
    for(i = 1; i => 4;i++){

        

        if (i <= thisWork.ssNumber){
            
            a.href = "../img/" + thisWork.folderImgName + "/" + i + ".jpg";
    
            b.src = "../img/" + thisWork.folderImgName + "/" + i + ".jpg";
            b.alt = thisWork.title + " Screenshots";
            b.classList.add("screenShots");

            // class link
            // link
            .textContent= result; // nombre del Link
        }
        else{
            b.classList.add("elementOff");
        }  
    }
*/
}

