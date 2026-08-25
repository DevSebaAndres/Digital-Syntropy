/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "surface": "#f9f9ff",
              "on-surface": "#1a1c22",
              "surface-container-high": "#ebeef7",
              "surface-bright": "#f9f9ff",
              "surface-container-low": "#f0f3ff",
              "surface-container": "#f4f6ff",
              "surface-container-highest": "#e1e4f0",
              "surface-container-lowest": "#ffffff",
              "primary": "#25d366",
              "on-primary": "#ffffff",
              "secondary-container": "#00d1da",
              "on-secondary-container": "#00373a",
              "on-surface-variant": "#44474e",
              "outline": "#74777f",
              "outline-variant": "#c4c6cf",
              "background": "#f9f9ff"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
          "spacing": {
              "stack-sm": "8px",
              "margin-mobile": "32px",
              "margin-desktop": "96px",
              "stack-md": "16px",
              "section-gap": "120px",
              "gutter": "24px",
              "stack-lg": "32px",
              "container-max": "1140px"
          },
          "fontFamily": {
              "body-md": ["Inter"],
              "headline-lg-mobile": ["Inter"],
              "display-lg-mobile": ["Inter"],
              "label-sm": ["Inter"],
              "headline-md": ["Inter"],
              "headline-lg": ["Inter"],
              "display-lg": ["Inter"],
              "body-lg": ["Inter"]
          },
          "fontSize": {
              "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
              "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
              "display-lg-mobile": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
              "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
              "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
              "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "700"}],
              "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
              "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
          }
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
