import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
//import ParticlesBg from "particles-bg";
import OfferingCardTest from '../components/OfferingCardTest';






function Portfolio() {
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>

			<Navbar />

		

			<section className="hero">

			  <div className="container">

			    <div className="text-wrapper w-full">

			      <h1 className="title">Portfolio</h1>

			      <p className="description">
			      	Here are some of my Projects
			      </p>


		      </div>

	      </div>
<OfferingCardTest/>
			</section>

		</>
	);
}

export default Portfolio;
