import React, { useEffect, useState } from "react";
import { getScheduledClasses } from "../api/schedule/getSchedule";
import { useAuth } from '../context/authContext';
import Scheduled_Class from "../components/Scheduled_Class/Scheduled_Class";
import { ScheduledClassType } from "../utility/types";
import { useTranslation } from "react-i18next";

const My_Classes: React.FC = () => {
  const { currentUser, userData } = useAuth();
  const [scheduledClasses, setScheduledClasses] = useState<ScheduledClassType[] | null>([]);
  const [token, setToken] = useState<string | null>(null);  

  const { t } = useTranslation();
  
    useEffect(() => {
        async function getToken() {
            if (currentUser){
                const currentToken = await currentUser.getIdToken();
                setToken(currentToken);
            }
        }
        getToken();
    }, [currentUser]);


  // Fetch scheduled classes when userData and token are available
  useEffect(() => {
    async function fetchData() {
      if (userData && token) {
        const results = await getScheduledClasses(userData._id, token);
        setScheduledClasses(results);
      }
    }
    fetchData();
  }, [userData, token]);

  return (
    <div className="min-h-[50vh] max-900:justify-center px-24 pt-20 my-10 flex gap-5 flex-wrap max-1300:px-12 max-900:px-6 max-600:px-1">
      {userData && token && scheduledClasses ? scheduledClasses.map((classData) => (
        <Scheduled_Class key={classData._id} data={classData} userId={userData._id} token={token}/>
      )) : null}
      {scheduledClasses && scheduledClasses.length === 0 ? 
        <h1 className="text-4xl font-poppins">{t("myClasses.noClass")}</h1>
      : null}
    </div>
  );
};

export default My_Classes;