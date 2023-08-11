// context
import LocalizationProvider from "components/LocalizationContext"
// components
import Header from "components/Header"
import Footer from "components/Footer"
// pages
import Home from "pages/Home/Home"

export default () => {
  return (
    <LocalizationProvider>
      <Header />
      <div className="wrapper">
        <Home />
        <Footer />
      </div>
    </LocalizationProvider>
  )
}