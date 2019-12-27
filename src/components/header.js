import React, { useEffect, useRef, useState } from "react"
import "./header.css"
import natureImage from "../images/nature.jpg"

const Header = () => {
	const headerRef = useRef(null);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const stickyHeight = headerRef.current && headerRef.current.offsetTop;


		const setSticky = () => {

			if (window.pageYOffset > stickyHeight) {
				setIsSticky(true);
				headerRef.current.classList.add("sticky");
			} else {
				setIsSticky(false);
				headerRef.current.classList.remove("sticky");
			}
		};

		setSticky();
		window.addEventListener('scroll', setSticky);

		return () => window.removeEventListener('scroll', setSticky)
	}, [headerRef]);

	return (
		<>
			<div className='img-container'>
				<img className='img' src={natureImage}/>
			</div>
			{
				isSticky && <div className="placeholder"/>
			}
			<header ref={headerRef} className="header">
				<div className="header-content">
					<div className="topnav" id="myTopnav">
						<a href="/" className="active">Главная</a>
						<a href="/page-2">Сылка 2</a>
						<a href="/page-2">Сылка 3</a>
						<div className="dropdown">
							<button className="dropbtn">Выпадающее
								<i className="fa fa-caret-down"></i>
							</button>
							<div className="dropdown-content">
								<a href="/page-2">Ссылка 1</a>
								<a href="/page-2">Ссылка 2</a>
								<a href="/page-2">Ссылка 3</a>
							</div>
						</div>
						<a href="#about">Ссылка 4</a>
						{/*<a href="javascript:void(0);" style="font-size:15px;" className="icon">&#9776;</a>*/}
					</div>
				</div>
			</header>
		</>

	)
}

export default Header
