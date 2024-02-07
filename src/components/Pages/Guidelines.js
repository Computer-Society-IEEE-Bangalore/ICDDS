import React from 'react';
import '../../styles/Guidelines.css';
import bg from "../../assets/bg-pages.png"

export default function Guidelines() {
  return (
    <>
      <img src={bg} alt="bg"  className='bg-img'/>
      <div className='gudl-head'>
      <p className="gheading">Author's Guidelines</p>
      </div>
      <div className='gudl-content'>

      <ol className="guidelines_list">
        <li className="guideline">Prospective authors are invited to submit full papers of a minimum of 4 pages to maximum of 6 pages (A4 size). All papers submitted must follow the IEEE Conference format which can be downloaded from the following link. (IEEE Paper Template in Word (A4) and Latex). Click Here For Format. The papers should be submitted as a PDF file only.</li> <br />
        <li className="guideline">Each paper must contain original and unpublished work that has not been submitted for other publication elsewhere.</li> <br />
        <li className="guideline">The plagiarism of the submitted manuscript will be evaluated through the standard software as per IEEE guidelines.</li><br />
        <li className="guideline"> <ol>
          <li>All authors must register in CMT at the time of submission. Click Here</li>
          <li>The authors must not indicate/imply their names, affiliations, and acknowledgments in the body of the submitted paper. The authors only give their personal information during the Microsoft CMT registration</li>
          <li>Addition or deletion of authors after the paper acceptance is not permitted.</li>
        </ol></li> <br />
        <li className="guideline"><strong>A double-blind peer-review process will be followed to evaluate all papers submitted for the conference.</strong></li><br />
        <li className="guideline">If a paper is accepted, at least one author needs to do full author registration and present the paper.</li><br />
        <li className="guideline">Every accepted paper has to be individually registered.</li><br />
        <li className="guideline">As per IEEE Policy, an author of every published paper needs to sign a copyright agreement. The instructions for the copyright agreement will be shared with the author after acceptance of paper.</li> <br />
      </ol>

      </div>
    </>
  );
}