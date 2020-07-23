import React from 'react';
import './App.css';
import {Member} from './pages'
import Counter from "./pages/Counter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Greeting from './components/Greeting'
import EventPractice from "./components/EventPractice";
import SigninTest from "./components/SigninTest";
import Signin from "./components/Signin";
import HideTest from "./components/HideTest";
import CounterContainer from "./counter/CounterContainer";
import TodosContainer from "./todos/TodosContainer";

const App = () => <div className={"App"}>
          <TodosContainer />
      </div>

export default App;
