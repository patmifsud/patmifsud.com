// Windows
let windows = {
    about: {
        titleBar: "About",
        openState: 0,
        contentUrl: `/placeholder.html`,    
    },
    resume: {
        titleBar: "Resume",
        openState: 0,
        contentUrl: `/placeholder.html`,    
    },
    casestudies: {
        titleBar: "Case Studies",
        openState: 0,
        contentUrl: `/placeholder.html`,    
    },
    folio: {
        titleBar: "Folio",
        openState: 0,
        contentUrl: `/placeholder.html`,    
    },
}

// top menu bar
const topMenu = [{
        named: "File",
        id: "fileMenu",
        contents: [{
            named: "About",
            ifClicked: "openWindow(windows.about)"
        }, ],
    },
    {
        named: "View",
        id: "viewMenu",
        contents: [{
                named: "View Resume",
                ifClicked: "openWindow(windows.resume)"
            },
            {
                named: "View Casestudies",
                ifClicked: "openWindow(windows.casestudies)"
            },
            {
                named: "View Folio",
                ifClicked: "openWindow(windows.foliow)"
            }
        ],
    },
    {
        named: "Download",
        id: "downloadMenu",
        contents: [{
                named: "Download PDF Resume",
                ifClicked: "downloadResume('pdf')",
            },
            {
                named: "Download Word Resume",
                ifClicked: "downloadResume('word')",
            }
        ],
    },
    {
        named: "Contact",
        id: "contactMenu",
        contents: [{
            named: "Email",
            ifClicked: "email()",
        }, {
            named: "Phone",
            ifClicked: "phone()",
        }, {
            named: "Twitter",
            ifClicked: "twitter()",
        }, {
            named: "linkedIn",
            ifClicked: "linkedIn()",
        }],
    },

]


function topMenuDesktopMouseoverListener() {
    document.querySelector('#desktop').addEventListener("mouseover", function () {
        for (var i = 0; i < topMenu.length; i++) {
            let divToHide = document.getElementById(topMenu[i].id);
            hide(divToHide);
        }
    });
}

function dropdownMenuClicked(object) {
    toggleVisibility(object)
    for (var i = 0; i < topMenu.length; i++) {
        if (topMenu[i].id === object.id) {} else {
            let divToHide = document.getElementById(topMenu[i].id);
            hide(divToHide);
        };
    };
}


// 🎩 Handy actions to add and remove classes

function hide(object) {
    object.classList.add('hide');
}

function show(object) {
    object.classList.remove('hide');
}

function toggleVisibility(object) {
    object.classList.toggle('hide');
}



// 🔝 Menu Bar functions 

function drawTopMenu() {
    document.getElementById("menuBarInner").innerHTML = `
    ${topMenu.map(menuTemplate).join("")}`
};


// ${topMenu.map(menuTemplate).join("")}

function menuTemplate(menuItem) {
    return `<div class="menuItem" onclick="dropdownMenuClicked(${menuItem.id})">${menuItem.named}</div>
    <div class="dropDown hide" id="${menuItem.id}">${menuItem.contents.map(dropdownMenuTemplate).join("")}
</div>
`
};

function dropdownMenuTemplate(parentMenu) {
    return `<a class="drop${parentMenu.named}" onclick="${parentMenu.ifClicked}">${parentMenu.named}</a>`
}
function downloadResume(format) {
    console.log("download " + format + " resume");
}

function email() {
    window.open.href = 'mailto:patmifsud@me.org';
}

function phone() {
    window.open.href = "tel:+1800229933";
}

function twitter() {
    window.open.href = 'https://twitter.com/patmifsud';
}

function linkedIn() {
    window.open.href = 'mailto:patmifsud@me.org';
}




// 🏠 Window logic

function openWindow(windowName) {
    console.log("opening " + windowName);
};

function animateInWindow(windowToAnimateIn) {
    console.log(windowToAnimateIn);
    document.getElementById('window').classList.remove('hideScale');
    writeWindow(windowToAnimateIn);
    windowToAnimateIn.openState = 1;

};

function animateOutWindow() {
    document.getElementById('window').classList.add('hideScale');
    windowToAnimateIn.openState = 0;

};

function writeWindow(windowName){
console.log(windowName);
document.getElementById("windowHeaderText").innerHTML = `${windowName.titleBar}`
document.getElementById("windowPastebox").innerHTML = `
<div id="windowContentContainer">
<div id="windowContent"><object type="text/html" data="${windowName.contentUrl}"></object></div></div>`
}






// 🏂 Visuals and animations

function addShadowOnScroll() {
    let windowContainer = document.querySelector('#windowContentContainer');
    let windowHeader = document.querySelector('#windowHeader');

    windowContainer.onscroll = function addShadow() {
        if (windowContainer.scrollTop > 2) {
            windowHeader.classList.add('scrolled');
        } else {
            windowHeader.classList.remove('scrolled');
        }

    }
}


// Window move and resizing 
// using interactjs.io

interact('.resize-drag')
    .draggable({
        onmove: window.dragMoveListener
    })
    .resizable({
        preserveAspectRatio: true,
        edges: {
            left: true,
            right: true,
            bottom: true,
            top: false
        }
    })
    .on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

        // target.textContent = event.rect.width + '×' + event.rect.height;
    });

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    let maxYValue = (0 - (2.5 / 100) * window.innerHeight);
    // translate the element


    console.log(y);
    console.log("max Y value " + maxYValue);
    console.log("menubar height " + document.getElementById('menuBar').clientHeight);
    console.log("window height " + window.innerHeight);

    if (y < maxYValue) {
        y = maxYValue
    };

    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// console.log(x);
//         if (x > ((5 / 100) * window.innerHeight)){ console.log("yes");}
// let maxYValue = (document.getElementById('menuBar').clientHeight - window.innerHeight);

// accordian
const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));





window.onload = function () {
    drawTopMenu();
    topMenuDesktopMouseoverListener()
    // addShadowOnScroll();

};