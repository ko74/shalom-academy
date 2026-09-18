"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent";

const interests = [
  "Early Childhood (2.5 – 4)",
  "Lower School (K – Grade 6)",
  "Middle School (Grade 7 – 9)",
  "High School (Grade 10 – 12)",
  "Something else",
];

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink transition-colors duration-200 placeholder:text-ink/35 focus:border-ink focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That does not look like an email address we can reply to.";
    if (message.length < 10) next.message = "A sentence or two is enough, but we need something.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Wire this to a route handler or form service. Nothing leaves the browser here.
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.25rem] bg-mist p-6 sm:rounded-[1.5rem] sm:p-10">
        <span className="flex size-14 items-center justify-center rounded-full bg-lime text-ink">
          <Check className="size-7" strokeWidth={2.5} />
        </span>
        <h2 className="mt-5 text-[length:var(--text-step-2)]">Thank you — that has reached us</h2>
        <p className="mt-3 max-w-[48ch] text-ink/70">
          An admissions officer will reply within two working days. If it is urgent, call reception
          on +32 2 661 42 11 and ask for admissions.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
      <form onSubmit={handleSubmit} noValidate className="rounded-[1.25rem] bg-mist p-6 sm:rounded-[1.5rem] sm:p-9">
        <h2 className="text-[length:var(--text-step-2)]">Send us a message</h2>
        <p className="mt-2 text-ink/65">Fields marked with an asterisk are required.</p>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">
              Your name *
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn(field, errors.name && "border-ember")}
              placeholder="Alex Dupont"
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-ember">
                {errors.name}
              </p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(field, errors.email && "border-ember")}
              placeholder="alex@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-ember">
                {errors.email}
              </p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={field}
              placeholder="+32 …"
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="interest" className="mb-2 block text-sm font-semibold">
              Which age group?
            </label>
            <select id="interest" name="interest" className={field} defaultValue={interests[1]}>
              {interests.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold">
              How can we help? *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(field, "resize-y", errors.message && "border-ember")}
              placeholder="Tell us the ages of your children and roughly when you need a place."
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-ember">
                {errors.message}
              </p>
            )}
          </div>
        </div>

        <Button type="submit" size="lg" className="mt-7" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending
            </>
          ) : (
            "Send message"
          )}
        </Button>

        <p className="mt-4 text-sm text-ink/65">
          We use what you send here only to reply to you. Nothing is shared with third parties.
        </p>
      </form>

      <div className="rounded-[1.25rem] bg-ink p-6 text-white sm:rounded-[1.5rem] sm:p-9">
        <h2 className="text-[length:var(--text-step-2)]">Or reach us directly</h2>

        <ul className="mt-7 space-y-6">
          <li className="flex gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-lime" />
            <span>
              <span className="block font-semibold">Campus</span>
              <span className="mt-1 block text-white/65">
                Kattenberg 19
                <br />
                B-1170 Watermael-Boitsfort
                <br />
                Brussels, Belgium
              </span>
            </span>
          </li>
          <li className="flex gap-4">
            <Phone className="mt-1 size-5 shrink-0 text-lime" />
            <span>
              <span className="block font-semibold">Reception</span>
              <a href="tel:+3226614211" className="link-underline-accent mt-1 inline-block text-white/65">
                +32 2 661 42 11
              </a>
              <span className="mt-1 block text-sm text-white/60">
                08:00 – 17:00 on school days
              </span>
            </span>
          </li>
          <li className="flex gap-4">
            <Mail className="mt-1 size-5 shrink-0 text-lime" />
            <span>
              <span className="block font-semibold">Admissions</span>
              <a
                href="mailto:admissions@example.com"
                className="link-underline-accent mt-1 inline-block text-white/65"
              >
                admissions@example.com
              </a>
            </span>
          </li>
        </ul>

        {/* Static map placeholder — swap for an embed once you have a key */}
        <div
          aria-hidden="true"
          className="mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-white/15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <span className="relative flex size-4">
              <span className="absolute inset-0 animate-[var(--animate-pulse-ring)] rounded-full bg-lime" />
              <span className="relative size-4 rounded-full bg-lime ring-4 ring-ink" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
