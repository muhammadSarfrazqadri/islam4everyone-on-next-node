import PrayerTimesUI from "@/components/PrayerTimesUi";
import React from "react";

async function getPrayerTimes() {
  const res = await fetch(
    "https://api.aladhan.com/v1/timingsByCity?city=Karachi&country=Pakistan&method=2&school=1",
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.data;
}

export default async function PrayerTimePage() {
  const data = await getPrayerTimes();

  return <PrayerTimesUI data={data} />;
}
