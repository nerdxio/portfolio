projects = [
    {
        "name": "Yadway.com",
        "desc": "Yadway is a platform that connects people who want to learn and teach. ",
        "lang": "java",
        "data": "jul 1,2023"
    },
    {
        "name": "Yadway.com",
        "desc": "Yadway is a platform that connects people who want to learn and teach. ",
        "lang": "java",
        "data": "jul 1,2023"
    },
    {
        "name": "Yadway.com",
        "desc": "Yadway is a platform that connects people who want to learn and teach. ",
        "lang": "java",
        "data": "jul 1,2023"
    },
    {
        "name": "Yadway.com",
        "desc": "Yadway is a platform that connects people who want to learn and teach. ",
        "lang": "java",
        "data": "jul 1,2023"
    },
    {
        "name": "Yadway.com",
        "desc": "Yadway is a platform that connects people who want to learn and teach. ",
        "lang": "java",
        "data": "jul 1,2023"
    }
]


function renderProject() {
    let selectItem = document.getElementById("projects").innerHTML = "";
    let i = 0;
    let project;
    for (project of projects) {
        let content = `
             <div class="flex flex-wrap justify-center items-center space-x-9 gap-y-7 my-4  md:mx-28 ">
                    ${project.name}
            </div>
        `;
        selectItem = document.getElementById("projects").innerHTML += content;
        i++;
    }
}

// <img className="icon-work" src=${item.src} alt=${item.alt} />
