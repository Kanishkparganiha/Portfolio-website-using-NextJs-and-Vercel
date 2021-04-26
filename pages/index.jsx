import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

import Skill from "../components/Skill";
import { motion } from 'framer-motion';

import OfferingCardTest from "../components/OfferingCardTest";


function Home() {
  return (
    <>

      <Head>
        <title>Home</title>
      </Head>

      <Navbar />
      <div>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
          <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1
    }
  },
}}>
            <h1 className="title">Kanishka Parganiha</h1>
            <p className="description">Hi, I am Graduate Student at Northeastern University pursuing Masters in Industrial Engineering with focus in Data Science. Currently I am working as a Fintech Data Science Intern at Raise Green, Boston.
        Previously I was working as Senior BIM Engineer at Techture Structures, Indore for over 2 years. My area of expertise includes Data Science, Deep Learning, Model Deployment, Web Development, AWS , Statistical Modeling, Database Design and BIM 3D Modeling</p>
        </motion.div>

            <Link href="/portfolio"><a className="cta">View My Portfolio</a></Link>


          </div>

          <div className="image-wrapper">
             <img id="KP" src='/avatar.png' width="420" height="550" />

          </div>

        </div>
          <div className="skill">

            <h1 className="title">Skills</h1>

              </div>
              <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 1
        }
      },
    }}>

              <Skill/>
              </motion.div>
              <div className="skill">

                <h1 className="title">Projects</h1>

                  </div>





<OfferingCardTest/>




      </section>
      </div>

    </>
  );
}

export default Home;
