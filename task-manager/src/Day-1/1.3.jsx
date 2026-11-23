
// 12. Individual Practice Tasks
// Task 1 — Reusable Profile Card
// import Header from "../component/Header";

function Apps({Student}) {

    return (
        <div>
            {/* <h1>React Developer</h1> */}
           
            <article className="student-card">
                <h2>{Student.name}</h2>
                <p>{Student.role}</p>
            </article>
        </div>
    )
}

export default Apps;