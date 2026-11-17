// import './App.css'

function Header() {
  return (
    <header className="Header-one">
      <h1>Frontend Developer</h1>
      <p>Frontend Learning Dashboard</p>
    </header>
  );
}
function WelcomeSection() {
  return (
    <section className="Welcome-two">
      <h2>Welcome, Student!</h2>
      <p>Your React learning journey starts here.</p>
    </section>
  )
}
function LearningSection() {
  return (
    <section className="Learning-three">
      <h2>Today's Learning Goals</h2>
      <ul>
        <li>Understand React</li>
        <li>Set up a Vite project</li>
        <li>Explore the project structure</li>
      </ul>
    </section>
  );
}

function Footer(){
  return(
    <footer className="Learning-footer">
            <p>&copy; 2026 React Fundamentals</p>
    </footer>
  );
}
function Appsa() {
  return (
    <main className="dashboards">
      <Header />
      <WelcomeSection />
      <LearningSection/>
      <Footer/>
    </main>
  )
}

export default Appsa;