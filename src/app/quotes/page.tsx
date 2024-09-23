// app/page.tsx

"use client";
import React, { useState, useEffect } from "react";
import styles from "../Quote.module.css";

interface Quote {
  content: string;
  author: string;
}

const HomePage: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch the random quote from the API
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/quotes");
      const data: Quote = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.text}>Loading ...</h2>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.text}>Can`t fetch quotes ...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Quotes Page </h1>
      <div className={styles.quoteBox}>
        <p data-testId="quoteText" className={styles.quoteText}>
          “{quote.content}”
        </p>
        <p className={styles.quoteAuthor}>— {quote.author}</p>
        <button className={styles.newQuoteButton} onClick={fetchQuote}>
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default HomePage;
