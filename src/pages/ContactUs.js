// Filename - pages/ContactUs.js

import emailjs from '@emailjs/browser'
import TextInput from "../components/TextInput";
import { Panel } from "rsuite";
const small = require("./images/seattleVan540.webp");
const medium = require("./images/seattleVan1080.webp");


const Contact = () => {

	function alertUser(){
		alert("Email Sent!");
	}

	return (	
		<div className="contact">
			<form>
			<img 
				alt="A Ultimate Hauling Cargo Van in Seattle WA" 
				src={require("./images/seattleVan.jpg")}
				srcset={`${small} 540w, ${medium} 1080w`}
				sizes=" 
					(min-width: 960px) 720px, (min-width: 340px) 100vw, calc(-2000vw + 6720px)
				"
			></img>
				<Panel>
					<h2 textAlign="center">Who are we?</h2>
					Ultimate Hauling is a premier delivery carrier 
					in the Pacific North West. We pride ourselves on 
					providing the ultimate service for our partners. 
					We value our people and go the extra mile to provide 
					a full service solution for our clients.  
				</Panel>
				<div>
					<form class="textInput" id="form">
					<h2>Contact Us</h2>
						<TextInput
							id={1}
							label="Name"
							className= "nameIn"
						/>
						<TextInput
							id={2}
							label="Email"
							className= "emailIn"
						/>
						<TextInput
							id={3}
							label="PhoneNumber"
						/>
						<TextInput
							id={4}
							label="Details"
						/>
						<button type= "button" class = "button"  onClick={() => {
							/* Handle sending email and provide user with a response if sent. */

							emailjs.init(`${process.env.REACT_APP_EMAILJS_PUBLICKEY}`);
							emailjs.send(`${process.env.REACT_APP_SERVICEID}`,`${process.env.REACT_APP_TEMPLATEID}`,{
								clientName: document.getElementById(1).value,
								clientEmail: document.getElementById(2).value,
								clientPhone: document.getElementById(3).value,
								clientDetails: document.getElementById(4).value
							}).catch((e) => alert(e));
							alertUser();
						}}>Submit</button>
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

export default Contact;
