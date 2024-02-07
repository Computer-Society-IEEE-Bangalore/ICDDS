import React from 'react';
import '../../styles/Apply.css';
import bg from "../../assets/bg-pages.png"

export default function Applications() {
  return (
    <>
      <img src={bg} alt="bg"  className='bg-img'/>
      <div className='app-head'> 
      <p className="aheading">DDS and applications</p>
      <p className="atopic">Real-world problems and their solution approach using data/decision science</p>
      </div>
      <div className="app-content">
      <p className="content">The Applications Track invites submissions discussing the experiment design, innovative approaches, implementation and results for application of data and decision science across different real-world problem statements. Authors are encouraged to submit their works focused on technical aspects of data mining methods, applied artificial intelligence/machine learning algorithms, MLOps, DevOps in data science, knowledge inferencing, context learning, application based benchmarking of ML models, experience from end-to-end deployment. Authors can submit papers maximum of 6 pages including references. Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements. For more details check Author's Guidelines.

The topics of interests include, but are not limited to: <br /> <br />

<strong>Data Science Use Cases:</strong> in area such as healthcare, supply chain, enterprise mobility solution, mobile systems, edge computing, education, smart campus, smart city and buildings, manufacturing, energy, demand forecasting, finance, retail, social computation, crowd sensing, wireless communication and networking, smart mobility, cyber security, environmental policy, climate change and control, internet of personalized things, etc.
<br /> <br />
<strong>Challenges in Data Science and Applications:</strong> Bias and fairness, Algorithm explainability, Scalability, transparency, lessons from real-word deployments, benchmarking, data privacy, etc.
</p> <br /> <br />
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