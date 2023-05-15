import React from 'react';
import './Kicked.css'; 
import { useNavigate } from 'react-router-dom';

function Kicked() {
    return (
        <div className="blank-page">
          <div className="message">
            You have been Kicked. You must have done something wrong.
        Contact our Customer Support or Revisit our webpage to try again.
          </div>
        </div>
      );
    }

export default Kicked;
