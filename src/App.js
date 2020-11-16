import logo from './logo.svg';
import './App.css';
import { AnalysisList } from "@yoast/analysis-report";
import { Loader } from "@yoast/components";
import {
	BaseButton,
	Button,
	IconButton,
	IconButtonToggle,
	IconLabeledButton,
	IconsButton,
	LinkButton,
	UpsellButton,
	UpsellLinkButton,
	YoastButton,
	YoastLinkButton,
} from "@yoast/components";
function App() {
  return (
    <div className="App">
      <AnalysisList results={["123","123"]}></AnalysisList>
      <Loader/><YoastButton>123</YoastButton>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
