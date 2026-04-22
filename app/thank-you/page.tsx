export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          You're on the list.
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          We’ll let you know as soon as AceVault launches.
        </p>

        <p className="mt-6 text-white/50 text-sm">
          Want early access? Reply to our email with your biggest money frustration.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-[#2453FF] px-6 py-3 text-sm font-medium hover:bg-[#3561ff]"
        >
          Back to homepage
        </a>
      </div>
    </div>
  );
}