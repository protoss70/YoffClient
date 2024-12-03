import React, { useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC = () => {
    // Target date in CET: 06/12/2024 4 PM (UTC+1, represented as UTC)
    const targetDate = new Date("2024-12-06T15:00:00Z");

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime(); // Ensure numbers with getTime()

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Default when countdown ends
        }
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, []);

    return (
        <div id="countdown" className="flex items-center flex-col justify-center w-full h-[75vh] gap-10">
            <h1  className="text-6xl font-bold text-black font-gilroy max-1000:text-5xl">Launch <span className="underline--double text-main">Countdown</span></h1>
            <div className="relative w-[740px] p-24 text-3xl font-semibold max-600:w-[480px] max-600:p-16 max-600:text-lg text-white max-1000:w-[800px] max-800:w-[600px] max-800:text-xl max-1000:text-2xl shadow-2xl rounded-2xl bg-main font-poppins bg-gradient-to-r from-main to-secondary text-center">
                {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
            </div>
        </div>
    );
};

export default Countdown;
