window.onload = function() {
    main();
}

function main() {
    let inputs = document.getElementsByTagName("input");
    
    for (let radio of inputs) radio.addEventListener("change", (e) => {
        if (e.target.id == "supports") change("Table");
        if (e.target.id == "walls") change("Box");
        if (e.target.id == "partitions") change("Bookcase");
        if (e.target.id == "doors") change("Cupboard");
    });
}

function change(objectName) {
    document.getElementById("image").src = "src/img/" + objectName.toLowerCase() + ".png";
    document.getElementById("object").innerHTML = objectName;
}

