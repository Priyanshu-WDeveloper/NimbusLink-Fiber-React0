export default function PulseDivider() {
  return (
    <div className="pulse-divider">
      <svg viewBox="0 0 1200 64" preserveAspectRatio="none">
        <path className="strand" d="M0 32 Q150 5 300 32 T600 32 T900 32 T1200 32" />
        <path className="pulse" d="M0 32 Q150 5 300 32 T600 32 T900 32 T1200 32" />
      </svg>
    </div>
  );
}
