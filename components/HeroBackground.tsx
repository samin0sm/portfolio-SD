import React from "react";

export const HeroBackground: React.FC = () => {
  return (
    <>
      <div className="hero-bg-backdrop" aria-hidden="true" />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(8, 145, 178, 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default HeroBackground;
