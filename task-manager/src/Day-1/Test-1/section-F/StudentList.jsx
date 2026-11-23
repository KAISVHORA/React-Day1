
import Student from './StudentCard.jsx';

function StudentList({students}){
    return(
        <div className="student-list">
            {students.map((student) => (
                <Student key={student.id} student={student} />
            ))}
        </div>
    )
}
export default StudentList;