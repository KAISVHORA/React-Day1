



// ------- Day-1 ------ //
// 15. MCQs — React Introduction and Setup

// 1-What is React primarily used for?
// A. Building user interfaces

// 2-Which technology is the JavaScript library in our stack?
// B. React

// 3-What is Node.js?
// B. A JavaScript runtime

// 4-What is npm commonly used for?
// A. Styling components //false

// 5-What is Vite?
// A. A frontend development and build tool

// 6-Which command creates a React project using the Vite template?
// B. npm create vite@latest task-manager -- --template react

// 7-Which command starts the development server in the standard Vite template?
// A. npm run dev

// 8-Which file commonly contains the main application component?
// B. App.jsx

// 9-What is the purpose of main.jsx?
// A. It commonly mounts the React application into the root HTML element.

// 10-Where are installed project packages normally stored?
// B. node_modules

// 11-What is the purpose of package.json?
// B. To store all React components //false

// 12-What does npm run build normally do in a Vite project?
// A. Creates a production build

// 13-What does localhost usually refer to?
// D. A browser extension or B. Your own computer // false

// 14-Why are components useful?
// A. They remove the need for JavaScript or 
// B. They make reusable UI pieces easier to organize true

// 15-What should you do if the browser displays a blank React page?
// C. Check the terminal, browser console, JSX, and imports


// 16. Short-Answer and Viva Questions
// Answer in your own words.

// 1.-What is React?
// hold














// 11. MCQs — JSX and JavaScript in React

// 1-What does JSX stand for?
// A. JavaScript XML

// 2-Which syntax correctly displays a variable called name?
// C. <h1>{name}</h1>

// 3-Which attribute is used for a CSS class in JSX?
// B. className

// 4-Which is a valid JSX fragment?
// C. <></> with a missing opening tag

// 5-What does the following display?
// C. 200

// 6-Which operator is commonly used for conditional rendering between two alternatives?
// C. ?:

// 7-Which expression displays a message only when isActive is true?
// A. {isActive && <p>Active</p>}

// 8-What is the purpose of map() when rendering a list?
// B. To create an element for each data item

// 9-Why should React list elements have stable keys?
// C. To help React identify items between renders

// 10-Which code is the safest way to display a message when an array is non-empty?
// B. {items.length > 0 && <p>Items found</p>}

// 11-Which attribute correctly associates a label with an input in JSX?
// B. labelFor

// 12-Which is a JavaScript expression?
// C. score > 50 ? "Pass" : "Fail"

// 13-What is the output of this expression?
// B. Login

// 14-Which JSX element is correctly closed?
// B. <img src="/logo.png" />

// 15-Which is the best key for a list of database records?
// C. The current time

// ------ 12. Predict the Output ------ //

// function MCQ() {
//   const name = "Diya";
//   const age = 22;

//   return (
//     <p>{`${name} is ${age} years old.`}</p>
//   );
// }

// export default MCQ;

// Question 2
// function MCQ() {
//   const quantity = 4;
//   const price = 250;
//   const total = quantity * price;

//   return(
//     <>
//       <h2>{price}</h2>
//       <h2>{quantity}</h2>
//       <h2>Total: ₹{total}</h2>
//     </>
//   )
// };
// export default MCQ;


// Question 3

// function MCQ() {
//   const marks = 55;

//   return (
//     <p>
//       {marks >= 40 ? "Passed" : "Failed"}
//     </p>
//   );
// };

// export default MCQ;



// Question 4

// function MCQ() {
//   const topics = ["JSX", "Props", "Components"];


//   return (
//     <ul>
//       {topics.map((topic) => (
//         <li key={topic}>{topic}</li>
//       ))}
//     </ul>
//   );
// };
// // Remember: 3 array elements = 3 list items.

// export default MCQ;


// Question 5

// function MCQ(){
//   const notifications = 1;

//   return (
//     <div>
//       {notifications > 0 && <p>New notification</p>}
//       <p>Welcome</p>
//     </div>
//   );
// }
// export default MCQ



// 13. Debugging Exercises
// function MCQ(){
//   return (
//    <>
//      <h1>Welcome</h1>
//      <p>Start learning React.</p>
//    </>
//   );
// }

// export default MCQ;



