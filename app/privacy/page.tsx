import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <Link href="/" className="text-sm text-zinc-500 hover:underline mb-6 inline-block">
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
          Privacy Policy
        </h1>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-zinc-600 dark:text-zinc-400">
            <strong>Last updated:</strong> {new Date().toLocaleDateString("en-US")}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            This privacy policy describes how we collect, use, and protect your information when you use
            our qualification protocol draft service.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Information we collect</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We collect your email address, account credentials, and usage data (e.g., equipment selections,
            generated drafts) when you create an account and use our service.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">How we use it</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We use your information to provide the service, process payments, and improve our offerings.
            We do not sell your personal information.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Data storage</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Your data is stored securely. Generated protocol drafts and project metadata are retained to
            support revisitation and subscription management.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Standards and content</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Standards documents are not stored by this service. Generated obligations are interpretations
            prepared by the service provider and do not reproduce copyrighted standard text. Users are
            responsible for maintaining legally obtained copies of applicable standards.
          </p>
          <h2 className="text-lg font-semibold mt-8 mb-2">Contact</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            For privacy-related questions, contact us at the email address provided in your account or
            subscription confirmation.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-8 italic">
            This policy is subject to change. We encourage you to review it periodically.
          </p>
        </div>
      </main>
    </div>
  );
}
