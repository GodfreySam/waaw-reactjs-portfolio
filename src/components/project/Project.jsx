import React from 'react';
import "./project.css";
import Work1 from "../../img/project1.png";
import Work2 from "../../img/project2.png";
import Work3 from "../../img/project3.png";
import Work4 from "../../img/project4.png";
import Work5 from "../../img/project5.png";
import Work6 from "../../img/project6.png";
import Work7 from "../../img/project7.png";

const Project = () => {
   return (
				<div className="project">
					<h3 className="project-heading">Projects:</h3>
					<div className="project__work">
						<div className="project__work__item">
							<img src={Work1} alt="Project" />
							<a
								href="https://godfreysam-react-portfolio.netlify.app/"
								className="btn-light"
							>
								<i className="fas fa-eye"></i>Project
							</a>
							<a
								href="https://github.com/GodfreySam/waaw-reactjs-portfolio"
								className="btn-dark"
							>
								<i className="fab fa-github"></i>Github
							</a>
						</div>
						<div className="project__work__item">
							<img src={Work2} alt="Project" />
							<a href="http://godfreyo.link/" className="btn-light">
								<i className="fas fa-eye"></i>Project
							</a>
							<a href="https://github.com/GodfreySam/portfolio" className="btn-dark">
								<i className="fab fa-github"></i>Github
							</a>
						</div>
						<div className="project__work__item">
							<img src={Work3} alt="Project" />
							<a href="https://materialui-social.netlify.app/" className="btn-light">
								<i className="fas fa-eye"></i>Project
							</a>
							<a href="https://github.com/GodfreySam/waaw-social" className="btn-dark">
								<i className="fab fa-github"></i>Github
							</a>
						</div>
						<div className="project__work__item">
							<img src={Work4} alt="Project" />

							<a href="https://iconnect-social.herokuapp.com/" className="btn-light">
								<i className="fas fa-eye"></i>Project
							</a>
							<a
								href="https://github.com/GodfreySam/group-one-chat-app"
								className="btn-dark"
							>
								<i className="fab fa-github"></i>Github
							</a>
						</div>
						<div className="project__work__item">
							<img src={Work5} alt="Project" />
							<a href="http://www.epinsorter.com/" className="btn-light">
								<i className="fas fa-eye"></i>Project
							</a>
							<a href="http://www.epinsorter.com/" className="btn-dark">
								<i className="fab fa-github"></i>Github
							</a>
						</div>
						<div className="project__work__item">
							<img src={Work6} alt="Project" />
							<a href="https://yoga-instructor.surge.sh/" className="btn-light">
								<i className="fas fa-eye"></i>Project
							</a>
							<a
								href="https://github.com/GodfreySam/refactored-group1-project1"
								className="btn-dark"
							>
								<i className="fab fa-github"></i>Github
							</a>
						</div>
						<div className="project__work__item">
							<img src={Work7} alt="Project" />
							<a href="https://waawtube.herokuapp.com/" className="btn-light">
								<i className="fas fa-eye"></i>Project
							</a>
							<a href="https://github.com/GodfreySam/waawtube" className="btn-dark">
								<i className="fab fa-github"></i>Github
							</a>
						</div>
					</div>
				</div>
			);
}

export default Project
