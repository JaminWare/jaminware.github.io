import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const FORM_ENDPOINT = 'https://formspree.io/f/mzdloogn';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-700/60 rounded-xl p-6 space-y-5"
    >
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-400">Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-400">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          placeholder="you@email.com"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-400">Message</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <p className="text-sm font-medium text-emerald-400">Message sent successfully!</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-lg p-4">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <p className="text-sm font-medium text-rose-400">Something went wrong. Please try again.</p>
        </div>
      )}
    </form>
  );
}
