import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground hover:underline mb-6 inline-block">
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold text-foreground mb-6">
          Terms and Conditions
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            <strong>Last updated:</strong> {new Date().toLocaleDateString("en-US")}
          </p>
          <p className="text-muted-foreground mt-4">
            By using this service, you agree to these terms. Please read them carefully.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Advisory nature</h2>
          <p className="text-muted-foreground">
            This tool provides guidance and draft templates only. It does not constitute legal, regulatory,
            or compliance advice. You bear full responsibility for ensuring your qualification protocols
            and processes comply with applicable standards and your organization&apos;s quality system.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Standards and copyright</h2>
          <p className="text-muted-foreground">
            Standards (e.g., ISO, FDA, USP) are copyrighted. This service does not store or reproduce
            standard text. Generated obligations are interpretations and do not substitute for the
            official standards. You must maintain legally obtained copies of standards that apply to
            your work.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Subscription and payment</h2>
          <p className="text-muted-foreground">
            Subscription fees are billed according to your selected plan. Refund and cancellation
            policies are governed by our payment processor. Draft allowances reset monthly.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Acceptable use</h2>
          <p className="text-muted-foreground">
            You agree to use the service only for lawful purposes and in accordance with these terms.
            You may not misuse the service, attempt to circumvent access controls, or exceed your plan
            limits in a manner inconsistent with the product design.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Limitation of liability</h2>
          <p className="text-muted-foreground">
            To the fullest extent permitted by law, we disclaim warranties and limit our liability for
            any damages arising from your use of the service. The service is provided &quot;as is.&quot;
          </p>
          <p className="text-muted-foreground mt-8 italic">
            These terms are subject to change. Continued use after changes constitutes acceptance.
          </p>
        </div>
      </main>
    </div>
  );
}
