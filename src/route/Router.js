import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HeaderLayout from '../layouts/header/HeaderLayout';
// import ChatPage from '../pages/ChatPage';
import LandingPage from '../pages/LandingPage';
// import QuestionOne from '../pages/userPersonalInformation/QuestionOne';
// import QuestionThree from '../pages/userPersonalInformation/QuestionThree';
// import QuestionTwo from '../pages/userPersonalInformation/QuestionTwo';
// import QuestionFour from '../pages/userPersonalInformation/QuestionFour';
// import SurveyLayout from '../layouts/surveyHeader/SurveyLayout';
import HomePage from '../pages/HomePage';
import SpecialistProfilePage from '../pages/SpecialistProfilePage';
import SpecialistRatingsAndReviewsPage from '../pages/SpecialistRatingsAndReviewsPage';
import MessagePage from '../pages/MessagePage';
import AccountPage from '../pages/AccountPage';
import PackagePage from '../pages/PackagePage';
import YourSpecialistPage from '../pages/YourSpecialistPage';
import SpecialistSessions from '../pages/SpecialistSessions';
import SessionPlaylistPage from '../pages/SessionPlaylistPage';
import SearchResultPage from '../pages/SearchResultPage';
import BecomeASpecialistPage from '../pages/BecomeASpecialistPage';
import SpecialistSideNavLayout from '../layouts/specialistSideNav/SpecialistSideNavLayout';
import SpecialistHeaderLayout from '../layouts/specialistHeader/SpecialistHeaderLayout';
import SpecialistVideoPage from '../pages/SpecialistVideoPage';
import SpecialistClientPage from '../pages/SpecialistClientPage';
import SessionController from '../pages/SessionController';

function Router() {
  const state = useSelector((state) => state.auth);
  const user = state.userInfo;
  // const userPI = 1;

  // Need to refactor this page
  // Bug in Route path='*'

  return (
    <Routes>
      {user?.id ? (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/chat" element={<MessagePage />} />
          <Route path="/chat/:id" element={<MessagePage />} />

          <Route path="/specialists/:id" element={<SpecialistProfilePage />} />
          <Route
            path="/specialists/:id/rating-and-review"
            element={<SpecialistRatingsAndReviewsPage />}
          />
          <Route
            path="/:userId/message/thread/:chatToken"
            element={<MessagePage />}
          />
          <Route path="/account/:userId" element={<AccountPage />} />
          <Route path="/package" element={<PackagePage />} />
          <Route
            path="account/:userId/your-specialists"
            element={<YourSpecialistPage />}
          />
          <Route
            path="specialist/:specialistId/sessions"
            element={<SpecialistSessions />}
          />
          <Route path="sessions/:videoId" element={<SessionPlaylistPage />} />
          <Route
            path="/become-a-specialist"
            element={<BecomeASpecialistPage />}
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      ) : (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}

      {/* {!userPI ? (
        <Route path="/" element={<SurveyLayout />}>
          <Route path="/:id/question-1" element={<QuestionOne />} />
          <Route path="/:id/question-2" element={<QuestionTwo />} />
          <Route path="/:id/question-3" element={<QuestionThree />} />
          <Route path="/:id/question-4" element={<QuestionFour />} />
        </Route>
      ) : (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )} */}

      {user && user.role === 'Specialist' ? (
        <Route path="/" element={<SpecialistSideNavLayout />}>
          <Route path="/" element={<SpecialistHeaderLayout />}>
            <Route path="/specialist-view" element={<SpecialistVideoPage />} />
            <Route
              path="/specialist-view/clients"
              element={<SpecialistClientPage />}
            />
            <Route
              path="/specialist-view/clients/:userId"
              element={<SessionController />}
            />
          </Route>
        </Route>
      ) : (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default Router;
