"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background px-6 py-4 shadow-lg">
      <div className="mx-auto max-w-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          We use cookies for authentication and session management. By continuing, you agree to our{" "}
          <Link href="/privacy" className="underline hover:no-underline">Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/terms" className="underline hover:no-underline">Terms</Link>.
        </p>
        <Button onClick={accept} size="sm" className="shrink-0">
          Accept
        </Button>
      </div>
    </div>
  );
}
