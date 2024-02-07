import React from 'react';
import '../../styles/Found_Res.css';
import bg from "../../assets/bg-pages.png"

export default function Found() {
  return (
    <>
    <img src={bg} alt="bg"  className='bg-img'/>
      <div className='found-head'>
      <p className="fheading">Foundational Research</p>
      <p className="ftopic">Theory to novel findings in all aspects of Data/Decision science</p>
      </div>
      <div className="found-content">
      <br/>
      <p className="content">ICDDS’24 invites submissions discussing original research contributions on all aspects of data science, management of data, artificial intelligence, machine/deep learning and their applications focused on theoretical formulations, experimentations, benchmarking, scalability, trustworthiness of algorithms, novel algorithms and computing, etc. Authors can submit papers maximum of 6 pages including references.Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements. For more details check Author's Guidelines. <br /> <br />

The topics of interests include, but are not limited to:
<ul className="topics">
    <li className="topic-name">Probabilistic Inference (Bayesian methods, graphical models, Monte Carlo methods, etc.)</li>
    <li className="topic-name">Online learning</li>
    <li className="topic-name">Generative models</li>
    <li className="topic-name">Representation learning for computer vision</li>
    <li className="topic-name">Data privacy and new system design</li>
    <li className="topic-name">Big data systems</li>
    <li className="topic-name">New Computational Models for Big Data</li>
    <li className="topic-name">New Data Standards</li>
    <li className="topic-name">Semantic-based Data Mining and Data Pre-processing</li>
    <li className="topic-name">Learning Theory (bandits, game theory, statistical learning theory, etc.)</li>
    <li className="topic-name">ML and Deep learning</li>
    <li className="topic-name">Web analytics</li>
    <li className="topic-name">Data mining</li>
    <li className="topic-name">Optimization</li>
    <li className="topic-name"> Ethics in artificial intelligence</li>
    <li className="topic-name">Social computing and analytics</li>
    <li className="topic-name">Algorithms and systems for database</li>
    <li className="topic-name">ML for embedded platforms</li>
    <li className="topic-name">Recommender systems</li>
    <li className="topic-name">Multimedia processing</li>
    <li className="topic-name">Analytics method and systems</li>
    <li className="topic-name">Text analytics and NLP</li>
    <li className="topic-name">Time-series analysis</li>
    <li className="topic-name"> Information retrieval</li>
    <li className="topic-name">Semantic-based Data Mining and Data Pre-processing</li>
</ul> <br /> <br />
</p>
<div className="imp-dates">
   <p className="add-info"><strong><span className='imp'>Important Dates</span></strong> <br />
   <strong>Paper Submission Starts: </strong>June 15, 2024   <br />
   <strong>Paper Submission Deadline: </strong>July 15, 2024  <br />
   <strong>Final notification: </strong> September 30, 2024  <br />
   <strong>Camera ready Submission: </strong>October 20, 2024  <br />
   <strong>Registration Due: </strong>November 1, 2024  <br />
   <strong>Venue: </strong>PES University, Bangalore</p>  <br />

   {/* <p className="sub-link"><span className='sub-cap'>Submit your paper by clicking the button below:</span><a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICDDS2023"> <br /><button className='submit'>Submit</button></a></p> */}
</div>
      </div>
    </>
  );
}