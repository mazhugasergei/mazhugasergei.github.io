// react
import React from "react"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  onNameChange(e) {
    this.setState({name: e.target.value})
  }
  onEmailChange(e) {
    this.setState({email: e.target.value})
  }
  onMessageChange(e) {
    this.setState({message: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3002/send', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }
  render() {
    return(
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
          <form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <input type="text" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name" required />
            <input type="email" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Email" required />
            <textarea id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder="Message" required></textarea>
            <button type="submit" className="btn light">Send</button>
        </form>
        </div>
      </section>
    )
  }
}
export default Contact