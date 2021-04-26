import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import ParticlesBg from "particles-bg";


function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>
<div>
			<Navbar />
<ParticlesBg bg={true}/>
			<section className="hero">
			  <div className="container">
			    <div className="contact">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      	Hi, Please feel free to reach to me on various platforms.
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: parganiha.k@northeastern.edu</li>
							<li className="contact-item">Personal Email: kanishkparganiha@gmail.com</li>
			      	<li className="contact-item">Phone: +1-617-821-4589</li>
							<Link href="https://www.linkedin.com/in/kanishka-parganiha-99b926144/">
							<li className="contact-item">Linkedin: https://www.linkedin.com/in/kanishka-parganiha-99b926144/</li>
							</Link>

			      </ul>
		      </div>
	      </div>

		</section>
</div>
		</>
	);
}

export default Contact;
