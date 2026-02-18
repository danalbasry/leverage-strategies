export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md mx-auto"
    >
      {/* Central node - the person */}
      <circle cx="200" cy="200" r="24" fill="#A67C32" />
      <circle cx="200" cy="200" r="18" fill="#FAF8F5" />
      <circle cx="200" cy="200" r="8" fill="#A67C32" />

      {/* Connecting lines */}
      <path d="M200 176 C200 140, 140 120, 120 100" stroke="#C9943E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M200 176 C210 140, 260 130, 280 100" stroke="#C9943E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M224 200 C260 200, 290 180, 320 160" stroke="#C9943E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M224 200 C260 210, 300 240, 330 260" stroke="#C9943E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M200 224 C200 260, 230 290, 250 320" stroke="#C9943E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M200 224 C190 260, 150 290, 130 320" stroke="#C9943E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M176 200 C140 190, 100 180, 70 160" stroke="#C9943E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M176 200 C140 220, 90 250, 60 280" stroke="#C9943E" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Outer nodes */}
      <circle cx="120" cy="100" r="12" stroke="#A67C32" strokeWidth="2" fill="#FAF8F5" />
      <circle cx="120" cy="100" r="4" fill="#A67C32" />
      <circle cx="280" cy="100" r="14" stroke="#A67C32" strokeWidth="2" fill="#FAF8F5" />
      <circle cx="280" cy="100" r="5" fill="#A67C32" />
      <circle cx="320" cy="160" r="10" stroke="#C9943E" strokeWidth="2" fill="#FAF8F5" />
      <circle cx="320" cy="160" r="3" fill="#C9943E" />
      <circle cx="330" cy="260" r="16" stroke="#A67C32" strokeWidth="2" fill="#FAF8F5" />
      <circle cx="330" cy="260" r="6" fill="#A67C32" />
      <circle cx="250" cy="320" r="11" stroke="#C9943E" strokeWidth="2" fill="#FAF8F5" />
      <circle cx="250" cy="320" r="4" fill="#C9943E" />
      <circle cx="130" cy="320" r="13" stroke="#A67C32" strokeWidth="2" fill="#FAF8F5" />
      <circle cx="130" cy="320" r="5" fill="#A67C32" />
      <circle cx="70" cy="160" r="10" stroke="#C9943E" strokeWidth="2" fill="#FAF8F5" />
      <circle cx="70" cy="160" r="3" fill="#C9943E" />
      <circle cx="60" cy="280" r="14" stroke="#A67C32" strokeWidth="2" fill="#FAF8F5" />
      <circle cx="60" cy="280" r="5" fill="#A67C32" />

      {/* Decorative dots */}
      <circle cx="160" cy="140" r="3" fill="#C9943E" opacity="0.6" />
      <circle cx="240" cy="150" r="2" fill="#C9943E" opacity="0.6" />
      <circle cx="270" cy="200" r="2" fill="#C9943E" opacity="0.6" />
      <circle cx="260" cy="270" r="3" fill="#C9943E" opacity="0.6" />
      <circle cx="180" cy="280" r="2" fill="#C9943E" opacity="0.6" />
      <circle cx="120" cy="250" r="2" fill="#C9943E" opacity="0.6" />
      <circle cx="130" cy="180" r="3" fill="#C9943E" opacity="0.6" />
      <circle cx="170" cy="160" r="2" fill="#C9943E" opacity="0.6" />
    </svg>
  );
}
