import React, { useEffect } from 'react';
const TestElement: React.FC = () => {
  useEffect(() => {
    console.log('here')
  }, []);

  
  return (
    <div className='p-20'>
    </div>
  );
};

export default TestElement;
