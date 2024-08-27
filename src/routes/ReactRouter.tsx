import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import TestApiPage from "../pages/TestApi";
import PageError from "../pages/PageNotFound";

export default () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestApiPage />} />
      <Route path="*" element={<PageError />} />
    </Routes>
  </>
);
