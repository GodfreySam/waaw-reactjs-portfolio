import React from 'react';
import "./project.css";
import Work from "../../img/poject.jpg";

const Project = () => {
   return (
				<div className="project">
					<h3 className="project-heading">Projects:</h3>
					<div className="project__work">
						<div className="project__work__item">
							<img src={Work}  alt="Project" />

							<a
								href="https://godfreysam.github.io/daily_schedulebook_app/"
								className="btn-light"
							>
								<i className="fas fa-eye"></i>Project
							</a>
							<a
								href="https://github.com/GodfreySam/daily_schedulebook_app"
								className="btn-dark"
							>
								<i className="fab fa-github"></i>Github
							</a>
						</div>
						<div className="project__work__item">
							<img src={Work} alt="Project" />

							<a href="https://github-page-clone.herokuapp.com/" className="btn-light">
								<i className="fas fa-eye"></i>Project
							</a>
							<a
								href="https://github.com/GodfreySam/github-clone"
								className="btn-dark"
							>
								<i className="fab fa-github"></i>Github
							</a>
						</div>
						<div className="project__work__item">
							<img src={Work} alt="Project" />

							<a href="https://github-page-clone.herokuapp.com/" className="btn-light">
								<i className="fas fa-eye"></i>Project
							</a>
							<a
								href="https://github.com/GodfreySam/github-clone"
								className="btn-dark"
							>
								<i className="fab fa-github"></i>Github
							</a>
						</div>
					</div>
				</div>
			);
}

export default Project
