function Student({ student }) {
    return(
        <div className="student-cards">
            <h2>{student.name}</h2>
            <p>Track:- {student.track}</p>
            <h3>Skills:</h3>
            <ul>
               {student.skills.map((skill) => (
                <li key={skill}>{skill}</li>
               ))}
            </ul>

            <p>Completed Task: {student.completedTasks}</p>
        </div>
    )
}
export default Student;