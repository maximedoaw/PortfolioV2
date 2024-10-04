import { useState } from "react"
import { useRef } from "react"
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = ({ target : { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    })    
  }

  //service_t1amq6r
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'service_t1amq6r',
        'template_j1nft3x',
        {
          from_name: form.name,
          to_name: 'Maxime Doaw',
          from_email: form.email,
          to_email: 'maximedoaw204@gmail',
          message: form.message
        },
        'J6gUA7BQzKH_cMk7P'
      ) 
      setLoading(false)
      alert("Your message has been sent")

      setForm({
        name: '',
        email: '',
        message: ''
      })

    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex
      items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal background" 
         className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600
          mt-3">
            Whether you're looking to build a new website,
            improve your existing platform or bring a unique
            project to like,I'm here to help
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
