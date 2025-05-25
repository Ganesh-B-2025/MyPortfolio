import React, { useState } from 'react'
import './Contact.css'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const [data, setData] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post("https://myportfolio-frontend-sz30.onrender.com", data);
        toast.success(response.data.message || `Thankyou so much Mr./ Miss.${response.data.name} i will get back to you`)
        setData({
          name:'',
          email:'',
          subject:'',
          message:''
        })
    }catch(err){
      console.log(`Server error`);
      toast.error(err.response?.data?.message || "Server error. please try again later")
    }
  }

  return (
    <div className="contact-container" id="contact">
      <h1 className="section-title">Contact</h1>
      <p className="contact-intro">Feel free to reach out to me via email or through this contact form!</p>

      <div className="contact-grid">
        {/* Left - Info */}
        <div className="contact-info">
          <div className="info-block">
            <h3>📍 Address</h3>
            <p>2nd Cross Rd, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098</p>
          </div>
          <div className="info-block">
            <h3>📞 Call Us</h3>
            <p>+91 9980643372</p>
          </div>
          <div className="info-block">
            <h3>✉️ Email Us</h3>
            <p>ganesh.2025.in@gmail.com</p>
          </div>
          <iframe
            title="Google Map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0087652050093!2d77.5127751747721!3d12.922814187386313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f8a0b73a93d%3A0x6c2783141c2e5a0!2sRajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716621292914!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input name='name' value={data.name} onChange={handleChange} type="text" placeholder="Your Name" required />
            <input name='email' value={data.email} onChange={handleChange} type="email" placeholder="Your Email" required />
          </div>
          <input name='subject' value={data.subject} onChange={handleChange} type="text" placeholder="Subject" required />
          <textarea name='message' value={data.message} rows="6" onChange={handleChange} placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  )
}

export default Contact
