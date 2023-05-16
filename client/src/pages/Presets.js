import React from 'react';
import MainLayout from '../layout/MainLayout';
import './Presets.css';
import { Link } from 'react-router-dom';

import studentImg from '../img/presets/student_pc.png'
import businessImg from '../img/presets/business_pc.png'
import gamerImg from '../img/presets/gamer_pc.png'

function Presets() {
  // Array of build objects
  const builds = [
    {
      category: 'Student',
      CPU: 'AMD Ryzen 5 5600X',
      Motherboard: 'ASUS TUF Gaming B550-PLUS',
      RAM: 'Corsair Vengeance LPX 16GB (2 x 8GB) DDR4',
      SSD: 'Samsung 970 EVO Plus 500GB NVMe',
      HDD: 'Seagate Barracuda 2TB 7200 RPM',
      Case: 'NZXT H510',
      Cooler: 'Cooler Master Hyper 212 RGB Black Edition',
      GPU: 'NVIDIA GeForce GTX 1660 Super',
      PSU: 'EVGA 600 W1, 80+ WHITE 600W',
    },
    {
      category: 'Business',
      CPU: 'Intel Core i7-11700K',
      Motherboard: 'ASUS Prime Z590-A',
      RAM: 'Corsair Vengeance LPX 32GB (2 x 16GB) DDR4',
      SSD: 'Samsung 980 Pro 1TB NVMe',
      HDD: 'Seagate IronWolf Pro 4TB 7200 RPM',
      Case: 'Fractal Design Meshify C',
      Cooler: 'Noctua NH-D15',
      GPU: 'NVIDIA GeForce RTX 3060 Ti',
      PSU: 'Corsair RM750x, 80+ Gold 750W',
    },
    {
      category: 'Gamer',
      CPU: 'AMD Ryzen 7 5800X',
      Motherboard: 'MSI MAG X570 TOMAHAWK',
      RAM: 'G.Skill Trident Z RGB 32GB (2 x 16GB) DDR4',
      SSD: 'Western Digital SN850 1TB NVMe',
      HDD: 'Seagate Barracuda 4TB 7200 RPM',
      Case: 'Cooler Master MasterCase H500P Mesh',
      Cooler: 'NZXT Kraken X63',
      GPU: 'NVIDIA GeForce RTX 3070',
      PSU: 'Seasonic Focus GX-750, 80+ Gold 750W',
    },
  ];

  // Get all the unique part names
  const parts = Object.keys(builds[0]).filter((key) => key !== 'category');

  return (
    <MainLayout>
      <div className="presets-cont">

        <div className='builds'>
          <div className='build-cont'>
            <div className='student-build'>
                  <h3>Student</h3>
                  <img src={studentImg} id='student-pc'/>
            </div>
            <div className='gamer-build'>
                  <h3>Gamer</h3>
                  <img src={gamerImg} id='gamer-pc'/>
            </div>
            <div className='business-build'>
                  <h3>Business</h3>
                  <img src={businessImg} id='business-pc'/>
            </div>
        </div>
        <div className='add-preset-cart'>
            <button className='cart-student'>Add to Cart</button>
            <button className='cart-business'>Add to Cart</button>
            <button className='cart-gamer'>Add to Cart</button>
          </div>

          <table className='preset-table'>
            <thead>
              <tr>
                <th>Part</th>
                <th>Student</th>
                <th>Gamer</th>
                <th>Business</th>
              </tr>
            </thead>
            <tbody className="preset-tbody">
              {parts.map((part) => (
                <tr key={part}>
                  <td>{part}</td>
                  <td>{builds[0][part]}</td>
                  <td>{builds[2][part]}</td>
                  <td>{builds[1][part]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          
        </div>
        
      </div>
      
    </MainLayout>
  );
}

export default Presets;
