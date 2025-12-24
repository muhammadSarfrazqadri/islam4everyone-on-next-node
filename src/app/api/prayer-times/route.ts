import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const city = searchParams.get("city") || "Karachi";
    const country = searchParams.get("country") || "Pakistan";
    const school = searchParams.get("school") || "1";

    const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2&school=${school}`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    const json = await res.json();
    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json(
      { error: "Prayer API failed" },
      { status: 500 }
    );
  }
}
