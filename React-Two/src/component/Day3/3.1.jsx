import { useState } from "react";

function Datas() {
    const [showStudents, setShowStudent] = useState(false);
    const initialStudents = [
        { id: 1, name: "Aarav", course: "MERN" },
        { id: 2, name: "Priya", course: "React" },
        { id: 3, name: "Neel", course: "Node.js" }
    ];
    return (
        <div className="container">
            <h1 className="title-h1">Section D — Practical Challenge</h1>
            <div className="Data-G">
                <h1 className="title-two">4-Build a Student Management List</h1>
                <h2>All students:- {initialStudents.length}</h2>

                <p>{showStudents ? "Show" : "Stop"}</p>
                <button onClick={() => setShowStudent(prev => !prev)}>{showStudents ? "Open" : "Hidden"}</button>
                
                
                {initialStudents.length === 0 ? (
                    <p>No students found</p>
                ) : (
                    <ul className="ul-cards">
                        {initialStudents.map((initials) => (
                            <li className="cards" key={initials.id}>
                                <h2>{initials.name}</h2>
                                <p>{initials.course}</p>
                            </li>
                        ))}

                    </ul>
                )}

            </div>
        </div>
    )
}


function Completed() {
    const tasks = [
        { id: 1, title: "Learn JSX", Completed: true },
        { id: 2, title: "Practice Props", Completed: false },
        { id: 3, title: "Learn useState", Completed: true },
        { id: 4, title: "Practice CSS", Completed: false },
    ];

    return (
        <div className="container">
            <div className="completed-T">
                <h1 className="title-two">3-Create an array of tasks with id, title, and completed properties.</h1>

                {Completed.length === 1 ? (
                    <p>No completed tasks</p>
                ) : (
                    <ul>
                        {tasks
                            .filter((TaskL) => (TaskL.Completed))
                            .map((TaskL) => (
                                <li key={TaskL.id}>{TaskL.title}</li>
                            ))}
                    </ul>
                )}
            </div>
            <Datas/>
        </div>
    )
}

function Students() {
    const students = [
        { id: 1, name: "Kais", course: "React.js" },
        { id: 2, name: "Raiyan", course: "JavaScript" },
        { id: 3, name: "Ammar", course: "HTML & CSS" },
        { id: 4, name: "Arsil", course: "Buiness" },
        { id: 5, name: "Amir", course: "Netowrk teams" },
    ];

    return (
        <div className="container">
            <div className="Student-T">
                <h1 className="title-two">2-Create an array of at least five student objects.</h1>
                <h2>Total Student:- {students.length}</h2>
                <ul className="ul-cards">
                    {students.map((student) => (
                        <li className="cards" key={student.id}>
                            <h2>{student.name}</h2>
                            <h5>{student.course}</h5>
                        </li>
                    ))}
                </ul>
            </div>
            <Completed />
        </div>
    )
}

function Logins({ IsloggedIn }) {
    return (
        <div className="container">
            <h1 className="title-h1">Section C — Coding Exercises </h1>
            <div className="Logins-B">
                <h1 className="title-two">1-Create a component that accepts an isLoggedIn Boolean prop.</h1>
                <p>
                    {IsloggedIn ? "Welcome back!" : "Please log in"}
                </p>
                <button>
                    {IsloggedIn ? "Logout" : "Login"}
                </button>
            </div>
            <Students />
        </div>
    )
}

function States() {
    const [Tasks, SetTasks] = useState(["Learn React", "Practice JSX"]);

    function addTask() {
        SetTasks((previusTask) => [
            ...previusTask,
            "Learn Javascript"
        ])
    }

    return (
        <div className="container">
            <div className="Status-A">
                <h1 className="title-two">5-Why should arrays in React state be updated immutably?</h1>
                <ul>
                    {Tasks.map((Task) => (
                        <li key={Task}>{Task}</li>
                    ))}
                </ul>
                <button onClick={addTask}>Add</button>
            </div>
            <Logins IsloggedIn={true} />
        </div>
    )
}

function Logical({ isLoggeds }) {
    return (
        <div className="container">
            <div className="Logical-D">
                <h1 className="title-two">4-Explain the difference between a ternary operator and logical AND</h1>
                <h2>
                    {isLoggeds ? "Kais" : "Raiyan"}
                </h2>
                {isLoggeds && <h2>Welcome back!</h2>}
            </div>
            <States />
        </div>
    )
}

function Keys() {
    const students = [
        { id: 101, name: "Amit" },
        { id: 102, name: "Rahul" },
        { id: 103, name: "Neha" }
    ];

    return (
        <div className="container">
            <div className="Key-T">
                <h1 className="title-two">3-Why should stable keys be used in React lists?</h1>
                <ul>
                    {students.map((student) => (
                        <li key={student.id}>{student.name}</li>
                    ))}
                </ul>
            </div>
            <Logical isLoggeds={true} />
        </div>
    )
}

function Items() {
    const courses = [
        { id: 1, title: "HTML", published: true },
        { id: 2, title: "CSS", published: false },
        { id: 3, title: "JavaScript", published: true },
    ];
    return (
        <div className="container">
            <div className="List-L">
                <h1 className="title-two">2-What is the difference between map() and filter()?</h1>
                <ul>
                    {courses
                        .filter((course) => course.published)
                        .map((course) => (
                            <li key={course.id}>
                                <h2>{course.title}</h2>
                                <p className={course.published ? "Available" : "Unavailable"}>
                                    {course.published ? "Available" : "Unavailable"}
                                </p>
                            </li>
                        ))}
                </ul>
            </div>
            <Keys />
        </div>
    )
}


function List({ isLogged }) {
    return (
        <div className="container">
            <h1 className="title-h1">Section B — Short Answer Questions </h1>
            <div className="List-G">
                <h1 className="title-two">1-Explain conditional rendering with a real-world example.</h1>
                <p>
                    {isLogged ? "Welcome back" : "Please log in"}
                </p>
            </div>
            <Items />
        </div>
    )
};

export default List;