
// 16. Debugging Exercises
// Exercise 1 — Component naming
function Cards() {
  return (
    <h2>Students The School</h2>
  )
}

// Exercise 2 — Incorrect props
function CourseCard({ title, duration }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{duration} weeeks</p>
    </article>
  )
}

// Exercise 3 — Incorrect callback
function ActionB({ ONaction }) {
  return <button onClick={ONaction}>Action</button>
}

function Debug() {
  function HandleA() {
    console.log("Clicked Passed");
  }
  return (
    <>
      <Cards />
      <CourseCard title="Will buy laptop" duration={2} />
      <ActionB ONaction={HandleA} />
    </>
  )
}

//Exercise 4 — Missing key
function StudentsClick() {
  const studentClick = [
    { id: 1, name: "Kais" },
    { id: 2, name: "Raiyan" },
  ]

  return (
    <div className="click-group">
      {studentClick.map((Click) => (
        <h1 key={Click.id}>{Click.name}</h1>
      ))}
    </div>
  )
}
// Exercise 6 — Repeated markup
function Article({ name, role }) {

  return (
    <>
      <article>
        <h2>{name}</h2>
        <p>{role}</p>
      </article>
    </>
  );
}
function Appsite() {
  const students = [
    { id: 1, name: "Aarav", role: "Frontend" },
    { id: 2, name: "Diya", role: "Backend" },
    { id: 3, name: "Kabir", role: "Frontend" },
  ];
  return (
    <main className="Appsite">
      {students.map((studentK) => (
        <Article key={studentK.id}
          name={studentK.name}
          role={studentK.role}
        />
      ))}
    </main>
  )
}



// 15. Output-Prediction Questions

// Question 5
function ActionButton({ onAction }) {
  return (
    <>
      <button onClick={onAction}>Click</button>
      <Debug />
      <StudentsClick />
      <Appsite />
    </>
  )
}
function External() {
  function handleAction() {
    console.log("Action completed");
  }
  return <ActionButton onAction={handleAction} />
}

// Question 4
function Items() {
  const students = [
    { id: 1, name: "Kais" },
    { id: 1, name: "Raiyan" },
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  )
}

// Question 3
function Panel({ children }) {
  return (
    <div>
      <section>{children}</section>
      <Items />
      <External />
    </div>
  )
};

// Question 2
function Greeting({ name = "Kais" }) {
  return (
    <div className="greet-group">
      <h1>Hello {name}</h1>
      <Panel>
        <h2>Today's Test</h2>
        <p>Learning Reactjs component</p>
      </Panel>
    </div>
  )
};

function Student({ name, role }) {
  return (
    <>
      <div className="kaisin">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
      <Greeting />
    </>
  )
};

// Question 1
function Header() {
  return (
    <Student
      name="Kais"
      role="Frontend Intern"
    />
  )
};

export default Header;
