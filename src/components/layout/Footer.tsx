import Link from "next/link";
import { ArrowUp, MapPin, Phone } from "lucide-react";
import { ctaNav, footerUseful, footerUtility } from "@/lib/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* The decorative rule */}
      <div aria-hidden="true" className="flex h-1.5 w-full">
        {["bg-lime", "bg-sky", "bg-ember", "bg-lime-dark", "bg-sky", "bg-lime"].map((tone, i) => (
          <span key={i} className={`flex-1 ${tone}`} />
        ))}
      </div>

      <div className="shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Logo tone="light" />
            <address className="mt-8 space-y-3 not-italic text-white/65">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-lime" />
                <span>
                  The Mickbess School - Appolonia
                  <br />
                  Appolonia
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-lime" />
                <a href="tel:+233000000000" className="link-underline-accent hover:text-white">
                  +233 0 000 0000
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-lime" />
                <a href="https://wa.me/233000000000" className="link-underline-accent hover:text-white">
                  WhatsApp
                </a>
              </p>
            </address>
            <a
              href="https://maps.google.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline-accent -ml-1 mt-3 inline-flex min-h-6 items-center rounded px-1 py-1 text-sm text-lime"
            >
              Find us on the map
            </a>
          </div>

          <nav aria-label="Useful links">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
              Useful links
            </h2>
            <ul className="mt-5 space-y-3 text-white/65">
              {footerUseful.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline-accent hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
              Take the next step
            </h2>
            <p className="mt-3 text-white/60">
              Book a campus visit, or send us an enquiry.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {ctaNav.map((cta, i) => (
                <ButtonLink key={cta.href} href={cta.href} variant={i === 0 ? "light" : "lime"}>
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
            <SocialLinks tone="light" className="mt-8" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <li>© {new Date().getFullYear()} The Mickbess School - Appolonia</li>
            {footerUtility.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline-accent hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-lime"
          >
            Back to top
            <span className="flex size-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-lime">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
