function(){

    "use strict";

    var box,
        widgets = document.getElementById("widgets"),
        dashboard = document.getElementById("dashboard"),

        avaWidgets = [

            { id: "calander.png", name: "calander", pic: "http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Apps-Calendar-Metro-icon.png"},
            { id: "notepad.png", name: "notepad", pic:"http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Apps-Notepad-Metro-icon.png"}
        ],

    myWidgets = [],


    widgetDragStart = function (e){
        var sendThisWithTheDrag = e.target.dataset.widg;
        e.dataTransfer.setData("application/json", sendThisWithTheDrag);
        e.dataTransfer.setDragImage(box, 100, 40);
        event.dataTransfer.effectAllowed ="move";

    },


    widgetDrop = function(e) {


        e.preventDefault();
        var widg,
            recieved =  e.dataTransfer.setData("application/json");
        if (recieved){
            widg = JSON.parse(recieved);
        }
    }
        e.currentTarget.appendChild(document.getElementById(widg.id));
        if (e.currentTarget === widgets) {
                    myWidgets.push(widg.name);
                    document.getElementById("log").innerHTML = "widgets added to dashboard: " + myWidgets.join(", ");
                }

      dragHandler = function (e) {
            e.preventDefault();
        },

     addWidget = function (widg) {
            var widgPic = document.createElement("div"),
                pic = document.createElement("img"),
                nom = document.createElement("p");

            widgPic.setAttribute("id", cat.id);
            widgPic.setAttribute("draggable", true);
            widgPic.setAttribute("class", "widget");
            widgPic.addEventListener("dragstart", widgetDragStart);
            widgets.appendChild(widgPic);

            nom.innerText = widg.name;
            widgPic.appendChild(nom);

            pic.setAttribute("src", widg.pic);
            pic.setAttribute("alt", "picture of widet");
            pic.setAttribute("draggable", false);
            widgPic.appendChild(pic);

            widgPic.setAttribute("data-app", JSON.stringify(widg));
        };

}

    widget.addEventListener("drop", widgetDrop);
    widget.addEventListener("dragover", dragHandler);
    dashboard.addEventListener("drop", widgetDrop);
    dashboard.addEventListener("dragover", dragHandler);

    widg.forEach(addWidget);

}());
