"use client";

import { signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

export default function ProfileMenu({
  name,
  email,
  image,
}: {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initial = name?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Buka menu profil"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "1px solid #3a3a45",
          background: image ? `url(${image})` : "#2a2a35",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#f5f5f7",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        {!image && initial}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 0.5rem)",
            right: 0,
            minWidth: "220px",
            background: "#16161d",
            border: "1px solid #2a2a35",
            borderRadius: "12px",
            boxShadow: "0 12px 24px rgba(0,0,0,0.35)",
            overflow: "hidden",
            textAlign: "left",
            zIndex: 10,
          }}
        >
          <div style={{ padding: "0.9rem 1rem", borderBottom: "1px solid #2a2a35" }}>
            <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#f5f5f7" }}>
              {name ?? "Pengguna"}
            </div>
            {email && (
              <div style={{ fontSize: "0.78rem", color: "#9a9aa5", marginTop: "2px" }}>
                {email}
              </div>
            )}
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              background: "transparent",
              border: "none",
              color: "#ff6b6b",
              fontSize: "0.9rem",
              fontWeight: 500,
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
