// This file has all content for inside each of the windows in the fake file system

// OBJECTS
const caseStudyAccordianContent = [{
        problem: `Discovery told us that the most valuable part of the consulting program was actually using the consultants as a source of feedback for ideas and goals during in person sessions. `,

        solution: `This wasn’t easy to hear, as that was probably the hardest part of the process to replicate in a web app. With this learning, we brainstormed ideas on how the software could make users feel confident in setting their growth goals. We ended up with a 3 stage plan - fast track an idea our founder had to set example goals for context, provide written advice throughout the product based on user questions during user testing and record a video explaining how to set growth goals. If the user still felt uncertain on how to set their goal, we would encourage them to guess what their goals should be and get back in touch with us to talk them through it at a later date. 
        `
    },
    {
        problem: `The tool required the user to enter raw data about their properties and market. This was time consuming for some offices to get, and sometimes couldn’t be done in one sitting. 
    `,
        solution: `Tell the user what data they would need before they started. Re prioritise a software feature to auto save and resume a user's progress. This solved the issue in further testing. 
        `,
    },
    {
        problem: `User testing revealed users were not sure if they could close the window without losing what they had entered on that screen.
        `,
        solution: `Reassure the user that they can close the window and return without losing data via a banner on two screens where this concern occured.
        `,
    }, {
        problem: `Users sometimes didn’t know how to track down the data we needed from them
        `,
        solution: `We found some tutorials on the internet and linked them into the tool itself. 
        `,
    }, {
        problem: `Users sometimes wanted to see the goal setting functionality of the tool, but couldn’t get to it without completing steps 1-4 first
        `,
        solution: `We added in an overview of the tool on the first screen and an example of some of the results. 
        `,
    }, {
        problem: `Users didn’t trust our algorithms  
        `,
        solution: `Including details about how the results from the tool are calculated solved this problem in further tests. 
        `,
    }, {
        problem: `“How long is this thing going to take me?” 
        `,
        solution: `Estimated time for completion added.
        `,
    }, {
        problem: `People didn’t know how to use the slider controls we implemented to set their goals
        `,
        solution: `Did some interaction design prototyping internally. Adding ‘grip’ to the slider handle and an animation on entry to the page solved the issue. 
        `,
    },
]

