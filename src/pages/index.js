import React from "react"
import { Link } from "gatsby"

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img from "../images/jus63_1.jpeg"
import fall from "../images/fall.jpg"
import mountein from "../images/img_mountains.jpg"

const IndexPage = () => (
	<Layout>
		<SEO title="Home"/>
		<h1>Hi Plehanova Valeriia!!!!!</h1>
		<div style={{ marginBottom: `1.45rem` }}>
			<img src={fall} alt=""/>
		</div>

		<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto beatae est et eveniet labore laboriosam
			nostrum quas reiciendis sint! Consequuntur dignissimos distinctio fugiat ipsa officiis quisquam quos, repudiandae
			voluptatum.
		</div>
		<div>Expedita, facere fuga illo non officiis perspiciatis reiciendis sed. Dolore enim est ex facilis iusto labore
			laboriosam molestias nemo nisi odio praesentium quia quisquam rem similique, suscipit unde vitae, voluptatibus!
		</div>
		<div>Ab cupiditate deleniti earum iste laboriosam necessitatibus quisquam quod, sapiente sed suscipit, vero
			voluptatum! Accusamus accusantium, aliquam aliquid deserunt distinctio error facilis fugiat iste quasi recusandae
			reiciendis sequi vel veniam.
		</div>

		<div className="gallery-container">

			<div className="gallery">
				<a target="_blank">
					<img src={mountein} alt="Cinque Terre" width="600" height="400"/>
				</a>
			</div>

			<div className="gallery">
				<a target="_blank">
					<img src={mountein} alt="Cinque Terre" width="600" height="400"/>
				</a>
			</div>

			<div className="gallery">
				<a target="_blank">
					<img src={mountein} alt="Cinque Terre" width="600" height="400"/>
				</a>
			</div>

			<div className="gallery">
				<a target="_blank">
					<img src={mountein} alt="Cinque Terre" width="600" height="400"/>
				</a>
			</div>

			<div className="gallery">
				<a target="_blank">
					<img src={mountein} alt="Cinque Terre" width="600" height="400"/>
				</a>
			</div>

			<div className="gallery">
				<a target="_blank">
					<img src={mountein} alt="Cinque Terre" width="600" height="400"/>
				</a>
			</div>
		</div>

		<div>Свяжитесь с нами</div>
		<br/>
		<div>Первая консультация бесплатно!</div>
		<br/>

		<div className='input-container'>
			<div>Ваше имя (обязательно)</div>
			<input type="text"/>
		</div>
		<div className='input-container'>
			<div>Ваш e-mail (обязательно)</div>
			<input type="text"/>
		</div>
		<div className='input-container'>
			<div>Телефон</div>
			<input type="text"/>
		</div>
		<div className='input-container'>
			<div>Тема</div>
			<input type="text"/>
		</div>
		<div className='input-container'>
			<div>Сообщение</div>
			<textarea/>
		</div>
		<div className='input-container'>
			<button>Отправить</button>
		</div>


		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
)

export default IndexPage
