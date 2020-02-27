// Windows
let windows = {
    about: {
        // Text that appears in the title bar of the window
        titleBar: "About",
        // The file that the contents of the window will be loaded from
        contentUrl: `about.html`,
        data: windowData.about.windowHTML,

    },
    resume: {
        titleBar: "Resume",
        contentUrl: `resume.html`,
        data: windowData.resume.windowHTML,

    },
    casestudies: {
        titleBar: "Case Study",
        contentUrl: `casestudies.html`,
        data: windowData.casestudies.windowHTML,

    },
    portfolio: {
        titleBar: "Portfolio",
        contentUrl: `portfolio.html`,
        data: windowData.portfolio.windowHTML,

    },
    contact: {
        titleBar: "Contact",
        contentUrl: `contact.html`,
        data: windowData.contact.windowHTML,

    },
}

// top menu bar
const topMenu = [{
        // Menu bar details
        named: "File",
        id: "fileMenu",

        // Define the menu that drops down here
        contents: [{
            named: "About",
            // Function to perform when the dropdown is clicked
            ifClicked: "animateInWindow(windows.about)"
        }, ],
        // for now, margins need to manually be set on these dropdown menus via css to center them under the parent menu. Working on automating.
    },
    {
        named: "View",
        id: "viewMenu",
        contents: [{
                named: "View Resume",
                ifClicked: "animateInWindow(windows.resume)"
            },
            {
                named: "View Casestudies",
                ifClicked: "animateInWindow(windows.casestudies)"
            },
            {
                named: "View Folio",
                ifClicked: "animateInWindow(windows.portfolio)"
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

const desktopIcons = [{
    named: "Case Study",
    id: "casestudies",
    // icon for each desktop object:
    img: "images/casestudies-icon.png",
    // funciton to perform when icon is clicked:
    whenClicked: "animateInWindow(windows.casestudies)",
}, {
    named: "Resume",
    id: "resume",
    img: "images/resume-icon.png",
    whenClicked: "animateInWindow(windows.resume)",
}, {
    named: "Portfolio",
    id: "portfolio",
    img: "images/portfolio-icon.png",
    whenClicked: "animateInWindow(windows.portfolio)",
}, {
    named: "About",
    id: "about",
    img: "images/about-icon.png",
    whenClicked: "animateInWindow(windows.about)",
}, {
    named: "Contact",
    id: "contact",
    img: "images/contact-icon.png",
    whenClicked: "animateInWindow(windows.contact)",
}]


// 📷 Preload Images
// via https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
function preloadImage(url) {
    var img = new Image();
    img.src = url;
}

// preload every desktop icon for smooth animation on fadein
function preloadDesktopIcons() {
    desktopIcons.forEach(function (iconObject) {
        preloadImage(iconObject.img);
    })
}


// 👂 listeners

// close dropdown menus when the mouse enters desktop or window
function topMenuDesktopMouseoverListener() {
    document.querySelectorAll('.closeDropdownMouseOver').forEach(item => {
        item.addEventListener("mouseover", function () {
            closeAllDropdowns();
        })
    })
}
// close dropdown menus when clicked on another dropdown menu
function clickedOnDropdownListener() {
    document.querySelectorAll('.drop').forEach(item => {
        item.addEventListener("click", function () {
            closeAllDropdowns();
        })
    })
}

// close dropdown menus when clicked on a dropdown item
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

function closeAllDropdowns() {
    for (var i = 0; i < topMenu.length; i++) {
        let divToHide = document.getElementById(topMenu[i].id);
        hide(divToHide);
    }
}



// 📦 Template Literals

// 📦 📦 Top Menu Draw
function drawTopMenu() {
    document.getElementById("menuBarInner").innerHTML = `
        ${topMenu.map(menuTemplate).join("")}`
};


function menuTemplate(menuItem) {
    return `<div class="menuItem" onclick="dropdownMenuClicked(${menuItem.id})">${menuItem.named}</div>
        <div class="dropDown hide" id="${menuItem.id}">${menuItem.contents.map(dropdownMenuTemplate).join("")}
    </div>
    `
};

function dropdownMenuTemplate(parentMenu) {
    return `<a class="drop" onclick="${parentMenu.ifClicked}">${parentMenu.named}</a>`
}

// 📦 📦 Window Draw
function animateInWindow(windowToAnimateIn) {
    console.log(windowToAnimateIn);
    document.getElementById('window').classList.remove('windowClosed');
    writeWindow(windowToAnimateIn);
    addShadowOnScroll();
};

function animateOutWindow() {
    document.getElementById('window').classList.add('windowClosed');
};


function writeWindow(windowName) {
    console.log(windowName);
    document.getElementById("windowHeaderText").innerHTML = `${windowName.titleBar}`
    document.getElementById("windowPastebox").innerHTML = `${windowName.data}`;
    
}



// 📦 📦 Desktop Icon Draw

// element.innerHTML += "additional HTML code"
function writeDesktopIcon(icon) {
    return ` <div id="${icon.id}" class="icon invisible" onclick="${icon.whenClicked}">
<div class="iconImg" style="background: url(${icon.img}) bottom center/contain no-repeat;"></div>
<div class="iconLabel">${icon.named}</div></div>
`
}

function drawDesktop() {
    let desktop = document.getElementById("desktop");
    // this delay makes it look like the icons are being drawn on one by one, like when starting up an old Macintosh
    let delay = 1000
    desktopIcons.forEach(function (desktopIcons) {
        desktop.innerHTML += writeDesktopIcon(desktopIcons);
        setTimeout(function () {
            // remove the class 'Hide' from the icon. Adding and immediatly removing this class is how the icons animate in.
            document.getElementById(desktopIcons.id).classList.remove('invisible');
        }, delay);
        delay += 150;
    });
}




// 🔝 Menu Bar functions 



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


// 🏂 Visuals and animations

function addShadowOnScroll() {
    let windowContainer = document.querySelector('#windowPastebox');
    let windowHeader = document.querySelector('#windowHeader');
    let pageCurl = document.getElementById('pageCurl');
    windowContainer.onscroll = function addShadow()
    {
        if (windowContainer.scrollTop > 2) {
            windowHeader.classList.add('scrolled');
            pageCurl.classList.add('invisible');
        } else {
            windowHeader.classList.remove('scrolled');
            pageCurl.classList.remove('invisible');


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
    topMenuDesktopMouseoverListener();
    clickedOnDropdownListener();
    drawDesktop();
    document.getElementById('menuBarInner').classList.remove('slideIn');
};