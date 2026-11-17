

function CourseCard({ course }) {
    return (
        <div className="course-card">
            <h2>{course.title}</h2>
            <p>{course.duration}</p>
            <p>{course.level}</p>
            {course.enrolled ? (
                <span className="enrolled">Enrolled</span>
            ) : (
                <span className="available">Available</span>
            )}
        </div>
    )
}

export default CourseCard;