import { sendSMS } from "@/africastalking/at";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const POST = async (request: NextRequest, response: NextResponse) => {
  const data = await request.text();
  console.log(data);

  const params = new URLSearchParams(data);

  const text = params.get("text");
  const from = params.get("from");
  console.log({ text, from });

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Return an answer for the following question => ${text}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const message = chatCompletion.choices.at(0)?.message.content;

  console.log(message);

  await sendSMS({ to: from, message });

  return NextResponse.json({
    status: 200,
  });
};

// {"linkId":"0f209492-a0aa-4dc7-b0b6-82b35d5c4558","text":"How are you doing","to":"45778","id":"e12d0bb2-0dc5-4e7b-b6a4-666e42ec1df1","date":"2023-09-28 10:42:21","from":"+254719428019"}
