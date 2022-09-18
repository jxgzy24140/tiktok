import { useContext } from "react"
import { themeColor } from "./ThemeContext"
export default function Paragrah() {
    const context = useContext(themeColor)
    
    return (
        <p className={context.theme}>Hello F8!</p>
    )
}
