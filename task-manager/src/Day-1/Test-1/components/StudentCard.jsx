
function StudentCard({name, role}){
    return (
        <article className="student-card">
            <h2>{name}</h2>
            <p>{role}</p>
        </article>
    )
}
export default StudentCard;