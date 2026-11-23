
//Question:-30 — Course-Catalogue

function Course() {
    const couse = [
        { id: 1, title: "Maths", duration: 1, isOpen: true },
        { id: 2, title: "Science", duration: 3, isOpen: false },
        { id: 3, title: "Gujarat", duration: 2, isOpen: true }
    ]
    return (
        <div className="group-course">
            <div className="Course-cards">
                <h1>Deaf likes Subject:- ???</h1>
                <ul>
                    {couse.map((couses) => (
                        <li key={couses.id}>
                            <h3>{couses.title}</h3>
                            <p className="number">{couses.duration}</p>
                            <p className={couses.isOpen ? "Like" : "Unlike"}>
                                {couses.isOpen ? "Like" : "Unlike"}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}





// 29:- Personal Profile Card

function Profiles({ name, role, skills, completedCourses }) {
    return (
        <div>
            <div className="Cards">
                <h2>{name}</h2>
                <p>{role}</p>
                <h3>Skills</h3>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>

                <p className="Num">
                    Completed Courses: {completedCourses}
                </p>
            </div>
            <Course />
        </div>
    )
}

export default Profiles;