import { useId } from 'react';

interface EmSafetyLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
  markOnly?: boolean;
}

export default function EmSafetyLogo({
  variant = 'dark',
  size = 'md',
  className = '',
  showTagline = true,
  markOnly = false,
}: EmSafetyLogoProps) {
  const isLight = variant === 'light';
  const id = useId().replace(/:/g, '');

  // Heights for responsive rendering
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  }[size];

  // Colors
  const primaryColor = isLight ? '#ffffff' : '#001a14';
  const taglineColor = isLight ? '#b5ede7' : '#2d3f38';

  // If markOnly, only render the EM monogram (3 horizontal bars + geometric line M)
  if (markOnly) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <svg
          viewBox="0 0 420 280"
          className={`${heightClass} w-auto drop-shadow-2xs`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* E: 3 Horizontal Parallel Bars */}
          <rect x="30" y="40" width="120" height="15" rx="7.5" fill={primaryColor} />
          <rect x="30" y="132" width="120" height="15" rx="7.5" fill={primaryColor} />
          <rect x="30" y="225" width="120" height="15" rx="7.5" fill={primaryColor} />

          {/* M: Single-stroke geometric angular form */}
          <path
            d="M 185 52 L 285 228 L 385 40 L 385 240"
            fill="none"
            stroke={primaryColor}
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="miter"
            strokeMiterlimit="6"
          />
        </svg>
      </div>
    );
  }

  // Full Brand Logo Lockup (matching the official image: E + M, Consulenze e Formazioni, and sliced Safety)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 940 400"
        className={`${heightClass} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Clip path for the upper half of Safety */}
          <clipPath id={`clipTop-${id}`}>
            <rect x="0" y="0" width="940" height="312" />
          </clipPath>
          {/* Clip path for the lower half of Safety (horizontal slit of ~12px in-between) */}
          <clipPath id={`clipBottom-${id}`}>
            <rect x="0" y="324" width="940" height="200" />
          </clipPath>
        </defs>

        {/* E: 3 Horizontal Solid Bars */}
        <rect x="30" y="40" width="125" height="15" rx="7.5" fill={primaryColor} />
        <rect x="30" y="132" width="125" height="15" rx="7.5" fill={primaryColor} />
        <rect x="30" y="225" width="125" height="15" rx="7.5" fill={primaryColor} />

        {/* M: Angular Geometric Line Form */}
        <path
          d="M 190 52 L 290 228 L 392 40 L 392 240"
          fill="none"
          stroke={primaryColor}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="miter"
          strokeMiterlimit="6"
        />

        {/* Tagline: Consulenze e Formazioni */}
        {showTagline && (
          <text
            x="442"
            y="242"
            fill={taglineColor}
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="43"
            fontWeight="400"
            letterSpacing="-0.01em"
          >
            Consulenze e Formazioni
          </text>
        )}

        {/* Sliced "Safety" typography underneath E and M */}
        {/* Upper slice */}
        <g clipPath={`url(#clipTop-${id})`}>
          <text
            x="30"
            y="370"
            fill={primaryColor}
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="120"
            fontWeight="600"
            letterSpacing="-0.025em"
          >
            Safety
          </text>
        </g>

        {/* Lower slice */}
        <g clipPath={`url(#clipBottom-${id})`}>
          <text
            x="30"
            y="370"
            fill={primaryColor}
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="120"
            fontWeight="600"
            letterSpacing="-0.025em"
          >
            Safety
          </text>
        </g>
      </svg>
    </div>
  );
}
