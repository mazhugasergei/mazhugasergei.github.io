// components
import Header from "components/header/Header"
import Footer from "components/footer/Footer"
import { useEffect } from "react"

export default () => {
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io_localizations/main/en-US.json`)
      .then(res => res.json())
      // .then(data => console.log(data))
  }, [])

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}