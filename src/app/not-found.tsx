import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-mist pt-32">
      <div className="shell">
        <p className="text-sm font-semibold tracking-wide text-ink-500">Error 404</p>
        <h1 className="mt-3 max-w-[16ch] text-4xl sm:text-5xl">
          That page is not on the map
        </h1>
        <p className="mt-5 max-w-[52ch] text-lg text-ink/70">
          The link may be out of date. Try the menu, or start again from the homepage.
        </p>
        <ButtonLink href="/" size="lg" className="mt-8">
          Back to the homepage
        </ButtonLink>
      </div>
    </section>
  );
}
