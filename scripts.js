    // Windows

    // 📷 Preload Images
    // via https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
    function preloadImage(url) {
        var img = new Image();
        img.src = url;
        console.log("image " + url + " loaded");
    }

    // preload every desktop icon for smooth(er) animation on fadein
    function preloadDesktopIcons() {
        desktopIcons.forEach(function (iconObject) {
            preloadImage(iconObject.img);
        })
    }

    function preloadFolioImages() {
        folioContent.forEach(function (imageToLoad) {
            preloadImage(imageToLoad.imgUrl);
        })
    }

    function preloadFolioLightboxImages() {
        folioContent.forEach(function (folioItem) {
            folioItem.lightbox.forEach(function (imageToLoad) {
                preloadImage(imageToLoad.img);
            })
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
    // Fade in and out lightboxes in portfolio depending on % visible 
    // src http://www.deanhume.com/lazy-loading-images-using-intersection-observer/


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
        if (areWe == " yes") {
            return true
        } else {
            return false
        };
    }

    function scrollToTopOfWindow() {
        document.getElementById('windowPastebox').scrollTop = 0;
    }

    // 📦 Template Literals
    // 📦 📦 Top Menu Draw
    function drawTopMenu() {
        document.getElementById("menuBarInner").innerHTML = `
        ${topMenu.map(makeMenuTemplateHtml).join("")}`
    };

    function makeMenuTemplateHtml(menuItem) {
        return `<div class="menuItem" onclick="dropdownMenuClicked(${menuItem.id})">${menuItem.named}</div>
        <div class="dropDown hide" id="${menuItem.id}">${menuItem.contents.map(makeDropdownMenuHtmlTemplate).join("")}
    </div>`
    };

    function makeDropdownMenuHtmlTemplate(parentMenu) {
        return `<a class="drop" onclick="${parentMenu.ifClicked}">${parentMenu.named}</a>`
    }

    // 📦 📦 Window Draw
    function animateInWindow(windowToAnimateIn) {
        closeAllDropdowns();
        // remove windowClosed class and any other window classes 
        document.getElementById('window').classList = 'resize-drag closeDropdownMouseOver';
        document.getElementById('window').classList.add(windowToAnimateIn.classString);
        writeWindowToPage(windowToAnimateIn);
        swapCssColorVariablesForWindowColors(windowToAnimateIn);
        addShadowOnScrollListener();
        scrollToTopOfWindow(windowToAnimateIn);
        document.title = ("Pat Mifsud " + windowToAnimateIn.emoji)
        changeDesktopColorOnMobile('white');
    };

    function animateOutWindow() {
        document.getElementById('window').classList = 'windowClosed resize-drag closeDropdownMouseOver';
        document.title = ("Pat Mifsud");
        changeDesktopColorOnMobile('#F5F5F5');
    };

    function writeWindowToPage(windowName) {
        document.getElementById("windowHeaderText").innerHTML = `${windowName.titleBar}`
        document.getElementById("windowPastebox").innerHTML = `${windowName.data}`;
    }



    // 📦 📦 Desktop Icon Draw

    // element.innerHTML += "additional HTML code"
    function writeDesktopIcon(icon) {
        return ` <div id="${icon.id}" class="icon invisible" onclick="${icon.whenClicked}">
<div class="iconImg" style="background: url(${icon.img}) bottom center/contain no-repeat;"></div>
<div class="iconLabel">${icon.named}</div></div>`
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

    // 📦 📦 Portfolio Lightbox Draw

    // PORTFOLIO LIGHTBOX GENERATOR
    // array to be filled up with the full size lightbox images from each portfolio item
    let folioLightBoxImageArray = [];

    // filling that array with the img and ids of each object
    function createFolioLightBoxImageArray() {
        folioContent.forEach(function (folioItem) {
            folioLightBoxImageArray = folioLightBoxImageArray.concat(folioItem.lightbox);
        });
    }

    function createIndividualLightBoxContainers(folioItemObject, next, prev) {
        let template = `<div class="lightbox" id="${folioItemObject.id}">
                <a class="lightboxImageLink" href="#${folioItemObject.id}">
                    <img class="folio" src="${folioItemObject.img}" />
                </a>
                <div class="lightboxDesc">
                    <p>${folioItemObject.desc}</p>
                </div>
                <div class="lightboxNavArrows">
                    <a class="lightboxPrev" href="#${prev.id}"><img src="images/arrowLeft.svg"></a><a class="lightboxNext" href="#${next.id}"><img src="images/arrowRight.svg"></a>
                </div>
        </div></div>`
        // <a href="#${folioItemObject.url ? folioItemObject.url : ''}">
        //  <a class="lightboxPrev" href="#${prev.id}"><img src="images/arrowLeft.svg"></a><a class="lightboxNext" href="#${next.id}"><img src="images/arrowRight.svg"></a>
        return template;
    }

    function createLightboxes() {
        var lightboxHtml = '';
        let next;
        let prev;
        let folioItemObject;
        for (var i = 0; i < folioLightBoxImageArray.length; i++) {
            folioItemObject = folioLightBoxImageArray[i];
            if (i < folioLightBoxImageArray.length - 1) {
                next = folioLightBoxImageArray[i + 1];
            } else {
                next = folioLightBoxImageArray[0]
            };
            if (i > 0) {
                prev = folioLightBoxImageArray[i - 1];
            } else {
                prev = folioLightBoxImageArray[folioLightBoxImageArray.length - 1]
            };
            lightboxHtml += (createIndividualLightBoxContainers(folioItemObject, next, prev));
        }
        return lightboxHtml;
    }


    // 📦 OPEN AND CLOSE LIGHTBOXES 

    function closeLightboxes() {
        var lightboxConatiner = document.getElementById('lightBoxContainer');
        var lightboxClose = document.getElementById('lightboxClose');
        lightboxConatiner.classList.add("closed");
        hide(lightboxClose);
    }

    function turnOnLightbox(porfolioLightbox) {
        var lightboxConatiner = document.getElementById('lightBoxContainer');
        if (porfolioLightbox) {
            document.getElementById(porfolioLightbox).scrollIntoView();
        };
        lightboxConatiner.classList.remove("closed");
        show(lightboxClose);

    }

    // 📦 Call Alert Modal
    let screen = document.getElementById('screen');

    function createCallAlert() {
        closeAllDropdowns();
        screen.innerHTML += callAlert;
    }

    function closeCallAlert() {
        screen.removeChild(document.getElementById('callAlert'));
        // for some reason this 👆 stops the interaction observer for the folio lightbox. 
        // No idea why. So we have to boot it up again
        startInteractionObserver();
    }

    function copyNumber() {
        document.getElementById('foneNarmber').select();
        document.execCommand('copy');
        let callButton = document.getElementById('copyTextCall');
        callButton.classList.add("yes")
        callButton.innerHTML = "Copied";
        setTimeout(function () {
            closeCallAlert();
        }, 1300);

    }


    // 🔝 Menu Bar functions 

    function downloadResume(format) {
        document.getElementById('downloadResume').click();
    }

    function email() {
        document.getElementById('emailMe').click();
    }

    function twitter() {
        window.open('https://twitter.com/patmifsud');
    }

    function linkedIn() {
        window.open('https://www.linkedin.com/in/patmifsud/');
    }


    // 🏂 Visuals and animations
    // when the user scrolls a window we add a shadow to the title bar of the window
    function addShadowOnScrollListener() {
        let windowContainer = document.querySelector('#windowPastebox');
        let windowHeader = document.querySelector('#windowHeader');
        // let pageCurl = document.getElementById('pageCurl');
        windowContainer.onscroll = function addShadow() {
            if (windowContainer.scrollTop > 2) {
                windowHeader.classList.add('scrolled');
                // pageCurl.classList.add('hide');
            } else {
                windowHeader.classList.remove('scrolled');
                // pageCurl.classList.remove('hide');
            }
        }
    }

    function swapCssColorVariablesForWindowColors(window) {
        document.documentElement.style.setProperty('--windowColorTitle', window.colors.title);
        document.documentElement.style.setProperty('--windowColorBg', window.colors.bg);
        document.documentElement.style.setProperty('--windowColorText', window.colors.text);
        document.documentElement.style.setProperty('--windowColorLink', window.colors.link);
    }

    function turnOffPreloader() {
        // set opacity to zero first to give it a nice fade out
        document.getElementById('preloader').style.opacity = "0";
        setTimeout(function () {
            document.getElementById('preloader').style.display = "none";
        }, 1500);

    }

    function changeDesktopColorOnMobile(bgColor) {
        if ((areWeOnMobile() == true)) {
            let desktop = document.getElementById("desktop");
            desktop.style.background = bgColor;
        } else {
            desktop.style.background = '#F5F5F5'
        };
    }


    // 🚚
    // Window move and resizing 
    // using interactjs.io

    interact('.resize-drag')
        .ignoreFrom('p, h1, h2, h3, h4, h5, a, li, textarea, #windowContent')
        .draggable({
            onmove: window.dragMoveListener
        })
        .resizable({
            preserveAspectRatio: true,
            edges: {
                left: true,
                right: true,
                bottom: true,
                top: true,
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
        turnOffPreloader();
        preloadDesktopIcons();
        drawTopMenu();
        topMenuDesktopMouseoverListener();
        clickedOnDropdownListener();
        drawDesktop();
        document.getElementById('menuBarInner').classList.remove('slideIn');
        setTimeout(function () {
            preloadFolioImages();
            createFolioLightBoxImageArray();
            document.querySelector('#lightBoxContainer').innerHTML += createLightboxes();
        }, 1500);
        setTimeout(function () {
            preloadFolioLightboxImages();
        }, 3000);
        setTimeout(function () {
            startInteractionObserver();
        }, 2000);
    };