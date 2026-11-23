import { useEffect, useState } from "react";

function Counters(){
    const [counts, Setcounts] = useState(0);

    useEffect(() => {
        document.title = `Counts: ${counts} `;
    }, [counts])

    return(
        <div className="container">
            <div className="counter-T">
                <h1>Exercise 4: Browser Title</h1>
                <h2>Couters:- {counts}</h2>
                <button onClick={() => Setcounts(counts + 1)}>increase</button>
                <button onClick={() => Setcounts(0)}>reset</button>
            </div>
        </div>
    )
}

function Inputs() {
    const [names, Setnames] = useState("");
    return (
        <div className="container">
            <div className="Inputs-GB">
                <h1>Exercise 3: Live Input</h1>
                <input 
                value={names}
                onChange={(event) => Setnames(event.target.value)}
                placeholder="Enter Your Name"
                />
                {names === "" ? (
                    <p>Please enter your name</p>
                ) : (
                    <p>Shows:- {names}</p>
                )}
                <p>Character count:- {names.length}</p>
            </div>
            <Counters/>
        </div>
    );
};


function Show() {
    const [show, Setshow] = useState(false);

    function handleClick() {
        Setshow(!show);
    }

    return (
        <div className="container">
            <div className="Group-S">
                <h1>Exercise 2: Show and Hide</h1>
                {show && <h2>Show Message</h2>}
                <button onClick={handleClick}>
                    {show ? "Hide Message" : "Show Message"}
                </button>
            </div>
            <Inputs />
        </div>
    )
}

function Counter() {
    const [count, Setcount] = useState(0);

    return (
        <div className="container">
            <h1 className="title-h1">Section C — Coding Exercises</h1>
            <div className="counters-N">
                <h1>Exercise 1: Counter</h1>
                <h2>Couters:- {count}</h2>
                <button onClick={() => Setcount(count + 1)}>Increase</button>
            </div>
            <Show />
        </div>
    );
};

function Timer() {

    useEffect(() => {
        const intervaIld = setInterval(() => {
            console.log("I am Kais");
        }, 1000)

        return () => {
            clearInterval(intervaIld);
        }
    }, []);

    return (
        <div className="container">
            <div className="Time-G">
                <h1>5-Why is cleanup important for timers?</h1>
                <p>Timers:- F12 as console timers Auto </p>
            </div>
            <Counter />
        </div>
    );
};


function Effect({ count }) {
    useEffect(() => {
        document.title = `Count ${count}`

        return () => {
            document.title = "Reactjs Developer";
        };
    }, [count]);

    return (
        <div className="container">
            <div className="count-G">
                <h1>4-What does a dependency array do in useEffect?</h1>
            </div>
        </div>
    );
};
function Input() {
    const [name, Setname] = useState("");

    return (
        <div className="container">
            <div className="Input-G">
                <h1>3-Explain the purpose of onChange.</h1>
                <input
                    value={name}
                    onChange={(event) => Setname(event.target.value)}
                    placeholder="Enter your name"
                />
                <p>Welcome:- {name || "kais"}</p>
            </div>
            <Effect />
            <Timer />
        </div>
    );
};

function Name({ name }) {
    return (
        <div className="container">
            <div className="name-G">
                <h1>2-What is the difference between props and state?</h1>
                <h1>My name is <span>{name}</span></h1>
            </div>
            <Input />
        </div>
    );
};

function State() {
    const [count, Setcount] = useState(0);

    return (
        <div className="container">
            <h1 className="title-h1">Section B — Short Answer Questions</h1>
            <div className="count-G">
                <h1>1-Explain state with one real-world example.</h1>
                <h2>Count:- {count}</h2>
                <button onClick={() => Setcount(count + 1)}>Increase</button>
            </div>
            <Name name="Kais" />
        </div>
    );
};

export default State;