/**
 * Dazia Brand Theme System
 * Based on dazia.ca color palette and design language
 * 
 * Philosophy:
 * - Yellow = Energy, Optimism, Learning
 * - Navy = Trust, Authority, Professionalism
 * - White = Clarity, Focus, Cleanliness
 */

export const daziaTheme = {
  // ========== COLORS ==========
  colors: {
    // Primary Brand Colors
    primary: '#FDB913',       // Dazia Yellow (Main CTA, highlights)
    navy: '#003B5C',          // Dazia Navy (Headers, authority)
    white: '#FFFFFF',         // Pure white (backgrounds)
    black: '#1A1A1A',         // Text primary
    
    // Secondary Palette
    lightYellow: '#FEF3D9',   // Yellow tint (backgrounds, hover states)
    paleYellow: '#FFF9E6',    // Even lighter yellow (subtle backgrounds)
    lightNavy: '#E6F2F8',     // Navy tint (info boxes)
    darkNavy: '#002A42',      // Darker navy (emphasis)
    
    // Neutrals
    gray50: '#F9FAFB',        // Lightest gray
    gray100: '#F3F4F6',       // Very light gray
    gray200: '#E5E7EB',       // Light gray
    gray300: '#D1D5DB',       // Medium-light gray
    gray400: '#9CA3AF',       // Medium gray
    gray500: '#6B7280',       // True gray
    gray600: '#4B5563',       // Medium-dark gray
    gray700: '#374151',       // Dark gray
    gray800: '#1F2937',       // Very dark gray
    gray900: '#111827',       // Almost black
    
    // Semantic Colors
    success: '#10B981',       // Green (correct answers, completion)
    error: '#EF4444',         // Red (errors, wrong answers)
    warning: '#F59E0B',       // Orange (warnings, caution)
    info: '#3B82F6',          // Blue (information, tips)
    
    // Semantic Backgrounds
    successBg: '#D1FAE5',     // Light green
    errorBg: '#FEE2E2',       // Light red
    warningBg: '#FEF3C7',     // Light orange
    infoBg: '#DBEAFE',        // Light blue
  },

  // ========== TYPOGRAPHY ==========
  typography: {
    // Font Families
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'Fira Code', 'Consolas', monospace",
    },
    
    // Font Sizes (Larger than before for readability)
    fontSize: {
      xs: '12px',      // Small labels
      sm: '14px',      // Secondary text
      base: '16px',    // Body text (increased from 14px)
      lg: '18px',      // Large body text
      xl: '20px',      // Small headings
      '2xl': '24px',   // Section headings
      '3xl': '30px',   // Page headings
      '4xl': '36px',   // Hero headings
      '5xl': '48px',   // Display headings
    },
    
    // Font Weights
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    
    // Line Heights
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
    },
  },

  // ========== SPACING ==========
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '48px',
    '4xl': '64px',
    '5xl': '80px',
  },

  // ========== BORDER RADIUS ==========
  borderRadius: {
    none: '0',
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
  },

  // ========== SHADOWS ==========
  shadows: {
    // Card shadows
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.03)',
    md: '0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.10), 0 4px 8px rgba(0, 0, 0, 0.05)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.06)',
    
    // Hover shadows (with yellow glow)
    hoverYellow: '0 8px 24px rgba(253, 185, 19, 0.35)',
    hoverNavy: '0 8px 24px rgba(0, 59, 92, 0.25)',
    
    // Focus shadows
    focusYellow: '0 0 0 3px rgba(253, 185, 19, 0.3)',
    focusNavy: '0 0 0 3px rgba(0, 59, 92, 0.2)',
    
    // Inner shadows
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  // ========== TRANSITIONS ==========
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Easing functions
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // ========== BREAKPOINTS ==========
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
    ultrawide: '1920px',
  },

  // ========== Z-INDEX SCALE ==========
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    modal: 1200,
    popover: 1300,
    tooltip: 1400,
  },
};

// ========== UTILITY FUNCTIONS ==========

/**
 * Get color with opacity
 * @param {string} color - Hex color code
 * @param {number} opacity - Opacity value (0-1)
 * @returns {string} - RGBA color string
 */
export const withOpacity = (color, opacity) => {
  // Remove # if present
  const hex = color.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Create gradient background
 * @param {string} color1 - Start color
 * @param {string} color2 - End color
 * @param {number} angle - Gradient angle (default: 135deg)
 * @returns {string} - CSS gradient string
 */
export const createGradient = (color1, color2, angle = 135) => {
  return `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`;
};

// ========== PRE-DEFINED GRADIENTS ==========
export const gradients = {
  yellowWarm: createGradient(daziaTheme.colors.lightYellow, daziaTheme.colors.white),
  navyDeep: createGradient(daziaTheme.colors.darkNavy, daziaTheme.colors.navy),
  sunrise: createGradient(daziaTheme.colors.primary, daziaTheme.colors.warning),
  ocean: createGradient(daziaTheme.colors.info, daziaTheme.colors.navy),
};

export default daziaTheme;