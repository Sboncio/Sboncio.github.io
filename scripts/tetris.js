
let notInFolder = "pages/"
let inFolder = ""

let skills_scrolling = false;

if (window.location.href.indexOf("index") != -1 || window.location.href.split('/').length == 4) {
    notInFolder = "pages/"
    inFolder = ""
} else {
    notInFolder = ""
    inFolder = "../"
}

document.getElementById("heading").innerHTML = `
<nav>
<ul id="navbar">
    <li>
        <a href="`+ inFolder + `index.html">
            Home
        </a>
    </li>
    <li>
        <a href="`+ notInFolder + `Experience.html">
        Experience
        </a>
    </li>
    <li>
        <a href="`+ notInFolder + `skills-easyread.html">
            Skills
        </a>
    </li>
    <li>
        <a href="`+ notInFolder + `projects.html">
            Personal Projects
        </a>
    </li>
    <!--<li>
        <a href="`+ notInFolder + `references.html">
            References
        </a>
    </li>-->
    <li>
        <a href="`+ notInFolder + `tetris.html" style="float:right">
            Bored At Work?
        </a>
    </li>
    <li>
        <a href="`+ inFolder + `S_Asquith.pdf" style="float:right">
            CV
        </a>
    </li>
</ul> 
</nav>`

document.getElementById("footing").innerHTML = `
<p>
    This site is new and is likely to change frequently.
</p>
<a href="https://github.com/Sboncio">
    <i class="fa fa-github" style="font-size:36px; color:white" ></i>
</a>
<a href="https://www.linkedin.com/in/samuel-asquith-857384178/">
    <i class="fa fa-linkedin" style="font-size:36px; color:white"></i>          
</a>`

