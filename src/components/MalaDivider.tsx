/** The mala divider: two beads on a fading thread. One per section boundary. */
export default function MalaDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`ds-container ${className}`}>
      <div className="mala" role="separator" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
