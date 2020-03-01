// Windows
let windows = {
    about: {
        // Text that appears in the title bar of the window
        titleBar: "About",
        // The file that the contents of the window will be loaded from
        contentUrl: `about.html`,
        data: windowData.about.windowHTML,
        // each window has a color scheme that matches it's icon:
        colors: {
            main: "#918FDE",
            dark: "#918FDE",
            light: "#EAEDFF",
        }
    },
    portfolio: {
        titleBar: "Portfolio",
        contentUrl: `portfolio.html`,
        data: windowData.portfolio.windowHTML,
        colors: {
            main: "#96ABF8",
            dark: "#96ABF8",
            light: "#F1F4FE",
        }
    },
    resume: {
        titleBar: "Resume",
        contentUrl: `resume.html`,
        data: windowData.resume.windowHTML,
        colors: {
            main: "#99C1E8",
            dark: "#99C1E8",
            light: "#F1F8FE",
        }
    },
    casestudies: {
        titleBar: "Case Study",
        contentUrl: `casestudies.html`,
        data: windowData.casestudies.windowHTML,
        colors: {
            main: "#A6C9D4",
            dark: "#A6C9D4",
            light: "#F4FBFD",
        }
    },

    contact: {
        titleBar: "Contact",
        contentUrl: `contact.html`,
        data: windowData.contact.windowHTML,
        colors: {
            main: "#B5DCDA",
            dark: "#B5DCDA",
            light: "#F3FCFC",
        }
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
    named: "About",
    id: "about",
    // icon for each desktop object:
    img: "images/about-icon.png",
    // funciton to perform when icon is clicked:
    whenClicked: "animateInWindow(windows.about)",
}, {
    named: "Portfolio",
    id: "portfolio",
    img: "images/portfolio-icon.png",
    whenClicked: "animateInWindow(windows.portfolio)",
}, {
    named: "Resume",
    id: "resume",
    img: "images/resume-icon.png",
    whenClicked: "animateInWindow(windows.resume)",
}, {
    named: "Case Study",
    id: "casestudies",
    img: "images/casestudies-icon.png",
    whenClicked: "animateInWindow(windows.casestudies)",
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

// preload every desktop icon for smooth(er) animation on fadein
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

function areWeOnMobile() {
    let areWe = getComputedStyle(document.documentElement).getPropertyValue('--mobile');
    if (areWe == "yes" ) {
        return true
    } else {
        return false
    };
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
    document.getElementById('window').classList.remove('windowClosed');
    writeWindow(windowToAnimateIn);
    swapCssColorVariablesForWindow(windowToAnimateIn);
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
    document.getElementById('downloadResume').click();
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
    windowContainer.onscroll = function addShadow() {
        if (windowContainer.scrollTop > 2) {
            windowHeader.classList.add('scrolled');
            pageCurl.classList.add('hide');
        } else {
            windowHeader.classList.remove('scrolled');
            pageCurl.classList.remove('hide');
        }
    }
}

function swapCssColorVariablesForWindow(window) {
    console.log(window.colors.dark);
    console.log(window.colors.main);
    console.log(window.colors.light);
    document.documentElement.style.setProperty('--windowColorMain', window.colors.main);
    document.documentElement.style.setProperty('--windowColorDark', window.colors.dark);
    document.documentElement.style.setProperty('--windowColorLight', window.colors.light);


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
    var onMobile = areWeOnMobile();
    if ((onMobile == false)) {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        let maxYValue = (0 - (1.25 / 100) * window.innerHeight);
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
}


window.onload = function () {
    drawTopMenu();
    topMenuDesktopMouseoverListener();
    clickedOnDropdownListener();
    drawDesktop();
    document.getElementById('menuBarInner').classList.remove('slideIn');
};