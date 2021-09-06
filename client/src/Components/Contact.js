import React, {useEffect, useState} from 'react'
import mobilepic from '../assets/mobile.png';
import emailpic from '../assets/email.png';
import addresspic from '../assets/address.png';

const Contact = () => {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const callContactPage = async () => {
            try {
                const res = await fetch('/getData', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                const data = await res.json();
                setUserData(data);

                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }

            } catch (err) {
                console.log(err);
            }
        }
        callContactPage();
    }, []);

    return (
        <div className="contact-main">

            <div className="saved-detail">

                <div className="phone-info">
                    <img src={mobilepic} className= "contact-pic" alt="phone pic" />

                    <div className="phone">
                        <span>Phone</span>
                        <span>8181007106</span>
                    </div>
                </div>
                <div className="email-info">
                    <img src={emailpic} className= "contact-pic" alt="email pic" />

                    <div className="email">
                        <span>Email</span>
                        <span>contactosama@gmail.com</span>
                    </div>
                </div>
                <div className="address-info">
                    <img src={addresspic} className= "contact-pic" alt="address pic" />

                    <div className="address">
                        <span>Address</span>
                        <span>Lko, UP, India</span>
                    </div>
                </div>
            </div>

            <div className="contact-form">

                <div className="contact-heading">
                    <h1>Get in touch</h1>
                </div>

                <div className="contact-detail">

                    <div className="contact-name">
                        <input type="text" id="conatct-form-name" className="contact-form-name" placeholder="Your Name" required={true}
                        value={userData.name}/>
                    </div>

                    <div className="contact-email">
                        <input type="email" id="conatct-form-email" className="contact-form-email" placeholder="Your Email" required={true} value={userData.email}/>
                    </div>

                    <div className="contact-phone">
                        <input type="number" id="conatct-form-phone" className="contact-form-phone" placeholder="Your Phone Number" required={true} value={userData.phone}/>
                    </div>

                </div>

                <div className="contact-text">
                    <textarea className="contact-text-field" placeholder="Message" cols="30" rows="10"></textarea>
                </div>

                <div className="contact-button">
                    <button type="submit" className="btn">Send Message</button>
                </div>

            </div>

        </div>
    )
}

export default Contact
