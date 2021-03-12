import './App.css';
import './appStyles.css'
/* import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/inline'
import styles from './appStyles.module.css'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureCompo from './components/PureCompo'
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ForwardInputParentRef from './components/ForwardInputParentRef';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary'; */
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name='Sandeep' />
      <HoverCounter name='Yadav'/>
      {/* <ErrorBoundary>
        <Hero heroName='Shaktiman'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker'/>
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <ForwardInputParentRef /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <EventBind></EventBind> */}
      {/* <Counter></Counter>
      <Greet name = "Sandeep" sirname = "yadav">
        <p>this is sandeep paragraph</p>  
      </Greet>
      <Greet name = "Kuldeep" sirname = "yadav">
        <button>Action</button>
      </Greet>
      <Welcome name = "sandeep" sirname = "yadav">
        <button>Action</button>
      </Welcome>
      <Message></Message>
      <Hello /> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <Inline /> */}
    </div>
  );
}

export default App;
