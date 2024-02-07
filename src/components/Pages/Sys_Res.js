import React from 'react';
import '../../styles/Sys_Res.css';
import bg from "../../assets/bg-pages.png"
export default function Systems() {
  return (
    <>
    <img src={bg} alt="bg"  className='bg-img'/>
      <div className='sys-head'>
      <p className="sheading">DDS and System Research</p>
      <p className="stopic">System aspects of data/decision science</p>
    </div>
    <div className="sys-content">
    <p className="content">Systems Research Track invites submissions discussing original research contributions on all aspects of data science, management of data, artificial intelligence, machine/deep learning and their applications focused on systems research. Authors can submit papers maximum of 6 pages including references. Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.For more details check Author's Guidelines. 
    <br /> <br />
    The topics of interests include, but are not limited to:
<ul className="topics">
    <li className="topic-name">CPU/GPU architectures for AI/ML applications</li>
    <li className="topic-name">VLSI and architecture design for data science applications</li>
    <li className="topic-name">Compiler optimization using AI/ML</li>
    <li className="topic-name">Data science for resource constrained computing</li>
    <li className="topic-name">Data privacy and new system design</li>
    <li className="topic-name">Big data systems</li>
    <li className="topic-name">Energy efficient computing and inferencing</li>
    <li className="topic-name">Urban computing and analytics</li>
    <li className="topic-name">Data science for embedded systems</li>
    <li className="topic-name">Multi agent systems</li>
    <li className="topic-name">Energy-efficient Computing for Data</li>
    <li className="topic-name"> Software Techniques and Architectures in Cloud/Grid/Stream Computing</li>
    <li className="topic-name">Data science for embedded systems</li>
    <li className="topic-name">Algorithms and systems for database</li>
    <li className="topic-name">ML for embedded platforms</li>
    <li className="topic-name">Resource constrained computing</li>
    <li className="topic-name">Analytics method and systems</li>
</ul>
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