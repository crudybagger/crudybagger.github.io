const Projects = [
    {
        name: "NeuroEvolution Flappy Bird",
        description: "A NeuroEvolution driven self learning version of classic game Flappy Bird",
        github: "https://github.com/crudybagger/NeuroEvolution-Flappy-Bird",
        live: "https://sarang.nitw.in/flappy/",
        tags: ["JavaScript", "Machine Learning"]
    },
    {
        name: "Highlighter",
        description: "A chrome extension to highlight any text on any website with any color you like",
        github: "https://github.com/crudybagger/Highlighter",
        live: "https://sarang.nitw.in/Highlighter/",
        tags: ["JavaScript"]
    },
    {
        name: "BlockChain",
        description: "A useful API to build a BlockChain based on SHA-256 Hash function with customizable difficulty",
        github: "https://github.com/crudybagger/BlockChain",
        live: "https://sarang.nitw.in/BlockChain/",
        tags: ["Node.js", "JavaScript"]
    },
]

var projects = document.getElementsByClassName("project-no-images")[0];
var projectContainer = document.createElement("div");
projectContainer.className = "container";
{/* <div class="heading">
    <h2>My Projects&nbsp;</h2>
</div> */}
var heading = document.createElement("div");
heading.className = "heading";
var h2 = document.createElement("h2");
h2.innerHTML = "My Projects&nbsp;";
heading.appendChild(h2);
projectContainer.appendChild(heading);

var row = document.createElement("div");
row.className = "row";
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
    row.appendChild(col);
}
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