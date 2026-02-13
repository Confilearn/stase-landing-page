import { QRCodeSVG } from "qrcode.react";
import { Download, Smartphone } from "lucide-react";

const BUILD_URL = "https://expo.dev/your-build-link";

const DownloadSection = () => {
  return (
    <section className="w-full">
      <div className="mb-10 flex items-center justify-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
          <Download className="h-5 w-5" />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">
          Quick Access
        </h2>
      </div>

      <div className="mx-auto max-w-xl glass-card rounded-2xl p-10">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-center">
          {/* QR Code */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border/30">
              <QRCodeSVG
                value={BUILD_URL}
                size={148}
                bgColor="#ffffff"
                fgColor="#1a1a2e"
                level="M"
                includeMargin={false}
              />
            </div>
            <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase">
              Scan to install on Android
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:flex flex-col items-center gap-2.5 self-stretch">
            <div className="w-px flex-1 bg-border/50" />
            <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
              or
            </span>
            <div className="w-px flex-1 bg-border/50" />
          </div>
          <div className="flex sm:hidden items-center gap-4 w-full">
            <div className="h-px flex-1 bg-border/50" />
            <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
              or
            </span>
            <div className="h-px flex-1 bg-border/50" />
          </div>

          {/* Download Button */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={BUILD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-primary-foreground font-display font-bold text-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <Smartphone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Download Build
            </a>
            <p className="text-xs text-muted-foreground font-semibold tracking-wide">
              Open link on your Android device
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
