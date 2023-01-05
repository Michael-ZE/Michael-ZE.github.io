var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i=1; i<skills.length; i++) {
    skillsHTML+= "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

// display only home
function displayHome(){
    document.getElementById("home").style.display="block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("projects").style.display = "none";
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