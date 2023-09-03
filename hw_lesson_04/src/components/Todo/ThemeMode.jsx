import React, {useState, useEffect} from "react";

export default function ThemeMode({liftThemeMode}) {
    
    const [themeMode, setThemeMode] = useState(`light`);

    const chooseThemeModeColor = e => {
        if(e.target.value === `dark`){
            setThemeMode(`dark`);
        } else {
            setThemeMode(`light`);
        }
    }

    useEffect(() => {
        liftThemeMode(themeMode);
    }, [themeMode])
  
    return (
        <label> Choose theme mode:
            <select defaultValue={themeMode} onChange={chooseThemeModeColor}>
                <option value="light">{`light`}</option>
                <option value="dark">{`dark`}</option>
            </select>
        </label>
    )
}