import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ButtonTheme = () => {
    //context
    const { theme:{isLightBg},toggleMode } = useContext(ThemeContext);

    return (
        <div className="toggle-btn" onClick={toggleMode}>
            <button>{isLightBg ? `Dark` : `Light`} Mode</button>
        </div>
    )
}

export default ButtonTheme
