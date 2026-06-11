# Section 1. Introduction
## Introduction and why we chose this problem:
As students, I think study groups are a huge part of the college experience, whether inside the iSchool or not, with groups being extremely helpful for the hard classes, as well as for classes with collaborative activities. This issue affects every student on campus, but especially first-year students, transfer students, and anyone jumping into a large, high-stakes course without an existing social network to lean on. 

The main issue that remains is, how do you find a group that works for you? Classes, Clubs, where you live, your personality, your preferred learning type (Visual, Auditory, or Kinaesthetic), so many factors come into play when trying to optimize your experience. It becomes really hard to do so, and the consequences are real: students end up with worse grades, higher stress, and that familiar feeling after finals of "I wish I had found a better group for X class." Beyond individual grades, poor study group experiences chip away at students' sense of belonging and confidence on campus, which research shows is one of the biggest drivers of students dropping out or feeling disconnected from their university entirely. 

This problem is something that we are interested in solving and inspired us to give our attempt at solving something that helps the entire student community at UW, and possibly other schools as well, by making the process of forming study groups more accessible, and utilize AI while doing so. It is also a fundamental aspect of the college experience we think can be changed to leave people without regrets like "huh I should have found a better group for X class to get a better grade" after finals. Our solution aims to leverage AI based algorithms to help optimize forming study groups using details such as time schedules, clubs, personalities, preferred learning type and much more to pair students up with class wise study groups to optimize the learning experience that university has to offer.
> Note: I would wanna have more focus on accessibility here as well

## Steps to narrow down the problem

Broad Problem:
Students face academic pressure at university and 
struggle to find study groups, with the current process 
being largely random and inaccessible.

Narrower Part of the Problem:
First-years and commuter students without existing social networks are left studying alone or stuck in mismatched groups that don't fit their schedule, learning style, or personality.

More specific design problem:
There is no centralized way to match students based on what actually matters: class enrollment, availability, learning type, and personality, so students resort to luck or word of mouth.

Knowledge Gap:
Tools like GroupMe, When2Meet and Discord let students communicate but don't intelligently match them before the conversation starts, leaving the most isolated students completely underserved.

Specific Proposal:
An AI-powered platform that takes in class enrollment, availability, learning type, personality, and club involvement to intelligently pair university students into compatible study groups, making the process proactive and accessible for everyone.


## Technical Problem or adaptive challenge?
Our problem is an adaptive challenge. While technical challenges may arise when building an AI matching platform, the harder problem exists within the behavioral and social realm. Students must be willing to share personal details like personality and learning style, trust an algorithm to find them a group, and then actually show up and engage with strangers. No amount of good engineering solves someone who is too anxious to join, too skeptical to fill out a profile, or too set in their habits to try a new way of finding a study group. Introverts remain a hard target audience to reach which could cause problems. The solution requires changing how students think about and approach group formation entirely, which is a social and behavioral shift, not just a technical one.

## Final Design Question

How might university students use an AI-powered platform to find compatible study groups so that they can reduce academic stress and improve their overall learning experience?

# Section 2 Design Research

## User Research Approaches and Insights

Methodology 
This research employed a concurrent mixed methods design, combining a quantitative survey and qualitative semi-structured interview approach. These methods were chosen as they give a comprehensive understanding of the behaviors, motivations, and habits of students and their study group experiences.

Participants  
Three freshman students were interviewed in a semi-structured interview style, allowing for a flexible flow wherein open-ended questions regarding study groups and study habits were asked. Further, a survey was sent out to our fraternities’ groupme groupchat, wherein 10 participants responded. The participants varied in class-standing, with 2 Seniors, 4 Juniors, 2 Sophomores, and 2 Freshman making up the entire pool.

