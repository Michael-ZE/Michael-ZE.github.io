var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i=1; i<skills.length; i++) {
    skillsHTML+= "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

var pageIds = ["home", "skills", "languages", "projects"];


// function hideAllPages() {
    pageIds.forEach(function(id) {
        hide(id);
    });                    
//    hide("home");
//    hide("skills");
//    hide("languages");
//    hide("projects");
//  sau (alta varianta):
function hideAllPages() {
    pageIds.forEach(function(pageId) {
        hide(pageId);
    });   
}

function show(id){
    document.getElementById(id).style.display="block";
}

function hide(id){
    console.info("hide", id);
 document.getElementById(id).style.display="none";
}



// display only home
//function displayHome(){
    document.getElementById("home").style.display="block";
    // sau scriu doar: hideAllPages(); 
    // in loc de "display = none" de 3 ori
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("projects").style.display = "none";

function displayHome(){
    hideAllPages();
    show("home");
}    


function displaySkills(){
    //trebuie sa afisam DOAR skills page -varianta lunga
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("languages").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function displayLanguages(){
    // o varianta mult mai scurta
   displayPage("languages");
}

function displayProjects(){
   displayPage("projects");
}

//function displayHome(){ hideAllPages(); show("home");}    

function displayPage(id) {
    hideAllPages();
    show(id);
}

displayPage("home");
//= displayHome();