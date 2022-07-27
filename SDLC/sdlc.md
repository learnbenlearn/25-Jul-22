# SDLC

- the Software Development Lifecycle is the series of steps that we go through when creating software
    1. Requirements gathering
    2. Analyzing requirements
    3. Design
    4. Development
    5. Testing
    6. User Acceptance Testing (UAT)
    7. Release
    8. Maintenance
- we can divide these 8 steps into 3 phases
    - the design phase (where we gather/analyze requirements and design our solution)
    - the development phase (where we develop the product, test it, and undergo UAT)
        - in UAT, the end client manually testing our product it ensure that it fulfills their needs
        - UAT is valuable because it helps ensure that the product we're delivering is what the client wants
    - the delivery phase (where we release the product and maintain/support it)

## Waterfall Methodology

- in the Waterfall methodology, we follow the steps of the software development lifecycle in order and don't return to a step once we've completed it
    - e.g. once we've finished gathering our requirements at the beginning of our project, we don't accept any new requirements from the client
- benefits
    - Waterfall does not require any specific procedural - devlopers simply proceed from one step to the next
    - there's a clear barrier between each step, so it's easy for team members to keep track of where the project is on the way to completion
    - because we gather all requirements at the beginning of the project and finish designing before moving into development, we have a strong idea of what the final product will look like before we've started to create it
- drawbacks
    - Waterfall doesn't have client involvement between the gathering of requirements and user acceptance testing or the release of the product
        - this can make it difficult to ensure that the product is what the client wants
    - it's difficult to make changes because when implementing Waterfall, we are change resistant and don't want to return to previous steps in the SDLC 
    - when following Waterfall, we don't start testing until all development has finished, which can make it more difficult to fix bugs in the codebase as we'll be testing a much larger codebase than if we adopted a more incremental approach

## Agile Methodology

- in contrast to Waterfall, Agile is more flexible with the goal of adapting to changing requirements and feature requests from the client
- in Agile, we go through the steps in the SDLC multiple times, and each iteration (each completion of design, development, and release phases) will often culminate in a release of the product
- benefits
    - allows us to adapt to changing/new feature requests from the client
    - lends itself to flexible release schedules - if we can't include a feature in an upcoming release, we can just reserve it for a future release
    - because we're testing a smaller set of features at any given time (because we're working on the project in smaller, incremental chunks), we have a smaller codebase that we'll be writing new tests for at any time, so it'll be easier for us to find any bugs
- drawbacks
    - flexibility can lead to bad practices if we're not disciplined
    - Agile's flexibility can lead to a lack of predictability - by allowing for changing/new features throughout the project, we're also allowing for changes in release schedules and what the final product will look like
    - following Agile practices requires knowledge of the framework(s) that we're implementing and a commitment from every member of the development team

### The Scrum Framework

- Scrum is a framework of the Agile methodology that includes ceremonies such as standups and retrospectives
- with Scrum, we develop in 2 to 4 week development periods called sprints
    - each sprint will finish with a release
- the Scrum environment includes a Scrum Master and a Product Owner
    - the Scrum Master ensures that the team is following and committed to Scrum ceremonies
    - the Product Owner represents and communicates with the client
        - the Product Owner uses information gathered from the client to help prioritize and clarify the tasks that the team needs to complete

<p align="center"><img src="./scrum_iteration.jpg"></p>

- before the sprint begins, the team moves requirements from the project backlog (the list of all requirements for the project that have yet to be implemented) to the sprint backlog (the list of features the team is planning to complete in the upcoming sprint) during a sprint planning meeting
- throughout the sprint, the Scrum Master will lead 15 minute daily standups
    - these are daily meetings where each team member will talk about what they did the previous day, what they're planning to do the coming day, and any roadblocks that they've run into
    - the standup allows each team member to have an idea of how the sprint is progressing
    - it also gives a set time where developers can ask their peers, who may have expertise or experience in a specific area, for help with any issues that they've run into
- after the product is released at the end of the sprint, the team holds a retrospective meeting
    - during the retrospective, the team will return any unfinished tasks to the project backlog
    - they will discuss what went well during the sprint and how to continue that success, as well as anything unsuccessful and how to improve on it for future sprints
- benefits
    - daily standups allow us to quickly identify any setbacks that members of the team are experiencing and solve them with the help of others
    - the relatively sprints allow for constant releases, which can incorporate the client to get their feedback throughout the project
    - by adopting a more flexible approach with greater client involvement, we're better able to ensure that the product delivered at the end of the project reflects the client's desires
- drawbacks
    - the fludity that can be beneficial can also bring uncertainty
        - the final deadline and complete requirement list may change throughout the project, so it can be difficult to estimate an overall cost or final release date
        - fluidity can also result in feature creep, i.e. the continuous addition of proposed project features that keep the project ongoing for an unreasonable amount of time
    - the value that the team gains from implementing Scrum ceremonies is a result of the team member's commitment to those ceremonies - e.g. the daily standup won't be as helpful if team members don't voice any roadblocks that they're experiencing

### Kanban Framework

- an Agile framework that uses a Kanban board to provide a visual representation of project progress

