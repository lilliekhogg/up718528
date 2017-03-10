(function () {
    "use strict";
    var box,
        dashboard = document.getElementById("dashboard"),
        widgets = document.getElementById("widgets"),
        icons  = [
            { id: "widgetone", name: "Time", pic: "http://icons.iconarchive.com/icons/vcferreira/firefox-os/64/clock-icon.png" },
            { id: "widgettwo", name: "notepad", pic: "http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/64/Apps-Notepad-Metro-icon.png" },
            { id: "widgetthree", name: "calendar", pic: "http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/64/Apps-Calendar-Metro-icon.png" },
            { id: "widgetfour", name: "qotd", pic: "http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat-one-color/64/quote-icon.png" }
        ],

        selected = [],

        widgetDragStarted = function (e) {
                 var sendThisWithTheDrag = e.target.dataset.widget;
                 e.dataTransfer.setData("app/json", sendThisWithTheDrag);
                 e.dataTransfer.setDragImage(box, 20, 20);
                 event.dataTransfer.effectAllowed = "move";
             },

             widgetDropped = function (e) {
                 e.preventDefault();
                 var appIcon,
                     received = e.dataTransfer.getData("app/json");
                 if (received) {
                     appIcon = JSON.parse(received);
                     e.currentTarget.appendChild(document.getElementById(appIcon.id));

                     if (e.currentTarget === dashboard) {
                         treated.push(appIcon.name);
                         document.getElementById("log").innerHTML = selected.join(", ");


                     }
                 }
             },

             dragHandler = function (e) {
                 e.preventDefault();
             },

             addWidget = function (appIcon) {
                 var icons = document.createElement("div"),
                     pic = document.createElement("img"),
                     nom = document.createElement("p");

                 icons.setAttribute("id", appIcon.id);
                 icons.setAttribute("draggable", true);
                 icons.setAttribute("class", "icon");
                 icons.addEventListener("dragstart", widgetDragStarted);
                 widgets.appendChild(icons);

                 nom.innerText = appIcon.name;
                 icons.appendChild(nom);

                 pic.setAttribute("src", appIcon.pic);
                 pic.setAttribute("alt", "a widget which can be added to the dashboard");
                 pic.setAttribute("draggable", false);
                 icons.appendChild(pic);

                 icons.setAttribute("data-widget", JSON.stringify(appIcon));
             };

           dashboard.addEventListener("drop", widgetDropped);
           dashboard.addEventListener("dragover", dragHandler);
           widgets.addEventListener("drop", widgetDropped);
           widgets.addEventListener("dragover", dragHandler);

           icons.forEach(addWidget);
       }());
