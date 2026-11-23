
import './App.css';
import State from './component/Day2/2.1.jsx';
import List from './component/Day3/3.1.jsx';
// import Counter from './component/Day2/Demo.jsx';
import ContactFrom from './component/Day4/4.1.jsx';
import Control from './component/Day4/4.2';
function App() {

  return (
    <div>
      <State />
      {/* <Counter/> */}
      <List hasNotification= {true}/>
      <ContactFrom/>
      <Control/>
    </div>
  )
}

export default App