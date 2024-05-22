import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router

import Routing from './Components/Routing/Routing';
import SplIssueComp from './Components/Special Issue/SplIssueComp';
import CitationsComp from './Components/Citations/CitationsComp';
import BarGraph from './Components/BarGraph'
import CitationComp from './Components/Citations/CitationsComp';
import CurrentIssueComp from './Components/CurrentIssue/CurrentIssueComp';
import SubmitPaperComp from './Components/SubmitPaper/SubmitPaperComp';
import PaperReviewComp from './Components/PaperReview/PaperReviewComp';
import LogInReviewerComp from './Components/LogInReviewer/LoginReviewerComp';
import JoinReviewerComp from './Components/JoinReviewer/JoinReviewerComp';
import AddReviewer from './Components/Admin/AddReviewer';

function App() {
  return (
<Routing/>
  );
}

export default App;
