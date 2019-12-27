import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import green from '../images/green.jpg';

const SecondPage = () => (
  <Layout>
    <SEO title="Другая страница" />
    <h1>Это шаблон просто другой страницы</h1>
		<img src={green} alt=""/>

		<h3>Абзац</h3>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, animi dolorem eaque enim fugiat ipsam iusto
			nesciunt repellat sed suscipit? Accusantium deleniti doloremque eos explicabo nam, non rem temporibus voluptate.
		</div>
		<div>Earum est et harum hic itaque laborum optio possimus quo sint velit? Asperiores, esse ex ipsa iste provident
			quae quidem sint? Laborum natus, neque. Blanditiis corporis dolorem illo quidem totam?
		</div>
		<div>Adipisci amet at commodi consequatur consequuntur cupiditate dolores ducimus, eligendi error esse eveniet, ex,
			expedita fuga libero omnis perferendis sed temporibus veniam vero voluptatibus? Laborum praesentium, reiciendis!
			Dolorum, minus, quos!
		</div>
		<div>Ab amet, atque dicta dignissimos dolore doloremque doloribus ducimus explicabo illum itaque, iusto laboriosam
			minus mollitia numquam odit officiis omnis perspiciatis placeat possimus quibusdam quos sapiente tenetur velit
			voluptatem voluptatibus.
		</div>
		<div>Ipsam magni odit quasi voluptatum! Ab accusamus animi consectetur consequatur corporis dolorem earum illum
			maxime molestiae obcaecati officia, perferendis quas, quibusdam repellat repudiandae rerum similique sunt
			temporibus voluptas voluptate. Perferendis.
		</div>
		<div>Animi asperiores assumenda facere harum officia optio vel. Aliquam ducimus eligendi illo incidunt mollitia
			nulla quasi? Ad adipisci consectetur cumque debitis, dolor eum nemo perspiciatis provident quae, sequi, vitae
			voluptatum?
		</div>
		<div>Facilis nobis porro quidem repellendus sunt. Aliquam libero quis repellat sapiente soluta! A alias animi
			architecto ea eveniet, fugit illum, iusto maxime minus odit praesentium quaerat quasi totam vel voluptate.
		</div>
		<div>At autem consequatur consequuntur cum, esse excepturi expedita ipsa libero maxime modi numquam optio placeat,
			possimus quas, quasi repellendus repudiandae totam voluptate? Beatae dicta ipsum nobis nostrum porro, rerum
			voluptate.
		</div>
		<div>Assumenda debitis dolorum eius facere, magni perferendis possimus quibusdam voluptatem. Ab at beatae
			consectetur cum debitis distinctio dolor, facere id inventore laudantium minus, nemo provident quae, repellendus
			rerum totam vel?
		</div>
		<div>Dolore id illum incidunt labore nam provident vero? Aliquid expedita facere modi possimus quam similique
			tempora voluptates! Accusantium aperiam deserunt dolor, iure nemo, odio odit officiis perspiciatis, porro
			provident ut?
		</div>
    <Link to="/">Вернутся на главную</Link>
  </Layout>
)

export default SecondPage
