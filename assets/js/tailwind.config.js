/**
 * Configuración de Tailwind (modo CDN).
 * Colores y tipografías de la marca ARNOSTEK en un solo lugar.
 */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1B4BC6', // azul principal
          'blue-dark': '#143A9C',
          cyan: '#5EE6E0', // acento turquesa claro
          teal: '#14B3AE', // turquesa medio
          night: '#060A13', // fondos oscuros
          navy: '#0B1220',
        },
        surface: {
          page: '#F5F7FA',
          card: '#FFFFFF',
          line: '#E3E8EF',
        },
        whatsapp: '#25D366',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(94, 230, 224, 0.55)',
        cta: '0 12px 28px -10px rgba(27, 75, 198, 0.6)',
        card: '0 1px 2px rgba(6, 10, 19, 0.04), 0 12px 32px -16px rgba(6, 10, 19, 0.18)',
      },
    },
  },
};
