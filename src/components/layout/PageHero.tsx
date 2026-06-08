import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
};

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-primary py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/80 transition"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
