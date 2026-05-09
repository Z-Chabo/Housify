import housifyLogo from "../../imports/image.png";

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 sm:px-6">
        <img
          src={housifyLogo}
          alt="Housify logo"
          className="h-12 w-12 object-contain"
        />

        <div className="space-y-1">
          <p className="text-base font-semibold text-slate-900">Housify</p>
          <p className="text-sm text-slate-500">
            Apartment Management Software
          </p>
        </div>
      </div>
    </header>
  );
}