function AceVaultLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="acevaultGradient" x1="8" y1="6" x2="52" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2EA8FF" />
          <stop offset="1" stopColor="#1D4DFF" />
        </linearGradient>
      </defs>
      <path
        d="M16 24V17.5C16 8.94 22.94 2 31.5 2C40.06 2 47 8.94 47 17.5V24"
        stroke="url(#acevaultGradient)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M8 58L24.5 20H39.5L56 58H42.8L37 46H27L21.2 58H8Z"
        fill="url(#acevaultGradient)"
      />
      <path
        d="M32 28C35.31 28 38 30.69 38 34C38 36.2 36.82 38.13 35.06 39.17L36.8 47H27.2L28.94 39.17C27.18 38.13 26 36.2 26 34C26 30.69 28.69 28 32 28Z"
        fill="#050B16"
      />
    </svg>
  );
}

function AceVaultWordmark({ light = true }: { light?: boolean }) {
  return (
    <span className="text-2xl font-semibold tracking-tight">
      <span className={light ? "text-white" : "text-zinc-100"}>Ace</span>
      <span className="bg-[linear-gradient(90deg,#2EA8FF,#1D4DFF)] bg-clip-text text-transparent">
        Vault
      </span>
    </span>
  );
}

export default function AceVaultLandingPage() {
  const formAction = "https://formspree.io/f/mojykdvo";

  const features = [
    {
      title: "Upcoming Payments",
      description:
        "See upcoming bills, subscriptions, and recurring payments before they leave your account.",
      icon: "◫",
    },
    {
      title: "Subscription Control",
      description:
        "Identify forgotten subscriptions and remove unnecessary monthly spending.",
      icon: "◇",
    },
    {
      title: "Net Worth Tracking",
      description:
        "Understand your complete financial position with a live net worth overview.",
      icon: "↗",
    },
    {
      title: "Smart Insights",
      description:
        "Receive alerts before payments hit and stay ahead of your recurring financial commitments.",
      icon: "◌",
    },
  ];

  const steps = [
    {
      step: "Step 1",
      title: "Add your recurring commitments",
      description:
        "Start with your bills, subscriptions, rent, and regular payments in just a few minutes.",
      icon: "◯",
    },
    {
      step: "Step 2",
      title: "See everything in one place",
      description:
        "AceVault organises your upcoming payments and recurring commitments into one clear dashboard.",
      icon: "⟳",
    },
    {
      step: "Step 3",
      title: "Stay ahead before money leaves",
      description:
        "Get alerts, insights, and reminders before payments hit so nothing catches you off guard.",
      icon: "↗",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "£0",
      subtext: "/ month",
      description: "Free",
      features: ["Upcoming payments", "Manual tracking", "Basic insights"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      price: "£12",
      subtext: "/ month",
      description: "Most Popular",
      features: [
        "Everything in Starter",
        "Subscription tracker",
        "Net worth tracking",
        "Weekly financial briefing",
        "Smart insights and alerts",
      ],
      cta: "Get Early Access",
      featured: true,
    },
    {
      name: "Concierge",
      price: "£39",
      subtext: "/ month",
      description: "Personalised",
      features: [
        "Everything in Pro",
        "Personal optimisation",
        "Priority support",
        "Advanced insights",
      ],
      cta: "Get Early Access",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="min-h-screen bg-[linear-gradient(180deg,#000000_0%,#020817_32%,#08184D_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AceVaultLogo className="h-10 w-10" />
              <AceVaultWordmark />
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#how-it-works" className="transition hover:text-white">
                How It Works
              </a>
              <a href="#pricing" className="transition hover:text-white">
                Pricing
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQs
              </a>
            </nav>

            <a
              href="#waitlist"
              className="rounded-2xl bg-[#2453FF] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-950/40 transition hover:scale-[1.02] hover:bg-[#3561ff]"
            >
              Get Early Access
            </a>
          </header>
        </div>

        <section className="mx-auto max-w-[1600px] px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-16 lg:pt-8">
          <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr] xl:items-stretch">
            <div className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-black/30 p-7 backdrop-blur md:p-8 xl:min-h-[720px]">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-[1.5rem] border border-[#2147c7]/40 bg-[linear-gradient(180deg,rgba(10,23,62,0.92),rgba(4,10,24,0.82))] p-3 shadow-[0_10px_30px_rgba(17,42,140,0.25)]">
                  <AceVaultLogo className="h-16 w-16" />
                </div>
                <div>
                  <AceVaultWordmark />
                  <p className="mt-1 text-sm uppercase tracking-[0.28em] text-white/45">
                    See every recurring payment. Stay in control.
                  </p>
                </div>
              </div>

              <h1 className="max-w-xl text-4xl font-semibold leading-[0.94] tracking-tight sm:text-5xl xl:text-[5.4rem]">
                See every payment
                <br />
                before it hits.
                <br />
                <span className="bg-[linear-gradient(90deg,#2563EB,#4F7DFF)] bg-clip-text text-transparent">
                  Take back control.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-white/72 xl:text-lg xl:leading-8">
                AceVault gives you a clear view of every recurring financial commitment. See
                bills, subscriptions, rent, and upcoming payments before they leave your
                account.
              </p>

              <div className="mt-7 space-y-3 text-white/86">
                {[
                  "See every payment coming up",
                  "Avoid surprise charges and forgotten subscriptions",
                  "Feel clear and in control again",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm sm:text-base">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2453FF]/50 text-xs text-[#5B87FF]">
                      ✦
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <form
                action={formAction}
                method="POST"
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <input type="hidden" name="source" value="hero_waitlist" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#050A14] px-5 text-white outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  className="h-14 rounded-2xl bg-[#2453FF] px-6 font-medium text-white shadow-lg shadow-blue-950/40 transition hover:scale-[1.02] hover:bg-[#3561ff]"
                >
                  Get Early Access
                </button>
              </form>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex -space-x-3">
                  {["A", "C", "E", "V"].map((letter, i) => (
                    <div
                      key={letter + i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-zinc-300 text-xs font-semibold text-black"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#FFD24A]">★★★★★</p>
                  <p className="text-sm text-white/55">
                    Built for people who want clarity over what leaves their account
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#2040a0]/40 bg-[linear-gradient(180deg,rgba(5,15,45,0.96),rgba(3,10,26,0.92))] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] xl:min-h-[720px] xl:p-4">
              <div className="grid h-full gap-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,10,22,0.98),rgba(4,9,18,0.94))] lg:grid-cols-[200px_1fr] 2xl:grid-cols-[220px_1fr]">
                <aside className="flex flex-col border-r border-white/8 bg-[linear-gradient(180deg,rgba(4,10,21,0.95),rgba(6,11,25,0.9))] p-4 2xl:p-5">
                  <div className="mb-8 flex items-center gap-3">
                    <AceVaultLogo className="h-7 w-7" />
                    <AceVaultWordmark />
                  </div>

                  <div className="space-y-2 text-sm text-white/70">
                    {[
                      "Overview",
                      "Payments",
                      "Subscriptions",
                      "Net Worth",
                      "Insights",
                      "Settings",
                    ].map((item, idx) => (
                      <div
                        key={item}
                        className={`rounded-xl px-4 py-3 transition ${
                          idx === 0 ? "bg-white/8 text-white" : "hover:bg-white/5"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-medium">AceVault Pro</p>
                    <p className="mt-1 text-sm text-white/50">Clarity for every payment</p>
                  </div>
                </aside>

                <div className="p-4 md:p-5 2xl:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-3xl font-semibold tracking-tight">Good morning, Alex.</p>
                      <p className="mt-2 text-white/55">
                        Your recurring financial commitments, all in one place.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A6CFF] text-sm font-semibold">
                        A
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {[
                      ["Upcoming Payments", "£1,243.50", "8 payments due", "Next 7 days"],
                      ["Net Worth", "£24,850", "+ 8.4% vs last month", "Total value"],
                      ["Monthly Spend", "£2,341", "Across recurring costs", "This month"],
                    ].map(([label, value, note, top], idx) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(10,18,36,0.92),rgba(7,13,28,0.85))] p-4 2xl:p-5"
                      >
                        <p className="text-sm text-white/48">{top}</p>
                        <p className="mt-3 text-sm font-medium text-white/75">{label}</p>
                        <p className="mt-2 text-2xl font-semibold tracking-tight 2xl:text-3xl">
                          {value}
                        </p>
                        <p
                          className={`mt-3 text-sm ${
                            idx === 0 ? "text-white/45" : "text-emerald-300"
                          }`}
                        >
                          {note}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 2xl:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(10,18,36,0.92),rgba(7,13,28,0.85))] p-4 2xl:p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-semibold">Upcoming Payments</p>
                          <p className="mt-1 text-sm text-white/45">Next 7 days</p>
                        </div>
                        <button className="text-sm text-[#4E7BFF]">View all</button>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        {[
                          ["Rent", "1 Jun 2025", "£900.00", "R"],
                          ["Electricity", "2 Jun 2025", "£74.50", "E"],
                          ["Netflix", "4 Jun 2025", "£12.99", "N"],
                          ["Car Payment", "7 Jun 2025", "£256.00", "C"],
                          ["Spotify", "8 Jun 2025", "£10.99", "S"],
                        ].map(([name, date, amount, badge]) => (
                          <div
                            key={name}
                            className="flex items-center justify-between gap-3 rounded-xl bg-black/20 px-3 py-3 2xl:px-4"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold text-white/85">
                                {badge}
                              </div>
                              <div>
                                <p className="font-medium">{name}</p>
                                <p className="text-sm text-white/45">{date}</p>
                              </div>
                            </div>
                            <p className="font-medium text-white/90">{amount}</p>
                          </div>
                        ))}
                      </div>

                      <button className="mt-5 text-sm text-white/70">View all payments →</button>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(10,18,36,0.92),rgba(7,13,28,0.85))] p-4 2xl:p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-semibold">Net Worth Over Time</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
                          6 Months
                        </div>
                      </div>

                      <div className="mt-5 flex h-[220px] items-end gap-2 rounded-2xl bg-[linear-gradient(180deg,rgba(3,8,20,0.7),rgba(5,10,24,0.25))] px-3 pb-5 pt-8 2xl:h-[250px] 2xl:gap-3 2xl:px-4 2xl:pb-6 2xl:pt-10">
                        {[32, 38, 36, 43, 41, 48, 46, 56, 60, 71, 74, 84].map((h, i) => (
                          <div key={i} className="flex h-full flex-1 items-end">
                            <div
                              className="w-full rounded-t-xl bg-[linear-gradient(180deg,#3B82F6,#2453FF)] opacity-90"
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#2341aa]/40 bg-[linear-gradient(90deg,rgba(18,31,86,0.82),rgba(8,18,48,0.72))] p-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E40AF]/70 text-lg">
                          ◔
                        </div>
                        <div>
                          <p className="font-medium text-[#8EB2FF]">Financial Insight</p>
                          <p className="mt-1 text-white/80">
                            3 forgotten subscriptions are costing you{" "}
                            <span className="font-semibold text-emerald-300">£213/month</span>.
                          </p>
                        </div>
                      </div>
                      <button className="rounded-xl border border-[#3E62FF]/50 bg-[#1739B3]/35 px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2145cf]/55">
                        Review Subscriptions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-white/10">
          <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#5D84FF]">
                  Powerful Features
                </p>
                <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-tight">
                  Everything you need to stay ahead of recurring money.
                </h2>
                <button className="mt-8 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                  See All Features
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,12,28,0.8),rgba(5,9,20,0.7))] p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#122a85] text-xl text-[#87A7FF]">
                      {feature.icon}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/62">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-t border-white/10">
          <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-0 overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-2">
              <div className="border-b border-white/10 bg-black/20 p-8 lg:border-b-0 lg:border-r">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#5D84FF]">
                  How It Works
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                  How AceVault works
                </h2>

                <div className="mt-10 space-y-8">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-5">
                      <div className="relative flex flex-col items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#122a85] text-xl text-[#87A7FF]">
                          {step.icon}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="mt-3 h-20 w-px bg-gradient-to-b from-[#3D63FF] to-transparent" />
                        )}
                      </div>
                      <div className="pt-1">
                        <p className="text-sm font-medium text-[#6E93FF]">{step.step}</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-md text-base leading-7 text-white/62">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="pricing" className="bg-[linear-gradient(180deg,rgba(6,14,34,0.84),rgba(9,18,56,0.56))] p-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#5D84FF]">
                  Pricing
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                  Simple plans for better financial clarity.
                </h2>

                <div className="mt-8 inline-flex rounded-full border border-white/10 bg-black/20 p-1 text-sm text-white/70">
                  <button className="rounded-full bg-[#2453FF] px-5 py-2 text-white">
                    Monthly
                  </button>
                  <button className="rounded-full px-5 py-2">Yearly (Save 20%)</button>
                </div>

                <div className="mt-8 grid gap-4 xl:grid-cols-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`rounded-[1.5rem] border p-6 ${
                        plan.featured
                          ? "border-[#4067ff] bg-[linear-gradient(180deg,rgba(20,37,104,0.84),rgba(10,18,48,0.76))] shadow-[0_0_0_1px_rgba(64,103,255,0.15)]"
                          : "border-white/10 bg-black/20"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-2xl font-semibold tracking-tight">{plan.name}</p>
                          <p
                            className={`mt-2 text-sm ${
                              plan.featured ? "text-[#8BAEFF]" : "text-white/45"
                            }`}
                          >
                            {plan.description}
                          </p>
                        </div>
                        {plan.featured && (
                          <span className="rounded-full bg-[#2453FF] px-3 py-1 text-xs font-medium text-white">
                            Most Popular
                          </span>
                        )}
                      </div>

                      <div className="mt-6 flex items-end gap-1">
                        <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                        <span className="pb-2 text-white/55">{plan.subtext}</span>
                      </div>

                      <div className="mt-6 space-y-3">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 text-sm text-white/80">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#3B82F6]/60 text-[10px] text-[#6D94FF]">
                              ✓
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#waitlist"
                        className={`mt-7 flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          plan.featured
                            ? "bg-[#2453FF] text-white hover:bg-[#3561ff]"
                            : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                        }`}
                      >
                        {plan.cta}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-[1600px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.8rem] border border-[#2740a0]/45 bg-[linear-gradient(90deg,rgba(7,18,55,0.95),rgba(4,10,24,0.86))] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr_0.9fr] md:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1638B0] text-xl">
                  <AceVaultLogo className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-medium">Your data is safe with us.</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Bank-level encryption. Your financial privacy is our top priority.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-semibold leading-tight tracking-tight">
                  See what’s leaving your account before it does.
                </h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-white/65">
                  Join early users who want complete clarity over their recurring finances.
                </p>
              </div>

              <form
                action={formAction}
                method="POST"
                className="flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row"
              >
                <input type="hidden" name="source" value="footer_waitlist" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#060D1E] px-5 text-white outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  className="h-14 rounded-2xl bg-[#2453FF] px-6 font-medium text-white shadow-lg shadow-blue-950/30 transition hover:scale-[1.02] hover:bg-[#3561ff]"
                >
                  Get Early Access
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-4 py-8 text-sm text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="flex items-center gap-3">
              <AceVaultLogo className="h-8 w-8" />
              <AceVaultWordmark />
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </div>

            <p>© 2025 AceVault. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}