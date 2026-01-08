// src/App.jsx
import React, { useState } from 'react';
import { CourseProvider } from './context/CourseContext';
import ErrorBoundary from './components/shared/ErrorBoundary';
import CourseSelectionScreen from './layouts/CourseSelectionScreen';
import DashboardLayoutV2 from './layouts/DashboardLayoutV2';

// Import CSS
import './styles/animations.css';
import './styles/typography.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelect = (courseId) => {
    setSelectedCourse(courseId);
  };

  return (
    <ErrorBoundary>
      <CourseProvider>
        {!selectedCourse ? (
          <CourseSelectionScreen onCourseSelect={handleCourseSelect} />
        ) : (
          <DashboardLayoutV2 />
        )}
      </CourseProvider>
    </ErrorBoundary>
  );
}

export default App;