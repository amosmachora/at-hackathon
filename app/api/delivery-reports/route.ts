import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.text();
  console.log(`Received report: ${data}`);
  return NextResponse.json({
    status: 200,
  });
}