Value Sensitive Design
Incorporating value-sensitive design into our approach would encompass prioritizing the human aspects in our solution along with dealing with the tensions and trade-offs that come with it. To start, because the platform would serve the UW community, it would largely be public based. Thus, we would take steps to prioritize the protection of our clients’ data, while still ensuring a smooth experience. Next, as value-sensitive design prioritizes human elements, we would emphasize the personality aspect in our app, and it would likely play the primary driver in the formation of groups. Through this approach, we would focus on human compatibility and wellbeing over just pure academic efficiency. However, an important part of value sensitive design is considering the tension and trade-offs when making design decisions. With that in mind, when looking at the latter instance, some challenges may arise in ensuring that the client doesn’t feel that they are being overly surveilled or profiled. Even so, beyond just that instance, a tension exists between user autonomy and algorithmic optimization. Our research showed students default to people they already know because it feels safe and controllable. An AI matcher inherently asks students to trust a system over their own instincts — if our solution were to give more decision making power to students, then our solution would have lost all purpose, as students would just default to familiarity rather than pushing themselves outside their comfort zone. Thus designing for that handoff without making users feel like they've lost control is a challenge we must continuously account for.

Participatory Design
Rather than designing a study group finder based on assumptions, we would involve UW students directly in defining the problem and shaping the solution. Through semi-structured interviews we invited participants to reflect on their own experiences and articulate what compatibility, trust, and friction meant to them in their own words. Our survey extended that voice to a broader student population, allowing students to rank and prioritize the factors that mattered most to them.
The result is that core design decisions — personality-based matching, profile visibility before committing, and reputation-driven trust signals — were not chosen by the design team. They were surfaced by students themselves and validated across both methods.
However, our approach has limitations as a truly participatory process. Our participants acted as informants rather than co-designers — they shaped our understanding of the problem but were not involved in generating or evaluating solutions. Additionally, our sample was relatively homogeneous, consisting largely of freshman males, which means the voices that influenced our design decisions do not fully represent the diversity of the UW student population. Future iterations should involve co-design workshops and prototype testing with a broader range of students to ensure more equal participation.


Insights
Students don't search, they default to people by proximity. Groups form through proximity and existing relationships, not active searching. No participant in either method described going out of their way to find a stranger to study with.
The social barrier is the biggest obstacle, not lack of interest. 78% of students have struggled to find a compatible group at least occasionally. The most cited reason was social anxiety and not knowing anyone in a class — not an inability to find tools or platforms.
Personality fit is as important as academic alignment. Students consistently rated personality alongside or above academic factors like same class and level of understanding. Bad group experiences were described as personality mismatches, not just academic ones.
Students need to feel safe before committing to a stranger. Seeing profiles before committing was selected by 6/9 survey respondents. All interview participants defaulted to people they already knew precisely because familiarity reduced the risk of a bad match.
Reputation is the only trust signal that matters. Friends or classmates already using the app was selected by 100% of survey respondents and cited by every interview participant. Cold adoption is a non-starter — the app lives or dies by social proof.

## Market Research

Discord
Students self sort into subject channels moderated by AI bots making it a widespread but informal competitor
Reveals that peer learning communities thrive best on platforms students already trust and feel comfortable using daily
Not purpose built for study matching so group quality and compatibility are inconsistent and largely unmoderated

Sidekick
Pairs college students based on course, schedule, and learning preferences through a swipe style interface
Does not address the behavioral gap of actually getting students to show up and engage with someone new
Lowers browsing friction but still relies entirely on students to self initiate contact after a match is made

Studicata
Focuses on bar exam prep and connects law students with structured study partners based on weak areas and test timelines
Highly niche which limits scalability but also means their matching logic is deeply tailored to one learning context

## Literature Review

Research Paper 1:
This article details the effectiveness of study groups and the multiple benefits that come with it. According to the article, study groups help individuals accomplish what would be difficult to accomplish on their own: “in an effective group, students develop critical-thinking, listening, and persuasion skills that would be difficult to accomplish on their own.” Clearly, study groups can be very effective, and thus gives further reason for our proposed solution - which streamlines the formation of study groups by combining it with AI.
Citation: 
Linn, W. D., Lord, K. C., Whong, C. Y., & Phillips, E. G. (2013). Developing effective study groups in the quest for the "Holy Grail": critical thinking. American journal of pharmaceutical education, 77(8), 180. https://doi.org/10.5688/ajpe778180

