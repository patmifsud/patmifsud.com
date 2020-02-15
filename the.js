



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

function dropdownMenuClicked(object) {
    toggleVisibility(object)
    for (var i = 0; i < menus.length; i++) {
        if (menus[i] === object) {} else {
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








// function makeWindowsDraggable() {

//     // Make the DIV element draggable via https://www.w3schools.com/howto/howto_js_draggable.asp:
//     dragElement(document.getElementById("window"));

//     function dragElement(elmnt) {
//         var pos1 = 0,
//             pos2 = 0,
//             pos3 = 0,
//             pos4 = 0;
//         if (document.getElementById("windowHeader")) {
//             // if present, the header is where you move the DIV from:
//             document.getElementById("windowHeader").onmousedown = dragMouseDown;
//         } else {
//             // otherwise, move the DIV from anywhere inside the DIV:
//             elmnt.onmousedown = dragMouseDown;
//         }

//         function dragMouseDown(e) {
//             e = e || window.event;
//             e.preventDefault();
//             // get the mouse cursor position at startup:
//             pos3 = e.clientX;
//             pos4 = e.clientY;
//             document.onmouseup = closeDragElement;
//             // call a function whenever the cursor moves:
//             document.onmousemove = elementDrag;
//         }

//         function elementDrag(e) {
//             e = e || window.event;
//             e.preventDefault();
//             // calculate the new cursor position:
//             pos1 = pos3 - e.clientX;
//             pos2 = pos4 - e.clientY;
//             pos3 = e.clientX;
//             pos4 = e.clientY;
//             // set the element's new position:
//             elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//             elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//             // I added this - Trying to stop the window going behind the menu bar - if it's higher than 10% of screen hight cancel the drag
//             var maxOffsetTop = ((5 / 100) * window.innerHeight );
//             if ((elmnt.offsetTop - pos2) < (maxOffsetTop)){
//                 console.log("stopped");
//                 elmnt.style.top = (maxOffsetTop) + "px";
//             };
//             console.log(maxOffsetTop);
//             console.log(elmnt.offsetTop - pos2);

//         }

//         function closeDragElement() {
//             // stop moving when mouse button is released:
//             document.onmouseup = null;
//             document.onmousemove = null;
//         }
//     }

// }



function makeWindowsDraggable() {

    // Minimum resizable area
    var minWidth = 60;
    var minHeight = 40;

    // Thresholds
    var FULLSCREEN_MARGINS = -1000;
    var MARGINS = 10;

    // End of what's configurable.
    var clicked = null;
    var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;

    var rightScreenEdge, bottomScreenEdge;

    var preSnapped;

    var b, x, y;

    var redraw = false;

    var pane = document.getElementById('window');
    var ghostpane = document.getElementById('ghostpane');

    function setBounds(element, x, y, w, h) {
        element.style.left = x + 'px';
        element.style.top = y + 'px';
        element.style.width = w + 'px';
        element.style.height = h + 'px';
    }

    function hintHide() {
        setBounds(ghostpane, b.left, b.top, b.width, b.height);
        ghostpane.style.opacity = 0;

        // var b = ghostpane.getBoundingClientRect();
        // ghostpane.style.top = b.top + b.height / 2;
        // ghostpane.style.left = b.left + b.width / 2;
        // ghostpane.style.width = 0;
        // ghostpane.style.height = 0;
    }


    // Mouse events
    pane.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);

    // Touch events	
    pane.addEventListener('touchstart', onTouchDown);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);


    function onTouchDown(e) {
        onDown(e.touches[0]);
        e.preventDefault();
    }

    function onTouchMove(e) {
        onMove(e.touches[0]);
    }

    function onTouchEnd(e) {
        if (e.touches.length == 0) onUp(e.changedTouches[0]);
    }

    function onMouseDown(e) {
        onDown(e);
        e.preventDefault();
    }

    function onDown(e) {
        calc(e);

        var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;

        clicked = {
            x: x,
            y: y,
            cx: e.clientX,
            cy: e.clientY,
            w: b.width,
            h: b.height,
            isResizing: isResizing,
            isMoving: !isResizing && canMove(),
            onTopEdge: onTopEdge,
            onLeftEdge: onLeftEdge,
            onRightEdge: onRightEdge,
            onBottomEdge: onBottomEdge
        };
    }

    function canMove() {
        return x > 0 && x < b.width && y > 0 && y < b.height &&
            y < 50;
    }

    function calc(e) {
        b = pane.getBoundingClientRect();
        x = e.clientX - b.left;
        y = e.clientY - b.top;

        onTopEdge = y < MARGINS;
        onLeftEdge = x < MARGINS;
        onRightEdge = x >= b.width - MARGINS;
        onBottomEdge = y >= b.height - MARGINS;

        rightScreenEdge = window.innerWidth - MARGINS;
        bottomScreenEdge = window.innerHeight - MARGINS;
    }

    var e;

    function onMove(ee) {
        calc(ee);

        e = ee;

        redraw = true;

    }

    function animate() {

        requestAnimationFrame(animate);

        if (!redraw) return;

        redraw = false;

        if (clicked && clicked.isResizing) {

            if (clicked.onRightEdge) pane.style.width = Math.max(x, minWidth) + 'px';
            if (clicked.onBottomEdge) pane.style.height = Math.max(y, minHeight) + 'px';

            if (clicked.onLeftEdge) {
                var currentWidth = Math.max(clicked.cx - e.clientX + clicked.w, minWidth);
                if (currentWidth > minWidth) {
                    pane.style.width = currentWidth + 'px';
                    pane.style.left = e.clientX + 'px';
                }
            }

            if (clicked.onTopEdge) {
                var currentHeight = Math.max(clicked.cy - e.clientY + clicked.h, minHeight);
                if (currentHeight > minHeight) {
                    pane.style.height = currentHeight + 'px';
                    pane.style.top = e.clientY + 'px';
                }
            }

            hintHide();

            return;
        }

        if (clicked && clicked.isMoving) {

            if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
                // hintFull();
                setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight);
                ghostpane.style.opacity = 0.2;
            } else if (b.top < MARGINS) {
                // hintTop();
                setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight / 2);
                ghostpane.style.opacity = 0.2;
            } else if (b.left < MARGINS) {
                // hintLeft();
                setBounds(ghostpane, 0, 0, window.innerWidth / 2, window.innerHeight);
                ghostpane.style.opacity = 0.2;
            } else if (b.right > rightScreenEdge) {
                // hintRight();
                setBounds(ghostpane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
                ghostpane.style.opacity = 0.2;
            } else if (b.bottom > bottomScreenEdge) {
                // hintBottom();
                setBounds(ghostpane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
                ghostpane.style.opacity = 0.2;
            } else {
                hintHide();
            }

            if (preSnapped) {
                setBounds(pane,
                    e.clientX - preSnapped.width / 2,
                    e.clientY - Math.min(clicked.y, preSnapped.height),
                    preSnapped.width,
                    preSnapped.height
                );
                return;
            }

            // moving
            pane.style.top = (e.clientY - clicked.y) + 'px';
            pane.style.left = (e.clientX - clicked.x) + 'px';

            return;
        }

        // This code executes when mouse moves without clicking

        // style cursor
        if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
            pane.style.cursor = 'nwse-resize';
        } else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
            pane.style.cursor = 'nesw-resize';
        } else if (onRightEdge || onLeftEdge) {
            pane.style.cursor = 'ew-resize';
        } else if (onBottomEdge || onTopEdge) {
            pane.style.cursor = 'ns-resize';
        } else if (canMove()) {
            pane.style.cursor = 'move';
        } else {
            pane.style.cursor = 'default';
        }
    }

    animate();

    function onUp(e) {
        calc(e);

        if (clicked && clicked.isMoving) {
            // Snap
            var snapped = {
                width: b.width,
                height: b.height
            };

            if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
                // hintFull();
                setBounds(pane, 0, 0, window.innerWidth, window.innerHeight);
                preSnapped = snapped;
            } else if (b.top < MARGINS) {
                // hintTop();
                setBounds(pane, 0, 0, window.innerWidth, window.innerHeight / 2);
                preSnapped = snapped;
            } else if (b.left < MARGINS) {
                // hintLeft();
                setBounds(pane, 0, 0, window.innerWidth / 2, window.innerHeight);
                preSnapped = snapped;
            } else if (b.right > rightScreenEdge) {
                // hintRight();
                setBounds(pane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
                preSnapped = snapped;
            } else if (b.bottom > bottomScreenEdge) {
                // hintBottom();
                setBounds(pane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
                preSnapped = snapped;
            } else {
                preSnapped = null;
            }

            hintHide();

        }

        clicked = null;

    }
}