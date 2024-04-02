// Filename - components/Sidebar.js

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
	background: #eee;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	padding-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: #eee;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "black" }}>
				<Nav className="nav">
					<NavIcon to="#">
						<FaIcons.FaBars
							onClick={showSidebar}
						/>
					</NavIcon>
					<img style={{paddingTop: 10}} alt="The Ultimate Hauling Logo" src={require("./400PngdpiLogo.webp")} height="100" />
					<h1
						style={{
							textAlign: "center",
							marginLeft: "0px",
							color: "white",
						}}
					>
						
					</h1>
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon className="nav" to="#">
							<AiIcons.AiOutlineClose
								onClick={showSidebar}
							/>
						</NavIcon>
						{SidebarData.map((item, index) => {
							return (
								<SubMenu
									item={item}
									key={index}
								/>
							);
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
