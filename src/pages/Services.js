// Filename - pages/Services.js

import React from "react";
import { Panel } from 'rsuite';

const smallCargo = require("./images/cargovan360.webp");
const mediumCargo = require("./images/cargovan720.webp");

const smallSemi = require("./images/semi360.webp");
const mediumSemi = require("./images/semi720.webp");

const smallFleet = require("./images/unitVan320.webp");
const mediumFleet = require("./images/unitVan640.webp");

export const Services = () => {
	return (
		<div className="services"> 
			<form>
				<h1>Our Services</h1>
				<img alt="A cargo van being unloaded of the product it was carrying" 
				src={require("./images/cargovan.jpg")}
				srcset={`${smallCargo} 359w, ${mediumCargo} 719w`}
				sizes=" 
					(min-width: 960px) 720px, (min-width: 340px) 100vw, calc(-2000vw + 6720px)
				"
			></img>
				<Panel header="Cargo Van Service" shaded> 
				Our fleet of brand new Promaster sprinter vans are ready for courier
				, cargo and hot shot loads in the WA/OR  area. We can do any type of
				cargo delivery including store to home and furniture/Junk Removal
				</Panel>
				<img alt="A semi driving on a freeway" 
					src={require("./images/semi.jpg")}
					srcset={`${smallSemi} 360w, ${mediumSemi} 720w`}
					sizes=" 
						(min-width: 960px) 720px, (min-width: 340px) 100vw, calc(-2000vw + 6720px)
					"
				></img>
				<Panel header="Semi and Box Truck Services" shaded> 
				Our trained CDL professional drivers are ready to start hauling your
				48 and 53 ft trailers for your business needs. We also offer 26 ft 
				dry and refrigerated box trucks for dry/Non dry items
				</Panel>
				<img alt="The Ultimate Hauling Cargo Van fleet" src={require("./images/unitVan.jpg")}
					srcset={`${smallFleet} 360w, ${mediumFleet} 720w`}
					sizes=" 
						(min-width: 960px) 720px, (min-width: 340px) 100vw, calc(-2000vw + 6720px)
					"
				></img>
				<Panel header="Dedicated Fleet Services" shaded> 
				Are you a business needing a full fleet of dedicated drivers and vehicles
				to deliver your product? Speak to us about our Dedicated fleet services today!
				</Panel> 
			</form>
			<footer className="footer" >
		  		<a href="mailto:ultimatehaulingpnw@gmail.com">ultimatehaulingpnw@gmail.com</a>
				<br></br>
		  		<a href={'https://www.linkedin.com/in/john-sawyer-bb2072222/'}>Site by: John Sawyer</a>
			</footer>
		  </div> 
	);
};