Research Paper 2:
This study on post-covid Pakistani college students highlights a significant increase in their social anxiety. This is troubling because the initiation of study groups requires individuals to be socially proactive, especially when there are multiple individuals in a group. Our proposed solution can alleviate this, as an online study group matchmaking app can group socially anxious individuals without those students ever needing to go in-person to form a group.
Citation: 
Khuda, I. E., Aftab, A., Hasan, S., Ikram, S., Ahmad, S., Ateya, A. A., & Asim, M. (2024). Trends of Social Anxiety in University Students of Pakistan Post-COVID-19 Lockdown: A Healthcare Analytics Perspective. Information, 15(7), 373. https://doi.org/10.3390/info15070373
Research Paper 3:
Kovari, A. (2025). A systematic review of AI-powered collaborative learning in higher education: Trends and outcomes from the last decade. Social Sciences & Humanities Open, 11, 101335.
This review of 27 empirical studies found that AI tools — particularly recommender algorithms and machine learning — meaningfully improve collaborative learning outcomes in higher education by enabling personalized group formation, real-time feedback, and adaptive task design. Notably, García-Vélez et al. (2021) demonstrated that AI-generated study teams based on learning styles outperformed both self-organized and instructor-assigned groups. The review also identifies that AI's role in collaborative learning specifically remains understudied compared to individual learning contexts, pointing to a clear research and design gap. Ethical concerns around data transparency and the balance between automation and human agency are flagged as critical design considerations.
Research Paper 4:
international students and first-year students navigating an unfamiliar campus.
Citation: Ko, C. L. (2025). A college buddy system with matching algorithm. Journal of International Conference Proceedings, 8(1), 578–591. https://doi.org/10.32535/jicp.v8i1.4001
This paper is highly relevant because it demonstrates a working, real-world implementation of AI-driven peer matching in a college setting, which is the core technical approach our project is taking. The author built BuddyIN, a mobile application that uses a K-Nearest Neighbours algorithm with Gower distance to match students based on a combination of course enrollment, seniority level, hobbies, and personality traits, achieving a recall score of 0.93 and an F1 score of 0.84 in cross-validation testing. Critically, the paper also highlights the same gap our project targets: without a structured matching platform, freshmen and students without existing social networks face significant barriers to finding academic peer support, with the author noting this problem is especially pronounced for 

Research Paper 5:
Citation: Revelo Sánchez, O., Collazos, C. A., & Redondo, M. A. (2021). Automatic Group Organization for Collaborative Learning Applying Genetic Algorithm Techniques and the Big Five Model. Mathematics, 9(13), 1578. https://doi.org/10.3390/math9131578
This paper is the closest academic precedent to what our project is building. The authors use the Big Five personality model to collect student trait data across five dimensions (Extraversion, Agreeableness, Conscientiousness, Neuroticism, and Openness), then feed that data into a genetic algorithm that iteratively forms student groups optimized for homogeneity, heterogeneity, or a mix of both. Their controlled experiment with 82 students showed statistically significant improvements in post-test grades for groups formed using the algorithm compared to groups formed by student preference, directly supporting our hypothesis that data-driven, personality-aware matching produces better study group outcomes than the informal methods students use today.

Research Paper 6:
This case study is directly relevant because it tackled the same core isolation problem our project addresses, specifically that students studying alone lack motivation, leave doubts unresolved, and have no trusted peers to collaborate with. The Co-Learn design process surfaced through user interviews that students wanted a platform to find peers with shared goals, not just a generic social app, which validates our approach of filtering matches by class, interest, and learning context. One important takeaway for our project is their use of a detailed onboarding preference flow to surface accurate peer suggestions, a design pattern we can directly adopt and extend with personality and learning style inputs. Citation:  V, A. (2024, April 20). Co-learn- matchmaking app for study buddies- a ux casestudy. Medium. https://medium.com/@atul1997.v/co-learn-matchmaking-app-for-study-buddies-a-ux-casestudy-f283292ae363

<leave space in the website for some images/screenshots of tables that i can paste in later>
## Affinity Map and Key research Insights

Affinity Map:
User Needs
- Feel safe sharing personal details like learning style and classes
- Have low stakes, lwo pressure environments for entering group setting
- Trust that the platform is transparent about how matches are made
- Be matched with students who share academic goals, interest and study habits

