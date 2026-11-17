
import CourseCard from "./CourseCard";

function StudentCards() {
    const courses = [
        {
            id: 1,
            title: "HTML",
            duration: "2 weeks",
            level: "Beginner",
            isPublished: true,
        },
        {
            id: 2,
            title: "CSS",
            duration: "3 weeks",
            level: "Beginner",
            isPublished: true,
        },
        {
            id: 3,
            title: "JavaScript",
            duration: "6 weeks",
            level: "Intermediate",
            isPublished: false,
        },
    ];

    return (
        <div className="One-Cards">
            <h1>Task 2 — Course Card</h1>
            <div className="Cards-one">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                    />
                ))}

            </div>
        </div>
    )
}

export default StudentCards;