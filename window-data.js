const windowColor = {
    about: {
        main: "#B9DAE4",
        dark: "#7BCEE7",
        light: "#D0F4FF",
    },
    resume: {
        main: "#B4C4FF;",
        dark: "#708EF9",
        light: "#DCE4FE",
    },
    casestudies: {
        main: "#A4A3D6;",
        dark: "#918FDE",
        light: "#EAEDFF",
    },
    portfolio: {
        main: "#C1DBEA",
        dark: "#6FB7E1",
        light: "#EAF7FF",
    },
    contact: {
        main: "#C5E8E6",
        dark: "#73E5DD",
        light: "#CFFCF9",
    }
}

const windowData = {
    casestudies: {
        windowHTML: `
        <div id="windowContent">
        <div id="pageCurl"></div>
        <section>

        <p>UX / UI / Product Case Study:</span></p>

        <img class="iconIllustration" src="images/casestudies-icon.png">
        <h1>Scaling a business consulting product for LPMA</h1>
        <div class="buttonContainer">
<a target=”_blank” href="/casestudies.html" >OPEN IN NEW TAB</a> <a onClick="downloadResume()"> DOWNLOAD</a></div>
        </section><section>
        <p><span class="emph">My role:</span> Product Owner / UX</p>
        <p><span class="emph">Goal:</span> To provide an easy way for real estate agency owners to see how
            much of the rental market they have today, and set goals on how much of the market they want to
            own in the future.</p>
        <p><span class="emph">Company:</span> Leading Property Managers Association (LPMA)
            Lpma.com.au</p>
        </section><section>
        <h4>BACKGROUND</h4>
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

        <h2>
            My core task at LPMA was to design an app that did this:
        </h2>
        </section>
        <section>
        <div style="width:100%; height:15vh; background:#642f2f;"></div>
        </section>
        <section>
        <p>
            In the past when the company helped real estate agencies understand their market and set goals,
            they used a consulting process called ‘5 Channels of Growth’. Here’s how that worked: </p>
            </section>
            <section>
        <div style="width:100%; height:15vh; background:#eeeeee;"></div>
        </section>
        <section>
        <p>Agency owners wanted to know how much market share they had in each of the suburbs they managed
            properties in, but it was a pain to calculate. An insular industry meant it was also hard to
            find advice on planning for growth and setting goals. With this process LPMA did that for them.
            </p><h3>
            The brief from stakeholders was something like this: Take the above process for ‘5 Channels of
            Growth’, and digitize it so that:
</h3>
        </section>
        <section>
        <div style="width:100%; height:15vh; background:#eeeeee;"></div>
        </section>
        <section>

        <h2>
            Getting to Work
        </h2>

        <p>
            Milestone 1 was to deliver the following within 3 weeks:</p>

        <ul>
            <li>To find and hire a developer,</li>
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

        <h4>01 Research and discovery </h4>
        <ul>
            <li>Reviewed existing company personas for Principals and Property management directors.</li>
            <li>Interviewed 2 consultants that ran the previous 5 Channels of Growth program.
            </li>
            <li>Informally Interviewed 3 Principals/ ex principals.
            </li>
            <li>Created a quick journey map covering how an agency owner researched their market and set
                their goals without 5 Channels of Growth, and with 5 Channels of Growth. </li>
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
        <h3>The Agency owners wanted to know how much market share they had in each of the suburbs
            they managed properties in, but it was a pain to calculate. An insular industry meant it was
            also hard to find advice on planning for growth and setting goals. With this process LPMA did
            that for them.</h3>
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

        <table>
            <tbody>
                <tr>
                    <td>
                        <p>Problem or assumption</p>
                    </td>
                    <td>
                        <p>SOLUTION</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Discovery told us that the most valuable part of the consulting program was
                            actually using the consultants as a source of feedback for ideas and goals
                            during in person sessions.&nbsp;</p>
                    </td>
                    <td>
                        <p>This wasn&rsquo;t easy to hear, as that was probably the hardest part of the
                            process to replicate in a web app. With this learning, we brainstormed ideas on
                            how the software could make users feel confident in setting their growth goals.
                            We ended up with a 3 stage plan - fast track an idea our founder had to set
                            example goals for context, provide written advice throughout the product based
                            on user questions during user testing and record a video explaining how to set
                            growth goals. If the user still felt uncertain on how to set their goal, we
                            would encourage them to guess what their goals should be and get back in touch
                            with us to talk them through it at a later date.&nbsp;</p>
                        <br /><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>The tool required the user to enter raw data about their properties and market.
                            This was time consuming for some offices to get, and sometimes couldn&rsquo;t be
                            done in one sitting.&nbsp;</p>
                    </td>
                    <td>
                        <p>Tell the user what data they would need before they started. Re prioritise a
                            software feature to auto save and resume a user's progress. This solved the
                            issue in further testing.&nbsp;</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>User testing revealed users were not sure if they could close the window without
                            losing what they had entered on that screen.</p>
                    </td>
                    <td>
                        <p>Reassure the user that they can close the window and return without losing data
                            via a banner on two screens where this concern occured.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Users sometimes didn&rsquo;t know how to track down the data we needed from them
                        </p>
                    </td>
                    <td>
                        <p>We found some tutorials on the internet and linked them into the tool
                            itself.&nbsp;</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Users sometimes wanted to see the goal setting functionality of the tool, but
                            couldn&rsquo;t get to it without completing steps 1-4 first</p>
                    </td>
                    <td>
                        <p>We added in an overview of the tool on the first screen and an example of some of
                            the results.&nbsp;</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Users didn&rsquo;t trust our algorithms </p>
                    </td>
                    <td>
                        <p>Including details about how the results from the tool are calculated solved this
                            problem in further tests.&nbsp;</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>&ldquo;How long is this thing going to take me?&rdquo;&nbsp;</p>
                    </td>
                    <td>
                        <p>Estimated time for completion added.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>People didn&rsquo;t know how to use the slider controls we implemented to set
                            their goals</p>
                    </td>
                    <td>
                        <p>Did some interaction design prototyping internally. Adding &lsquo;grip&rsquo; to
                            the slider handle and an animation on entry to the page solved the issue.&nbsp;
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        </section>
        <section>
        <h2>Flow, before and after</h2>
        <p>A simplified example of how our user flow looked before and after validation. We learnt a lot.
        </p>
        <div style="width:100%; height:15vh; background:#eeeeee;"></div>
        <p>
            A link to <a target="_blank" 
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
        </p>        </section>
    </div> `,
    },
    resume: {
        windowHTML: `

    <div id="windowContent">
    <div id="pageCurl"></div>

    <section>
        <p>Pat Mifsud 2020 Resume</p>
        <img class="iconIllustration" src="images/resume-icon.png">
        <h1>I’m a passionate, results orientated UI / UX Designer.</h1>
        <div class="buttonContainer">
            <a target=”_blank” href="/casestudies.html">OPEN IN NEW TAB</a> <a onClick="downloadResume()">
                DOWNLOAD</a><a target="_blank" href="https://www.linkedin.com/in/patmifsud">
                LINKEDIN</a></div>
        <h3>I enjoy using creative methods to get concrete results in usability, retention and user acquisition.
        </h3>
        <p> My background in startups and small teams has given me an adaptable mindset, strong work ethic and
            valuable understanding of Product, Engineering, Marketing and CX support roles from firsthand
            experience. I have strong HTML/CSS knowledge, a wide skill set and have worked on Saas, B2B and B2C
            products.</p>
    </section>


    <section>
        <h2>Experience</h2>

        <h4>

            <span class="emph">UI / UX Designer</span> at The Big Crunch <br />
            Feb 2019 - Now
        </h4>
        <ul>
            <li>
                <span class="emph">Designed interfaces for web and mobile productivity tools,</span> testing both
                prototypes
                and mvp builds. Ran over
                40 user tests and interviews for less then $300.<br />We grew our userbase from two to four figures. I
                created a
                basic design system for the company in Figma where stakeholders and developers could directly
                collaborate on
                designs.</li>
            <li>
                Swapped hats to design/ growth hacking/ front end development/ customer support as needed.</li>
        </ul>
    </section>


    <section>
        <h4>
            <span class="emph">CX Designer</span> at Ailo <br />
            Sep 2018 - Dec 2018
        </h4>
        <ul>
            <li>
                Worked across disciplines and teams to design and build scalable systems to <span class="emph">convert
                    trials to subscriptions
                    and decrease churn.</span></li>
            <li>
                <span class="emph">Designed and built onboarding campaigns</span> and landing pages with the CX team,
                managing the backend systems
                (Mailchimp/ Vero) that drove them.</li>
            <li>
                Designed dashboards and reports to keep sales and engineering teams in touch with their impact on the
                customer experience through Salesforce and external tools.</li>
        </ul>
    </section>


    <section>
        <h4>
            <span class="emph">Product Owner</span> at LPMA (Owned by Ailo)<br />
            Feb 2018 - Sep 2018

        </h4>
        <ul>
            <li>
                Worked with domain experts, stakeholders, internal and external engineering and design teams to <span
                    class="emph">own and design a business
                    consulting product.</span> <a target="_blank" href="/casestudies.html">Read the Case Study here</a>
            </li>
            <li>Worked with an external development company to build consulting products and client resources. </li>
            <li>
                Designed dashboards and reports to keep sales and engineering teams in touch with their impact on the
                customer experience through Salesforce and external tools.</li>
        </ul>
    </section>


    <section>
        <h4>
            <span class="emph">Graphic / UX Designer</span> at Apmasphere (also Ailo) <br />Feb 2017 - Feb 2018<br />
        </h4>
        <ul>
            <li>
                Created prototypes and ran usability testing sessions, presenting results to design team, developers and
                stakeholders. </span></li>
            <li>Learnt Framer.js to allow us to prototype complex interactions and animations, validated and iterated on
                these designs through user feedback. </li>
        </ul>
    </section>


    <section>
        <h4>
            <span class="emph">Graphic Designer</span> at I-MANIFEST, Charity<br />
            2014 - 2015
        </h4>
        <ul>
            <li>Graphic and web designer, probono.
            </li>
        </ul>
    </section>


    <section>
        <h4>
            <span class="emph">Designer and Marketing Coordinator</span> at Apmasphere (Owned by Ailo) <br />
            March 2015 - Feb 2017  
        </h4>
        <ul>
            <li>
            Worked on branding, print and digital design work, video and animation projects, email marketing, physical spaces - designing conference booths, signage and branding.</li>
        </ul>
    </section>

    <section>
        <h4>
            <span class="emph">Graphic Designer</span> at Urban Purveyor Group 
            <br />
            2013 - 2015   (Saké, Barvarian Beir Cafe, Löwenbräu, The Argyle)
        </h4>
    </section>

    <section>
        <h4>
            <span class="emph">Assistant Teacher at UTS Sydney
            <br />
            Feb - May 2014 
        </h4>
    </section>
    <section>
    <h2>Education</h2>
    <h4>
        <span class="emph">Bachelor of Design in Visual Communication - <br/>University of Technology Sydney  </h4><ul>
    <li>Distinction Av. Took additional classes in UX, animation and frontend programming. </li></ul>
    </section> <section></section>
    <section><p>Referees on request. <a onClick="email();">Send me an Email</a></p></section>
    <section>
    <div class="buttonContainer">
            <a target=”_blank” href="/casestudies.html">OPEN IN NEW TAB</a> <a onClick="downloadResume()">
                DOWNLOAD</a><a target="_blank" href="https://www.linkedin.com/in/patmifsud">
                LINKEDIN</a></div>
                </section>
</div>

        `
    },
    about: {
        windowHTML: `<div id="windowContent">
        <img class="iconIllustration" src="images/about-icon.png">

        <section><h2>Coming soon</h2>
        </section>`
    },
    portfolio: {
        windowHTML: `<div id="windowContent">
        <img class="iconIllustration" src="images/portfolio-icon.png">

        <section><h2>Coming soon</h2>
        </section>`
    },
    contact: {
        windowHTML: `<div id="windowContent">
        <img class="iconIllustration" src="images/contact-icon.png">

        <section><h2>Coming soon</h2>
        </section>`
    }
}