import { ImageResponse } from "next/og";

export const alt = "Camp Messiah summer camp in Temple Hills, Maryland";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#2181c2",
          color: "#ffbd59",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: 28,
            textTransform: "uppercase",
          }}
        >
          Temple Hills, Maryland
        </div>
        <div
          style={{
            fontSize: 112,
            fontWeight: 900,
            letterSpacing: "0.01em",
            lineHeight: 0.9,
          }}
        >
          CAMP MESSIAH
        </div>
        <div
          style={{
            color: "white",
            fontSize: 42,
            marginTop: 34,
          }}
        >
          Learning with fun in the sun.
        </div>
      </div>
    ),
    size,
  );
}
