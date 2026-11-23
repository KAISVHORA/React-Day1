import Panel from "./Panel";

function External() {
    return (
        <div className="external-group">
            <h1>My React Learning Dashboard</h1>
            <Panel title="Announcement">
                <p>Welcome to my React course!</p>
                <p>Keep practicing every day.</p>
            </Panel>

            <Panel title="Learning Topics" className="learned">
                <ul className="ul-learn">
                    <li>React Components</li>
                    <li>Props</li>
                    <li>Children</li>
                    <li>Conditional Rendering</li>
                </ul>
            </Panel>
            <Panel title="My Goal">
                <p>
                    I want to become a professional
                    Frontend Developer.
                </p>

                <button>Start Learning</button>
            </Panel>
        </div>
    )
}
export default External;