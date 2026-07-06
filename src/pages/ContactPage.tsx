import { Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../components';

export default function ContactPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-zinc-100">Contact</h1>
        <p className="text-sm text-zinc-500">Let's work together. Send me a message below.</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/60 border border-zinc-700/50">
          <Mail className="w-4 h-4 text-sky-400" />
          <span className="text-xs text-zinc-400">hello@example.com</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/60 border border-zinc-700/50">
          <MapPin className="w-4 h-4 text-sky-400" />
          <span className="text-xs text-zinc-400">Remote / Worldwide</span>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
