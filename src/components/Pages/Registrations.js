import React from 'react';
import bg from "../../assets/bg-pages.png"
import "../../styles/Registrations.css"

const Registrations = () => {
    const [data, setData] = React.useState([
        { id: 1, column1: 'IEEE Student Member', column2: { main: '₹4000', nested: '₹5000' }, column3: { main: '$100', nested: '$125' } },
        { id: 2, column1: 'Non-IEEE Student Member', column2: { main: '₹6000', nested: '₹7500' }, column3: { main: '$150', nested: '$200' } },
        { id: 3, column1: 'IEEE Professional Member', column2: { main: '₹7500', nested: '₹9000' }, column3: { main: '$200', nested: '$250' } },
        { id: 4, column1: 'Non-IEEE Professional Member', column2: { main: '₹11000', nested: '₹13000' }, column3: { main: '$250', nested: '$325' } },
        { id: 5, column1: 'Only Attending', column2: { main: '₹2500', nested: '₹3000' }, column3: { main: '$50', nested: '$75' } },
      ]);
  return (
    <>
     <img src={bg} alt="bg"  className='bg-img-reg'/>
     <div className='reg-head'>
      <p className="cmt-heading">Registrations</p>
      </div>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className='auth'>Author Category</th>
            <th>Indian Delegates (INR)
                <th className='col-inner'>Early Bird</th>
                <th className='col-inner'>Regular</th>
            </th>
            <th>International Delegates (USD)
            <th className='col-inner'>Early Bird</th>
                <th className='col-inner'>Regular</th>
            </th>
          </tr>
          <tr>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.column1}</td>
              <td>
                <div>
                  <div className='main'>{row.column2.main}</div>
                  <div className='nested'>{row.column2.nested}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='main'>{row.column3.main}</div>
                  <div className='nested'>{row.column3.nested}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Registrations;