Recurring Problems:
- Students repeatedly cite schedule alignment as a top practical barrier to sustained group study
- Skepticism toward algorithmic recommendations resurfaces without visible reasoning or explanation
- The fear of being the one who contributes the least or knows the least amount when entering a new group
- Introverts and anxious students consistently need alternative entry points that don't require initiating contact

Oppurtunities:
- Show a plain-language explanation of every match so students understand the reasoning before committing
- Build the default platform experience around introverts as the primary user archetype, not an edge case
- Design a structured first-session experience that removes ambiguity and eliminates the anxiety of meeting strangers
- Offer dynamic re-matching mid-semester so group compatibility evolves alongside students' changing needs


Key Research Insights:
The core challenge of an AI powered study group platform is not technical but deeply behavioral and social. Students, especially introverts and those with social anxiety, struggle most not with finding a group but with trusting the process enough to actually show up. Algorithmic matching only creates value once students feel safe enough to share personal details and act on a recommendation. This means the most critical design problem is reducing perceived social risk at the moment of first contact, not perfecting the matching logic itself.


# Low Fi Stage + Product Personas

## Shareholders/Personas


Stakeholders:
UW Students (undergraduate),Introverted / socially anxious students, Freshman students, Study group members,Course instructors / professors,Teaching assistants (TAs)
UW administration / academic departments,Fraternities / campus social groups,Competing platforms (Discord, Sidekick, Studicata),App developers / design team

Direct stakeholders
UW undergraduate students seeking study groups
Introverted / socially anxious students
Freshman students (primary vulnerable group)
Study group members (formed via the app)
App developers / design team

Indirect stakeholders
Course instructors / professors (benefit from better student collaboration)
Teaching assistants (reduced load from student confusion)
UW administration / academic departments (student retention & performance)
Fraternities / campus social networks (existing informal group-forming infrastructure)
Competing platforms (Discord, Sidekick, Studicata)

<leave space for a stakeholder map image>

Personas:

Persona A - Direct
Name: Maya Chen | Year: Freshman 
Major: Computer Science | Age: 18
Background: Maya moved to Seattle from out of state and doesn't know anyone in her classes. She's introverted and finds it hard to approach strangers, especially in large lecture halls. She's academically motivated but struggles to form connections organically.

Goals:
Find study partners in the same class who match her pace
Feel safe before committing to a group meeting
Avoid awkward or unproductive group dynamics
Frustrations:
Social anxiety makes cold outreach feel impossible
Discord servers feel chaotic and unmoderated
She doesn't know anyone well enough to trust them as study partners yet
Behaviors:
Defaults to studying alone even when she'd prefer a group
Only trusts people already vouched for by mutual connections
Researches people before agreeing to meet
Needs from the product: Low-stakes entry, visible profiles before committing, transparent match reasoning, reputation signals

Persona B - Indirect
Name: Dr. David Pak | Role: Lecturer,
 UW College of Engineering | Age: 47

Background: David teaches a 200-person intro engineering course. He notices students in his class struggle to collaborate and sees it reflected in project quality and drop rates. He doesn't have bandwidth to facilitate study group formation himself.
Goals:
Students show up prepared and collaborative
Reduce the number of students falling behind due to isolation
Better group project outcomes without micromanaging
Frustrations:
Students don't naturally form effective groups
Existing tools (Canvas groups, Discord) are unstructured
No visibility into whether students are actually connecting
Relationship to product: Doesn't use the app directly, but benefits when it works since his students perform better, ask more informed questions, and produce stronger work. Could be an institutional advocate for adoption if outcomes are demonstrable.

Product Persona
Study Group Finder is an AI-powered academic matching platform that makes collaborative learning accessible to every UW student, regardless of social confidence or existing network. By combining intelligent peer matching, transparent recommendation reasoning, and structured first-session facilitation, it levels a playing field that has always favored outgoing, already-connected students.
Unlike existing tools that rely on proximity, existing friendships, or unmoderated group chats, Study Group Finder focuses on:
Trust-first matching: students see who they're being matched with and why before committing
Personality-aware pairing: compatibility is weighted equally between social fit and academic alignment
Introvert-centered design: built for socially anxious students as the default user, not the edge case
Transparent AI: every recommendation includes a plain-language explanation of the matching logic
Social proof adoption: the platform spreads through existing relationships, not cold outreach
Structured facilitation: first sessions come with suggested agendas to reduce the anxiety of meeting someone new

