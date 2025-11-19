export const theme = {
  colors: {
    primary: "#3B82F6",
    primaryHover: "#2563EB",
    primaryActive: "#1D4ED8",
    secondary: "#10B981",
    secondaryHover: "#059669",
    danger: "#EF4444",
    dangerHover: "#DC2626",
    background: "#0F172A",
    surface: "#1E293B",
    text: "#F1F5F9",
    textSecondary: "#CBD5E1",
    border: "#334155",
    success: "#10B981",
    warning: "#F59E0B",
  },
  fonts: {
    family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    sizes: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
  },
  transitions: {
    fast: "150ms ease-in-out",
    normal: "250ms ease-in-out",
    slow: "350ms ease-in-out",
  },
} as const;

export type ThemeType = typeof theme;
