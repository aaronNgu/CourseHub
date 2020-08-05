
# CourseHub

**Project Description**

CourseHub is a centralized platform for students to view their peers' feedback on UBC courses.  Students also have the ability to log in and provide their own ratings and reviews for courses based on their own experiences.

---
**Group Members:**
* Winnie Chan - z3f5 (wwyc)
* Illean Zhang - n5b1b (illeanz)
* Aaron Ngu - m9k1b (aaronNgu)
* Spandana Baruah -  k4k2b (Spandana-Baruah)

---
**Project Goal**

We are looking to build a website where students are able to view and/or provide reviews for UBC courses. The application will store Course related data such as Course Number, Course Name, Relevant Link and its corresponding reviews. Reviews include comments regarding course content, difficulty as well as work load. Users will be able to view the data on a specific Course. They would also be able to filter and/or search for specific courses. We are also hoping to add several other features such as a button for users to report issues and adding historical data(averages, max, min) for each course.

---
**Project Task Requirements:**

<ins>Minimal Requirements:</ins>
* Front end page to view list of courses -   :heavy_check_mark:
* Back end that takes user input and stores data -   :heavy_check_mark:
* Database to store course reviews added by users -   :heavy_check_mark:

<ins>Standard Requirements:</ins>
* Front end page for each individual course -   :heavy_check_mark:
* Add ratings for each course -   :heavy_check_mark:
* Search for courses by course code -   :heavy_check_mark:
* Filter for courses based on year level and  -   :heavy_check_mark:
* Contact form/Button to report issues -   :heavy_check_mark:

<ins>Stretch Requirements:</ins>
* Add historical data for each course -   :x:
* User Academic Profile (i.e. Computer Science 2nd Year) -   :x:
* Display user's comment history -   :x:

---

**Required Tech Stack:**
* **HTML, CSS, JS**  
	We used in various parts of our project to create divs and sometimes paragraph tags for formatting. CSS is used for all of our components for styling, formatting, and controlling our website appearance. Javascript is used across all or most of our project components to add functionality to the front end such as mapping and filtering.

* **React & Redux**  
	We used React for our front end. Every piece of our website is made using React components, with Material UI for styling. Redux is used in our project to manage the states of our application through actions and reducers.

* **MongoDB**  
	We used MongoDB Atlas for our database to store our data on courses, reviews, and users. Whenever our web app needs data, it will get the relevant data from our collection in MongoDB to display.

* **NodeJS & Express**  
	We used NodeJS for our server functionalities and Express framework to for our REST API endpoints. We implemented multiple routes to perform CRUD operations to the back end.

* **Heroku**  
We are using Heroku to host our web app and our CD pipeline. Every time a pull request is made, it will be automatically deployed to Heroku.

---
**Special Features:**
* **Pages**  
Because the list of courses that we have on the homepage may get too long for a user-friendly experience, we decided to implement pages of 10 courses per page. The courses on each page is fetched from the back end to reduce the time spent grabbing the entire list of courses from the database.

* **Role-Based Access Control**  
We also added in role-based access control. Because some actions should not be exposed to regular users (students) browsing the site, such as deleting or adding courses, we decided to add separate roles for administrators and generic users. Based on the role a user logs in with, our front end rendering and back end routing will be different.

---
**Next Steps:**

Our next steps are to add User Profile pages to CourseHub, enabling users to edit their profile to provide their education statuses and keep track of their comment histories. This way, users can also edit and view their comments on the site. We would also like to add additional features such as giving users the ability to up and down vote reviews, and being able to display a summary for each course of frequently-mentioned words in user reviews.

---
**Team Contributions:**

Aaron:  
* Set up CD pipline
* Implemented and finalized Facebook and Google authentication login functionality
* Created Login component and related functionality
* Implemented 'Add Review' and 'Add Rating' functionality
* Added pages to homepage
* Set up backend search and filter
* Set up environment variables
* Created CourseItem and CourseList components
* Added Material-UI to components
* Created initial UI design using Figma
* Continuous bug fixes and refactoring

Winnie:  
* Set up Express server, models, and API endpoints
* Managed and set up database with usable dummy data
* Managed back end functionality
* Restructured repository and set up initial deployment
* Added 'Add Course' functionality
* Created CourseOverview component
* Set up redux-thunk for async fetch for courses and reviews

Illean:  
* Set up About and Contact pages
* Set up React routing for all components
* Implemented front end search and filter functionality
* Created ReviewItem and ReviewList components
* Applied UI to components from Figma
* Implemented 'Delete Course' functionality

Spandana:  
* Set up Google login and database integration with passport authentication
* Implemented 'Delete All Courses' functionality (removed later)
* Created Header and Button component
* Final code cleanup
* Investigated and implemented role-based user routing
* Handled user signup 
---
**Relevant Links:**
*  Trello:  https://trello.com/b/rjTfDo1R/coursehub
*  Figma:  https://www.figma.com/file/UXh5AIRYjv4AdfHV2p88wG/CourseHub---version-2

---
**Citations:**
* For Login OAuth Setup: This tutorial was used https://medium.com/free-code-camp/how-to-set-up-twitter-oauth-using-passport-js-and-reactjs-9ffa6f49ef0 to set up the google and facebook login oauth functionalities
