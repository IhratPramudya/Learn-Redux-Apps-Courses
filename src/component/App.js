import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "../PageNotFound";
import CoursePage from "./courses/CoursesPage";

function App() {
    return (
        <div className="container-fluid" >
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default App;