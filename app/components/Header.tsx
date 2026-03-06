"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-2xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-foreground">
          Qualification Protocol Draft
        </Link>
        <nav className="flex items-center gap-3">
          {loading ? (
            <span className="text-sm text-muted-foreground">…</span>
          ) : user ? (
            <>
              <Link href="/dashboard" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
                My drafts
              </Link>
              <Link href="/billing" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
                Billing
              </Link>
              <span className="text-sm text-muted-foreground px-2">
                {user.email}
              </span>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
                Log in
              </Link>
              <Link href="/signup" className={cn(buttonVariants({ size: "sm" }))}>
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
