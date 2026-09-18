import { ButtonLink } from '@/components/ui/Button';
import { openings } from '@/lib/data/openings';

export function OpeningsList() {
  return (
    <ul className="space-y-4">
      {openings.map((role) => (
        <li
          key={role.id}
          className="rounded-[1.25rem] border border-ink/12 p-5 transition-[border-color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-ink/30 sm:p-7"
        >
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
            <div className="min-w-0">
              <h3 className="text-[length:var(--text-step-2)]">{role.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[role.division, role.type, `Starts ${role.starts}`].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-mist px-3 py-1 text-sm text-ink/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-[62ch] leading-relaxed text-ink/70">{role.summary}</p>
            </div>

            <ButtonLink href="/contact" variant="outline" className="shrink-0">
              Apply
            </ButtonLink>
          </div>
        </li>
      ))}
    </ul>
  );
}
