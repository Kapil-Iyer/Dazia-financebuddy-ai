// src/components/cards/ToolCard.jsx
import React, { useState } from 'react';
import { daziaTheme } from '../../styles/daziaTheme';

/**
 * Reusable Tool Panel Card
 * Handles hover, expansion, and layout states
 */
function ToolCard({ tool, title, icon, expanded, onExpand, onCollapse, children, prominent = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tool-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => !expanded && onExpand()}
      style={{
        background: daziaTheme.colors.white,
        borderRadius: daziaTheme.borderRadius.xl,
        border: `2px solid ${
          expanded
            ? daziaTheme.colors.primary
            : isHovered
            ? daziaTheme.colors.primary
            : daziaTheme.colors.gray200
        }`,
        boxShadow: isHovered || expanded ? daziaTheme.shadows.hoverYellow : daziaTheme.shadows.md,
        padding: daziaTheme.spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        cursor: expanded ? 'default' : 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '100%',
        minHeight: prominent ? '600px' : '500px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: daziaTheme.spacing.lg,
          paddingBottom: daziaTheme.spacing.md,
          borderBottom: `1px solid ${daziaTheme.colors.gray200}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: daziaTheme.spacing.sm }}>
          <span style={{ fontSize: '24px' }}>{icon}</span>
          <h3
            style={{
              margin: 0,
              fontSize: daziaTheme.typography.fontSize.xl,
              fontWeight: daziaTheme.typography.fontWeight.bold,
              color: daziaTheme.colors.navy,
            }}
          >
            {title}
          </h3>
        </div>

        {/* Expand/Collapse Button */}
        {expanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCollapse();
            }}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              padding: daziaTheme.spacing.xs,
              borderRadius: daziaTheme.borderRadius.sm,
              transition: 'background 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = daziaTheme.colors.gray100)}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            ✕
          </button>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>

      {/* Hover Hint (when not expanded) */}
      {!expanded && isHovered && (
        <div
          className="fade-in"
          style={{
            position: 'absolute',
            bottom: daziaTheme.spacing.lg,
            left: '50%',
            transform: 'translateX(-50%)',
            background: daziaTheme.colors.primary,
            color: daziaTheme.colors.white,
            padding: `${daziaTheme.spacing.sm} ${daziaTheme.spacing.lg}`,
            borderRadius: daziaTheme.borderRadius.full,
            fontSize: daziaTheme.typography.fontSize.sm,
            fontWeight: daziaTheme.typography.fontWeight.semibold,
            whiteSpace: 'nowrap',
            boxShadow: daziaTheme.shadows.md,
          }}
        >
          Click to expand ↗
        </div>
      )}
    </div>
  );
}

export default ToolCard;