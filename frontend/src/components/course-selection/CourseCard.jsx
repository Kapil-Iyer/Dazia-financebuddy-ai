// src/components/course-selection/CourseCard.jsx
import React, { useState } from 'react';
import { daziaTheme } from '../../styles/daziaTheme';

/**
 * Course Selection Card Component
 * Displays individual certification course options
 */
function CourseCard({ id, icon, title, subtitle, color, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="course-card"
      style={{
        background: daziaTheme.colors.white,
        borderRadius: daziaTheme.borderRadius.xl,
        padding: daziaTheme.spacing['3xl'],
        textAlign: 'center',
        cursor: 'pointer',
        border: `2px solid ${isHovered ? color : daziaTheme.colors.gray200}`,
        boxShadow: isHovered ? daziaTheme.shadows.xl : daziaTheme.shadows.md,
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '240px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: daziaTheme.spacing.md,
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: '64px',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: daziaTheme.typography.fontSize['2xl'],
          fontWeight: daziaTheme.typography.fontWeight.bold,
          color: daziaTheme.colors.navy,
          margin: 0,
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: daziaTheme.typography.fontSize.base,
          color: daziaTheme.colors.gray600,
          margin: 0,
        }}
      >
        {subtitle}
      </p>

      {/* Action Hint */}
      {isHovered && (
        <div
          className="fade-in"
          style={{
            marginTop: daziaTheme.spacing.sm,
            padding: `${daziaTheme.spacing.xs} ${daziaTheme.spacing.md}`,
            background: color,
            color: daziaTheme.colors.white,
            borderRadius: daziaTheme.borderRadius.full,
            fontSize: daziaTheme.typography.fontSize.sm,
            fontWeight: daziaTheme.typography.fontWeight.semibold,
          }}
        >
          Start Learning →
        </div>
      )}
    </div>
  );
}

export default CourseCard;