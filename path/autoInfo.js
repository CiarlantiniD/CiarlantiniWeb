var thisWork;

function OnLoadHOME(banner, relevatWork1, relevatWork2, relevatWork3){

    var firstSlider = null;
    var secondSlider = null;
    var thirdSlider = null;

    works.forEach(element => {
        
        if(element.folderName == banner){
            thisWork = element;
            CreateBanner();
        }
        else if(element.folderName == relevatWork1){
            firstSlider = element;
        }
        else if(element.folderName == relevatWork2){
            secondSlider = element;
        }
        else if(element.folderName == relevatWork3){
            thirdSlider = element;
        }
       
        
    });

    if(firstSlider != null){
        thisWork = firstSlider;
        CreateSliders("relevant");
    }

    if(secondSlider != null){
        thisWork = secondSlider;
        CreateSliders("relevant");
    }

    if(thirdSlider != null){
        thisWork = thirdSlider;
        CreateSliders("relevant");
    }

}



function OnLoadALLWORKS(){

    works.forEach(element => {
        thisWork = element;
        CreateSliders(thisWork.category);
    });
}



function OnLoadTHISWORK(nameWork){

    works.forEach(element => {
        
        if (element.folderName == nameWork){
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



function CreateBanner(){

    var newBanner = document.createElement('div');
    newBanner.classList.add("col-sm-12");
    newBanner.classList.add("col-md-12");
    newBanner.classList.add("col-lg-12");
    newBanner.classList.add("col-xl-12");

    var newBannerLink = document.createElement('a');
    newBannerLink.href = "works/"  + thisWork.folderName + ".html";

    var newBannerContainer = document.createElement('div');
    newBannerContainer.classList.add("banner");

    var bannerDir = 'url("img/' +  thisWork.folderName + '/banner.svg")';
    newBannerContainer.style.backgroundImage = bannerDir;

/*
    var currentDate = new Date();
    var workDateAdded = new Date(thisWork.dateAdded);
    currentDate.setDate(currentDate.getDate()-30);
    
    if(currentDate < workDateAdded){
        var tagNew = document.createElement('div');
        tagNew.textContent = "Nuevo";
        tagNew.classList.add("tag");
        tagNew.classList.add("tagNew");

        newBannerContainer.appendChild(tagNew);
    }
    else if(!thisWork.dateAdded){
        var tagComingSoon = document.createElement('div');
        tagComingSoon.textContent = "Próximamente";
        tagComingSoon.classList.add("tag");
        tagComingSoon.classList.add("tagComingSoon");

        newBannerContainer.appendChild(tagComingSoon);
    }*/

    var newBannerTitle = document.createElement('div');
    newBannerTitle.classList.add("bannerTitle");
    newBannerTitle.textContent = thisWork.title ;

    var newBannerText = document.createElement('div');
    newBannerText.textContent = thisWork.description;

    
    newBannerContainer.appendChild(newBannerTitle);
    newBannerContainer.appendChild(newBannerText);

    newBannerLink.appendChild(newBannerContainer);

    newBanner.appendChild(newBannerLink);

    document.getElementById("bannerRow").appendChild(newBanner);
}


function CreateSliders(assignedDiv){

    var newSlice = document.createElement('div');
    newSlice.classList.add("col-sm-12");
    newSlice.classList.add("col-md-12");
    newSlice.classList.add("col-lg-4");
    newSlice.classList.add("col-xl-4");

    var newSliceLink = document.createElement('a');
    newSliceLink.href = "works/"  + thisWork.folderName + ".html";

    var newSliceContainer = document.createElement('div');
    newSliceContainer.classList.add("slider");
    newSliceContainer.classList.add("sliderCover");

    var sliceDir = 'url("img/' +  thisWork.folderName + '/banner.svg")';
    newSliceContainer.style.backgroundImage = sliceDir;


    var currentDate = new Date();
    var workDateAdded = new Date(thisWork.dateAdded);
    currentDate.setDate(currentDate.getDate()-30);
    
    if(currentDate < workDateAdded){
        var tagNew = document.createElement('div');
        tagNew.textContent = "Nuevo";
        tagNew.classList.add("tag");
        tagNew.classList.add("tagNew");

        newSliceContainer.appendChild(tagNew);
    }
    else if(!thisWork.dateAdded){
        var tagComingSoon = document.createElement('div');
        tagComingSoon.textContent = "Próximamente";
        tagComingSoon.classList.add("tag");
        tagComingSoon.classList.add("tagComingSoon");

        newSliceContainer.appendChild(tagComingSoon);
    }

    var newSliceTitle = document.createElement('div');
    newSliceTitle.classList.add("sliderTitle");
    newSliceTitle.textContent = thisWork.title ;

    var newSliceText = document.createElement('div');
    newSliceText.textContent = thisWork.shortDescription;

    
    newSliceContainer.appendChild(newSliceTitle);
    newSliceContainer.appendChild(newSliceText);

    newSliceLink.appendChild(newSliceContainer);

    newSlice.appendChild(newSliceLink);

    document.getElementById(assignedDiv + "Row").appendChild(newSlice);
}






/* -------------  Load Function ------------- */

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
        var bannerDir = 'url("../img/' +  thisWork.folderName + '/banner.svg")';
        document.getElementById("wBanner").style.backgroundImage = bannerDir;
    }
    else {
        document.getElementById("wBanner").classList.add("elementOff");
    }
}

function LoadIframe(){

    if (thisWork.iframe){
        var iframeDir = "../support/" + thisWork.folderName + "/index.html";
        document.getElementById("wIframe").src = iframeDir;
        document.getElementById("wIframe").height = thisWork.iframe;
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
    var ul = document.getElementById("features");

    thisWork.features.split(";").forEach(element => {

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(element + "."));
        ul.appendChild(li);
    });

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

    if(thisWork.ssNumber == 0){
        document.getElementById("headerScreenshots").classList.add("elementOff");
        document.getElementById("separatorScreenshots").classList.add("elementOff");
    }

    for(i = 1; i <= 6 ; i++){

        var a = document.getElementById("ss"+ i);
        var b = document.getElementById("ssImg"+ i);

        if (i <= thisWork.ssNumber){
            
            a.href = "../img/" + thisWork.folderName + "/" + i + ".jpg";

            var ssDir = 'url("../img/' + thisWork.folderName + '/' + i + '.jpg")';
            b.style.backgroundImage = ssDir;
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
        else if(0 <= element.search("form")){
            link.href = element;
            div.textContent = "Formulario";
            div.classList.add("linksboxForm");
        }
        else{
            div.classList.add("elementOff");
        }

        i++;
    });

}

