function SkillsItem({ skills }) {
//       // Check if skills array is empty
//   if (!skills || skills.length === 0) {
//     return <p>No skills available.</p>;
//   }
    return (
        <div className="skill-item">
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SkillsItem;