const folioContent = [{
        folioItemName: 'crunchUi',
        imgUrl: './images/folio/crunchUi.png',
        title: `UI - Online Chart Building Tool `,
        subtitle: `The Big Crunch`,
        description: `UI, UX and interaction design for a chart and graph tool. Using prototyping, usertests and analytics I worked with the team at Big Crunch to design and iterate on a web and mobile interface that allowed users to quickly create online data visualisations. `,
        lightbox: [{
            img: './images/folio/lightBox/crunchUi1.png',
            id: 'crunchUi1',
            desc: '<span class="emph">Big Crunch: </span> UI and UX design for a desktop and mobile tool that allowed users to quickly create data visualisations, such as bar and pie charts.',
        }, {
            img: './images/folio/lightBox/crunchUi2.png',
            id: 'crunchUi2',
            desc: '<span class="emph">Big Crunch: </span> An icon library to represent each type of chart a user can create on The Big Crunch tool.',

        }]
    }, {
        folioItemName: 'healthWeb',
        imgUrl: './images/folio/healthWeb.png',
        title: `“The First 40 Years” book website`,
        subtitle: `NSW Health`,
        description: `"The first 40 years" is a book created by the NSW Government and UTS Publishing to record the history of interpreters in the health care service. 
    I used existing brand photography and styleguide to design and build a website where people could download the book for free, and press could read through a timeline of the events in the book for reference. `,
        lightbox: [{
            img: './images/folio/lightBox/healthWeb1.png',
            id: 'healthWeb1',
            link: 'http://34.205.8.88/',
            desc: '<span class="emph">"The first 40 years" </span> is a book created by the NSW Government and UTS Publishing. I designed and built a website to facilitate media enquiries and book downloads. <a target="_blank" href="http://34.205.8.88/">View it here.</a>'
        }]

    }, {
        folioItemName: 'riverboatsPrint',
        imgUrl: './images/folio/riverboatsPrint.png',
        title: `Hawksbury Riverboats`,
        subtitle: `Author Jean Purtell`,
        description: `Part one in a series of local nautical history books for the Hawkesbury Area. My role was to restore the old photography, design and page layout.`,
        lightbox: [{
            img: './images/folio/lightBox/riverboatsPrint1.png',
            id: 'riverboatsPrint1',
            desc: '<span class="emph">Hawksbury Riverboats: </span> Part one in a series of local history books for the Hawkesbury Area. My role was to restore the old photography and page layout design.',
        }, {
            img: './images/folio/lightBox/riverboatsPrint2.png',
            id: 'riverboatsPrint2',
            desc: '<span class="emph">Hawksbury Riverboats: </span> Part one in a series of local history books for the Hawkesbury Area. My role was to restore the old photography and page layout design.',

        }]

    }, {
        folioItemName: 'ananasPrint',
        imgUrl: './images/folio/ananasPrint.png',
        title: `Restaurant Menu - Ananas`,
        subtitle: `The Rocks, Sydney`,
        description: `Menu design for a French restaurant in The Rocks, Sydney.`,
        lightbox: [{
            img: './images/folio/lightBox/ananasPrint1.png',
            id: 'ananasPrint1',
            desc: '<span class="emph">Ananas: </span> Menu design for a French restaurant in The Rocks, Sydney.',

        }]

    }, {
        folioItemName: 'jagerPrint',
        imgUrl: './images/folio/jagerPrint.png',
        title: `Events posters and branding`,
        subtitle: `Jägermeister and Bavarian Bier Cafe`,
        description: `Styling and rollout for a series of events in partnership between Jagermeister and Bavarian Beir Cafe.`,
        lightbox: [{
            img: './images/folio/lightBox/jagerPrint1.png',
            id: 'jagerPrint1',
            desc: '<span class="emph">Ananas: </span> Styling and rollout for a series of events in partnership between Jagermeister and Bavarian Beir Cafe.',

        }]

    },
    {
        folioItemName: 'conferenceWeb',
        imgUrl: './images/folio/conferenceWeb.png',
        title: `Conference Website`,
        subtitle: `Property Management Conference`,
        lightbox: [{
            img: './images/folio/lightBox/conferenceWeb1.png',
            id: 'conferenceWeb1',
            desc: `<span class="emph">PMC2017: </span> Website and EDM marketing for an Australian property management conference. Role included design, coding and maintenance.`,
        }]

    }, {
        folioItemName: 'trainingWeb',
        imgUrl: './images/folio/trainingWeb.png',
        title: `Staff Training Service`,
        subtitle: `Paid online webinars`,
        lightbox: [{
            img: './images/folio/lightBox/trainingWeb1.png',
            id: 'trainingWeb1',
            desc: `<span class="emph">Apmasphere Training: </span>  Web Design, filming, production and payment system implementation for an online training webinar subscription service.`,

        }]

    },
    {
        folioItemName: 'fluidPrint',
        imgUrl: './images/folio/fluidPrint.png',
        title: `Magazine Layout`,
        subtitle: `Studnet Project`,
        lightbox: [{
            img: './images/folio/lightBox/fluidPrint1.png',
            id: 'fluidPrint1',
            desc: `<span class="emph">Fluid Print: </span> Experimentation using a randomly generated grid for type layout.`,

        }, {
            img: './images/folio/lightBox/fluidPrint2.png',
            id: 'fluidPrint2',
            desc: `<span class="emph">Fluid Print </span> I used random computer generation and blindfolded drawing to create unusual and interesting layouts.`,

        }]
    },
]


// PORTFOLIO TEMPLATE LITERAL GENERATOR

function generatePortfolioItemHtml(folioItem) {
    return `<div class="folioItem ${folioItem.folioItemName}">
    <a onClick="turnOnLightbox('${folioItem.folioItemName + '1'}')">
    <img src="${folioItem.imgUrl}">
    </a>
    <div onClick="turnOnLightbox('${folioItem.folioItemName + '1'}' class="folioDetailsContainer">
        <p>${folioItem.title}</br>
        <span class="emph">${folioItem.subtitle}</span>
        </p>
    </div>
</div>`
}

// CASESTUDY TEMPLATE LITERAL GENERATOR
function generateAccordianHtml(accordianItem) {
    return `<li><input type="checkbox" checked=""><i></i>
                <p><span class="emph">Problem: </span><br / >${accordianItem.problem}</p>
                <br /><p><a class="seeSolution">See Solution</a></p>
                <div class="solution">
                <div class="solution_content"><p><span class="emph">Solution:<br /> </span>${accordianItem.solution}</p></div>
                </div>
            </li>`
}




