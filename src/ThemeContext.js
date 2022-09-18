import { useState, createContext } from 'react'
export const themeColor = createContext()

function ThemeProvider({child}) {
    const [theme, setTheme] = useState('light')

    function changeColor() {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    const value = {
        theme,
        changeColor
    }

    return(
        <themeColor.Provider value={value}>
            {child}
        </themeColor.Provider>
    )
}
export default ThemeProvider