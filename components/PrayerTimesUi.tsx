import { useState, useEffect } from "react";

export default function PrayerTimesUI({ data }: any) {
  const [nextPrayer, setNextPrayer] = useState("");
  const [countdown, setCountdown] = useState("");

  if (!data || !data.timings) {
    return (
      <div className="p-6 text-center text-gray-500">
        Prayer times data not available.
      </div>
    );
  }

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let foundNext = false;

      for (let prayer of Object.keys(data.timings)) {
        const timeStr = data.timings[prayer];
        if (!timeStr) continue;

        const [h, m] = timeStr.split(":");
        const prayerTime = new Date();
        prayerTime.setHours(parseInt(h), parseInt(m), 0);

        if (prayerTime > now) {
          setNextPrayer(prayer);
          const diff = prayerTime.getTime() - now.getTime();
          const hrs = Math.floor(diff / 3600000);
          const mins = Math.floor((diff % 3600000) / 60000);
          const secs = Math.floor((diff % 60000) / 1000);
          setCountdown(`${hrs}h ${mins}m ${secs}s`);
          foundNext = true;
          break;
        }
      }

      if (!foundNext) {
        setNextPrayer("Fajr");
        setCountdown("Tomorrow");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Prayer Times</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {Object.entries(data.timings).map(([name, time]) => (
          <div key={name} className="p-3 rounded-xl border text-center bg-gray-50">
            <p className="font-medium">{name}</p>
            <p className="font-bold">{time as string}</p>
          </div>
        ))}
      </div>
      <div className="bg-indigo-100 p-3 rounded-xl text-center">
        <p className="text-sm text-indigo-700">Next Prayer</p>
        <p className="text-lg font-bold text-indigo-900">
          {nextPrayer} in {countdown}
        </p>
      </div>
    </div>
  );
}
// Helper to format time to 12-hour format
const formatTime = (time24: string) => {
  const [hours, minutes] = time24.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

// Helper to get Hijri date (simplified estimation or use data if available)
// Ideally, the API response `data` should contain Hijri date info.
// Assuming data.date.hijri exists based on common Aladhan API structure.
const getHijriDate = (data: any) => {
  if (data?.date?.hijri) {
    const { day, month, year } = data.date.hijri;
    return `${day} ${month.en} ${year}`;
  }
  return "Hijri Date Unavailable";
};

const getReadableDate = (data: any) => {
  if (data?.date?.readable) {
    return data.date.readable;
  }
  return new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

export function EnhancedPrayerTimesUI({ data }: any) {
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);
  const [countdown, setCountdown] = useState("");
  const [activePrayer, setActivePrayer] = useState<string | null>(null);

  if (!data || !data.timings) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-2xl animate-pulse">
        <p className="text-gray-400 font-medium">Loading Prayer Times...</p>
      </div>
    );
  }

  // Filter out non-obligatory times if desired, or keep all
  const prayerNames = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  const timings = prayerNames.reduce((acc: any, name) => {
    if (data.timings[name]) acc[name] = data.timings[name];
    return acc;
  }, {});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let foundNext = false;
      let currentActive = null;

      const timeEntries = Object.entries(timings);
      
      for (let i = 0; i < timeEntries.length; i++) {
        const [prayer, timeStr] = timeEntries[i] as [string, string];
        const [h, m] = timeStr.split(":");
        const prayerTime = new Date();
        prayerTime.setHours(parseInt(h), parseInt(m), 0);

        if (prayerTime > now) {
          setNextPrayer(prayer);
          
          // Set active prayer to the one before this (if exists)
          if (i > 0) {
            currentActive = timeEntries[i-1][0];
          } else {
            // If next is Fajr (index 0), previous was Isha of yesterday
            currentActive = 'Isha'; 
          }

          const diff = prayerTime.getTime() - now.getTime();
          const hrs = Math.floor(diff / 3600000);
          const mins = Math.floor((diff % 3600000) / 60000);
          const secs = Math.floor((diff % 60000) / 1000);
          setCountdown(
            `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
          );
          foundNext = true;
          break;
        }
      }

      if (!foundNext) {
        // If no next prayer found today, it's Fajr tomorrow
        setNextPrayer("Fajr");
        setActivePrayer("Isha"); // Currently it's after Isha
        
        // Calculate time until tomorrow's Fajr (approximate logic for UI)
        // For precise calculation, you'd need tomorrow's Fajr time.
        // Here we just show a placeholder or calculate against today's Fajr + 24h
        const fajrStr = timings['Fajr'];
        if (fajrStr) {
            const [fh, fm] = fajrStr.split(":");
            const tomorrowFajr = new Date();
            tomorrowFajr.setDate(tomorrowFajr.getDate() + 1);
            tomorrowFajr.setHours(parseInt(fh), parseInt(fm), 0);
            
            const diff = tomorrowFajr.getTime() - now.getTime();
            const hrs = Math.floor(diff / 3600000);
            const mins = Math.floor((diff % 3600000) / 60000);
            const secs = Math.floor((diff % 60000) / 1000);
            setCountdown(`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
        } else {
            setCountdown("Tomorrow");
        }
      } else {
        setActivePrayer(currentActive);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [data, timings]);

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:shadow-indigo-500/20">
      {/* Header Section with Date */}
      <div className="bg-linear-to-br from-indigo-600 to-purple-700 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-purple-400 opacity-20 rounded-full blur-xl"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-sm font-medium text-indigo-100 uppercase tracking-wider mb-1">
            {getHijriDate(data)}
          </h2>
          <h1 className="text-2xl font-bold mb-4">{getReadableDate(data)}</h1>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <p className="text-indigo-100 text-xs font-semibold uppercase tracking-widest mb-1">Next Prayer</p>
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-3xl font-bold">{nextPrayer}</span>
              <span className="text-sm font-medium opacity-80">in</span>
              <span className="text-3xl font-mono font-bold text-yellow-300 min-w-[120px]">{countdown}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prayer List */}
      <div className="p-4 space-y-3">
        {Object.entries(timings).map(([name, time]: any) => {
          const isActive = name === activePrayer;
          const isNext = name === nextPrayer;
          
          return (
            <div 
              key={name} 
              className={`
                flex items-center justify-between p-4 rounded-xl transition-all duration-300
                ${isActive 
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 shadow-sm translate-x-1' 
                  : 'hover:bg-gray-50 dark:hover:bg-slate-700/50 border-l-4 border-transparent'}
                ${isNext ? 'ring-1 ring-indigo-200 dark:ring-indigo-700 bg-indigo-50/50 dark:bg-indigo-900/10' : ''}
              `}
            >
              <div className="flex items-center space-x-4">
                <div className={`
                  w-2 h-2 rounded-full 
                  ${isActive ? 'bg-indigo-500 animate-pulse' : 'bg-gray-300 dark:bg-slate-600'}
                `}></div>
                <span className={`font-semibold text-lg ${isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-300'}`}>
                  {name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`font-mono font-medium ${isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-500 dark:text-gray-400'}`}>
                  {formatTime(time)}
                </span>
                {isActive && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Footer Info */}
      <div className="bg-gray-50 dark:bg-slate-900/50 p-3 text-center border-t border-gray-100 dark:border-slate-700">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Times based on {data?.meta?.method?.name || "Local Calculation"}
        </p>
      </div>
    </div>
  );
}