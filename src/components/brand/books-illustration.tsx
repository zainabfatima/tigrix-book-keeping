export function BooksIllustration() {
  return (
    <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
      <figure className="rounded-2xl border border-red-200 bg-white p-5 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.6)]">
        <figcaption className="mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
          Before
        </figcaption>
        <svg viewBox="0 0 280 180" className="h-auto w-full" role="img" aria-label="Messy stack of receipts, scribbles, and unmatched lines">
          <rect x="18" y="28" width="92" height="120" rx="6" fill="#fff7ed" stroke="#fdba74" transform="rotate(-8 64 88)" />
          <rect x="78" y="18" width="100" height="128" rx="6" fill="#fff" stroke="#fecaca" transform="rotate(6 128 82)" />
          <rect x="150" y="36" width="96" height="108" rx="6" fill="#fef2f2" stroke="#fca5a5" transform="rotate(-3 198 90)" />
          <path d="M40 70h50M36 86h58M48 102h34" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M100 58c18 10 8 22 28 14M108 92c20-16 8 10 30 2M112 118h40" stroke="#b91c1c" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="196" cy="78" r="10" fill="#fecaca" />
          <path d="M190 78h12M196 72v12" stroke="#b91c1c" strokeWidth="2" />
          <path d="M170 120h58M168 134h40" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p className="mt-3 text-sm text-slate-600">Unmatched receipts, mystery balances, jobs with no costs.</p>
      </figure>

      <div className="mx-auto grid size-12 place-items-center rounded-full bg-navy text-amber" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="size-5">
          <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <figure className="rounded-2xl border border-emerald/30 bg-white p-5 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.6)]">
        <figcaption className="mb-4 inline-flex rounded-full bg-emerald/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
          After
        </figcaption>
        <svg viewBox="0 0 280 180" className="h-auto w-full" role="img" aria-label="Clean ledger with aligned rows and check marks">
          <rect x="28" y="16" width="224" height="148" rx="12" fill="#fffdf8" stroke="#f6d36b" />
          <rect x="28" y="16" width="224" height="32" rx="12" fill="#0C0C0C" />
          <rect x="28" y="36" width="224" height="12" fill="#0C0C0C" />
          <text x="44" y="37" fill="#F6D36B" fontSize="11" fontFamily="sans-serif">
            Job ledger
          </text>
          {[0, 1, 2, 3].map((row) => (
            <g key={row} transform={`translate(0 ${row * 26})`}>
              <rect x="44" y="62" width="150" height="8" rx="4" fill="#cbd5e1" />
              <circle cx="220" cy="66" r="8" fill="#E6B325" />
              <path d="M216 66.5 219 69.5 224.5 63" fill="none" stroke="#0C0C0C" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          ))}
        </svg>
        <p className="mt-3 text-sm text-slate-600">Reconciled accounts, costs on the right job, reports a CPA can open.</p>
      </figure>
    </div>
  );
}
