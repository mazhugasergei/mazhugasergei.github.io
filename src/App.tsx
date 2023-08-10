// context
import LocalizationProvider from "components/LocalizationContext"
// components
import Header from "components/header/Header"
import Footer from "components/footer/Footer"
// pages
import Home from "pages/Home/Home"

export default () => {
  return (
    <LocalizationProvider>
      <Header />
      <Home />
      <Footer />
    </LocalizationProvider>
  )
}