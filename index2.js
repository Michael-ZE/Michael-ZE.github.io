var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i=1; i<skills.length; i++) {
    skillsHTML+= "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function hideAllPages() {
    hide("home");
    hide("skills");
    hide("languages");
    hide("projects");
} 

function show(id){
    document.getElementById(id).style.display="block";
}

function hide(id){
 document.getElementById(id).style.display="none";
}



// display only home
//function displayHome(){
    document.getElementById("home").style.display="block";
    // sau scriu doar: hideAllPages(); 
    // in loc de "display = none" de 3 ori
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("projects").style.display = "none";}

function displayHome(){
    hideAllPages();
    show("home");
}    

function displaySkills(){
    //console.warn("trebuie sa afisam DOAR skills page");
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("languages").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function displayLanguages(){
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "block";
    document.getElementById("projects").style.display = "none";
}

function displayProjects(){
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("projects").style.display = "block";
}
displayHome();