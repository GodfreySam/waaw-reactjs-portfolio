import React from "react";
import "./contact.css";
import Address from "../../img/address.png";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact__left">
				<ul className="contact__info">
					<li className="contact__info__item">
						<img src={Address} alt="address" />
						<span>Abuja, Nigeria</span>
					</li>
					<li className="contact__info__item">
						<img src={Email} alt="email" />
						<span>
							<a href="mailto:godfreysam09@gmail.com">godfreysam09@gmail.com</a>
						</span>
					</li>
					<li className="contact__info__item">
						<img src={Phone} alt="phone" />
						<span>
							<a href="tel:+2348164815637">+2348164815637</a>
						</span>
					</li>
				</ul>
			</div>
			<div className="contact__right">
				<div className="contact-heading">
					<h1>GET IN TOUCH</h1>
				</div>
				<form
					className="contact-form"
					action="/contact"
					method="POST"
					autocomplete="off"
					id="contact-form"
				>
					<div className="contact-form__item">
						<label>Name</label>
						<input className="" type="text" required name="name" />
					</div>
					<div className="contact-form__item">
						<label>Email</label>
						<input className="" type="email" required name="email" />
					</div>
					<div className="contact-form__item">
						<label>Message</label>
						<textarea
							id="email-body"
							rows="5"
							cols="50"
							placeholder="write a messge..."
							required
							name="message"
						></textarea>
					</div>
					<div className="contact-form__item">
						<div
							className="g-recaptcha"
							data-sitekey="6Ldj2lsbAAAAAD5NXrObnRX3ElSvKiDtq15skBvx"
						></div>
					</div>
					<button type="submit" className="">
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
