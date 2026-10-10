"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [message, setMessage] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("You’re on the list. Welcome to the Veloura C-beauty edit.");
    event.currentTarget.reset();
  };

  return (
    <section className="newsletter" id="about">
      <p className="eyebrow">A note from us</p>
      <h2>Stay close to<br/><em>what’s beautiful.</em></h2>
      <p>New C-beauty launches, shade stories and Australian availability—sent occasionally.</p>
      <form className="signup-form" onSubmit={submit}>
        <label className="sr-only" htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="Email address" required />
        <button type="submit">Join us <span>→</span></button>
      </form>
      <p className="form-note" aria-live="polite">{message}</p>
    </section>
  );
}
