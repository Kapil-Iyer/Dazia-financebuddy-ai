// src/components/navigation/CourseDropdown.jsx
import React from 'react';
import { daziaTheme } from '../../styles/daziaTheme';

/**
 * Inline Course Selector Dropdown
 * Appears in top navigation bar
 */
function CourseDropdown({ current, onChange }) {
  const courses = [
    { id: 'IFIC', label: '📊 IFIC', fullName: 'Investment Funds' },
    { id: 'CSC', label: '💼 CSC', fullName: 'Canadian Securities' },
    { id: 'CAPM', label: '📋 CAPM', fullName: 'Project Management' },
    { id: 'PMP', label: '🎯 PMP', fullName: 'PM Professional' },
  ];

  const currentCourse = courses.find((c) => c.id === current);

  return (
    <div style={{ position: 'relative' }}>
      <select
        value={current}
        onChange={(e) => onChange(e.target.value)}
        style={{
          appearance: 'none',
          padding: `${daziaTheme.spacing.sm} ${daziaTheme.spacing['3xl']} ${daziaTheme.spacing.sm} ${daziaTheme.spacing.md}`,
          background: daziaTheme.colors.navy,
          color: daziaTheme.colors.white,
          border: 'none',
          borderRadius: daziaTheme.borderRadius.md,
          fontSize: daziaTheme.typography.fontSize.base,
          fontWeight: daziaTheme.typography.fontWeight.semibold,
          cursor: 'pointer',
          outline: 'none',
          minWidth: '180px',
        }}
      >
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.label} - {course.fullName}
          </option>
        ))}
      </select>

      {/* Dropdown Arrow */}
      <div
        style={{
          position: 'absolute',
          right: daziaTheme.spacing.md,
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          fontSize: '16px',
          color: daziaTheme.colors.white,
        }}
      >
        ▼
      </div>
    </div>
  );
}

export default CourseDropdown;