// react
import { ReactElement, createContext, useEffect, useState } from "react"

interface availableLocalizations {
  name: string,
  nameEN: string,
  code: string
}

interface Localization {
  [key: string]: string | Localization
}

export const LocalizationContext = createContext<any>({})

export default ({ children }: { children: ReactElement[] }) => {
  const [availableLocalizations, setAvailableLocalizations] = useState<availableLocalizations[]>()
  const [localization, setLocalization] = useState<Localization>({})

  // fetch languages list
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io/files/localizations/assets/languages.json`)
      .then(res => res.json())
      .then(data => setAvailableLocalizations(data.languages))
  }, [])

  // fetch the localization
  useEffect(()=>{
    availableLocalizations && fetch(`https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io/files/localizations/${
      // check if there's localization value set in localStorage and there's such localization available
      localStorage.getItem('localization') && availableLocalizations.some(obj => obj.code === localStorage.getItem('localization')) ?
        // and set it if so
        localStorage.getItem('localization') :
        // else check if window.navigator.language (the lang set in browser) matches any available localizations
        availableLocalizations.some(obj => obj.code === window.navigator.language) ?
          // and set it if so
          window.navigator.language :
          // else use default (en-US) localization
          "en-US"
    }.json`)
      .then(res => res.json())
      .then(data => setLocalization(data))
  }, [availableLocalizations])

  return (
    <LocalizationContext.Provider value={localization}>
      { children }
    </LocalizationContext.Provider>
  )
}