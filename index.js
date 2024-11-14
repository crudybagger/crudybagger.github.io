const Projects = [
    {
        name: "NeuroEvolution Flappy Bird",
        description: "A NeuroEvolution driven self learning version of classic game Flappy Bird",
        github: "https://github.com/crudybagger/NeuroEvolution-Flappy-Bird",
        live: "https://crudybagger.github.io/flappy/",
        tags: ["JavaScript", "Machine Learning", "Frontend"]
    },
    {
        name: "Highlighter",
        description: "A chrome extension to highlight any text on any website with any color you like",
        github: "https://github.com/crudybagger/Highlighter",
        live: "https://crudybagger.github.io/Highlighter/",
        tags: ["JavaScript", "Backend", "Chrome Extension"]
    },
    {
        name: "BlockChain",
        description: "A useful API to build a BlockChain based on SHA-256 Hash function with customizable difficulty",
        github: "https://github.com/crudybagger/BlockChain",
        live: "https://crudybagger.github.io/BlockChain/",
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

const availableTags = ["React JS", "JavaScript", "Machine Learning", "Node.js", "Backend", "Frontend"];


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
buttonGroup.className = "btn-group-sm justify-content-center select-tags";
// if(screen.width < 500) {
//     buttonGroup.classList.add("btn-group-sm");
// }
// else {
//     buttonGroup.classList.add("btn-group");
// }
buttonGroup.role = "group";

var Allbutton = document.createElement("button");
Allbutton.type = "button";


for(var i = 0; i < availableTags.length; i++) {
    var tag = availableTags[i];
    var button = document.createElement("button");
    button.type = "checkbox";
    button.className = "btn btn-outline-primary btn-sm";
    button.innerHTML = tag;
    button.onclick = function() {
        showAll = false;
        Allbutton.className = "btn btn-outline-primary btn-sm";
        // if the button is already selected, remove it
        if (selectedTags.includes(this.innerHTML)) {
            this.className = "btn btn-outline-primary btn-sm";
            selectedTags.splice(selectedTags.indexOf(this.innerHTML), 1);
            if (selectedTags.length == 0) {
                showAll = true;
                Allbutton.className = "btn btn-primary btn-sm";
            }
        } else {
            this.className = "btn btn-primary btn-sm";
            selectedTags.push(this.innerHTML);
        }
        this.blur()
        renderProjects();
    }
    buttonGroup.appendChild(button);
}
buttonToolbar.appendChild(buttonGroup);
// buttonToolbar.appendChild(document.createElement("br"));
// make a button to show all projects
var buttonGroup2 = document.createElement("div");
buttonGroup2.className = "btn-group all-button-group";
// if(screen.width < 500) {
//     buttonGroup2.classList.add("btn-group-sm");
// }

Allbutton.className = "btn btn-primary btn-sm";
Allbutton.id = "all-button";
Allbutton.innerHTML = "All";
Allbutton.onclick = function() {
    this.blur()
    if (showAll) return;
    showAll = true;
    selectedTags = [];
    for(var i = 0; i < buttonGroup.children.length; i++) {
        buttonGroup.children[i].className = "btn btn-outline-primary btn-sm";
    }
    this.className = "btn btn-primary btn-sm";
    renderProjects();
}
buttonGroup2.appendChild(Allbutton);
buttonToolbar.appendChild(buttonGroup2);

heading.appendChild(buttonToolbar);


projectContainer.appendChild(heading);

var row = document.createElement("div");
row.className = "row project-row";
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
    //         <a class="btn btn-outline-primary btn-sm" role="button" href="https://crudybagger.github.io/flappy/" target="_blank">Live</a>
    //         <div class="tags">JavaScript</div>
    //     </div>
    // </div>
projects.appendChild(projectContainer);

// const body = document.getElementsByTagName("body")[0];jj
const navbar = document.getElementById("navbar");
const behind = document.getElementsByClassName("background")[0];
const foreground = document.getElementsByClassName("foreground")[0];
const scrollButtons = document.getElementsByClassName("scroll-button");
const html = document.getElementsByTagName("html")[0];
window.addEventListener("scroll", () => {
    scrollButtons[0].classList.add("active");
    scrollButtons[1].classList.remove("active");
    if (window.scrollY > 50) {
        scrollButtons[0].classList.remove("active");
        scrollButtons[1].classList.add("active");
        navbar.classList.add("scrolled");
        foreground.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        foreground.classList.remove("scrolled");
    }
    // translate the position of behind element
    behind.style.transform = `translate(-50%,-${50+(window.scrollY/30)}%)`;
    if(window.scrollY > 50) {
        behind.style.opacity = "0.2";
    } else {
        behind.style.opacity = "1";
    }
    if(window.scrollY > 500) {
        behind.style.display = "none";
    } else {
        behind.style.display = "block";
    }
})
for(let i = 0; i < scrollButtons.length; i++) {
    scrollButtons[i].addEventListener("click", () => {
        scrollButtons[i].classList.add("active");
        window.scrollTo({
            top: scrollButtons[i].attributes.getNamedItem("scrollValue").value,
            behavior: "auto"
        });
    });
}
