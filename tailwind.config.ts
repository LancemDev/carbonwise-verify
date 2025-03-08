
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				forest: {
					50: '#f3f8f2',
					100: '#e7f1e4',
					200: '#d0e3cf',
					300: '#a9cba6',
					400: '#7daa78',
					500: '#5c8c57',
					600: '#446e42',
					700: '#385736',
					800: '#2f462e',
					900: '#273b28',
					950: '#121f13',
				},
				earth: {
					50: '#f8f6f1',
					100: '#edeadf',
					200: '#dacfb9',
					300: '#c7b392',
					400: '#b49671',
					500: '#a48058',
					600: '#96714e',
					700: '#7c5c42',
					800: '#664c39',
					900: '#533f31',
					950: '#2e221a',
				},
				sky: {
					50: '#f0f8ff',
					100: '#ddf1ff',
					200: '#c1e7ff',
					300: '#96d9ff',
					400: '#66c2ff',
					500: '#44a7fe',
					600: '#2182f3',
					700: '#1c6de3',
					800: '#1d58b8',
					900: '#1d4b91',
					950: '#162f5c',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" },
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"slide-in-bottom": {
					"0%": { transform: "translateY(20%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"pulse-slow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.85" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-in-delay-1": "fade-in 0.5s ease-out 0.1s forwards",
				"fade-in-delay-2": "fade-in 0.5s ease-out 0.2s forwards",
				"fade-in-delay-3": "fade-in 0.5s ease-out 0.3s forwards",
				"fade-in-delay-4": "fade-in 0.5s ease-out 0.4s forwards",
				"scale-in": "scale-in 0.3s ease-out forwards",
				"slide-in-right": "slide-in-right 0.5s ease-out forwards",
				"slide-in-bottom": "slide-in-bottom 0.5s ease-out forwards",
				"slide-in-bottom-delay-1": "slide-in-bottom 0.5s ease-out 0.1s forwards",
				"slide-in-bottom-delay-2": "slide-in-bottom 0.5s ease-out 0.2s forwards",
				"slide-in-bottom-delay-3": "slide-in-bottom 0.5s ease-out 0.3s forwards",
				"slide-in-bottom-delay-4": "slide-in-bottom 0.5s ease-out 0.4s forwards",
				"pulse-slow": "pulse-slow 3s ease-in-out infinite",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
