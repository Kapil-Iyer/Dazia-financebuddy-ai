// src/components/tools/Flashcards.jsx
import React, { useState } from 'react';
import { daziaTheme } from '../../styles/daziaTheme';
import { useCourse } from '../../context/CourseContext';
import { generateFlashcards } from '../../api/financeBuddyApi';

/**
 * Flashcards Tool
 * Generate and review study flashcards
 */
function Flashcards({ onUsageUpdate }) {
  const { course } = useCourse();
  const [topic, setTopic] = useState('');
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    setCards([]);
    setCurrentIndex(0);
    setFlipped(false);

    try {
      const data = await generateFlashcards(course, topic, 10);
      setCards(data.data?.cards || data.cards || []);

      if (data.usage && onUsageUpdate) {
        onUsageUpdate(data.usage);
      }
    } catch (err) {
      const errorMsg = err.message || 'Failed to generate flashcards';
      if (errorMsg.toLowerCase().includes('limit') || errorMsg.toLowerCase().includes('exceeded')) {
        setError('⚠️ ' + errorMsg);
      } else {
        setError(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const currentCard = cards[currentIndex];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: daziaTheme.spacing.lg }}>
      {/* Input Section */}
      {cards.length === 0 && (
        <div>
          <label
            style={{
              display: 'block',
              fontSize: daziaTheme.typography.fontSize.sm,
              fontWeight: daziaTheme.typography.fontWeight.semibold,
              color: daziaTheme.colors.gray700,
              marginBottom: daziaTheme.spacing.sm,
            }}
          >
            Topic
          </label>
          <div style={{ display: 'flex', gap: daziaTheme.spacing.md }}>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="Enter topic (e.g., 'Mutual Funds')"
              disabled={loading}
              style={{
                flex: 1,
                padding: daziaTheme.spacing.md,
                border: `2px solid ${daziaTheme.colors.gray200}`,
                borderRadius: daziaTheme.borderRadius.md,
                fontSize: daziaTheme.typography.fontSize.base,
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = daziaTheme.colors.primary)}
              onBlur={(e) => (e.target.style.borderColor = daziaTheme.colors.gray200)}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !topic.trim()}
              className="button-primary"
              style={{
                padding: `${daziaTheme.spacing.md} ${daziaTheme.spacing.xl}`,
                background: loading ? daziaTheme.colors.gray400 : daziaTheme.colors.primary,
                color: daziaTheme.colors.white,
                border: 'none',
                borderRadius: daziaTheme.borderRadius.md,
                fontSize: daziaTheme.typography.fontSize.base,
                fontWeight: daziaTheme.typography.fontWeight.semibold,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Generating...' : 'Generate Cards'}
            </button>
          </div>

          {error && (
            <div
              style={{
                marginTop: daziaTheme.spacing.md,
                padding: daziaTheme.spacing.md,
                background: daziaTheme.colors.errorBg,
                color: daziaTheme.colors.error,
                borderRadius: daziaTheme.borderRadius.md,
                fontSize: daziaTheme.typography.fontSize.sm,
              }}
            >
              {error}
            </div>
          )}
        </div>
      )}

      {/* Flashcard Display */}
      {cards.length > 0 && currentCard && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: daziaTheme.spacing.lg }}>
          {/* Progress */}
          <div
            style={{
              textAlign: 'center',
              fontSize: daziaTheme.typography.fontSize.sm,
              color: daziaTheme.colors.gray600,
            }}
          >
            Card {currentIndex + 1} of {cards.length}
          </div>

          {/* Card */}
          <div
            onClick={() => setFlipped(!flipped)}
            style={{
              flex: 1,
              background: flipped ? daziaTheme.colors.lightYellow : daziaTheme.colors.white,
              border: `2px solid ${daziaTheme.colors.primary}`,
              borderRadius: daziaTheme.borderRadius.xl,
              padding: daziaTheme.spacing['3xl'],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: daziaTheme.shadows.lg,
              minHeight: '300px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = daziaTheme.shadows.hoverYellow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = daziaTheme.shadows.lg;
            }}
          >
            <div
              style={{
                fontSize: daziaTheme.typography.fontSize.xs,
                fontWeight: daziaTheme.typography.fontWeight.semibold,
                color: daziaTheme.colors.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: daziaTheme.spacing.lg,
              }}
            >
              {flipped ? 'Answer' : 'Question'}
            </div>
            <div
              style={{
                fontSize: daziaTheme.typography.fontSize.xl,
                fontWeight: daziaTheme.typography.fontWeight.medium,
                color: daziaTheme.colors.navy,
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              {flipped ? currentCard.back : currentCard.front}
            </div>
            {!flipped && (
              <div
                style={{
                  marginTop: daziaTheme.spacing.xl,
                  fontSize: daziaTheme.typography.fontSize.sm,
                  color: daziaTheme.colors.gray500,
                }}
              >
                Click to flip
              </div>
            )}
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: daziaTheme.spacing.md, justifyContent: 'center' }}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                padding: `${daziaTheme.spacing.sm} ${daziaTheme.spacing.lg}`,
                background: currentIndex === 0 ? daziaTheme.colors.gray200 : daziaTheme.colors.white,
                color: currentIndex === 0 ? daziaTheme.colors.gray400 : daziaTheme.colors.navy,
                border: `2px solid ${daziaTheme.colors.gray200}`,
                borderRadius: daziaTheme.borderRadius.md,
                fontSize: daziaTheme.typography.fontSize.base,
                fontWeight: daziaTheme.typography.fontWeight.semibold,
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              style={{
                padding: `${daziaTheme.spacing.sm} ${daziaTheme.spacing.lg}`,
                background:
                  currentIndex === cards.length - 1 ? daziaTheme.colors.gray200 : daziaTheme.colors.primary,
                color:
                  currentIndex === cards.length - 1 ? daziaTheme.colors.gray400 : daziaTheme.colors.white,
                border: 'none',
                borderRadius: daziaTheme.borderRadius.md,
                fontSize: daziaTheme.typography.fontSize.base,
                fontWeight: daziaTheme.typography.fontWeight.semibold,
                cursor: currentIndex === cards.length - 1 ? 'not-allowed' : 'pointer',
              }}
            >
              Next →
            </button>
          </div>

          {/* Reset Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => {
                setCards([]);
                setTopic('');
                setCurrentIndex(0);
                setFlipped(false);
              }}
              style={{
                padding: `${daziaTheme.spacing.sm} ${daziaTheme.spacing.lg}`,
                background: 'transparent',
                color: daziaTheme.colors.gray600,
                border: `2px solid ${daziaTheme.colors.gray300}`,
                borderRadius: daziaTheme.borderRadius.md,
                fontSize: daziaTheme.typography.fontSize.sm,
                fontWeight: daziaTheme.typography.fontWeight.medium,
                cursor: 'pointer',
              }}
            >
              Generate New Set
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Flashcards;