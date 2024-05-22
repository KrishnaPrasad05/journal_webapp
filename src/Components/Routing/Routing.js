import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import HomePage from '../HomePage/HomePage';
import AboutUs from '../AboutUs/AboutUs';
import EditorDesk from '../EditorDesk/EditorDesk';
import Board from '../Board/Board';
import ImpactFactor from '../ImpactFactor/ImpactFactor';
import PastIssue from '../PastIssue/PastIssue';
import SpecialIssue from '../SpecialIssue/SpecialIssue';
import Topics from '../Topics/Topics';
import SubmitPaper from '../SubmitPaper/SubmitPaper';
import PublishProcess from '../PublishProcessComp/PublishProcess';
import Guidelines from '../GuidelinesComp/Guidelines';
import ProcessingCharges from '../ProcessingCharges/ProcessingCharges';
import SplIssue from '../Special Issue/SplIssue';
import Citations from '../Citations/Citations';
import DOI from '../DOI/DOI';
import CurrentIssueComp from '../CurrentIssue/CurrentIssueComp';
import CurrentIssue from '../CurrentIssue/CurrentIssue';
import CheckStatus from '../CheckStatus/CheckStatus';
import PaperReviewComp from '../PaperReview/PaperReviewComp';
import LogInReviewerComp from '../LogInReviewer/LoginReviewerComp';
import AboutUsReviewer from '../Reviewer/AboutUsReviewer';
import EditorDeskReviewer from '../Reviewer/EditorDeskReviewer';
import BoardReviewer from '../Reviewer/BoardReviewer';
import ImpactFactorReviewer from '../Reviewer/ImpactFactorReviewer';
import HomeReviewer from '../Reviewer/HomeReviewer';
import GuidelinesReviewer from '../Reviewer/GuidelinesReviewer';
import ContactUsReviewer from '../Reviewer/ContactUsReviewer';
import JoinReviewerComp from '../JoinReviewer/JoinReviewerComp';
import AddReviewer from '../Admin/AddReviewer';
import JoinReviewer from '../JoinReviewer/JoinReviewer';
import BoardAdmin from '../Admin/BoardAdmin';
import UserContactUs from '../UserContactUs/UserContactUs';
import ContactAdmin from '../Admin/ContactAdmin';
import AnnouncementsAdmin from '../Admin/AnnouncementsAdmin';
import HomeAdmin from '../Admin/AdminHome';
import LogInAdminComp from '../LogInAdmin/LogInAdminComp';
import AnnouncementsComp from '../AnnouncementUser/AnnouncementsComp';
import AnnouncementsReviewer from '../Reviewer/AnnouncementsReviewer';
import Announcements from '../AnnouncementUser/Announcements';
import IndFee from '../ProcessingCharges/IndFee';
import IntFee from '../ProcessingCharges/IntFee';
import JoinUs from '../JoinReviewer/JoinUs';
import ReviewerProfile from '../Reviewer/ProfileReviewer';

function Routing() {
  return (
    <Router> {/* Wrap everything in Router */}
      <Routes>
        <Route path="/" element={<HomePage/>}/> {/* Use element prop instead of children */}
        <Route path="/about-us" element={<AboutUs />}/> {/* Use element prop instead of children */}
        <Route path="/editor-desk" element={<EditorDesk/>}/> {/* Use element prop instead of children */}
        <Route path="/board" element={<Board/>}/> {/* Use element prop instead of children */}
        <Route path="/impact-factor" element={<ImpactFactor/>}/> {/* Use element prop instead of children */}
        <Route path="/past-issue" element={<PastIssue/>}/> {/* Use element prop instead of children */}
        <Route path="/special-issue" element={<SpecialIssue/>}/> {/* Use element prop instead of children */}
        <Route path="/topics" element={<Topics/>}/> {/* Use element prop instead of children */}
        <Route path="/submit-paper" element={<SubmitPaper/>}/> {/* Use element prop instead of children */}
        <Route path="/publication-process" element={<PublishProcess/>}/> {/* Use element prop instead of children */}
        <Route path="/guidelines" element={<Guidelines/>}/> {/* Use element prop instead of children */}
        <Route path="/processing-charges" element={<ProcessingCharges/>}/> {/* Use element prop instead of children */}
        <Route path="/special-issue-note" element={<SplIssue/>}/> {/* Use element prop instead of children */}
        <Route path="/citations" element={<Citations/>}/> {/* Use element prop instead of children */}
        <Route path="/doi" element={<DOI/>}/> {/* Use element prop instead of children */}
        <Route path="/check-status" element={<CheckStatus/>}/> {/* Use element prop instead of children */}
        <Route path="/current-issue-2024" element={<CurrentIssue/>}/> {/* Use element prop instead of children */}
        <Route path="/paper-review" element={<PaperReviewComp/>}/> {/* Use element prop instead of children */}
        <Route path="/contact-us" element={<UserContactUs/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-login" element={<LogInReviewerComp/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-home" element={<HomeReviewer/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-about-us" element={<AboutUsReviewer/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-editor-desk" element={<EditorDeskReviewer/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-board" element={<BoardReviewer/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-guidelines" element={<GuidelinesReviewer/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-impact-factor" element={<ImpactFactorReviewer/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-contact-us" element={<ContactUsReviewer/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-profile" element={<ReviewerProfile/>}/> {/* Use element prop instead of children */}
        <Route path="/admin-add-reviewer" element={<JoinReviewer/>}/> {/* Use element prop instead of children */}
         <Route path="/join-reviewer" element={<JoinUs/>}/>  {/* Use element prop instead of children */}
        <Route path="/admin-home" element={<HomeAdmin/>}/> {/* Use element prop instead of children */}
        <Route path="/admin-log-in" element={<LogInAdminComp/>}/> {/* Use element prop instead of children */}
        <Route path="/admin-board" element={<BoardAdmin/>}/> {/* Use element prop instead of children */}
        <Route path="/admin-contact-us" element={<ContactAdmin/>}/> {/* Use element prop instead of children */}
        <Route path="/admin-announcements" element={<AnnouncementsAdmin/>}/> {/* Use element prop instead of children */}
        <Route path="/announcements" element={<Announcements/>}/> {/* Use element prop instead of children */}
        <Route path="/reviewer-announcements" element={<AnnouncementsReviewer/>}/> {/* Use element prop instead of children */}
        <Route path="/indian-author-fee" element={<IndFee/>}/> {/* Use element prop instead of children */}
        <Route path="/international-author-fee" element={<IntFee/>}/> {/* Use element prop instead of children */}
      </Routes>
    </Router>
  )
}

export default Routing