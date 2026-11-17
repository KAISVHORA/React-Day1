
// Question 31 — Reusable Panel
export function Children() {
    return (
        <div className="group-panel">
            <h1>31-My React Dashboard</h1>
            <Panel title="Frontend developer" className="Panel-K">
                {/* <h2 >Frontend developer</h2> */}
                <p>Welcome to my React learning journey! I am learning reusable components.</p>
            </Panel>
        </div>
    )
}

function Panel({ title, children}) {
    return (
        <div className="title-content">
            <h2>{title}</h2>
            <div className="panel-content">{children}</div>
        </div>
    )
}

export default Panel;
