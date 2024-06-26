// Filename - pages/AboutUs.js

import React from "react";
import { Panel} from 'rsuite';

const smallMel = require("./images/mel_ceo360.webp");
const mediumMel = require("./images/mel_ceo720.webp");

const smallJus = require("./images/justin-vp320.webp");
const mediumJus = require("./images/justin-vp640.webp");

const smallTeam = require("./images/team360.webp");
const mediumTeam = require("./images/team720.webp");

export const AboutUs = () => {
	return (
		<div className="home">
			<form>
				<h1>Ultimate Hauling</h1>
				<div>
					<form>
						<text>Here at Ultimate Hauling everyone is family!</text>
						<br></br>
						<img alt="The Ultimate Hauling crew!" src={require("./images/team.webp")} 
							srcset={`${smallTeam} 360w, ${mediumTeam} 720w`}
							sizes=" 
								(min-width: 960px) 720px, (min-width: 340px) 100vw, calc(-2000vw + 6720px)
							"
						/>
						<Panel bordered header="Melody Sawyer">
							<img alt="The CEO Melody Sawyer" src={require("./images/mel_ceo.webp")}
								srcset={`${smallMel} 360w, ${mediumMel} 720w`}
								sizes=" 
									(min-width: 960px) 720px, (min-width: 340px) 100vw, calc(-2000vw + 6720px)
								"
							></img>
							<h2>CEO</h2>
							Ultimate Hauling was created with a vision of success and passion for providing the BEST experience for 
							it's clients. Melody started this company with only 1 van and 1 driver and since then the company has quickly 
							began to grow. She leads with her heart and her dedication to being the best and providing results. Everything 
							and everyone she has encountered she has cared for and dedicated her time to flourishing. She is a mother and a 
							natural born leader. She believes her people are what make her great and she is committed to their success. 
						</Panel>
						<Panel bordered header="Justin Dome">
							<img alt="VP of Developement Justin Dome"  src={require("./images/justin-vp.webp")}
								srcset={`${smallJus} 320w, ${mediumJus} 640w`}
								sizes=" 
									(min-width: 960px) 720px, (min-width: 340px) 100vw, calc(-2000vw + 6720px)
								"
							></img>
							<h2>VP of Developement</h2>
						</Panel>
					</form>
				</div>
			</form>
			<footer className="footer" >
		  		<a href="mailto:ultimatehaulingpnw@gmail.com">ultimatehaulingpnw@gmail.com</a>
				<br></br>
		  		<a href={'https://www.linkedin.com/in/john-sawyer-bb2072222/'}>Site by: John Sawyer</a>
			</footer>
		</div>
	);
};
