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
  ["Emotional Support Candle", "CNDL", "$7K", 96],
  ["Unemployed Whale", "UWHALE", "$31K", 88],
  ["Goblin Mode Finance", "GMF", "$156K", 58],
  ["Infinite Bagholder", "BAG", "$67K", 73],
  ["Bonk Cousin Barber", "BCB", "$124K", 65],
  ["The Last Green Candle", "TLGC", "$22K", 84],
  ["I Sold The Bottom", "BOTTOM", "$76K", 70],
  ["Dad Left For Solana", "DAD", "$33K", 87],
  ["Dev Is Cooking", "COOK", "$610K", 41],
  ["Terminally Online Ape", "TOA", "$330K", 45],
  ["Liquidity Goblin", "GOB", "$9K", 97],
  ["Mom Found My Ledger", "MOM", "$80K", 77],
  ["Pump Therapy", "THERAPY", "$150K", 69],
  ["One Candle Away", "CANDLE", "$24K", 92],
  ["Definitely Not A Rug", "DNAR", "$11K", 98],
  ["Wen Lambo Again", "WEN", "$190K", 63],
  ["Sleep Is FUD", "SLEEP", "$58K", 82],
  ["Exit Liquidity Club", "ELC", "$17K", 96],
  ["Chart Looks Fine", "FINE", "$93K", 74],
  ["Degen Dating App", "DATE", "$420K", 48],
  ["Wallet In Pain", "PAIN", "$36K", 89],
  ["Green Candle Cult", "GCC", "$260K", 52],
];
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
  const buyRate = buys.length / coins.length;

  if (buyRate > 0.8 && avg > 80) return "Exit Liquidity Final Boss";
  if (buyRate > 0.8) return "Buy Button Addict";
  if (avg > 92) return "Low-Cap Rug Romantic";
  if (avg > 85) return "Microcap Chaos Goblin";
  if (avg > 75) return "Certified Degen";
  if (avg > 65) return "Narrative Hunter";
  if (avg > 55) return "Midcap Meme Enjoyer";
  if (avg > 45) return "Semi-Responsible Ape";
  if (buys.length <= 2) return "Cold Wallet Monk";

  return "Vibe Trader";
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
