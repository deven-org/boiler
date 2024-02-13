# Project Background

This chapter provides the users with information about historical decisions, where B01LER started from and what we learned until now.


## Content

- [Background](#background)
- [Strategy](#strategy)
   - [Design Principles](#design-principles)
   - [Rules and Principles](#rules-and-principles)
- [Tech Changes](#tech-changes)

## Background

The idea for a boilerplate design system formed in 2022 during a client project which included the creation of a new design system. The main goal was to find a way to reduce reduncancies when creating components. Lars Erbach and Marcel Doering teamed up and prepared an elevator pitch for the leadership. After this the leadership agreed to to invest some time for team to come up with a real business case and a final presentation until end of November 2022. For this Thorben Hartmann also joined the team. The resulting presentation can be found [here](https://www.figma.com/file/A3qtxWTli1tQpgIK9wAjBO/%F0%9F%8E%A8-B01LER-Pitch-Convolute-%5BTEMPLATES%5D-(Copy)?type=design&node-id=192%3A3244&mode=design&t=FiW9ptIXH0xYtE1x-1) (you need to be part of the Accenture org in Figma). The feedback was very overwhelmingly positive and the leadership directly made plans to allocate some budget for 2023 to build B01LER.

Early 2023 the budget to build B01LER was approved. Lars Töppner and Oliver Klee joined the team as developers and the team started with the setup. In early March, a first Milestone was reached with the finalization of the first component: the Text Button (https://github.com/deven-org/B01LER-Kitchen/issues/50). The team was on track to finish the initial set of components in the defined time, but unfortunatley Lars Töppner and a month later Oliver were needed on other projects and had to leave the team. Finding substitutes turned out to be harder than expected, before Christian Hoffman and David Kennedy took over the role of dev leads and brought back some stability to the team. To make up time that was lost during the staffing changes, the team size was extended and other developers and designers also joined the team, at one time reaching even 12 members. 

In autumn 2023 another huge milestone was reached with the finalization of the initial set of [15 components](https://github.com/deven-org/B01LER-Kitchen/milestone/1). It took a few more months though to finalise the first release, as some of the first components as well as some general topics needed some refactoring first. The first release went live on 16.12.2023 together with the B01LER website [boilerds.com](https://boilerds.com). Together with the first release, the repository and the Figma file were also published under open source licences (see also the milestones [Alpha Release](https://github.com/deven-org/B01LER-Kitchen/milestone/15), [Release Figma File](https://github.com/deven-org/B01LER-Kitchen/milestone/11) and [Make Repository Public](https://github.com/deven-org/B01LER-Kitchen/milestone/12)). 


## Strategy

To understand the product strategy of B01LER you should have a look at our [Sales Deck](https://ts.accenture.com/:p:/r/sites/SongBuildNewBiz/Shared%20Documents/Credentials%20and%20Capabilities/B01LER%20(Design%20System)/B01LER_SalesDeck.pptx?d=w542967209a6942448f4de4eec58007c1&csf=1&web=1&e=hgHVRx) (you need to be part of the Accenture org to access).

To understand how we as a team work you should read the next two sections.

### Design Principles
One outcome of the early phase of B01LER wich still is relevant to how we work and solve issues are our design principles. They can be found in [this Figma presentaton](https://www.figma.com/file/XaypOKpd17gJ7Y8S2DcWXv/%F0%9F%94%A5-DSO-%23FFF?type=design&node-id=37%3A1370&mode=design&t=ZWzlGCuxdhB8bn8D-1), or you can read through them here:

1. **It’s wrong if it ain’t fun** - To be clear, we like challenges and want to grow by them. We do what needs to be done and of course some things are less fun than others. But: We will keep our north star and not commit to things we do not believe in. Ultimately, this benefits every single person that works with us.
2. **Show, don’t tell** - We do not want to talk all day and tell everyone what greatness is ahead. We will explain our ways of working by doing and showing. This is not limited to any field. Thus, we let people experience what they are buying from us.
3. **Nothing is set in stone** - Everything evolves. Required skills & knowledge, demands from our clients, user expectations and much more. We’re good, but not gods——and we for sure plan on never losing that Oh! 💡 This allows us to react to changes, adopt the new and keep on improving.
4. **Quality over quantity** - We learned that one of the greatest risks is to work too fast towards an unorganized mess. What we touch, we think it through. We create stuff that works and seamlessly integrates into the greater whole.

### Rules and Principles
During the setup phase we also came up with some principles and rules that we want to follow:
- We use iterations, to get a better feeling, if the roadmap-plan works
- We have an iteration-length of 2 weeks
- We start an iteration after a planning session with all team members
- We accept scope-changes within an iteration, to keep the flexibility we assume we need, but we split issues into multiple, and move less important ones into the backlog so we can still achieve our sprint goals
- We do not measure velocity or lead-time, but we regularly check if the roadmap-plan is still accurate
- We refine issues together in a refinement session, in the planning or whenever needed
- We keep the progress lane short, manageable and up-to-date
- We keep each other up-to-date and showcase what we have done whenever we have time to do so, but especially in the Daily meetings (taking part 3 days a week)
- We plan in time for retrospectives, initially doing so every four weeks
- We use and maintain a backlog, which is separated at least into a "Next" and a "Future" backlog
- We use the Project feature in GitHub to visualise our board and our backlog
- We define a naming convention for our tasks and use it
- We have a product owner, who can decide on issues, where the team can not or does not want to decide

Rules and principles we are not following anymore:
- Initially we also started estimating issues to get a better feeling how much we can get done in one iteration, but this was only slowing us down and did not bring the benefit we thought it would; also we are no longer only working on issues that have been estimated before
- We moved from defining tasks small enough that they can be finished in a comprehensible time-frame but also big enough to minimise overhead to defining tasks generally smaller so they can also be understood easier by juniors or external contributors




## Tech Changes

- We decided end of 2023 / beginning of 2024 to switch from npm to yarn pnp to reduce build time, with quite some success.