## Ideation/Prioritization
Feature ideas

Onboarding Survey
Privacy Controls
Matching System based on Personality, Course wise and general wise as well
In App Scheduling
Class Roster Integration
Streaks based on consistency of a group etc.
Group Board
Verified Badges
Accessibility Accomodations
Group Goal Setting

Key features

Must have
Onboarding Survey
Matching system with personality(big 5 test + course based as well as general study groups/.
Privacy Controls
Accessibility Accomodations

Should have

Class Roster Integrations
In App Scheduling linked to calendar apps
Group Goal Setting
verified badges

Nice to have
Streaks
An Infinite Group Board similar to figjam to be able to put in notes and brainstorm on a unified platform

<leave space for a mapping of the features that led to the categorization of them>

## Value Proposition and Conclusion

Value Prop:
Study Group Finder exists because collaborative learning has never been equally accessible. Study groups have always formed through proximity, existing friendships, and social confidence, systematically excluding students who are introverted, socially anxious, or simply new to campus. Our platform closes that gap by combining AI-powered personality and academic matching with the trust infrastructure students need to actually show up: transparent match reasoning, verified profiles, privacy controls, and structured first sessions. Every design decision is made with the most vulnerable student in the room in mind, so that for the first time, the benefits of studying together are available to everyone, not just those who already know how to find each other.


Solution:
Study Group Finder addresses the accessibility gap in collaborative learning through a web-based platform that removes the social and technical barriers preventing students from forming effective study groups. The solution works in three phases: first building trust through a personality and learning style onboarding survey, privacy controls, and verified profiles so students feel safe before committing; then surfacing compatible matches by course with plain-language reasoning so students understand why they were paired; and finally supporting group follow-through with shared goal setting, in-app scheduling, a collaborative group board, and streak tracking so groups do not just form but actually stick. Every decision is made with the most vulnerable student in mind, because the research is clear: students are not failing to find study groups because they lack tools, they are failing because the social risk feels too high, and this platform is designed to make that risk feel manageable.

<leave space for 3 lofi prototype images please>

# 4.  Usability Testing

## User Testing Plan:

Testing Method
We will use think-aloud usability testing combined with a Wizard of Oz approach for the AI matching component. Because the matching algorithm will not be fully built at prototype stage, a team member will manually simulate match results behind the scenes while the participant interacts with the interface as if it were live. Think-aloud protocol will run throughout, asking participants to narrate their thoughts, hesitations, and expectations in real time as they move through the product.
Participants
We will recruit 5 to 8 UW undergraduate students across a mix of class standings, majors, and self-reported social confidence levels. Recruitment will prioritize students who identify as introverted or socially anxious, as they represent the core user the platform is designed for. At least two participants should be freshman students with limited existing campus connections, reflecting the highest-need segment identified in our research.
Task Scenarios
Participants will be asked to complete the following tasks without guidance:
Complete the onboarding survey and set your privacy preferences
Review your first match and decide whether you would accept or decline it
Read the match reasoning card and explain in your own words why you think you were paired
Schedule a first session with your matched group using the in-app scheduler
Set a shared goal with your group before your first meeting
Find and add a note to the group board
Goals of the Test
Determine whether the match reasoning card gives students enough information to feel safe committing to a match
Identify points in the onboarding flow where students hesitate, drop off, or feel the privacy ask is too large


## Test 1

Participants Testing Group #7 (Everwell) served as evaluators for this round. Participants were UW undergraduate students recruited to match our target profile, a mix of class standings and majors, with priority given to students who self-identify as introverted or socially anxious. At least one freshman with limited existing campus connections participated, representing the highest-need user segment our platform is designed for.
Tasks Completed Participants were guided through the core onboarding flow without assistance, completing the following subtasks:
Clicking the "Create an Account" button and entering UW NetID credentials
Uploading a profile image and filling in personal details (major, year, etc.)
Completing the personality test
Filling in their weekly availability via the schedule interface
Testing used a Wizard of Oz approach combined with think-aloud protocol. Because the AI matching algorithm was not yet fully implemented, a team member manually simulated match results behind the scenes while participants interacted with the interface as though it were live. Participants narrated their thoughts, hesitations, and expectations in real time throughout the session.
What Worked Well The account creation flow, entering NetID credentials and submitting the form, was completed without significant hesitation. Participants understood the general purpose of the onboarding sequence and were able to move through the early screens with reasonable confidence. The overall structure of the flow communicated its intent clearly enough that users did not require prompting to proceed from one step to the next.
Problems or Confusion That Occurred Two notable breakdowns emerged during this round:
Personality test discoverability: Users had difficulty locating or recognizing the entry point for the personality quiz. The button was not visually prominent enough, causing participants to overlook it or pause trying to determine where to go next. Given that the personality survey is the foundation of the entire matching system, this was a critical failure point. If users miss it, the product cannot function as intended.
Schedule setup friction: Participants struggled with the schedule-filling interface. The page lacked sufficient prompts or guidance, leaving users uncertain about what level of detail was expected and how to interact with the scheduling elements. Socially anxious users in particular are unlikely to push through ambiguous interfaces on their own initiative.
Key Observations The onboarding flow is functional at a structural level but relies too heavily on user initiative at two critical junctures, the personality test entry and the schedule setup. Both represent moments where a confused or hesitant user is likely to disengage entirely rather than troubleshoot. The think-aloud data made clear that users were not failing because of disinterest, but because the interface did not provide enough visual or textual guidance to keep them moving forward. The proposed changes, making the personality test button more prominent, adding scheduling prompts, and expanding scheduler functionality, are directly motivated by observed behavior, not assumption.


## Test 2

4.3 User Testing #2
Participant Information Testing Group #1 served as evaluators for this second round. The same prototype was used, tested with a different set of participants. As with the first round, participants were UW undergraduates, and the think-aloud Wizard of Oz methodology was maintained for consistency across both sessions.
Tasks Completed Participants completed the same core onboarding flow:
Creating an account using UW NetID credentials
Uploading profile images and entering personal details (major, year, etc.)
Completing the personality test
Setting up their weekly schedule
Testing Results and User Feedback This round surfaced a partially overlapping but distinct set of issues:
Schedule creation confusion persisted: Consistent with the first round, participants expressed confusion around how to build out their schedule. This cross-session consistency strongly validates the finding. The scheduler interface is not an isolated or participant-specific problem, but a systemic design gap. Users indicated that buttons and interactive elements were unclear, and that the visual spacing on certain pages made it difficult to process information before acting.
Missing cover screens for different user states: Participants implicitly surfaced a gap the first round did not. The prototype did not account for returning users or users in different stages of the product lifecycle, such as mid-semester re-matching. A single onboarding cover screen cannot serve these different contexts equally, and testers noted moments of disorientation when the interface did not match their expected state.
Important Observations The second round validated the scheduler as the platform's highest-friction point between matching and actually meeting, confirming it as the primary redesign priority. Beyond that, this round expanded the problem space by surfacing a structural gap in user state management. New users, returning users, and re-matchers have meaningfully different needs when they open the app, and the current design does not differentiate between them. Tailored entry screens for each instance are not a cosmetic improvement; they determine whether users land in the right context or immediately feel disoriented. Together, the two rounds of testing provide consistent, cross-group evidence that the scheduler and user-state coverage are the two areas most likely to cause real-world drop-off among the socially anxious students this platform is built to serve.

<leave space for a user journey map image as well please>

# Hi Fi prototypes

<leave space for a user flow chart image>

<leave space for a hi fi prototype screenshot> + link to the figma file: https://www.figma.com/design/SuBMyD73Ybk0Q3d4NFE3DP/StudyAI?node-id=0-1&t=gCzRxCdi0r0JLnPU-1

## Evaluation using the 10 heuristics

Nielsen Heuristic	What Works Well	Usability Issues / Concerns	Possible Improvements
1. Visibility of System Status	Navigation bar and page titles help users know where they are. Buttons are visually noticeable.	Limited feedback after actions like creating groups or saving preferences. Active page is not always obvious.	Add confirmation messages, loading indicators, and highlight the active navigation icon.
2. Match Between System and the Real World	Familiar terms like “Groups,” “Messages,” and “Calendar” make the app intuitive for students.	Some icons and study preference options may be unclear to first-time users.	Add labels/tooltips for icons and make preference descriptions clearer.
3. User Control and Freedom	Bottom navigation allows users to move freely between screens. Some onboarding screens include back buttons.	Some pages lack cancel/exit options and users may accidentally lose progress.	Add “Cancel,” “Back,” and “Save Draft” options where needed.
4. Consistency and Standards	Consistent purple color palette and similar UI components throughout the app.	Minor inconsistencies in spacing, alignment, and button sizing across screens.	Standardize spacing, typography, icon styles, and button placement.
5. Error Prevention	Step-by-step onboarding helps reduce mistakes. Selectable options reduce invalid input.	No visible form validation or required field indicators.	Add input validation and clearly mark required fields.
6. Recognition Rather Than Recall	Persistent navigation helps users remember feature locations. Group cards and schedules are visually displayed.	Some icons rely too much on memory rather than recognition.	Add labels beneath icons and onboarding hints/tooltips.
7. Flexibility and Efficiency of Use	Navigation allows quick access to major features. Search supports efficient browsing.	Frequent actions may require multiple taps and there are no shortcuts.	Add quick actions, shortcuts, and customizable dashboard features.
8. Aesthetic and Minimalist Design	Clean interface with a modern and visually cohesive design.	Some screens have too much empty space or low text contrast.	Improve readability, contrast, and content balance using stronger visual hierarchy.
9. Help Users Recognize, Diagnose, and Recover from Errors	Simple structure reduces major navigation confusion.	Error messages and recovery guidance are missing.	Add clear error messages and recovery suggestions for failed actions.
10. Help and Documentation	Onboarding introduces the app’s purpose effectively.	No visible FAQ, tutorial, or help/support section.	Add a Help Center, FAQs, and walkthrough tutorials for new users.


# Reflection Video 

<leave space for a storyboard image we created>

Link to final video: https://www.youtube.com/watch?v=gZs4fIYDXAg


Throughout this project, our team learned a great deal about the design process, especially since many of us had limited experience with Figma, design prototyping, and user testing at the start. Despite this, we were able to develop a functional and thoughtful design by continuously incorporating peer feedback and applying what we learned throughout the project. Feedback from classmates and users helped us identify areas for improvement, such as making buttons more visible, simplifying navigation, making pages less cluttered, and creating a more intuitive user flow. These insights played a major role in refining our prototype and improving the overall user experience.

One of the biggest challenges our team faced was coordinating our work schedules. Since many team members had other commitments, it was sometimes difficult to find time to meet, communicate effectively, and delegate tasks. Another challenge was learning the technical aspects of Figma while simultaneously designing the prototype. As we progressed, we became more comfortable with the platform and gained a better understanding of how to create interactive and user-friendly designs.

The design and testing process taught us valuable lessons about user centered design. We learned how to conduct more effective user testing sessions by asking clearer and more targeted questions that generated useful feedback. We also gained practical experience in translating user needs into design decisions and creating an interactive prototype that users could navigate and evaluate. These skills helped us better understand the iterative nature of design and the importance of continuously improving a product based on user input.

If we had more time, we would expand the platform by implementing additional features that were part of our original vision but could not be fully explored during this project. For example, we would like to add collaborative tools such as a shared whiteboard space and group streaks to encourage engagement and teamwork. These features could provide users with more opportunities for collaboration and motivation.

Looking ahead, our design would need to continue evolving to meet the changing needs of users. As the platform grows, we could expand its scope to support additional communities, such as Registered Student Organizations (RSOs), research groups, and other collaborative academic communities. By continuing to gather feedback and adapt to user needs, the platform could develop into a more comprehensive and versatile tool that supports a wider range of users and activities.

