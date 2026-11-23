// Task 1 — Reusable Profile Card
import Apps from "../Day-1/1.3";
import StudentCards from "./StudentCard";
import StudentList from "./StudentList";
import External from "./External";

function Header() {
    const Profiles = [
        {
            id: 1,
            name: "Kais",
            role: "Frontend Developer"
        },
        {
            id: 2,
            name: "Raiyan",
            role: "JavaScript Developer"
        }
    ]

    return (
        <>
            <header className="Profile-cards">
                <div className="title-content">
                    <h2>ProfileCard component</h2>
                    <p>One reusable component</p>
                </div>

                <div className="student-grid">
                    {Profiles.map((Profile) => (
                        <Apps
                            key={Profile.id}
                            Student={Profile}
                        />
                    ))}
                </div>
            </header>
            <StudentCards />
            <StudentList/>
            <External/>
        </>

    )
}
export default Header;