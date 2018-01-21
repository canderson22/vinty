import React from 'react'
import { Jumbotron, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome';


const Home = (props) => {
	return (
		<div className='Home'>
				<Jumbotron>
			 		<h1>Welcome, This is Vinty!</h1>
			 		<p>
			 			We can free up space in your home being occupied by old or new hard copied media content for example DVD's, VHS, Cassettes, Videogames and Vinyls.
			 		</p>
			 		<p>
			 			<button>Learn More</button>
			 		</p>
			 	</Jumbotron>
			<section id="services">
			  <div className="container">
			    <div className="row text-center">
			      <div className="col-md-4">
			        <span className="fa-stack fa-4x">
			          <i className="fa fa-circle fa-stack-2x text-partmint" style={{"color": "rgb(154,77,203)"}} ></i>
			          <i className="fa fa-recycle fa-spin fa-stack-1x fa-inverse" style={{"color": "white"}}></i>
			        </span>
			        <h2 className="service-heading">Recycle</h2>
			        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repudiandae praesentium illo ducimus odit ipsum, natus facilis quas enim animi inventore officia! Deserunt, excepturi, eaque. Blanditiis dolores voluptatibus dolore velit.</p>
			      </div>
			      <div className="col-md-4">
			        <span className="fa-stack fa-4x">
			          <i className="fa fa-circle fa-stack-2x text-partmint" style={{"color": "rgb(154,77,203)"}}></i>
			          <i className="fa fa-handshake-o fa-stack-1x fa-inverse" style={{"color": "white"}}></i>
			        </span>
			        <h2 className="service-heading">Convert</h2>
			        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ut dolores asperiores quos praesentium dicta illo quasi voluptatibus laborum, totam, ratione perspiciatis. Tempore repellendus facilis ratione architecto, fuga! Earum, ea.</p>
			      </div>
			      <div className="col-md-4">
			        <span className="fa-stack fa-4x">
			          <i className="fa fa-circle fa-stack-2x text-partmint" style={{"color": "rgb(154,77,203)"}}></i>
			          <i className="fa fa-plus-square-o fa-stack-1x fa-inverse" style={{"color":"white"}}></i>
			        </span>
			        <h2 className="service-heading">Vinty Library</h2>
			        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nemo blanditiis at, ut nostrum assumenda, soluta, provident tenetur tempora iusto, dignissimos facilis nesciunt aliquam deserunt. Eum rem sapiente quos libero.</p>

			      </div>
			    </div>
			  </div>
				</section>

		</div>

	)
}


export default Home
