
var ex = {folderImgName: "",title: "",description: "",features: "",tech0: "",tech1: "",tech2: "",tech3: "",tech4: "",
date: "",gender: "",language: "",type: "",distribution: "",os: "",processor: "",memory: "",graphics: "",storage: "",net: "",notes: "",staff: "",ssnumber : 0}

var thisWork;

function OnLoad(){
    thisWork = works[0]; // modificar por selector de Nombres por el titulo
    LoadTitle();
    LoadDescription();
}


function LoadTitle(){
    document.getElementById("title").textContent= thisWork.title;
}

function LoadDescription(){
    document.getElementById("description").textContent= thisWork.description;
}