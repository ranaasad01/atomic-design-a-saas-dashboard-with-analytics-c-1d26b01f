export const dynamic = "force-dynamic";
import { ArrowRight, Activity, Star, Check, MessageCircle as Twitter, Briefcase as Linkedin, Code2 as Github } from 'lucide-react';

const stats = [
  { label: "Funded Traders", value: "12,000+" },
  { label: "Capital Deployed", value: "$480M+" },
  { label: "Avg. Payout Time", value: "24 hrs" },
  { label: "Countries Supported", value: "150+" },
];

const steps = [
  {
    step: "01",
    title: "Choose a Challenge",
    description:
      "Select an evaluation size that matches your trading style — from $10K to $200K accounts.",
  },
  {
    step: "02",
    title: "Pass the Evaluation",
    description:
      "Hit the profit target while respecting our straightforward drawdown rules. No time pressure.",
  },
  {
    step: "03",
    title: "Get Funded",
    description:
      "Receive your funded account within 24 hours and start trading with trader prop capital.",
  },
  {
    step: "04",
    title: "Keep Up to 90%",
    description:
      "Withdraw your profits on demand. Scale your account as you prove consistent performance.",
  },
];

const plans = [
  {
    name: "Starter",
    capital: "$10,000",
    price: "$79",
    split: "80%",
    features: [
      "8% profit target",
      "5% max daily loss",
      "10% max total loss",
      "Unlimited trading days",
      "Free retake on failure",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    capital: "$50,000",
    price: "$299",
    split: "85%",
    features: [
      "8% profit target",
      "5% max daily loss",
      "10% max total loss",
      "Unlimited trading days",
      "Free retake on failure",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    capital: "$200,000",
    price: "$999",
    split: "90%",
    features: [
      "8% profit target",
      "5% max daily loss",
      "10% max total loss",
      "Unlimited trading days",
      "Free retake on failure",
      "Dedicated account manager",
      "Scaling plan included",
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Marcus T.",
    role: "Forex Trader · London",
    quote:
      "trader prop gave me the capital I needed to trade at a professional level. The payout process is genuinely the fastest I have seen — funds hit my account the same day.",
    rating: 5,
  },
  {
    name: "Aisha K.",
    role: "Futures Trader · Dubai",
    quote:
      "The rules are clear, the platform is rock-solid, and the support team actually knows trading. I have scaled from a $25K account to $150K in six months.",
    rating: 5,
  },
  {
    name: "Luca R.",
    role: "Crypto Trader · Milan",
    quote:
      "I tried three other prop firms before trader prop. None of them come close on transparency or payout reliability. This is the real deal.",
    rating: 5,
  },
];

const year = new Date().getFullYear();

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans">

      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#0a0d14]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            trader <span className="text-emerald-400">prop</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
              Log in
            </button>
            <button className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-lg transition-colors">
              Get Funded
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-1.5 mb-6">
            <Activity size={12} />
            Now funding traders in 150+ countries
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Trade with{" "}
            <span className="text-emerald-400">our capital.</span>
            <br />
            Keep the profits.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-emerald-500/20"
            >
              Export CSV <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white px-8 py-4 rounded-xl text-base transition-colors"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0f1320] px-6 py-8 text-center">
              <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-[#0d1018]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Four steps to funded</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our evaluation is designed to be fair, transparent, and fast. No hidden rules, no tricks — just consistent trading.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-[#0a0d14] border border-white/5 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-5xl font-black text-emerald-500/20 leading-none block mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Pick your account size</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              One-time evaluation fee. No monthly subscriptions. Get funded and keep trading with trader prop capital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  "relative rounded-2xl p-8 border flex flex-col " +
                  (plan.highlight
                    ? "bg-emerald-500/5 border-emerald-500/40 shadow-xl shadow-emerald-500/10"
                    : "bg-[#0d1018] border-white/5")
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">{plan.name}</p>
                  <p className="text-3xl font-extrabold">{plan.capital}</p>
                  <p className="text-gray-500 text-sm mt-1">funded account</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">one-time</span>
                </div>
                <p className="text-sm text-emerald-400 font-semibold mb-4">
                  Up to {plan.split} profit split
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    "w-full py-3 rounded-xl font-bold text-sm transition-colors " +
                    (plan.highlight
                      ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10")
                  }
                >
                  Start {plan.name} Challenge
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-[#0d1018]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Traders love trader prop</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Join thousands of funded traders who trust trader prop to back their strategies with real capital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#0a0d14] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-emerald-400 fill-emerald-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-16">
          <h2 className="text-4xl font-extrabold mb-4">Ready to trade with real capital?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join 12,000+ funded traders. Start your trader prop challenge today and get funded in as little as 24 hours.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-10 py-4 rounded-xl text-base transition-colors shadow-lg shadow-emerald-500/20"
          >
            Get Funded Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold">
              trader <span className="text-emerald-400">prop</span>
            </span>
            <p className="text-xs text-gray-600 mt-1">
              &copy; {year} trader prop. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </nav>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