// Content for each window when opened

const windowData = {
    // CASE STUDY WINDOW
    casestudies: {
        windowHTML: `<div id="windowContent"> 
        <section>

        <p>UX / UI / Product Case Study:</span></p>

        <h1>A business consulting product for LPMA</h1>
        <div class="buttonContainer">
        <!-- <a target=”_blank” href="/casestudies.html" >OPEN IN NEW TAB</a>  <a onClick="downloadResume()"> DOWNLOAD</a> --> </div>
        </section><section>

<h3>This is a work in progress. Most of the text is here, but a final pass is needed as well as some more images. Feedback in the interim would be much appreciated.🙇‍♂️</h3>


        <p><span class="emph">My role:</span> Product Owner / UX</p>
        <p><span class="emph">Goal:</span> To provide an easy way for real estate agency owners to see how
            much of the rental market they have today, and set goals on how much of the market they want to
            own in the future.</p>
        <p><span class="emph">Company:</span> Leading Property Managers Association (LPMA)
            Lpma.com.au</p>
        </section><section>
        <p>BACKGROUND</p>
        <p>LPMA is an industry association for rental property managers, kind of like AGDA for Graphic
            Designers, or CPA for Accountants.

            2017 was an exciting time to be working there. My previous company, Ailo, had just purchased
            LPMA and was starting an experiment. They wanted to see if they could make the business leaner
            by moving away from phone calls, office visits and manual modeling, to instead giving their
            members access to online guides, programs and videos. A Sass industry association of sorts. </p>
        <p>
            So I took on the job of Product Owner and UX for LPMA. I had never managed anyone or anything at
            this point, nor lead a project myself, but it was exactly the kind of baptism of fire challenge
            I was looking for, and the transformation aspect was really appealing.
        </p>
        </section>
        <section>
        <h2>My core task at LPMA was to design an app that did this:
        </h2>
        </section>
        <section>
        <img src="./images/casestudy/caseStudy1.png" style="width:100%; max-width: 70vh;">
        </section>
        <section>
        <p>In the past when the company helped real estate agencies understand their market and set goals,
            they used a consulting process called ‘5 Channels of Growth’. Here’s how that worked: </p>
            </section>
            <section>
            <img src="./images/casestudy/caseStudy2.png" style="width:100%; max-width: 70vh;">
            </section>
        <section>
        <p>Agency owners wanted to know how much market share they had in each of the suburbs they managed
            properties in, but it was a pain to calculate. An insular industry meant it was also hard to
            find advice on planning for growth and setting goals. With this process LPMA did that for them.
            </p><p>The brief from stakeholders was something like this: Take the above process for ‘5 Channels of
            Growth’, and digitize it so that:
</p>
        </section>
        <section>
        <div style="width:100%; height:15vh; background:#eeeeee;"></div>
        </section>
        <section>

        <h2>Getting to Work
        </h2>

        <p>Milestone 1 was to deliver the following within 3 weeks:</p>

        <ul>
            <li>To find and hire a developer</li>
            <li>To get a rough preview of some wire frames to stakeholders</li>
            <li>To get a working demo of some functionality from the developers to present</li>
            <li>To do any preliminary research required for the above</li>
        </ul>
        <p>
            The team was to be me and an external software development team, with help from internal subject
            matter experts. We found a software development team that was able to start work quickly through
            outsourcing platform Upwork which consisted of one project manager/ senior developer, later a
            business analyst and senior to junior contract developers.
        </p>
        <p>
            The devs began by setting the foundation of the app in Firebase while I kicked off the research
            and discovery stage.

        </p>
        </section>
        <section>


        <h2>The Process </h2>
        <p>Whilst the tight deadlines made it difficult to run a comprehensive discovery process, the easy
            availability of internal and company friendly prospective users helped greatly.
        </p>
        </section>
        <section>

        <p>01 Research and discovery </p>
        <ul>
            <li>Reviewed existing company personas for Principals and Property management directors.</li>
            <li>Interviewed 2 consultants that ran the previous 5 Channels of Growth program.</li>
            <li>Informally Interviewed 3 Principals/ ex principals.</li>
            <li>Created a quick journey map covering how an agency owner researched their market and set
                their goals without 5 Channels of Growth, and with 5 Channels of Growth.</li>
        </ul>
        <p>The first question to answer was “Who are we ‘selling’ this service to?”, with the second
            being “who will be the one actually using it?”. It turns out that this answer varied
            depending on the client. Some agency owners would use it themselves, while others would
            delegate the work out to a department director.</p>
        <p>The problem that the product solves for each of these parties is quite different.
        </p>
        </section>
        <section>
        </br>
        <p><span class="emph">For the Agency Owner, </span>they want an easy way to grow their rental
            department without having to invest too much ongoing time into it. They want answers on
            where to focus their limited time and effort, so they could set it up to gain profits and go
            back to focusing on their Sales department. </p>
        <p>The Agency owners wanted to know how much market share they had in each of the suburbs
            they managed properties in, but it was a pain to calculate. An insular industry meant it was
            also hard to find advice on planning for growth and setting goals. With this process LPMA did
            that for them.</p>
        </br>

        <p><span class="emph">For the Department Director, </span> they were all about efficiency and
            consolidation. Growing the responsibilities of their department through growing the business may
            actually be a negative for them (the opposite of the priorities for the Agency Owner!), as it
            meant more work to allocate amongst the team. Initially, all of our copy around the product was
            going to be ‘increase the amount of properties you manage”, but after learning this we made our
            messaging a little more neutral. The results of the survey could help the department director
            understand which suburbs are the best to focus on, and included practical guides and advice on
            how to run the rental department. It was fortunate that we found this out early on in the
            process.
        </p>
        </section>
        <section>
        <p>Next, it was on to:<br />
            Defining Prototyping, and Validation
        </p>
        </section>
        <section>
        <div style="width:100%; height:15vh; background:#eeeeee;"></div>
        </section>
        <section>
        <h2>Problems and solutions </h2>

        <div class="accordian">
        <ul>${caseStudyAccordianContent.map(generateAccordianHtml).join(" ")}</ul></div>


        </section>
        <section>
        <h2>Flow, before and after</h2>
        <p>A simplified example of how our user flow looked before and after validation. We learnt a lot.
        </p>
        <div style="width:100%; height:15vh; background:#eeeeee;"></div>
        <p>A link to <a target="_blank" 
                href="https://www.figma.com/file/Izy3CeLSkLkRDQKGeuoqJTAE/LPMA-5COG-Wireframe?node-id=1256%3A6894">an
                old version of the wireframes in figma</a>.</p>
        </section>
        <section>
        <h2>Outcome</h2>
        <p>In the end, together with our development partner we faced some budgeting issues which meant they
            were unable to complete the project. A beta version of the product that used human input to
            bridge feature gaps was sent out to 3 clients with very positive feedback.
        </p>
        <p>A bit of a bitter sweet end to my first product, but the journey was an amazing one.
        </p>
        </section>
        <section>
        <p>Referees available upon request
        </p>        
        </section>
    </div> `,
    },



    // RESUME WINDOW
    resume: {
        windowHTML: `<div id="windowContent">

        <section>
            <h1>Resume</h1>
            <p>Hi, I'm Pat. I’m a passionate designer specialising in user interfaces and user experience research.
                I believe that great design is visually appealing, solves the right problem for the right person, and is
                feasible to build.</p>
            <a onClick="downloadResume()">Download PDF Resume</a> &nbsp; <a target="_blank"
                href="https://www.linkedin.com/in/patmifsud"> LinkedIn</a>
        </section>
    
        <section>
            <h2>Experience</h2>
    
            <p><span class="resumeEmph">UI / UX Designer at The Big Crunch.</span> <span class="resumeDate">Feb 2019 -
                    Now</span></p>
            <ul>
                <li><span class="resumeEmph">I designed interfaces for web and mobile productivity tools, while creating a
                        basic design system for the company in Figma where stakeholders and developers could directly
                        collaborate on designs. </li>
                <li>I ran over 30 user tests and interviews for less then $300. </li>
                <li>I swapped hats to design/ growth hacking/front end development/ customer support as needed as we grew
                    our userbase from two to four figures.</li>
            </ul>
            </seection>
    
            <section>
                <p><span class="resumeEmph">CX Designer at Ailo.</span> <span class="resumeDate">Sep 2018 - Dec 2018</span>
                </p>
                <ul>
                    <li>I worked across disciplines and teams to design and build scalable systems to convert trials to
                        subscriptions and decrease churn.</span></li>
                    <li><span class="resumeEmph"></span>I designed and built onboarding campaigns and landing pages with the
                        CX team, working with the backend systems (Mailchimp/ Vero) that
                        drove them.</li>
                    <li>I designed dashboards and reports to keep the sales and engineering teams in touch with their impact
                        on the customer experience through Salesforce and external tools.</li>
                </ul>
    
            </section>
    
    
            <section>
                <p><span class="resumeEmph">Product Owner at LPMA (Owned by Ailo).</span> <span class="resumeDate">Feb 2018
                        - Sep 2018</span>
                </p>
                <ul>
                    <li>I worked with domain experts, stakeholders, internal and external engineering and design teams to
                        own and design a business consulting product. </li>
                    <li>I worked with an external development company to build consulting products and client resources.
                    </li>
                </ul>
            </section>
    
    
            <section>
                <p>
                    <span class="resumeEmph">Graphic / UX Designer</span> at Apmasphere (also Ailo). Feb 2017 - Feb
                    2018<br />
                </p>
                <ul>
                    <li>I created prototypes and ran usability testing sessions, presenting results to design team,
                        developers and stakeholders. </li>
                    <li>I learned Framer.js to allow us to prototype complex interactions and animations, validated and
                        iterated on these designs through user feedback. </li>
                </ul>
            </section>
    
    
            <section>
                <p>
                    <span class="resumeEmph">Graphic Designer</span> at I-MANIFEST, Charity. 2014 - 2015
                </p>
                <p>Graphic and web designer, probono.</p>
            </section>
    
    
            <section>
                <p>
                    <span class="resumeEmph">Designer and Marketing Coordinator</span> at Apmasphere (Owned by Ailo). March
                    2015 - Feb 2017
                </p>
                <ul>
                    <li>Worked on branding, print and digital design work, video and animation projects, email marketing.
                    </li>
                </ul>
            </section>
    
            <section>
                <p>
                    <span class="resumeEmph ">Graphic Designer</span> at Urban Purveyor Group. 2013 - 2015 (Saké, Barvarian
                    Beir Cafe, Löwenbräu, The Argyle)
                </p>
            </section>
    
            <section>
                <p>
                    <span class="resumeEmph ">Assistant Teacher</span> at UTS Sydney. Feb - May 2014
                </p>
            </section>
    
            <section>
                <h2>Education</h2>
                <p>
                    <span class="resumeEmph">Bachelor of Design in Visual Communication - <br />University of Technology
                        Sydney </p>
                <ul>
                    <li>Distinction Av. Took additional classes in UX, animation and frontend programming. </li>
                </ul>
            </section>
            <section>
                <p>Referees on request. <a onClick="email();">Send me an Email</a></p>
                <a onClick="downloadResume()">Download PDF Resume</a> &nbsp; <a target="_blank"
                    href="https://www.linkedin.com/in/patmifsud"> LinkedIn</a>
            </section>
    </div>`
    },




    // ABOUT WINDOW
    about: {
        windowHTML: `<div id="windowContent">

        <section>
        <p>Hi, I'm Pat</p>
        <p>I’m a passionate designer specialising in user interfaces and user experience research. I believe that great design
        is visually appealing, solves the right problem for the right person, and is feasible to build.
        </p>
        <p>I'm in the middle of building this website out so please forgive the rough edges, typos and missing features 🙇‍♂️.</p> <p>But check back often!</p>
        <p>Please drop me a line at <a href="mailto:patmifsud@me.com"> patmifsud@me.com</a> with any enquiries.</p>
        </section>`
    },



    // PORTFOLIO WINDOW
    portfolio: {
        windowHTML: `
        <div id="windowContent">
        
            <!-- <section>
                <div class="buttonContainer">
                    <a onClick="turnOnLightbox()">VIEW FULL SCREEN</a>  </div>
            </section> -->

            <section>
                <div class="folioItemContainer">
                ${folioContent.map(generatePortfolioItemHtml).join("")}
                </div>
            </section>
        </div>`
    },




    // CONTACT WINDOW

    contact: {
        windowHTML: `<div id="windowContent">
        <section><h1>Let's chat</h1><ul>
        <li> <a onClick="email()">Send me an Email</a></li>
        <li> <a onClick="linkedIn()">Visit my LinkedIn</a></li>
        <li> <a onClick="twitter()">Visit my Twitter</a></li>
        <li> <a onClick="createCallAlert()">Give me a call on 0448742570</a></li></ul>
        </section>`
    }
}
let windows = {
    about: {
        // Text that appears in the title bar of the window
        titleBar: "About",
        // The file that the contents of the window will be loaded from
        contentUrl: `about.html`,
        data: windowData.about.windowHTML,
        classString: 'about',
        emoji: '👋',
        // each window has a color scheme that matches it's icon:
        colors: {
            title: "#FAE7B7",
            bg: "#FFF9EA",
            text: "#9F9780",
            link: "#B8973A",
        }
    },
    portfolio: {
        titleBar: "Portfolio",
        contentUrl: `portfolio.html`,
        classString: 'portfolio',
        data: windowData.portfolio.windowHTML,
        emoji: '💼',
        colors: {
            title: "#6C6C6C",
            bg: "#7B7B7B",
            text: "#E7E7E7",
            link: "#FFFFFF",

        }
    },
    resume: {
        titleBar: "Resume",
        contentUrl: `resume.html`,
        classString: 'resume',
        emoji: '📄',
        data: windowData.resume.windowHTML,
        colors: {
            title: "#D7E0F9",
            bg: "#EEF2FF",
            text: "#566AA5",
            link: "#4C6EDD",

        }
    },
    casestudies: {
        titleBar: "Case Study",
        contentUrl: `casestudies.html`,
        classString: 'casestudies',
        emoji: '📓',
        data: windowData.casestudies.windowHTML,
        colors: {
            title: "#F6E3E0",
            bg: "#FFF7F5",
            text: "#968481",
            link: "#833F34",
        }
    },

    contact: {
        titleBar: "Contact",
        contentUrl: `contact.html`,
        classString: 'contact',
        data: windowData.contact.windowHTML,
        emoji: '📞',
        colors: {
            title: "#DEE9E7",
            bg: "#F6FAF9",
            text: "#6B9590",
            link: "#40A095",

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
        named: "Contact",
        id: "contactMenu",
        contents: [{
            named: "Email",
            ifClicked: "email()",
        }, {
            named: "Phone",
            ifClicked: "createCallAlert()",
        }, {
            named: "Twitter",
            ifClicked: "twitter()",
        }, {
            named: "linkedIn",
            ifClicked: "linkedIn()",
        }],
    },
    {
        named: "Download",
        id: "downloadMenu",
        contents: [
            {
                named: "Download PDF Resume",
                ifClicked: "downloadResume('pdf')",
            },
            // {
            //     named: "Download Word Resume",
            //     ifClicked: "downloadResume('word')",
            // }
        ],
    },
]

const desktopIcons = [ {
    named: "About",
    id: "about",
    // icon for each desktop object:
    img: "images/about-icon.png",
    // funciton to perform when icon is clicked:
    whenClicked: "animateInWindow(windows.about)",
},{
    named: "Portfolio",
    id: "portfolio",
    img: "images/portfolio-icon.png",
    whenClicked: "animateInWindow(windows.portfolio)",
}, {
    named: "Resume",
    id: "resume",
    img: "images/resume-icon.png",
    whenClicked: "animateInWindow(windows.resume)",
}, 
// {
//      named: "Case Study",
//     id: "casestudies",
//    img: "images/casestudies-icon.png",
//   whenClicked: "animateInWindow(windows.casestudies)",
// },
 {
    named: "Contact",
    id: "contact",
    img: "images/contact-icon.png",
    whenClicked: "animateInWindow(windows.contact)",
},

]

const callAlert = `
<div id="callAlert" class="alertBg">
    <div class="alert">
        <div id="windowHeader">
            <div id="windowHeaderText">Call</div> <a class="close" onclick="closeCallAlert();"></a>
        </div>
        <div class="alertContent">
            <textarea readonly="readonly" id="foneNarmber">(+61) 48 742 570</textarea>
        </div>
        <div class="alertButtonContainer">
                <a href="tel:+61448742570" onClick="closeCallAlert()">Call Now</a><a id="copyTextCall" onclick="copyNumber();">Copy Number</a> 
        </div>
    </div>
</div>`;

