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
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
						perferendis soluta reprehenderit libero tenetur, aperiam pariatur deserunt
						facere cum odit! Aperiam consequuntur vitae vel eius. Laborum quaerat
						voluptas aspernatur laudantium.
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
