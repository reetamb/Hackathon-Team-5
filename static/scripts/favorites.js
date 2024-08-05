var favorites = document.getElementById("favs");
var careers = favorites.innerHTML.slice(1, -1).split(", ");
var list = document.getElementById("list");

list.innerHTML = "";

fetch('static/scripts/data/careers.json')
        .then((response) => response.json())
        .then((json) => {
            console.log(careers);
            console.log(careers.length);
            if (careers.length == 1 && careers[0] == "") {
                let head = document.getElementById("header");
                let div = document.createElement("div");
                div.classList.add("empty");
                div.innerHTML = "No Favorites Yet";
                head.appendChild(div);
                list.appendChild(head);
            } else {
                list.innerHTML = "";
                for (let i = 0; i < careers.length; i++) {
                    console.log(careers[i])
                    let job = careers[i].slice(1,-1);
                    console.log(job);
                    console.log(json)
                    console.log(json[job])
                
                    let li = document.createElement("li");
                    let div = document.createElement("div");
                    div.classList.add("list-item")
                    let title = document.createElement("div");
                    title.classList.add("title");
                    let rectangle = document.createElement("div");
                    rectangle.classList.add("rectangle");
                    let info = document.createElement("div");
                    info.classList.add("info");
                    let p1 = document.createElement("p");
                    let p2 = document.createElement("p");
                    let p3 = document.createElement("p");
                    p1.classList.add("p");
                    p2.classList.add("p");
                    p3.classList.add("p");

                    let pdiv = document.createElement("div");
                    let proceed = document.createElement("a");
                    proceed.innerText = "Finalize Choice"
                    proceed.id = json[job]["name"].replace(" ", "_");
                    proceed.href = "/resumebuilder?job=" + proceed.id;
                    console.log(proceed.id);
                    pdiv.classList.add("proceed");
                    pdiv.classList.add("rectangle");
                    pdiv.appendChild(proceed);
                
                    title.innerHTML = json[job]["name"];
                    rectangle.innerHTML = json[job]["category"];
                    p1.innerHTML = json[job]["description"];
                    p2.innerHTML = json[job]["salary"];
                    p3.innerHTML = json[job]["degree"];
                
                    info.appendChild(p1);
                    info.appendChild(p2);
                    info.appendChild(p3);
                    info.appendChild(pdiv);
                
                    div.appendChild(title);
                    div.appendChild(rectangle);
                    div.appendChild(info);
                
                    li.appendChild(div);
                
                    list.appendChild(li);
                }
            }
        });