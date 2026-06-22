import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#06090d]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo-icon.png" alt="" className="h-6 w-auto" height={24} width={22} />
          <div>
            <p className="font-semibold text-white">{site.name}</p>
            <p className="mt-1 max-w-sm text-sm text-slate-500">
              AI-assisted analysis and software development with scientific rigor.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-500 sm:items-end">
          <a
            href={`mailto:${site.email}`}
            className="text-slate-400 transition hover:text-cyan-300"
          >
            {site.email}
          </a>
          <p>© {year} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}