// Exercise 2 — Variable not displayed
// function MCQ() {
//   const studentName = "Aarav";
//   return <h1>{studentName}</h1>;
// }

// export default MCQ;


//Exercise 3 — Incorrect class attribute

// function MCQ() {
//     return <div className="student-card">Student</div>;
// }

// export default MCQ;



// Exercise 4 — Incorrect condition
// function MCQ() {
//   const score = 70;

//   return (
//     <p>
//       {score >= 40 ? "Passed" : "Failed"}
//     </p>
//   );

// }
// export default MCQ;



// Exercise 5 — Missing key

// function MCQ() {
//   const courses = ["HTML", "CSS", "React"];

//   return (
//     <ul>
//       {courses.map((course, index) => (
//         <li key={index}>{course}</li>
//       ))}
//     </ul>
//   );
// }
// export default MCQ;


// Exercise 6 — Incorrect empty-state condition
// function MCQ() {
//   // const products = ["kais", "ammar", "raiyan"];
//   const products = [1];

//   return (
//     <div>
//       {products.length && <p>Products available</p>}
//     </div>
//   );
// }
// export default MCQ;

// copyright github
// function MCQ() {
//   const products = [];

//   return (
//     <div>
//       {products.length > 0 ? (
//         <p>Products available</p>
//       ): (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// }
// export default MCQ;











// 14. MCQs — Components and Props

// 1-What is a React component?
// B. A reusable piece of UI

// 2-Which component name follows React conventions?
// C. StudentCard

// 3-What are props used for?
// A. Passing inputs to components

// 4-Which is the correct way to pass a number?
// B. <Course duration={12} />

// 5-What does destructuring props do?
// B. Extracts property values from the props object

// 6-What is the children prop commonly used for?
// A. Displaying nested content inside a component

// 7-What is component composition?
// A. Combining smaller components into a larger interface

// 8-Which is a correct default import?
// B. import Header from "./Header.jsx";

// 9-Why should props be treated as read-only?
// D. Props are only used for CSS

// 10-How should a callback be passed to a child component?
// A. onAction={handleAction}

// 11-What is a good key for a list of student records?
// A. A stable student ID

// 12-Why are components often placed in separate files?
// D. To remove JSX

// 13-Which statement about children is correct?
// C. It always contains an array of strings

// 14-What happens when a parent passes a prop to a child?
// A. The child receives that input and can use it in its UI

// 15-What is the main purpose of a reusable StudentCard?
// A. To avoid duplicating the same card layout






// Day 1.4: React Fundamentals — Exercises and Assessment

// 1-What is React primarily used for?
// B. Building user interfaces

// 2-Which tool is commonly used to scaffold and run a React project in this internship?
// A. Vite

// 3-Which command installs the dependencies listed in package.json?
// C. npm install

// 4-Which file commonly mounts a React application into the root HTML element in a Vite React project?
// B. main.jsx

// 5-What is JSX?
// D. A replacement for npm
// or 
// B. A JavaScript syntax extension used to describe UI

// 6-Which is the correct JSX attribute for a CSS class?
// B. className="card"

// 7-How do you display a JavaScript variable named studentName in JSX?
//<p>{studentName}</p>

// 8-Which is a valid way to return multiple sibling JSX elements?
// C. Place one return inside another

// 9-What is a React component?
// A. A reusable piece of UI

// 10-Which component name follows the usual React convention?
// C. StudentCard

// 11-What are props used for?
// Passing inputs from a parent component to a child

// 12-Which is the correct way to pass a number as a prop?
// B. <Course duration={12} />

// 13-What does map() commonly do when rendering a list?
// C. Transforms array items into a new array

// 14-Why should React list items have stable keys?
// B. To help React identify items between renders

// 15-Which expression displays one of two messages based on a condition?
// B. condition ? "Yes" : "No"

// 16-What does the children prop commonly represent?
// B. Content nested inside a component's opening and closing tags

// 17-Which statement about props is correct?
// C. Props can only contain strings

// 18-Given export default Header;, which import is correct?
// B. import Header from "./Header.jsx";

// 19-What does this JSX render if unreadCount is 0?
// C. Nothing from this expression

// 20-What is the main benefit of a reusable StudentCard component?
// C. It eliminates the need for data
