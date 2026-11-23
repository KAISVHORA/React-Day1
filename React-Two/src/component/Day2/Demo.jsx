
import { useState } from "react";

//4.2 -:- Section E — Debugging Challenge
function LoginForms() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!email.trim()) {
            setError("Email is required.");
            return;
        }

        setError("");
        alert("Email entered successfully.");
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(event) => { setEmail(event.target.value); setError()}}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "error-email" : undefined}
      />

      {error && (<p role="alert">{error}</p>)}

      <button type="submit">Continue</button>
    </form>
  );
}

function LoginForm() {
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.previousDefault();
        console.log("Email:", email);
    }

    return (
        <div>
        <h1>Frontend developer</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button>Login</button>
            </form>
            <LoginForms/>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="counters-N">
                <h1>Counter Demo</h1>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount((previousCount) => previousCount + 1)}>
                    Increase
                </button>
            </div>
            <LoginForm />
        </div>
    );
}

export default Counter;

// Section A — MCQs (10 Marks)


// 1. Which Hook is used to manage component state?
// B. useState

// 2.Which event is used to handle a button click?
// B. onClick

// 3. What happens when React state is updated?
// C. The component is deleted.

// 4. Which statement is correct?
// A. State should be modified directly.

// 5. What does event.target.value usually provide for a text input?
// B. The input's current value.

// 6. What is useEffect mainly used for?
// A. Synchronizing with external systems.

// 7. When does an effect with [count] run?
// B. After the initial mount and when count changes.

// 8. Why is cleanup used in an effect?
// B. To release resources created by an effect.

// 9. Which is the correct way to update a counter based on its previous value?
// B. count = count + 1

// 10. Should useEffect be used for every calculation?
// C. Only when using strings.








// Section D — Debugging Challenge (10 Marks)

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h2>{count}</h2>

//       <button onClick={increase}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default Counter;
// --------------- Test-Done setCount(count + 1); ----------- //


// Debugging Solution
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount((previous) => previous + 1);
//   }

//   return (
//     <div>
//       <h2>{count}</h2>

//       <button onClick={increase}>
//         Increase12
//       </button>
//     </div>
//   );
// }

// export default Counter;




// Day 3.2: React Tasks, Exercises and Practice

// 1. What is conditional rendering?
// A. Rendering the same UI permanently. wrong
// B. Displaying UI based on a condition. true



// 2. Which JavaScript method is commonly used to render a list of JSX elements?
// B. map()

// 3. Why should we provide keys when rendering lists?
// B. To help React identify list items across updates.

// 4. Which operator can display an element only when a condition is true?
// A. &&

// 5. What does the ternary operator provide?
// A. A way to select between two expressions.

// 6. Which method returns an array containing only items that pass a condition?
// B. filter()

// 7. Which is generally the best key for a list of database records?
// A. A random number generated on each render. wrong
// B. A stable, unique record ID. true


// 8. What should happen when a list is empty?
// A. The application must crash. wrong
// B. The application can display an empty-state message. true



// 9. What is the issue with this code?
// A. It always causes an error. wrong
// B. It may display 0 when the array is empty. true


// 10. How should an item in a state array usually be updated?
// B. Create a new array with the updated item.




// Section E — Debugging Exercise

// function StudentList() {
//   const students = [
//     { id: 1, name: "Aarav" },
//     { id: 2, name: "Priya" }
//   ];

//   return (
//     <div>
//       {students.length > 0 && ? (
//         students.map((student) => (
//           <p key={student.id}>{student.name}</p>
//         ))
//       ) : (
//         <p>No students found.</p>
//       )}
//     </div>
//   );
// }

// students.length > 0 Done



// Week 2 — Day 4.2: React Forms, Tasks and Assessment

// 1. What is a controlled input in React?
// B. An input whose value is controlled by React state.

// 2. Which event is commonly used to handle form submission?
// onClick

// 3. Why do we use event.preventDefault() in a React form?
// A. To clear all input values.

// 4. Which property is used to read the current text from a text input event?
// C. event.currentState

// 5. What is the purpose of the spread operator in a form-state update?
//B.To preserve existing properties while updating one field.

// 6. Which Hook is commonly used to store form values?
// useState

// 7. What should happen when required fields are empty?
// B. The form should display validation errors.

// 8. What does type="password" generally do?
// A. Encrypts the password before sending it.

// 9. Is client-side validation sufficient for security?
// B. No, the backend must validate data independently.

// 10. Why should labels be associated with inputs?
// A. To improve accessibility and usability.

