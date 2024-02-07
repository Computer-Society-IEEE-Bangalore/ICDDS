import React from 'react';
import '../../styles/Committee.css';
import bg from "../../assets/bg-pages.png"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import snh from "../../assets/snehanshu.jpg"
import sh from "../../assets/sah.jpg"
import sud from '../../assets/sud.jpg'
import souv from "../../assets/souv.jpg";
import sb from "../../assets/sb.jpg";
import dil from "../../assets/dilip.jpg"
import ven from "../../assets/venu.jpg"
import kesh from "../../assets/kesh.jpg"
import deep from "../../assets/deep.jpeg"
import mat from "../../assets/mat.jpg"
import alok from "../../assets/alok.jpg"
import ashok from "../../assets/ashok.jpg"
import san from "../../assets/san.jpg"
import ajay from "../../assets/ajay.jpg"
import mamta from "../../assets/mamta.jpg"
import sindhu from "../../assets/sindhu.jpg"

export default function Committee() {
  return (
    <>
     <img src={bg} alt="bg"  className='bg-img'/>
     <div className='comt-head'>
      <p className="cmt-heading">Organizing Committee</p>
      </div>
      <div class="album py-5 bg-body-tertiary">        
    <div class="container">
        <h2 className="headings">General Chairs</h2>
        <br/>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col">
          <div class="card shadow-sm">
            <img src={sh} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://www.unsw.edu.au/staff/salil-kanhere" target="_blank">Prof. Salil Kanhere</a></p>
              <p class="card-text">UNSW Sydney</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={sud} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://staff.pes.edu/nm1107/" target="_blank">TSB Sudarshan</a></p>
              <p class="card-text">PES University, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={snh} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://www.bits-pilani.ac.in/goa/snehanshu-saha/" target="_blank">Snehanshu Saha</a></p>
              <p class="card-text">BITS Goa Campus</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={kesh} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://staff.pes.edu/nm1002/" target="_blank">Keshavan B K</a></p>
              <p class="card-text">PES University, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
      </div>
        <h2 className="headings">TPC Chairs</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src={dil} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://www.linkedin.com/in/dilipkumardalei" target="_blank">Dilip Dalei</a></p>
              <p class="card-text">DRDO</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={souv} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://cse.nitk.ac.in/faculty/sourav-kanti-addya" target="_blank">Sourav Addya</a></p>
              <p class="card-text">NITK, Suratkal</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={ajay}alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://www.linkedin.com/in/ajay-kattepur-801a056b/" target="_blank">Ajay Kattepur</a></p>
              <p class="card-text">Ericsson Research, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
      </div>
        <h2 className="headings">Organizing Chairs</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id='one-item'>
        <div class="col">
          <div class="card shadow-sm">
            <img src={ven} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://staff.pes.edu/nm1007/" target="_blank">Venugopal N</a></p>
              <p class="card-text">PES University, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        
      </div>
        <h2 className="headings">Organizing Secretary</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id='one-item'>
        <div class="col">
          <div class="card shadow-sm">
            <img src={sindhu} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://staff.pes.edu/nm1206/" target="_blank">Sindhu Pai</a></p>
              <p class="card-text">PES University, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
      </div>
       
      <h2 className="headings">Finance Chair</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id='one-item'>
        <div class="col">
          <div class="card shadow-sm">
            <img src={mat} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://www.linkedin.com/in/archana-mathur-88731958/" target="_blank">Archana Mathur</a></p>
              <p class="card-text">NMIT, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="headings">Publication Chair</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2" id='two-items'>
        <div class="col">
          <div class="card shadow-sm">
            <img src={alok} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://www.linkedin.com/in/alok-ranjan" target="_blank">Alok Ranjan</a></p>
              <p class="card-text">BOSCH</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={sb}alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title" id='adb'><a href="https://staff.pes.edu/nm1310/" target="_blank">Adithya Balasubramanyam</a></p>
              <p class="card-text">PES University, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="headings">Publicity Chairs</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src={san} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://www.linkedin.com/in/dr-sandeep-kumar-poonia-2626b64b" target="_blank">Sandeep Kumar</a></p>
              <p class="card-text">Christ University, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={ashok} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://staff.pes.edu/nm1611/" target="_blank">Ashok Kumar</a></p>
                <p class="card-text">PES University, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={mamta} alt="" className='person-img'/>
            <div class="card-body">
                <p className="card-title"><a href="https://staff.pes.edu/nm1089/" target="_blank">Mamatha H. R.</a></p>
                <p class="card-text">PES University, Bangalore</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}