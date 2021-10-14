import React from "react";
import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
	return (
		<div className="intro">
			<div className="intro__left">
				<div className="intro__left__wrapper">
					<h2 className="intro__greeting">Hello, my name is</h2>
					<h1 className="intro__name">Godfrey Samuel</h1>
					<div className="intro-title">
						<div className="intro-title__wrapper">
							<div className="intro-title__item">Web Developer</div>
							<div className="intro-title__item">UI/UX Developer</div>
							<div className="intro-title__item">Mobile Developer</div>
							<div className="intro-title__item">Entrepreneur</div>
						</div>
					</div>
					<p className="intro-desc">
						I am a Software Engineer and Web Developer helping local and international
						businesses come to terms with the present day realities, leveraging
						technology for greater and wider reach, offering solutions and bridging
						the gap between service providers and the timing consumers.
					</p>
				</div>
			</div>
			<div className="intro__right">
				<div className="intro__bg"></div>
				<img src={Me} alt="" className="intro__img" />
			</div>
		</div>
	);
};

export default Intro;
