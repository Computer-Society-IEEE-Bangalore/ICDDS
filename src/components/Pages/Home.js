import React from 'react';
import '../../styles/Home.css';
import csbc from "../../assets/IEEE-CS-BangaloreChapter-logo.png"
import icdds from "../../assets/icdds-logo.png"
import "bootstrap/dist/css/bootstrap.css";
import pesu from "../../assets/pesu.jpeg"

export default function Home() {
  return (
    <>
      <div className='home'>
        <div className="logos">
        <img src={csbc} alt="ieee-csbc" className='csbc-logo'/>
        <img src={icdds} alt="icdds-logo" className='icdds-logo'/>
        </div>
      <p className='title'>2024 3rd International Conference on Data, Decision and Systems<br /> <br />
       <p className='date'>December 5-7, 2024 <br /> <br />
       <p className="venue">In-Person Conference at <br />PES University, Bangalore</p>
       </p>
      </p>
      </div>
      <div class="container my-5">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <h1 class="text-body-emphasis">ABOUT</h1>
    <p class="lead">
    Rapid advances and growth in connected world across different application domains are fast pacing the data volumes generated from range of devices. Such high growth is further endorsed by digital transformation, adoption of advanced Internet of Things (IoT) solutions, cyber physical systems, and Smart Things. Data being the centre of innovative systems, its overall realization in solution building depends on several aspects such as the quality of data; data management; computation; knowledge discovery; decision support, etc.  <br /> <br />

ICDDS’24 aims to look broadly at data based innovation and technologies in interdisciplinary areas. The conference considers all aspects of data and decision science, applications, solution design and system challenges in all such new paradigms ranging from theory to applied research.
    </p>
  </div>
</div>
      <div class="container my-5">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <h1 class="text-body-emphasis">CALL FOR PAPERS</h1>
    <p class="lead">
    ICDDS’24, a flagship conference of IEEE Computer Society Bangalore Chapter, invites researchers, engineers, and subject matter experts from academia, industry, and start-ups to present their latest innovations in Data/Decision Systems (DDS) and their applications. <br /> <br />

ICDDS has three tracks : <br />
(i) Foundational Research <br />
(ii) Systems Research <br />
(iii) Applications <br /> <br />
Authors are encouraged to submit their original work(s) to any of these tracks: <br /> <br />  

Track-I Foundational Research aims to receive submissions from theory to novel findings and current practices in all aspects of Data/Decision science. <br /> <br />

Track-II Systems Research is focused on research addressing the system aspects data/decision science. <br /> <br />

Track-III Applications aims to attract submissions related to real-world problems and their solution approach using data/decision science. <br /> <br />

Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements. <br /> 
    </p>
  </div>
</div>
<img src={pesu} alt="PESU" className='venue-img'/>
<div class="container my-5-venue">
  <div class="p-5 text-center bg-body-tertiary rounded-3-venue">
    <h1 class="text-body-emphasis-venue">Conference Venue</h1>
    <p class="lead-venue"> 
    <strong>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085 <br /> <br /></strong>
    PES University, located in Bangalore, India is one of the country’s leading teaching and research universities. The University is committed to providing “navigation for the real world” that inspires students to find their true north.    
    </p>
  </div>
</div>
    </>
  );
}