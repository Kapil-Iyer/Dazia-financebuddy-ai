// src/App.jsx
import React, { useState } from 'react';
import { CourseProvider, useCourse } from './context/CourseContext';
import ErrorBoundary from './components/shared/ErrorBoundary';
import CourseSelectionScreen from './layouts/CourseSelectionScreen';
import DashboardLayoutV2 from './layouts/DashboardLayoutV2';

// Import CSS
import './styles/animations.css';
import './styles/typography.css';

function AppContent() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { setCourse } = useCourse(); // ✅ CONNECT TO CONTEXT

  const handleCourseSelect = (courseId) => {
    setCourse(courseId);          // ✅ update global course
    setSelectedCourse(courseId);  // ✅ control screen flow
  };

  return (
    <>
      {!selectedCourse ? (
        <CourseSelectionScreen onCourseSelect={handleCourseSelect} />
      ) : (
        <DashboardLayoutV2 />
      )}
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <CourseProvider>
        <AppContent />
      </CourseProvider>
    </ErrorBoundary>
  );
}

export default App;
