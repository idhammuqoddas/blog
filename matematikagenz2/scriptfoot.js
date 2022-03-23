for(let i=0;i < document.querySelectorAll("button").length;i++){
    if(document.querySelectorAll("button")[i].hasAttribute("data-target")){document.querySelectorAll("button")[i].setAttribute("data-bs-target",document.querySelectorAll("button")[i].getAttribute("data-target"))};
    if(document.querySelectorAll("button")[i].hasAttribute("data-toggle")){document.querySelectorAll("button")[i].setAttribute("data-bs-toggle",document.querySelectorAll("button")[i].getAttribute("data-toggle"))};
};

for(let i=0;i < document.querySelectorAll( ".text-right").length;i++){
    document.querySelectorAll( ".text-right")[i].className+= " text-end"
}

for(let i=0;i < document.querySelectorAll( ".float-right").length;i++){
    document.querySelectorAll( ".float-right")[i].className+= " float-end"
}    

for(let i=0;i < document.querySelectorAll( ".badge-danger ").length;i++){
    document.querySelectorAll( ".badge-danger")[i].className+= " bg-danger"
}
