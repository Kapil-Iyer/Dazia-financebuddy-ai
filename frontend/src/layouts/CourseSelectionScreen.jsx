// src/layouts/CourseSelectionScreen.jsx
import React from 'react';
import { daziaTheme, gradients } from '../styles/daziaTheme';
import CourseCard from '../components/course-selection/CourseCard';

/**
 * Full-Screen Course Selection Interface
 * First screen users see - choose certification path
 */
function CourseSelectionScreen({ onCourseSelect }) {
  const courses = [
    {
      id: 'IFIC',
      icon: '📊',
      title: 'IFIC',
      subtitle: 'Investment Funds in Canada',
      color: '#10B981', // Green
      description: 'Master mutual funds and investment principles',
    },
    {
      id: 'CSC',
      icon: '💼',
      title: 'CSC',
      subtitle: 'Canadian Securities Course',
      color: '#3B82F6', // Blue
      description: 'Comprehensive securities and finance education',
    },
    {
      id: 'CAPM',
      icon: '📋',
      title: 'CAPM',
      subtitle: 'Certified Associate in Project Management',
      color: '#F59E0B', // Orange
      description: 'Essential project management skills',
    },
    {
      id: 'PMP',
      icon: '🎯',
      title: 'PMP',
      subtitle: 'Project Management Professional',
      color: '#8B5CF6', // Purple
      description: 'Advanced project management certification',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: gradients.yellowWarm,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: daziaTheme.spacing['3xl'],
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: daziaTheme.spacing['4xl'] }}>
          {/* Logo */}
          <div
            style={{
              fontSize: '80px',
              marginBottom: daziaTheme.spacing.md,
            }}
          >
            🎓
          </div>

          {/* Brand Name */}
          <h1
            style={{
              fontSize: daziaTheme.typography.fontSize['5xl'],
              fontWeight: daziaTheme.typography.fontWeight.extrabold,
              color: daziaTheme.colors.navy,
              margin: `0 0 ${daziaTheme.spacing.md} 0`,
              letterSpacing: '-0.02em',
            }}
          >
            FinanceBuddy AI
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: daziaTheme.typography.fontSize.xl,
              color: daziaTheme.colors.gray600,
              fontWeight: daziaTheme.typography.fontWeight.medium,
              margin: 0,
            }}
          >
            Choose Your Certification Path
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontSize: daziaTheme.typography.fontSize.base,
              color: daziaTheme.colors.gray500,
              marginTop: daziaTheme.spacing.sm,
            }}
          >
            AI-powered exam preparation • Personalized study plans • Expert guidance
          </p>
        </div>

        {/* Course Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: daziaTheme.spacing.xl,
            marginBottom: daziaTheme.spacing['3xl'],
          }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              onClick={() => onCourseSelect(course.id)}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div
          style={{
            marginTop: daziaTheme.spacing['3xl'],
            paddingTop: daziaTheme.spacing.xl,
            borderTop: `1px solid ${daziaTheme.colors.gray200}`,
          }}
        >
          <p
            style={{
              fontSize: daziaTheme.typography.fontSize.sm,
              color: daziaTheme.colors.gray500,
            }}
          >
            Powered by <span style={{ color: daziaTheme.colors.primary, fontWeight: 600 }}>Dazia Consulting</span> •
            Using Google Gemini AI
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseSelectionScreen;