import React from 'react'
import '../components/ContactMeStyle.css'


const ContactMe = () => {
  return (
    <div>
        <h1 className='contact-name'> Contact Info </h1>

        <ul>

            <li>
                <p>
                    Email: seyefuabel@gmail.com
                </p>
            </li>

            <li>
                <p>
                    Phone: 678-643-4951
                </p>
            </li>

            <li className='project-buttons'>
            <a href= 'https://www.linkedin.com/in/abelseyefu/' target='_blank' rel='noreferrer'> Linkden </a>
            </li>

        </ul>



    </div>
  )
}

export default ContactMe