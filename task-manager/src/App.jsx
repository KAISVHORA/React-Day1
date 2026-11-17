
import './App.css'
import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'
import Head from './Day-1/Test-1/Head.jsx'
// import MCQ from './Test-use/MCQ'
// import JSX from './Day-1/1.2'
// import Apps from './Day-1/1.3'
import Productcard from './Day-1/product'
import Tests from './Day-1/1.4';
// import ExternalAPP from './Day-1/Test-1/components/Apps';
// Section F — Group Activities
import AppF from './Day-1/Test-1/section-F/AppF';
import Appsa from './Day-1/1.1.jsx';


function App() {
  return (
    <>
      {/* <MCQ /> */}
      {/* <Apps/> */}
      {/* <JSX/> */}
      <Appsa/>
      <Productcard />
      <Header/>
      <Head/>
      <Tests/>
      {/* <ExternalAPP/> */}
      <AppF/>
      <Footer/>
    </>
  )
}

export default App;