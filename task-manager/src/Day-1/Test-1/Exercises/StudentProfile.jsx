function StudentProfile() {
    const students = [
        { id: 1, name: "Kais", role: "Frontend Developer", city: "Anand, Gujarat" },
        { id: 2, name: "Raiyan", role: "UI Designer", city: "Ahmedabad, Gujarat" },
        { id: 3, name: "Ammar", role: "React Developer", city: "Vadodara, Gujarat" },
    ];

    return (
        <section className="profile-card-one">
            <h2>Student Profile</h2>
            {students.map((student) => (
                <article key={student.id}>
                    <h3>{student.name}</h3>
                    <p>{student.role}</p>
                    <p>{student.city}</p>
                </article>
            ))}
        </section>
    );
}

export default StudentProfile;
