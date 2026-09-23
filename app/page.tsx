"use client";

import { signIn, useSession } from "next-auth/react";
import ProfileMenu from "./profile-menu";

export default function Home() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        padding: "1.5rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      {isLoggedIn && (
        <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
          <ProfileMenu
            name={session?.user?.name}
            email={session?.user?.email}
            image={session?.user?.image}
          />
        </div>
      )}

      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        Pawang AI
      </h1>

      {status === "loading" ? null : !isLoggedIn ? (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            style={{
              padding: "0.85rem 2rem",
              borderRadius: "999px",
              border: "1px solid #3a3a45",
              background: "transparent",
              color: "#f5f5f7",
              fontSize: "1rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Masuk
          </button>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            style={{
              padding: "0.85rem 2rem",
              borderRadius: "999px",
              border: "none",
              background: "#f5f5f7",
              color: "#0b0b12",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Daftar Gratis
          </button>
        </div>
      ) : (
        <p style={{ color: "#9a9aa5", fontSize: "1rem" }}>
          Selamat datang, {session?.user?.name?.split(" ")[0]}
        </p>
      )}
    </main>
  );
}
