import React, { useEffect } from 'react';
import { createNotificationEvent } from '../../utility/modal_utils';

const TestElement: React.FC = () => {

    useEffect(() => {
        createNotificationEvent(
            "File Deleted",
            "Succesfully deleted the file",
            "success",
            3000
          );
    }, [])

  return (
    <div>
        TESTING      
    </div>
  );
};

export default TestElement;
