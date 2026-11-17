function CourseCard({ course }) {
    return (
        <div className="cours-gp">
            <div className="course-cards">
                <div className="C-Cards">
                    <h2>{course.title}</h2>
                    <p>{course.duration}</p>
                    <p>{course.level}</p>
                    <p className={course.isPublished ? "Published" : "Not-published"}>
                        <span>{course.isPublished ? "Published" : "Not published"}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;