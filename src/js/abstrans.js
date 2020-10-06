window.onload = function() {
    main();
}

function main() {
    let cls = document.getElementById("class"); 
    obj = document.getElementById("object");
    inputs = document.getElementsByTagName("input");

    for (let radio of inputs) radio.addEventListener("change", (e) => {
        if (e.target.id == "supports") obj.innerHTML = "Стол";
        if (e.target.id == "walls") obj.innerHTML = "Ящик";
        if (e.target.id == "partitions") obj.innerHTML = "Стеллаж";
        if (e.target.id == "doors") obj.innerHTML = "Ящик/Пенал";
    });
}