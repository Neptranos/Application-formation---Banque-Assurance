import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formation Banque-Assurance",
  description:
    "Application de formation intelligente aux métiers de la banque et de l'assurance, avec répétition espacée sur vos points faibles.",
};

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/apprendre", label: "Apprendre" },
  { href: "/reviser", label: "Réviser" },
  { href: "/amf", label: "Certification AMF" },
  { href: "/progres", label: "Progrès" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between h-14">
            <Link href="/" className="font-semibold tracking-tight text-slate-900">
              Banque<span className="text-blue-600">·</span>Assurance
            </Link>
            <nav className="flex gap-1 text-sm">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 py-8">{children}</main>
        <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
          Contenu à visée pédagogique, à jour à la date indiquée sur chaque module — vérifiez les valeurs
          chiffrées (taux, plafonds) auprès des sources officielles avant toute décision.
        </footer>
      </body>
    </html>
  );
}
