
var ex = {folderImgName: "",title: "",description: "",features: "",techtags: "",
date: "", version: "",gender: "",language: "",type: "",os: "",processor: "",memory: "",graphics: "",storage: "",net: "",notes: "",staff: "",ssNumber : 0}


var thisWork;

//function OnLoadHOME(){};

function OnLoadTHISWORK(nameWork){

    works.forEach(element => {
        
        if (element.title == nameWork){
            thisWork = element;
        }
    });

    LoadWebMeta();
    LoadBanner();
    LoadIframe();
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
    
    var newTitle = "Darío Ciarlantini // Trabajos // " + thisWork.title;
    var ogTitle = "Darío Ciarlantini | " + thisWork.title;
    var bannerDir = "../img/" +  thisWork.title + "/banner.png";

    document.title = newTitle
    $('meta[name=description]').attr('content', thisWork.shortDescription);

    $("meta[property='og:title']").attr("content", ogTitle);
    $("meta[property='og:image']").attr("content", bannerDir);
    $("meta[property='og:description']").attr("content", thisWork.shortDescription);
}

function LoadBanner(){
    if (thisWork.banner){
        var bannerDir = 'url("../img/' +  thisWork.title + '/banner.png")';
        document.getElementById("wBanner").style.backgroundImage = bannerDir;
    }
    else {
        document.getElementById("wBanner").classList.add("elementOff");
    }
}

function LoadIframe(){

    if (thisWork.iframe){
        var iframeDir = "../support/" + thisWork.iframe;
        document.getElementById("wIframe").src = iframeDir;
    }
    else {
        document.getElementById("wIframe").classList.add("elementOff");
    }
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
            
            a.href = "../img/" + thisWork.folderName + "/" + i + ".jpg";
    
            b.src = "../img/" + thisWork.folderName + "/" + i + ".jpg";
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
        else if(0 <= element.search("github")){
            link.href = element;
            div.textContent = "GitHub";
            div.classList.add("linksboxGitHub");
        }
        else if(0 <= element.search("steam")){
            link.href = element;
            div.textContent = "Steam";
            div.classList.add("linksboxSteam");
        }
        else if(0 <= element.search("reedit")){
            link.href = element;
            div.textContent = "Reedit";
            div.classList.add("linksboxReedit");
        }
        else if(0 <= element.search("drive")){
            link.href = element;
            div.textContent = "Drive";
            div.classList.add("linksboxGoogleDrive");
        }
        else if(0 <= element.search("youtu")){
            link.href = element;
            div.textContent = "Youtube";
            div.classList.add("linksboxYouTube");
        }
        else if(0 <= element.search("vimeo")){
            link.href = element;
            div.textContent = "Video";
            div.classList.add("linksboxVimeo");
        }
        else{
            div.classList.add("elementOff");
        }

        i++;
    });

}

