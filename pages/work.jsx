import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
//import ParticlesBg from "particles-bg";

function Work() {
	return (
		<>
			<Head>
			  <title>Work Experience</title>
			</Head>

			<Navbar />


			<section className="hero">
			  <div  className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Work Experience</h1>


      <div class="job">
			<p>Fintech Data Science Intern</p>
			<p>Raise Green</p>


		      </div>
<div class="year"><p>January 2021 - May 2021</p>
<p>Boston, MA</p>
</div>


 </div>
	      </div>

				<div className="container">

	<div className="duties">
				<ul>
				<li>Utilize  Python, R, Excel to research and conduct quantitative and qualitative analysis on metrics for renewable energy, economic development, sustainable finance and impact investing  </li>
				<li>Developed and trained a BERT model with CoNLL dataset in PyTorch to perform NER task for obtaining entities from different financial documents which resulted in saving more than 70% of company’s time.
</li>
				<li>Reformatted and added new components on the Company’s homepage website using NextJS, vercel, HTML and CSS </li>
				<li>Implemented dimensional reduction techniques like PCA  on Impact metrics with 60 features and 200 County areas using R to extract important features for performing k-means clustering.
  </li>
				<li>Automate web-scraping process from different websites of different competitors to extract meta description, title tag, and header tag using selenium and python for performing SEO task.  </li>
				<li>Increase the Web Page views by 150% by creating new website content from the keywords obtained from the web-scraped data and Google keyword planner.
  </li>
				<li>Performed A/B testing on email using HubSpot to study the response of investors with respect to email content.
  </li>
				<li>Designed Web-Analytics Dashboards for different Bond offering web pages on Google Analytics to track the conversion rate, pageviews and bounce rate and address them to the Marketing Team.  </li>
				<li>Optimized various workflows by automating processes like github repository cloning, docker setup, compiling financial documents using  bash scripting in Linux.  </li>

				</ul>


				<div class="job">
				<p>Senior BIM Engineer</p>
				<p>Techture Structures</p>


			      </div>
	<div class="year"><p>June 2017 - June 2019</p>
	<p>Indore, India</p>
	</div>

	<div className="container">

<div className="duties">
	<ul>
	<li>Managed a team of 10 and developed various BIM 3D models for various Industrial and Commercial Multi-specialty
projects from AutoCAD layout, Point Cloud and documents using AutoDesk Revit.
 </li>
	<li>Created Tableau dashboard for Energy Consumption Analysis, Thermal Comfort Analysis, Solar Radiation Analysis, Cost Estimation and Materials Schedule from the BIM 3D Models.
</li>
<li>Designed and implemented various Dynamo scripts for performing object placement on revit model, asset
management and creating wall openings for MEP
</li>
	<li>Compared different simulation data on cooling energy of  buildings by creating charts and tables on Jupyter Notebook(NumPy, Pandas, Matplotlib). </li>
	<li>Responsible for Quality Assurance and Quality Control of MEP(Mechanical, Electrical and Plumbing), 3-D model
along with clash detection using Navisworks
</li>
	<li>Responsible for developing Materials Schedule, BOM(Bill of Material) report, Cost Estimation and Project Schedule
Using Navisworks  </li>

	<li>Responsible for developing Materials Schedule, BOM(Bill of Material) report, Cost Estimation and Project Schedule
Using Navisworks
</li>

	</ul>



	</div>
</div>












			 	      </div>
   </div>


















			</section>






		</>
	);
}

export default Work;