<p align="center"><img src="./kanban_board.jpg"></p>

- in the Kanban board, we use columns to represent different steps or phases in the SDLC
- within the columns, we have Kanban cards, which are visual representations of a single requirement
- as a requirement goes through the development process, we'll move it from column to column
- if a team member has finished what they were working on previously, they can simply refer to the Kanban board and select a new card from the backlog to begin working on
- benefits
    - the Kanban board more easily lends itself to specialists
        - e.g. if we have developers who are responsible for/specializing in quality assurance testing, we can include a Quality Assurance Testing column in our board and the testers will know which features are currently their responsibility to test simply by consulting the Kanban board
    - the Kanban board can always take new client requirements and can be persistent across releases
    - the board allows the entire team to view the current state and progress of the project
- drawbacks
    - the board's size may grow to a point where it becomes complex and difficult to understand/navigate
    - like Scrum, Kanban requires commitment from the whole team - an out-of-date Kanban board can be harmful for development
        - e.g. we could have multiple developers start working on the same feature without realizing it because one of them didn't update the Kanban board
    - Kanban doesn't have any timing element
        - without any deadlines, there can be a larger danger of feature creep

### The Scrumban Framework

- an Agile framework that combines the practices of Scrum and Kanban frameworks
- pairs the visual representation of the Kanban board with the ceremonies and sprints of Scrum
- this can be beneficial because it can help ease some of the timing concerns that Kanban has through the sprints of Scrum
- it allows developers to have a better idea of the project and sprint progress through the Kanban board

### Extreme Programming (XP)

- an Agile framework with a variety of practices to ensure that developers are adhering to its values of communication, simplicity, feedback, courage, and respect
- XP seeks to go beyond improving product quality by also improving team cohesion and the lives of the team members
- it includes practices such as weekly cycles (i.e. one-week sprints), quarterly cycles (i.e. quarterly releases), incremental design, test-driven development, and paired programming
- in incremental design, we offer a general high-level design of the product initially and leave the specifics for later
    - this can be beneifical to quickly develop a working product, but can lead to bad practices of developing before we've completed the design if we're not careful
- test-driven development (TDD)
    - the practice of designing the tests that our code must pass before writing the code itself
    - TDD can be beneficial because it allows us to realize what our code must accomplish at the outset
    - but we should be careful and ensure that we aren't writing test-specific code, i.e. that our code can handle a variety of input and isn't just tailored to the specific use cases that we're testing against
- paired programming
    - a development approach where teams are broken into groups of two developers
    - each group includes a pilot and navigator
    - the pilot is actively writing the code, while navigator is planning how the code pilot is writing will tie into the larger project codebase and providing an extra set of eyes to help catch and resolve any bugs in the pilot's code
    - with paired programming, we can team more experienced developers with less experienced developers so one (or both) can learn from the other
- XP team includes a member of the client in order to fulfill a goal of receiving faster feedback
- benefits
    - the close relationship to the client
        - it almost or entirely elminates th e danger of sunk costs due to time spent developing something that the client later wants changed or doesn't need
    - XP's paired programming can increase the development team's cohesion, openness, and commitment to each other
    - the weekly cycles can result in a quick delivery of working features
- drawbacks
    - with the wide variety of development practices that it has, XP can be difficult for even the most dedicated teams to follow
    - the inclusion of a member of the client on the development team can be a hindrance if non-technical clients insist on inefficient implementations or slow development with ineffective questioning
    - XP's weekly cycles can cause developers to sacrifice best practices in order to ensure that these shorter deadlines are met
    - with these more frequent releases, documentation can become outdated more often

## Agile Terms and Planning

- **epics** are groups of related features that can be broken down into multiple usesr stories
- **user stories** are individual features/requirements for Agile projects
    - when creating user stories, we'll often follow a format when writing them
    - e.g. As a user, when I perform _x_ task, _y_ should occur
    - e.g. Given *some set of initial conditions*, when *x* occurs, then *y* should happen
- **story points** a level of difficulty assigned to each user story through the user of a sequence of numbers (e.g. the Fibonacci sequence)
    - the story point assigned to a user story will increase with increasing difficulty
- **velocity** is the sum of story points of all user stories completed during a sprint
    - allows Agile teams to more accurately plan for future sprints by having a better idea of how many story points worth of user stories we tend to complete each sprint
- **burndown charts** are graphical representations of sprint progress
    - the y axis of the chart shows the remaining story points to be completed in the sprint and the x axis shows the days
    - this allows us to see how many story points where left to complete at any time throughout the sprint

### Story Pointing

- during our planning, we'll assign story points to the user stories in our backlog
- e.g. using the Fibonacci sequence, 1 will be the absolute easiest task, 2 the next most difficult, followed by 3, 5, 8, etc.
- once we've assigned story points, we can also assign a time estimate to each story
- the story points/time estimates that we come up with the beginning of each sprint don't have to be (and often won't be) completely accurate
    - but as gain experience with our development team and the practice of Agile planning, we'll be able to more accurately estimate
    - even imperfect story points/time estimates will be valuable because we'll still be able to use them for future sprint planning