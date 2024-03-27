// Filename - pages/AboutUs.js

import React from "react";
import { Panel} from 'rsuite';

const smallMel = require("/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/images/mel_ceo360.webp");
const mediumMel = require("/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/images/mel_ceo720.webp");

const smallJus = require("/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/images/justin-vp320.webp");
const mediumJus = require("/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/images/justin-vp640.webp");

export const AboutUs = () => {
	return (
		<div className="home">
			<form>
				<h1 style={{paddingLeft: 0}}>Ultimate Hauling</h1>
				<div style={{alignItems: "left"}}>
					<text>Here at Ultimate Hauling everyone is family!</text>
					<img alt="The Ultimate Hauling crew!" src={require("/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/images/team.webp")} height="240" />
					<form>
						<Panel bordered header="Melody Sawyer">
							<img alt="The CEO Melody Sawyer" src={require("/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/images/mel_ceo.webp")}
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
							<img alt="VP of Developement Justin Dome"  src={require("/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/images/justin-vp.webp")}
								srcset={`${smallJus} 320w, ${mediumJus} 640w`}
								sizes=" 
									(min-width: 960px) 720px, (min-width: 340px) 100vw, calc(-2000vw + 6720px)
								"
							></img>
							<h2>VP of Developement</h2>
						</Panel>
						<Panel bordered header="Erin Tollie">
							<img alt="Operations Manager Erin Tollie " src={require("/Users/jdsawyer/Desktop/StoreFrontProj/store-front/src/images/erin.webp")} height="240" width="180" />
							<h2>Operations Manager</h2>
						</Panel>
					</form>
				</div>
			</form>
			<footer className="footer" >
		  		<text href="mailto:ultimatehaulingpnw@gmail.com">ultimatehaulingpnw@gmail.com</text>
				<br></br>
		  		<text href="https://www.linkedin.com/in/john-sawyer-bb2072222/">Site by: John Sawyer</text>
			</footer>
		</div>
	);
};
