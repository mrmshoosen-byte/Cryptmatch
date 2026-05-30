"use client";

import { useState } from "react";

const coins = [
  ["Frog Wif Debt", "FWID", "$12K", 95],
  ["Dog With WiFi", "DWIFI", "$210K", 55],
  ["Rug Speedrun", "RUGS", "$5K", 99],
  ["No Utility Club", "NUC", "$289K", 45],
  ["Quantum Hamster", "QHAM", "$512K", 40],
  ["404 Liquidity Found", "404", "$14K", 94],
  ["Cat Wearing Jordans", "JCAT", "$404K", 44],
  ["Just One More Trade", "JOMT", "$18K", 91],
];

export default function Page() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [buys, setBuys] = useState([]);

  const coin = coins[index];
  const finished = started && index >= coins.length;

  function swipe(choice) {
    if (choice === "buy") setBuys([...buys, coin]);
    setIndex(index + 1);
  }

  function result() {
    if (buys.length === 0) return "Professional Sideliner";
    const avg = buys.reduce((s, c) => s + c[3], 0) / buys.length;
    if (avg > 85) return "Low-Cap Rug Romantic";
    if (avg > 60) return "Certified Degen";
    return "Semi-Responsible Ape";
  }

  return (
    <main style={styles.main}>
      {!started && (
        <div style={styles.card}>
          <p style={styles.label}>CRYPTO TINDER</p>
          <h1 style={styles.title}>Swipe meme coins.</h1>
          <p style={styles.text}>
            Buy or pass on fake meme coins and discover your degen type.
          </p>
          <button style={styles.button} onClick={() => setStarted(true)}>
            Start Swiping
          </button>
        </div>
      )}

      {started && !finished && (
        <div style={styles.card}>
          <p style={styles.label}>${coin[1]}</p>
          <h1 style={styles.title}>{coin[0]}</h1>
          <p style={styles.text}>Market cap: {coin[2]}</p>
          <p style={styles.text}>Risk score: {coin[3]}/100</p>

          <div style={styles.row}>
            <button style={styles.pass} onClick={() => swipe("pass")}>
              Pass
            </button>
            <button style={styles.buy} onClick={() => swipe("buy")}>
              Buy
            </button>
          </div>

          <p style={styles.small}>
            {index + 1}/{coins.length}
          </p>
        </div>
      )}

      {finished && (
        <div style={styles.card}>
          <p style={styles.label}>YOUR RESULT</p>
          <h1 style={styles.title}>{result()}</h1>
          <p style={styles.text}>
            You bought {buys.length} out of {coins.length} coins.
          </p>
          <button
            style={styles.button}
            onClick={() => {
              setStarted(false);
              setIndex(0);
              setBuys([]);
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    background: "#07070b",
    color: "white",
    display: "grid",
    placeItems: "center",
    fontFamily: "Arial",
    padding: "24px",
  },
  card: {
    maxWidth: "520px",
    width: "100%",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "30px",
    padding: "32px",
    textAlign: "center",
  },
  label: {
    color: "#f0abfc",
    fontWeight: "bold",
    letterSpacing: "4px",
  },
  title: {
    fontSize: "42px",
    lineHeight: "1",
    margin: "20px 0",
  },
  text: {
    color: "#cbd5e1",
    fontSize: "18px",
  },
  small: {
    color: "#94a3b8",
    marginTop: "20px",
  },
  button: {
    marginTop: "28px",
    padding: "16px 24px",
    borderRadius: "999px",
    border: "none",
    fontWeight: "900",
    fontSize: "16px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginTop: "28px",
  },
  pass: {
    padding: "16px",
    borderRadius: "999px",
    border: "1px solid #ef4444",
    background: "#450a0a",
    color: "white",
    fontWeight: "900",
  },
  buy: {
    padding: "16px",
    borderRadius: "999px",
    border: "1px solid #22c55e",
    background: "#052e16",
    color: "white",
    fontWeight: "900",
  },
};
