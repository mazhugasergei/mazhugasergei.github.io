const Contact = () => {
  return (
    <section className="contact wrapper" id="contact">
      <div className="container wrapper">
        <div className="cont">
          <img src="/images/contact/letter.svg"/>
          <h1>Get in touch</h1>
          <ul>
            <li>
              <h3>Email</h3>
              <a href="mailto:ghbdtnghbdtn8@gmail.com">ghbdtnghbdtn8@gmail.com</a>
            </li>
            <li>
              <h3>Useful Links</h3>
              <div className="links">
                <a target="_blank" href="https://www.linkedin.com/in/sergei-mazhuga-274618247/"><img src="/images/contact/links_logos/linkedin.svg"/></a>
                <a target="_blank" href="https://dev.to/markuswedler"><img src="/images/contact/links_logos/devto.svg"/></a>
                <a target="_blank" href="https://github.com/markuswedler"><img src="/images/contact/links_logos/github.svg"/></a>
                <a target="_blank" href="https://www.youtube.com/channel/UC07C6734bBfcNVL2Za8Y_-A"><img src="/images/contact/links_logos/youtube.svg"/></a>
              </div>
            </li>
          </ul>
        </div>
        <form /*onSubmit={this.handleSubmit.bind(this)}*/ method="POST">
          <input type="text" id="name" placeholder="Name" required />
          <input type="email" id="email" placeholder="Email" required />
          <textarea id="message" placeholder="Message" required></textarea>
          <button type="submit" className="btn light">Send</button>
      </form>
      </div>
    </section>
  )
}
 
export default Contact