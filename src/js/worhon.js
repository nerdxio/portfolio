
items=[
    {
        "src":"./../images/html.05495ae7.svg",
        "alt": "htm;"
    },
    {
        "src":"./../images/css.345069f5.svg",
        "alt": "css"
    },
    {
        "src":"./../images/js.179e01b0.svg",
        "alt": "js"
    },
    {
        "src":"./../images/node.4046c32c.svg",
        "alt": "npde"
    },
    {
        "src":"./../images/vue.f7fc640e.svg",
        "alt": "vue"
    },
    {
        "src":"./../images/java.png",
        "alt": "java"
    },
    {
        "src":"./../images/spring-boot.svg",
        "alt": "java"
    },
    {
        "src":"./../images/github.cca4fc85.svg",
        "alt": "github"
    },
]


function renderWorkOn(){
    let itemWork = document.getElementById("work").innerHTML="";
    let i=0;
    let item;
    for(item of items){
        let content = `
     <div id="work" class="flex flex-wrap justify-center items-center space-x-9 gap-y-7 my-4  md:mx-28 ">
            <img class="icon-work" src=${item.src} alt=${item.alt} />       
    </section>`;
        itemWork =document.getElementById("work").innerHTML+=content;
        i++;
    }
}
renderWorkOn();