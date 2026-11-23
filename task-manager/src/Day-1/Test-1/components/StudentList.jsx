import StudentCard from "./StudentCard";

function StudentList({students}){
    return(
        <section className="student-list">
            {students.map((student) => (
                <StudentCard
                key={student.id}
                name={student.name}
                role={student.role}
                />
            ))}
        </section>
    )
}
export default StudentList;