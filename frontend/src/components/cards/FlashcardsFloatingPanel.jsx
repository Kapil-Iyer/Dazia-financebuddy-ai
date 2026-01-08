// src/components/cards/FlashcardsFloatingPanel.jsx
import React, { useState } from 'react';
import { daziaTheme } from '../../styles/daziaTheme';
import Flashcards from '../tools/Flashcards';

/**
 * Floating Flashcards Panel
 * Bottom-center, slides up on hover
 */
function FlashcardsFloatingPanel({ onUsageUpdate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bottom Bar (Collapsed State) */}
      {!isOpen && (
        <div
          className="flashcards-panel"
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '60px',
            background: daziaTheme.colors.primary,
            borderRadius: `${daziaTheme.borderRadius.xl} ${daziaTheme.borderRadius.xl} 0 0`,
            boxShadow: daziaTheme.shadows.xl,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: daziaTheme.spacing.md,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: daziaTheme.zIndex.modal,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(-50%) translateY(-10px)';
            e.currentTarget.style.boxShadow = daziaTheme.shadows.hoverYellow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
            e.currentTarget.style.boxShadow = daziaTheme.shadows.xl;
          }}
        >
          <span style={{ fontSize: '28px' }}>📚</span>
          <span
            style={{
              fontSize: daziaTheme.typography.fontSize.lg,
              fontWeight: daziaTheme.typography.fontWeight.bold,
              color: daziaTheme.colors.white,
            }}
          >
            Flashcards
          </span>
          <span style={{ fontSize: '20px', color: daziaTheme.colors.white }}>↑</span>
        </div>
      )}

      {/* Expanded Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: daziaTheme.zIndex.modal - 1,
            }}
          />

          {/* Flashcards Panel */}
          <div
            className="slide-up"
            style={{
              position: 'fixed',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '800px',
              height: '70vh',
              background: daziaTheme.colors.white,
              borderRadius: `${daziaTheme.borderRadius.xl} ${daziaTheme.borderRadius.xl} 0 0`,
              boxShadow: daziaTheme.shadows.xl,
              zIndex: daziaTheme.zIndex.modal,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: daziaTheme.spacing.lg,
                borderBottom: `1px solid ${daziaTheme.colors.gray200}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: daziaTheme.spacing.sm }}>
                <span style={{ fontSize: '28px' }}>📚</span>
                <h2
                  style={{
                    margin: 0,
                    fontSize: daziaTheme.typography.fontSize['2xl'],
                    fontWeight: daziaTheme.typography.fontWeight.bold,
                    color: daziaTheme.colors.navy,
                  }}
                >
                  Flashcards
                </h2>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: daziaTheme.spacing.sm,
                  borderRadius: daziaTheme.borderRadius.sm,
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = daziaTheme.colors.gray100)}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: daziaTheme.spacing.lg, overflow: 'auto' }}>
              <Flashcards onUsageUpdate={onUsageUpdate} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FlashcardsFloatingPanel;