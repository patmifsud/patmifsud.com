window.onload = function () {
    document.querySelector('#desktop').addEventListener("mouseover", function () {
        hide(fileMenu);
        hide(editMenu);
        hide(viewMenu);
    });

    makeWindowsDraggable();

    menus = [fileMenu, editMenu, viewMenu];
};

function hide(object) {
    object.classList.add('hide');
}

function show(object) {
    object.classList.remove('hide');
}

function toggleVisibility(object) {
    object.classList.toggle('hide');
}

function dropdownMenuClicked(object){
    toggleVisibility(object)
    for (var i = 0; i < menus.length; i++) {
        if (menus[i] === object) {
        } else {
            hide(menus[i]);
        };
    };
}


// var containers = document.getElementById("desktop");

// var draggable = new window.Draggable.Sortable(containers, {
//     draggable: '.icon',
//     appendTo: '.desktop',
//     classes: {
//       body: 'draggable-container--is-dragging',
//     },
//   });

//   draggable.on('sortable:sorted', function() {
//     console.log('sorted!');
//   });


function makeWindowsDraggable() {

    // Make the DIV element draggable via https://www.w3schools.com/howto/howto_js_draggable.asp:
    dragElement(document.getElementById("window"));

    function dragElement(elmnt) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        if (document.getElementById("windowHeader")) {
            // if present, the header is where you move the DIV from:
            document.getElementById("windowHeader").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

}