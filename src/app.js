(function () {
    "use strict";
    var box,
        dashboard = document.getElementById("dashboard"),
        widgets = document.getElementById("widgets"),
        icons  = [
            { id: "widgetone", name: "Time", pic: "http://icons.iconarchive.com/icons/vcferreira/firefox-os/64/clock-icon.png" },
            { id: "widgettwo", name: "Notepad", pic: "http://icons.iconarchive.com/icons/mcdo-design/book/64/Note-Book-icon.png" },
            { id: "widgetthree", name: "Date", pic: "http://icons.iconarchive.com/icons/youthedesigner/new-year/64/calendar-icon.png" },
            { id: "widgetfour", name: "Qotd", pic: "http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat-one-color/64/quote-icon.png" },
            { id: "widgetfive", name: "Weather", pic: "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/64/Status-weather-showers-day-icon.png" },
            { id: "widgetSix", name: "Calendar", pic: "http://icons.iconarchive.com/icons/wwalczyszyn/android-style-honeycomb/64/Calendar-icon.png" }
        ],

        selected = [],

        widgetDragStarted = function (e) {
                 var sendThisWithTheDrag = e.target.dataset.widget;
                 e.dataTransfer.setData("application/json", sendThisWithTheDrag);
                 e.dataTransfer.setDragImage(box, 100, 40);
                 event.dataTransfer.effectAllowed = "move";
             },

             widgetDropped = function (e) {
                 e.preventDefault();
                 var widget,
                     received = e.dataTransfer.getData("application/json");
                 if (received) {
                     widget = JSON.parse(received);
                     e.currentTarget.appendChild(document.getElementById(widget.id));

                     if (e.currentTarget === dashboard) {
                         selected.push(widget.name);
                         document.getElementById("log").innerHTML = selected.join(", ");

                     }
                 }
             },

             dragHandler = function (e) {
                 e.preventDefault();
             },

             addWidget = function (widget) {
                 var icons = document.createElement("div"),
                     pic = document.createElement("img"),
                     nom = document.createElement("p");

                 icons.setAttribute("id", widget.id);
                 icons.setAttribute("draggable", true);
                 icons.setAttribute("class", "icon");
                 icons.addEventListener("dragstart", widgetDragStarted);
                 widgets.appendChild(icons);

                 nom.innerText = widget.name;
                 icons.appendChild(nom);

                 pic.setAttribute("src", widget.pic);
                 pic.setAttribute("alt", "a widget which can be added to the dashboard");
                 pic.setAttribute("draggable", false);
                 icons.appendChild(pic);

                 icons.setAttribute("data-widget", JSON.stringify(widget));


             };

           dashboard.addEventListener("drop", widgetDropped);
           dashboard.addEventListener("dragover", dragHandler);
           widgets.addEventListener("drop", widgetDropped);
           widgets.addEventListener("dragover", dragHandler);

           icons.forEach(addWidget);
       }());
