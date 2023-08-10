// react
import { ReactElement, createContext, useEffect, useState } from "react"

interface Localization {
  [key: string]: string | Localization
}

export const LocalizationContext = createContext<any>({})

export default ({ children }: { children: ReactElement[] }) => {
  const availableLocalizations = ["en-US"]
  const [localization, setLocalization] = useState<Localization>({})

  // fetch localization
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io_files/main/localizations/${ availableLocalizations.includes(window.navigator.language) ? window.navigator.language : "en-US" }.json`)
      .then(res => res.json())
      .then(data => setLocalization(data))
  }, [])

  return (
    <LocalizationContext.Provider value={localization}>
      { children }
    </LocalizationContext.Provider>
  )
}