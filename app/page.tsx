import DraftProtocolForm from "./components/DraftProtocolForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Qualification protocol draft
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Select equipment and parameters. The engine determines qualification
            phases and obligation domains. Download a Word draft to refine before
            QMS introduction.
          </p>
        </header>

        <DraftProtocolForm />

        <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          Advisory only. User bears responsibility for compliance. Drafts are
          intended for refinement before submission to your QMS.{" "}
          <a href="/privacy" className="hover:underline">Privacy</a>
          {" · "}
          <a href="/terms" className="hover:underline">Terms</a>
        </footer>
      </main>
    </div>
  );
}
