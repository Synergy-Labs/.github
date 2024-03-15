import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAFAFA",
                "text-white": "#F3F3F3",
                "text-black": "#2B2B2B",
                "dark-blue": "#00171F",
            },
            fontFamily: {
                header: ["Ruluko"],
                content: ["Lato"],
            },
            screens: {
              '3xl': '1800px'
            }
        },
    },
    plugins: [],
}
export default config
