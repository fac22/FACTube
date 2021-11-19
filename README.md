# FAC-Tube

## fac22 Project Weeks 7-9

## Content
- Our Team
- The Product
- Tech Stack & Tools
- Software Development Lifecycle
    - Planning
    - Analysis
    - Design
    - Implementation/Build
    - Test
    - Deploy
    - Maintain



## Our Team
- Co-authored-by: moggach <43313455+Moggach@users.noreply.github.com>
- Co-authored-by: Danilo <81513148+danilo-cupido@users.noreply.github.com> 
- Co-authored-by: Mohamed <76549147+Alisyad9@users.noreply.github.com>
- Co-authored-by: Barbara <77367593+0bubbles0@users.noreply.github.com>

Many thanks to our project & role mentors, the fac team and our code reviewers


## The Product
<!--
### Talking Points
- What are you building?
- Why are you building it?
- Scope: What are you **not** building?
- How did you decide what features were important?
-->
FAC-Tube is a website where members of the fac community (applicants, current cohorts, alumni) can easily find (tag, recommend) useful coding YouTube videos



## Tech Stack & Tools
- Miro & Figma for Wireframing
- Material UI for CSS components
- Next.js with React.js for front-end & back-end
- Supabase for our Postgres database & Authentication
- Cypress for Testing
- Vercel for Deployment

### To view this project
1. See our deployed version on Vercel with the link in the description
2. Run the code locally
  - Clone the repo
  - cd into the folder and run NPM install
  - npm run dev &rarr; starts the server

## Software Development Lifecycle

## Planning
<!--
### Talking Points
- How are you going to structure your sprints?
- What order are you going to build in?
- How did user research inform your plan?

- Roles
    - What roles did your team take on?
        - Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)
    - Did these roles help your team work effectively?
        - Outline how teams work effectively to produce software and how to contribute appropriately (K6)
        - Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)
-->
### User Research Script
<!--
- User
- Requirement analysis
    - How will you ensure your project is accessible to as many users as possible?
    - Are there any legal or regulatory requirements you should consider?
- Tech spikes
-->
#### Introduction:
    - Thank you for coming. We are Anna, Danilo, Mohamed, Barbara, current fac22. This is our in-house project
    - We are making an app for FAC members, alumni and applicants. They can share YouTube tutorials they enjoyed so that learners don't waste time watching incorrect or outdated content
    - We'd like you to answer as freely, as specifically and honestly as you you are comfortable with. All feedback is useful to us
    - Person2 will be taking notes. We'll use these notes anonymously.
    - The process will take about half an hour. Let us know if you would like a break at any point.
    - If there are any questions you don't want to answer just let us know and we can move on.
#### General Questions:
    - What devices do you mostly use to learn coding? How long have you had/used these devices?
    - What online coding resources do you currently use?/ What type of online resources do you use to learn coding (blog, text or video tutorials, discord chats...)
    - What device do you currently use to access YouTube?
    - Is YouTube app installed on your phone?
    - What do you use YouTube for?
        - What kind of videos do you watch?
        - What YouTube features do you use? Make your own Playlists, create Videos...?
    - Do you use captions when you watch Tutorials, what accessibility features are important to you?
    - Have you ever liked, commented, engaged with coding tutorials on YouTube?
#### Specific Questions:
    - What portion of your learning is through tutorial videos? Why do/don't you like videos, why do/don't use it?
    - What coding topics do you most research on YouTube?
    - Would recommendations from other FAC members/alumni make you more likely to watch a video? If so, why?
    - How much time do you spend on researching before you find what you're interested in?
    - What length of videos do you typically watch? Would Timestamps make you more likely to watch a video?
    - Would you find grouping resources by their duration helpful?
    - How do you store information about coding, tutorials? What device, app?
    - How do you structure your YouTube learning - e.g. by topic? Or by individual channel?
    - Do you have any favourite YouTube coding channels?
    - Do you use videos to learn new material or to consolidate previous learnings?
    - What frustrates you about learning to code  online? In general? From YouTube tutorials?


### Wireframing & Prototype
- Miro & Figma
![](https://i.imgur.com/1ezazDK.png =200x)



## Analysis
<!--
- Research
    - What did you find out from user testing?
- Project & Outcomes 
    - Did your team work effectively?
    - What would you do differently next time?
    - Were your assumptions right or wrong?
- Conclusions & Recommendations
    - What features would you prioritise to build next?
    - Was the project a success?
- What might be the intended and unintended consequences of building this product?
-->
### User research results
✅ Our research interviews told us that they would find recommendations from other FAC members useful 

✅ They told us that they would like to be able to filter videos by topic and length

❌ However, they told us that they didn't find it difficult to find good coding content on YouTube (depending on the topic!)



## Design
<!--
- How did you plan a user experience?
- What technical decisions did you make?
    - Server-render vs client-render vs both
    - Relational or non-relational or no DB
    - Self-hosted or platform-as-a-service
    - Frontend first vs DB first
- Did you create a technical specification?
    - Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)
