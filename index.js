const Projects = [
    {
        name: "NeuroEvolution Flappy Bird",
        description: "A NeuroEvolution driven self learning version of classic game Flappy Bird",
        github: "https://github.com/crudybagger/NeuroEvolution-Flappy-Bird",
        live: "https://sarang.nitw.in/flappy/",
        tags: ["JavaScript", "Machine Learning", "Frontend"]
    },
    {
        name: "Highlighter",
        description: "A chrome extension to highlight any text on any website with any color you like",
        github: "https://github.com/crudybagger/Highlighter",
        live: "https://sarang.nitw.in/Highlighter/",
        tags: ["JavaScript", "Backend", "Chrome Extension"]
    },
    {
        name: "BlockChain",
        description: "A useful API to build a BlockChain based on SHA-256 Hash function with customizable difficulty",
        github: "https://github.com/crudybagger/BlockChain",
        live: "https://sarang.nitw.in/BlockChain/",
        tags: ["Node.js", "JavaScript", "Backend"]
    },
    {
        name: "TODO List CTF Challenge",
        description: "A CTF challenge to find the flag by exploiting a TODO list web application",
        github: "https://github.com/crudybagger/TODO-challenge-frontend",
        live: "https://todo-eta-flame.vercel.app/",
        tags: ["React JS", "Backend", "Frontend", "Security"]
    },
    {
        name: "Arrange the tiles game with solver",
        description: "A 15 Tile Game made in React included with Solver to give optimized solution",
        github: "",
        live: "https://sequence-game.vercel.app/",
        tags: ["React JS", "JavaScript", "Frontend"]
    }
]

const availableTags = ["JavaScript", "React JS", "Machine Learning", "Node.js", "Backend", "Frontend"];


var projects = document.getElementsByClassName("project-no-images")[0];
var projectContainer = document.createElement("div");
projectContainer.className = "container";
{/* <div class="heading">
    <h2>My Projects&nbsp;</h2>
</div> */}
var heading = document.createElement("div");
heading.className = "heading";
var h2 = document.createElement("h2");
h2.innerHTML = "My Projects";
heading.appendChild(h2);
// Add a button to select the type of projects to be displayed based on tags
let selectedTags = []; // Default
let showAll = true;

var buttonToolbar = document.createElement("div");
buttonToolbar.className = "btn-toolbar justify-content-center";
var buttonGroup = document.createElement("div");
buttonGroup.className = "btn-group justify-content-center";
buttonGroup.role = "group";

for(var i = 0; i < availableTags.length; i++) {
    var tag = availableTags[i];
    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-outline-primary btn-sm";
    button.innerHTML = tag;
    button.onclick = function() {
        showAll = false;
        Allbutton.className = "btn btn-outline-primary btn-sm";
        if (selectedTags.includes(this.innerHTML)) {
            this.className = "btn btn-outline-primary btn-sm";
            selectedTags.splice(selectedTags.indexOf(this.innerHTML), 1);
            if (selectedTags.length == 0) {
                showAll = true;
                Allbutton.className = "btn btn-outline-primary btn-sm active";
            }
        } else {
            this.className = "btn btn-primary btn-sm";
            selectedTags.push(this.innerHTML);
        }
        console.log(selectedTags);
        renderProjects();
    }
    buttonGroup.appendChild(button);
}
buttonToolbar.appendChild(buttonGroup);
// make a button to show all projects
var buttonGroup2 = document.createElement("div");
buttonGroup2.className = "btn-group";
var Allbutton = document.createElement("button");
Allbutton.type = "button";
Allbutton.className = "btn btn-outline-primary btn-sm active";
Allbutton.innerHTML = "All";
Allbutton.onclick = function() {
    if (showAll) return;
    showAll = true;
    selectedTags = [];
    for(var i = 0; i < buttonGroup.children.length; i++) {
        buttonGroup.children[i].className = "btn btn-outline-primary btn-sm";
    }
    this.className = "btn btn-outline-primary btn-sm active";
    renderProjects();
}
buttonGroup2.appendChild(Allbutton);
buttonToolbar.appendChild(buttonGroup2);

heading.appendChild(buttonToolbar);


projectContainer.appendChild(heading);

var row = document.createElement("div");
row.className = "row";
const renderProjects = () => {
    // clear row
    row.innerHTML = "";
    for (var i = 0; i < Projects.length; i++) {
        var project = Projects[i];
        var col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";
        var card = document.createElement("div");
        card.className = "project-card-no-image";
        var h3 = document.createElement("h3");
        h3.innerHTML = project.name;
        var h4 = document.createElement("h4");
        h4.innerHTML = project.description;
        var github = document.createElement("a");
        github.className = "btn btn-outline-primary btn-sm";
        github.role = "button";
        github.href = project.github;
        github.target = "_blank";
        github.innerHTML = "Github";
        var live = document.createElement("a");
        live.className = "btn btn-outline-primary btn-sm";
        live.role = "button";
        live.href = project.live;
        live.target = "_blank";
        live.innerHTML = "Live";
        var tags = document.createElement("div");
        tags.className = "tags";
        var tag = document.createElement("div");
        tag.innerHTML = project.tags[0];
        tags.appendChild(tag);
        card.appendChild(h3);
        card.appendChild(h4);
        card.appendChild(github);
        card.appendChild(live);
        card.appendChild(tags);
        col.appendChild(card);
        if (selectedTags.some(tag => project.tags.includes(tag)) || showAll)
            row.appendChild(col);
    }
}
renderProjects();
projectContainer.appendChild(row);

    // <div class="col-md-6 col-lg-4">
    //     <div class="project-card-no-image">
    //         <h3>NeuroEvolution Flappy Bird</h3>
    //         <h4>A NeuroEvolution driven self learning version of classic game Flappy Bird</h4>
    //         <a class="btn btn-outline-primary btn-sm" role="button" href="https://github.com/crudybagger/NeuroEvolution-Flappy-Bird" target="_blank">Github</a>
    //         <a class="btn btn-outline-primary btn-sm" role="button" href="https://sarang.nitw.in/flappy/" target="_blank">Live</a>
    //         <div class="tags">JavaScript</div>
    //     </div>
    // </div>








projects.appendChild(projectContainer);