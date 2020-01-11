import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import green from "../images/green.jpg"

const StrahovueSpori = () => (
	<Layout>
		<SEO title="Урегулирование страховых споров, получение выплат через суд"/>
		<h1 className="page-header">Страховые споры</h1>
		<img className="page-img" src={green} alt=""/>

		<p className="p">В нынешней экономической ситуации в стране на страховом рынке возникают серьезные проблемы.
			Изменения на себе
			почувствовали все, особенно автолюбители. Стоимость страховых услуг увеличивается, а качество их падает. Отсюда –
			неудобства во взаимоотношениях со страховыми компаниями.
		</p>

		<p className="p">&#8203;AKHINYAN group предлагает полный спектр услуг, которые помогут решить проблемы со страховой
			компанией. Также мы разработали две специальные программы защиты автолюбителей в сложных дорожных ситуациях. Они
			связаны с оспариванием вины в ДТП, спорами о причиненном ущербе, вызванного плохим качеством дорожным
			покрытие.</p>
		<p className="p">&#8203;Мы предоставляем услуги по следующим направлениям:</p>

		<h2 className="p-header-1"><strong>Суды по ОСАГО, КАСКО:</strong></h2>
		<p className="p">
			<div>— Помощь в получении страховой выплаты</div>
			<div>— Взыскание утраты товарной стоимости</div>
			<div>— Бесплатный предварительный пересчет выплат по ОСАГО</div>
			<div>— Взыскание (обжалование) по отказам в выплате страхового возмещения</div>
			<div>— Взыскание неустойки за несвоевременную выплату или задержки в проведении ремонта</div>
		</p>

		<p className="p">&#8203;<strong>Споры по качеству ремонта по ОСАГО:</strong>
			<div>— Экспертиза некачественного ремонта</div>
			<div>— Взыскание со страховых компаний денежных средств, за некачественный ремонт</div>
			<div>— Взыскание неустойки за затягивание сроков ремонта</div>
			<div>— Получение со страховой компании направления в запрашиваемый сервис</div>
		</p>
		<h2 className="p-header-1"><strong>Споры по вине в ДТП:</strong></h2>
		<p className="p">— Помощь в правильном оформлении документов при ДТП
			<div>— Представление интересов в административной практике</div>
			<div>— Обжалование вынесенных решений (постановлений, определений)</div>
			<div>— Суды по установлению вины в ДТП</div>
		</p>
		<h2 className="p-header-1">&#8203;<strong>Споры с дорожниками: </strong></h2>
		<p className="p">
			<div>— Срочная консультация при происшествии (наезд на яму, люк, препятствие)</div>
			<div>— Претензионный порядок</div>
			<div>— Оценка ущерба</div>
			<div>— Суды с дорожниками</div>
		</p>

	</Layout>
)

export default StrahovueSpori