-->
### MVP
#### Shrink idea into MVP

- All parts seem connected!
- What features & pages could we live without?
    - User accounts: Log In, Personal Library
    - Big database: Keep it simple for now
- :arrow_right: Simplest MVP :arrow_right: Feed of good videos

![](https://i.imgur.com/Z3x66k6.png =500x)

### Plan for Build Sprints
![](https://i.imgur.com/PGvYhUJ.png =500x)
### Kanban Board
![](https://i.imgur.com/CPvJibO.png)

## Implementation/Build
<!--
- How did you ensure your code was good?
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

- What interesting technical problems did you have to solve?
Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

- How did you debug issues that arose?
Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)
-->
### Roles
#### QA: Anna
#### DevOps: Danileo 
#### UX: Mohamed
#### Scrum: Barbara
- How we worked
    - Set Daily Goals
    - Underplan: allow time for bugs
    - Switch between Group, Pair, Individual work
    - Regular **Stand-ups**
        - **Coordinate**: make & allocate tickets
        - **Hand-overs**: merge code in the group


### Design Sprint

#### Challenges
- Multiple uncertainties
    - **Product idea**: Work out what it is, correct scope
    - **Wireframing**
        - What is it for? To test functionality, page flow, layout or design? 
        - What are correct priorities?
    - **Figma**: 
        - How it works
        - How to make it useful to us 
        - Does it beat paper sketches?

-  Feel overwhelmed
    - It's ok to be confused
        - What exactly is confusing? 
        - Ask others! 🚀
    - :construction: 🚨⚠️:ambulance: at 6pm
        - It's ok to switch off &rarr; we'll fix it tomorrow
        - It probably looks fine & clear to someone else
        - How important is this to final product?

#### What we learned
🤔 How to define the problem our users are facing and design a solution 

🤔  How to use Figma to create prototypes for testing

🤔 How to conduct user research and usability testing

🤔 How to synthesise user feedback and adjust our project scope and goals

🤔 How to realistically scope our MVP/project


### Build Sprint 1

#### Bugs
- YouTube API 
    - Key: request limits, different request costs
    - Need to hide API key
        ```javascript=
        //.env.local
        NEXT_PUBLIC_YOUTUBE_API_KEY=...

        // in our files
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        ```
            - Understanding response body of a fetch request
            - ![](https://i.imgur.com/T5MFD2P.png)
- SWC
    - SWC can be used for both compilation and bundling. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers.

    SWC is 20x faster than Babel on a single thread and 70x faster on four cores.
    ![](https://i.imgur.com/HncyXWC.png =600x)

Terminal: Disabled SWC as replacement for Babel because of custom Babel configuration .babelrc 

#### What we learned

- [x] How to set up a Supabase database and access it using Next.js functions - getServerSideProps
- [x] Deployment on Vercel
- [x] How to query the YouTube API with user generated search term (added to state) and output the data onto the page 📺
- [x] How to find and install relevant components from NPM e.g. ReactPlayer 🧩
    ```jsx=
    import ReactPlayer from 'react-player/youtube';

    <ReactPlayer
        controls="true"
        url={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
    ```
- [x] How to use Lodash library function to sort videos by publish date 📆
    ```jsx=
    import { orderBy } from 'lodash';

    e.target.value === 'newest' ? (order = 'desc') : (order = 'asc');

        const orderedVideos = orderBy(
          copyVideoData,
          ['snippet.publishTime'],
          [order]
        );
        setVideos(orderedVideos);
      };
    ```
- [x] How to bring in pre-made styled components from Material UI  🎨
- [x] How to set our environment variables for development and production

### Build Sprint 2

#### Bugs


#### What we learned


## Test
<!--
- How did you verify your project worked correctly?
Identify and create test scenarios which satisfy the project specification (S6)

- Did writing automated tests catch any bugs?
Analyse unit testing results and review the outcomes, correcting errors. (S4)
-->
Cypress

## Deploy
<!--
- Where/how did you deploy your application?
Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

- What problems did you encounter during deployment?
-->
Vercel

## Maintain
<!--
- Is it easy for someone make changes to the codebase?
- Could a new person quickly be onboarded to contribute?
- Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)
- Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)
-->
