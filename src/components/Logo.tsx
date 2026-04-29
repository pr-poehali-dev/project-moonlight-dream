interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "light", size = "md" }: LogoProps) {
  const sizes = { sm: 28, md: 36, lg: 56 };
  const h = sizes[size];
  const textColor = variant === "light" ? "#ffffff" : "#0a1628";

  return (
    <svg
      width={h * 4.2}
      height={h}
      viewBox="0 0 180 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DriveRoute"
    >
      {/* Road icon */}
      <g>
        {/* Wheel left */}
        <circle cx="8" cy="30" r="5" fill="#ff6b1a" />
        <circle cx="8" cy="30" r="2" fill={variant === "light" ? "#0a1628" : "#ffffff"} />
        {/* Wheel right */}
        <circle cx="24" cy="30" r="5" fill="#ff6b1a" />
        <circle cx="24" cy="30" r="2" fill={variant === "light" ? "#0a1628" : "#ffffff"} />
        {/* Car body */}
        <path
          d="M4 28 L4 22 L8 14 L24 14 L28 22 L28 28 Z"
          fill={textColor}
          stroke="#ff6b1a"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Windshield */}
        <path
          d="M9 14 L11 20 L21 20 L23 14"
          fill="#ff6b1a"
          opacity="0.7"
        />
        {/* Speed lines */}
        <line x1="0" y1="20" x2="5" y2="20" stroke="#ff6b1a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="23" x2="3" y2="23" stroke="#ff6b1a" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="0" y1="26" x2="4" y2="26" stroke="#ff6b1a" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* DRIVE text */}
      <text
        x="36"
        y="26"
        fontFamily="Montserrat, sans-serif"
        fontWeight="900"
        fontSize="18"
        fill={textColor}
        letterSpacing="1"
      >
        DRIVE
      </text>

      {/* ROUTE text in orange */}
      <text
        x="36"
        y="40"
        fontFamily="Montserrat, sans-serif"
        fontWeight="900"
        fontSize="11"
        fill="#ff6b1a"
        letterSpacing="4"
      >
        ROUTE
      </text>

      {/* Orange accent line */}
      <rect x="36" y="28" width="88" height="1.5" fill="#ff6b1a" opacity="0.4" />
    </svg>
  );
}
