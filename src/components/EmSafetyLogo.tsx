import { useId } from 'react';

interface EmSafetyLogoProps {
  variant?: 'dark' | 'light' | 'navy';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
  showSlogan?: boolean;
  sloganPlacement?: 'below' | 'right' | 'centered';
  markOnly?: boolean;
}

export default function EmSafetyLogo({
  variant = 'navy',
  size = 'md',
  className = '',
  showTagline = true,
  showSlogan = true,
  sloganPlacement = 'below',
  markOnly = false,
}: EmSafetyLogoProps) {
  const isLight = variant === 'light';
  const id = useId().replace(/:/g, '');

  // Heights for the SVG mark
  const heightClass = {
    xs: 'h-8 sm:h-9',
    sm: 'h-10 sm:h-12',
    md: 'h-13 sm:h-16',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
  }[size];

  // Slogan font sizing based on size prop
  const sloganSizeClass = {
    xs: 'text-[10px] leading-[1.25]',
    sm: 'text-[11px] sm:text-[12px] leading-[1.3]',
    md: 'text-[13px] sm:text-[14.5px] leading-[1.32]',
    lg: 'text-[15px] sm:text-[17px] leading-[1.35]',
    xl: 'text-[18px] sm:text-[21px] leading-[1.35]',
  }[size];

  // Brand Color Palette: Strictly Dark Blue (#0b2545) and Yellow/Gold (#d97706 / #f59e0b / #fbbf24)
  const primaryColor = isLight ? '#ffffff' : '#0b2545';
  const accentColor = isLight ? '#fbbf24' : '#d97706';
  const taglineColor = isLight ? '#e2e8f0' : '#0b2545';
  const sloganTextColor = isLight ? 'text-amber-300' : 'text-[#0b2545]';
  const dividerColor = isLight ? 'bg-amber-400/40' : 'bg-slate-300';

  // If markOnly, only render the EM monogram
  if (markOnly) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <svg
          viewBox="0 0 420 280"
          className={`${heightClass} w-auto`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* E: 3 Horizontal Parallel Bars */}
          <rect x="30" y="40" width="120" height="15" rx="7.5" fill={primaryColor} />
          <rect x="30" y="132" width="120" height="15" rx="7.5" fill={accentColor} />
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

  // Slogan markup: Exact 3-line format matching the reference image in light, elegant typography
  const SloganBlock = (
    <div
      className={`font-sans font-light tracking-wide ${sloganSizeClass} ${sloganTextColor} ${
        sloganPlacement === 'centered' ? 'text-center' : 'text-left'
      }`}
    >
      <div className="whitespace-nowrap">Costruiamo Sistemi che</div>
      <div className="whitespace-nowrap">trasformano la compliance</div>
      <div className="whitespace-nowrap">in Valore aggiunto</div>
    </div>
  );

  // SVG Mark (E + M + Consulenze e Formazioni + Sliced Safety)
  const SvgMark = (
    <svg
      viewBox="0 0 940 400"
      className={`${heightClass} w-auto flex-shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Clip path for the upper half of Safety */}
        <clipPath id={`clipTop-${id}`}>
          <rect x="0" y="0" width="940" height="312" />
        </clipPath>
        {/* Clip path for the lower half of Safety */}
        <clipPath id={`clipBottom-${id}`}>
          <rect x="0" y="324" width="940" height="200" />
        </clipPath>
      </defs>

      {/* E: 3 Horizontal Solid Bars (Middle bar has warm amber/yellow accent) */}
      <rect x="30" y="40" width="125" height="15" rx="7.5" fill={primaryColor} />
      <rect x="30" y="132" width="125" height="15" rx="7.5" fill={accentColor} />
      <rect x="30" y="225" width="125" height="15" rx="7.5" fill={primaryColor} />

      {/* M: Angular Geometric Line Form in Dark Blue */}
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
          fontSize="44"
          fontWeight="600"
          letterSpacing="-0.01em"
        >
          Consulenze e Formazioni
        </text>
      )}

      {/* Sliced "Safety" typography */}
      <g clipPath={`url(#clipTop-${id})`}>
        <text
          x="30"
          y="370"
          fill={primaryColor}
          fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="122"
          fontWeight="700"
          letterSpacing="-0.025em"
        >
          Safety
        </text>
      </g>

      <g clipPath={`url(#clipBottom-${id})`}>
        <text
          x="30"
          y="370"
          fill={primaryColor}
          fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="122"
          fontWeight="700"
          letterSpacing="-0.025em"
        >
          Safety
        </text>
      </g>
    </svg>
  );

  // If no slogan is requested, render just the SVG mark
  if (!showSlogan) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        {SvgMark}
      </div>
    );
  }

  // Render Horizontal Lockup (Logo on left, 3-line slogan on right)
  if (sloganPlacement === 'right') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {SvgMark}
        <div className={`h-9 sm:h-11 w-[1px] ${dividerColor} flex-shrink-0`} />
        {SloganBlock}
      </div>
    );
  }

  // Render Centered Vertical Lockup (Logo on top, 3-line slogan centered below)
  if (sloganPlacement === 'centered') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        {SvgMark}
        <div className="mt-3 pt-3 border-t border-slate-200/80 w-full flex justify-center">
          {SloganBlock}
        </div>
      </div>
    );
  }

  // Default: Vertical Lockup (Logo on top, 3-line slogan below)
  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {SvgMark}
      <div className="mt-2.5">
        {SloganBlock}
      </div>
    </div>
  );
}
