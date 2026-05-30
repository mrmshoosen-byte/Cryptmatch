"use client";

export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#07070b",
      color: "white",
      display: "grid",
      placeItems: "center",
      fontFamily: "Arial",
      padding: "24px"
    }}>
      <div style={{
        maxWidth: "520px",
        width: "100%",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "30px",
        padding: "32px",
        textAlign: "center"
      }}>
        <p style={{ color: "#f0abfc", fontWeight: "bold", letterSpacing: "4px" }}>
          CRYPTO TINDER
        </p>

        <h1 style={{ fontSize: "44px", lineHeight: "1", margin: "20px 0" }}>
          Swipe meme coins.
        </h1>

        <p style={{ color: "#cbd5e1", fontSize: "18px" }}>
          Buy or pass on fake meme coins and discover your degen type.
        </p>

        <button style={{
          marginTop: "28px",
          padding: "16px 24px",
          borderRadius: "999px",
          border: "none",
          fontWeight: "900",
          fontSize: "16px"
        }}>
          Start Swiping
        </button>
      </div>
    </main>
  );
}
