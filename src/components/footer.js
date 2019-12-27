import React from "react"
import "./footer.css"

import FacebookIcon from "../images/facebook.svg"
import VkIcon from "../images/vk.svg"
import InstagramIcon from "../images/instagram.svg"

const Footer = () => {

	return (
		<footer>
			<div className="content">
				<div>Валерия Плеханова юрист</div>
				<div className="socials">
					<div className="soc-container">
						<div className="social">
							<img src={FacebookIcon}/>
						</div>
						<div className="social">
							<img src={VkIcon}/>

						</div>
						<div className="social">
							<img src={InstagramIcon}/>
						</div>
					</div>
				</div>

				<div>Адрес</div>
				<div>г. Самара, Стара-Загора 22</div>

				<br/>

				<div>Электронная почта</div>
				<div>какаятопочта@gmail.com</div>

				<br/>

				<div>Телефон</div>
				<div>+7 (222) 111-03-04</div>

				<br/>

				<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
					href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

			</div>
		</footer>
	)
}

export default Footer
