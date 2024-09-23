// app/api/quotes/route.ts

import { NextResponse } from "next/server";

// Define the quotes data
const quotes = {
  count: 4,
  results: [
    {
      _id: "VDDodhULiss2",
      content: "It is through science that we prove, but through intuition that we discover.",
      author: "Henri Poincaré",
    },
    {
      _id: "z6ZCI63jw-9k",
      content:
        "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
      author: "Albert Einstein",
    },
    {
      _id: "_dfC0aL_AGD4",
      content: "Great ideas often receive violent opposition from mediocre minds.",
      author: "Albert Einstein",
    },
    {
      _id: "_0CfFQ4la0aN",
      content: "If you can't explain it simply, you don't understand it well enough.",
      author: "Albert Einstein",
    },
  ],
};

// API handler to return random quote
export async function GET() {
  const randomIndex = Math.floor(Math.random() * quotes.count);
  const randomQuote = quotes.results[randomIndex];
  return NextResponse.json(randomQuote);
}
