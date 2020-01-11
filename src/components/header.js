import React, { useEffect, useRef, useState } from "react"
import "./header.css"
import natureImage from "../images/nature.jpg"

const Header = () => {
	const headerRef = useRef(null)
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const stickyHeight = headerRef.current && headerRef.current.offsetTop


		const setSticky = () => {

			if (window.pageYOffset > stickyHeight) {
				setIsSticky(true)
				headerRef.current.classList.add("sticky")
			} else {
				setIsSticky(false)
				headerRef.current.classList.remove("sticky")
			}
		}

		setSticky()
		window.addEventListener("scroll", setSticky)

		return () => window.removeEventListener("scroll", setSticky)
	}, [headerRef])

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
						<a href="/page-2">Консультация юриста</a>

						<div className="dropdown">
							<button className="dropbtn">Для юридических лиц
								<i className="fa fa-caret-down"></i>
							</button>
							<div className="dropdown-content">
								<a href="/ekspertiza">Экспертиза</a>
							</div>
						</div>

						<div className="dropdown">
							<button className="dropbtn">Для физических лиц
								<i className="fa fa-caret-down"></i>
							</button>
							<div className="dropdown-content">
								<a href="/strahovue-spori">Страховые споры</a>
								<a href="/zpp">Защита прав потребителей</a>
								<a href="/semspori">Семейные споры</a>
								<a href="/dolgi">Долги</a>
								<a href="/nedvig">Споры по недвижемости</a>
							</div>
						</div>
						<a href="/page-2">Контакты</a>
					</div>
				</div>
			</header>
		</>

	)
}

export default Header
