import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import green from "../images/green.jpg"

const Ekspertiza = () => (
	<Layout>
		<SEO title="Заказать оценочную экспертизу в Самаре - юридические услуги"/>
		<h1 className="page-header">ЭКСПЕРТИЗА</h1>
		<img className="page-img" src={green} alt=""/>

		<p className="p">В любом деле, которое касается возмещения ущерба, распределения наследства и других, где нужно установить сумму выплат, необходима независимая экспертиза. Чтобы ваши права соблюдались и вы получили полную выплату, мы проводим экспертизу в нашей группе компаний по следующим направлениям:</p>

		<ul className="p">
			<li>Автоэкспертиза</li>
			<li>Оценка ущерба</li>
			<li>Оценка при вступлении в наследство</li>
			<li>Расчёт утраты товарной стоимости</li>
		</ul>
	</Layout>
)

export default Ekspertiza
