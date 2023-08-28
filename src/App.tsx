// context
import LocalizationProvider from "components/LocalizationContext"
// components
import Loader from "components/Loader"
import Header from "components/Header"
import Footer from "components/Footer"
// pages
import Home from "pages/Home/Home"

export default () => {
  return (
    <LocalizationProvider>
      <Loader />
      <div className="content">
        <Header />
        <div className="wrapper">
          <Home />
          <Footer />
        </div>
      </div>
    </LocalizationProvider>
  )
}