// Task 3 — Skills List

import SkillsItem from "./SkillsItem";

function StudentList() {
    const mySkills = [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "React" },
        { id: 5, name: "Git & GitHub" }
    ];
    return (
        <div className="skill-cards">
            <div className="Skill-Cards">
                <h1>Frontend Developer</h1>
                <h4>My Skills</h4>
            </div>
            <SkillsItem skills={mySkills} />
        </div>
    )
}

export default StudentList;