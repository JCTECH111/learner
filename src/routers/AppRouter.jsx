// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from '../screens/SplashScreen';
import FirstOnBoard from '../screens/FirstOnBoard';
import SignUp from '../authentication/SignUp';
import SignIn from '../authentication/SignIn';
import SecondOnBoard from '../screens/SecondOnBoard';
import ThirdOnBoard from '../screens/thirdOnBoard';
import HomePage from '../screens/HomePage';
import Categories from '../screens/Categories';
import Notifications from '../screens/Notifications';
import TopMentor from '../screens/TopMentor';
import CoursesPage from '../screens/CoursePage';
import SearchPage from '../screens/SearchPage';
import ChatPage from '../screens/ChatPage';
import MessagePage from '../screens/MessagePage';
import MyCoursePage from '../screens/MyCourse';
import CourseDetail from '../screens/CourseDetails';
import MyProfile from '../screens/MyProfile';

export default function AppRouter() {
    return (
      <Router>
        <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/firstboard" element={<FirstOnBoard />} />
                <Route path="/secondboard" element={<SecondOnBoard />} />
                <Route path="/thirdboard" element={<ThirdOnBoard />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/mentors" element={<TopMentor />} />
                <Route path="/Courses" element={<CoursesPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/chats" element={<ChatPage />} />
                <Route path="/chat/:id" element={<MessagePage />} />
                <Route path="/my-Courses" element={<MyCoursePage />} />
                <Route path="/course-details" element={<CourseDetail />} />
                <Route path="/Profile" element={<MyProfile />} />
                {/* Catch-all route for 404 Not Found */}
                <Route path="*" element={<h1>404 error</h1>} />
      </Routes>
    </Router>
  );
}