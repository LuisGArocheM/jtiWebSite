/**
 * Configuración de Tailwind (modo CDN).
 * Todos los colores y tipografías de la marca viven aquí:
 * cambia un valor y se actualiza en toda la página.
 */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          orange: '#E8562A', // color primario (logo, botones)
          'orange-dark': '#C9441C',
          peach: '#FCE3D8', // fondos suaves / etiquetas
          sky: '#45B0F0', // acento azul (degradados)
          indigo: '#2F35D6',
          ink: '#1F0E08', // titulares
          cocoa: '#2A0A04', // bloques oscuros
        },
        surface: {
          page: '#F6F6F7',
          card: '#FBFAF8',
          line: '#ECE9E4',
        },
      },
      boxShadow: {
        cta: '0 10px 24px -8px rgba(232, 86, 42, 0.45)',
        card: '0 1px 2px rgba(31, 14, 8, 0.04), 0 8px 24px -12px rgba(31, 14, 8, 0.08)',
      },
    },
  },
};
