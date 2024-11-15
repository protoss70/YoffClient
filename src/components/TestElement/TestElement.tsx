import React, { useEffect } from 'react';
import { createScheduleModalEvent } from '../../utility/modal_utils';
import Emre from "../../assets/teachers/Emre-Topcu.webp"
const TestElement: React.FC = () => {
  useEffect(() => {
    createScheduleModalEvent(
      () => { return true }, 
      "Emre",  // name
      "Topcu", // surname
      ["Turkish", "English"], // languages
      "2024-11-16T15:30:00", // date
      Emre, // teacherImage
      false // isDemoCredit
    );
  }, []);

  
  return (
    <div className='p-20'>
    </div>
  );
};

export default TestElement;
