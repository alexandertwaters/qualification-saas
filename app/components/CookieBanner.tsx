"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "qualification_saas_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consented = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consented) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 shadow-lg">
      <div className="mx-auto max-w-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          We use cookies for authentication and session management. By continuing, you agree to our{" "}
          <Link href="/privacy" className="underline hover:no-underline">Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/terms" className="underline hover:no-underline">Terms</Link>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
