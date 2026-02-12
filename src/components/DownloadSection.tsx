import { QRCodeSVG } from "qrcode.react";
import { Download, Smartphone } from "lucide-react";

const BUILD_URL = "https://expo.dev/your-build-link";

const DownloadSection = () => {
  return (
    <section className="w-full">
      <div className="mb-10 flex items-center justify-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-sm">
          <Download className="h-5 w-5" />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">
          Quick Access
        </h2>
      </div>

      <div className="mx-auto max-w-xl glass-card rounded-2xl p-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-center">
          {/* QR Code */}
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <QRCodeSVG
                value={BUILD_URL}
                size={140}
                bgColor="#ffffff"
                fgColor="#0A385D"
                level="M"
                includeMargin={false}
              />
            </div>
            <p className="text-xs text-muted-foreground font-medium tracking-wide">
              Scan to install
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:flex flex-col items-center gap-2 self-stretch">
            <div className="w-px flex-1 bg-border" />
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              or
            </span>
            <div className="w-px flex-1 bg-border" />
          </div>
          <div className="flex sm:hidden items-center gap-4 w-full">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              or
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Download Button */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={BUILD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl bg-secondary px-7 py-4 text-secondary-foreground font-display font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Smartphone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Download Build
            </a>
            <p className="text-xs text-muted-foreground font-medium tracking-wide">
              Open link on your device
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
