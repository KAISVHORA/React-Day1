

import StudentProfile from './Test-1/Exercises/StudentProfile';
import { Children } from './Test-1/Exercises/Panel';
// Section B — Predict the Output

// Question 25 — Props
function Greeting({ name }) {
    return (
        <h2>My Friend is {name}</h2>
    )
}


// Question 24 — Rendering arrays
function Topics() {
    const topics = ["JSX", "Props", "Vite"];
    return (
        <div>
            <ul>
                {topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                ))}
            </ul>
            <Greeting name="Manju" />
        </div>
    )
};

// Question 23 — Conditional rendering
function Render() {
    const isAvilable = false;
    return (
        <>
            {isAvilable ? "Available" : "Not available"}
            <Topics />
        </>
    )
};

// Question 22 — Calculations in JSX
function Num() {
    const price = 250;
    const quantity = 4;

    return (
        <div className='total-price'>
            <p><strong>Total:-</strong> {price * quantity}</p>
            <Render />
        </div>
    )
}


// Question 21 — Variables in JSX
function Tests() {
    const name = "Kais vhora"
    return (
        <div  className='topic-group'>
            <h2>I am {name}</h2>
            <Num />
            <Img />
        </div>
    )
}

export default Tests;



// ---------Section C — Find and Fix the Bugs------- //
// Question 26 — Incorrect JSX attributes and structure

function Img() {
    return (
        <>
            <div className="container Train">
                <h1>Reactjs Training</h1>
                <img src="src/assets/react.svg" alt="Reactjs is show" />
            </div>
            <StudentCards />
        </>
    )
}

// Question 27 — Component naming
function StudentCards() {
    return (
        <>
            <div className='list-cards'>
                <h2>Student Profile</h2>
            </div>
            <List />
        </>
    )
}


// Question 28 — Missing list key
function List() {
    const students = [
        { id: 1, name: "Aarav" },
        { id: 2, name: "Diya" },
    ];
    return (
        <div>
            <ul className='list-cards-two'>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
            <StudentProfile />
            <Group />
            <Children />
        </div>
    );
}
// upload on github
import Profiles from './Test-1/Exercises/ProfileCard';

// 29:- Personal Profile Card

function Group() {
    return (
        <div className='group'>
            <h1>29-Personal Profiles</h1>
            <div className='profile-container'>
                <Profiles
                    name="Kais1"
                    role="Reactjs developer"
                    skills={["HTML", "CSS", "JavaScript", "React"]}
                    completedCourses={5}
                />
                <Profiles
                    name="Raiyan2"
                    role="Backend developer"
                    skills={["JavaScript", "Java", "SQL"]}
                    completedCourses={3}
                />
                <Profiles
                    name="Ammar"
                    role="Data Entry"
                    skills={["Excel", "Word", "PowerPoint"]}
                    completedCourses={3}
                />
            </div>
        </div>
    )
}
