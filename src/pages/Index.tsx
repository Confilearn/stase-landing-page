import {
  Smartphone,
  Download,
  Globe,
  Shield,
  TabletSmartphone,
} from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";
import PlatformSection from "@/components/PlatformSection";
import DownloadSection from "@/components/DownloadSection";
import ThemeToggle from "@/components/ThemeToggle";

const androidSteps = [
  {
    title: "Open the Link",
    description:
      "Tap the install link you received. It will download the APK file to your device.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Allow Install",
    description:
      "If prompted, enable 'Install from unknown sources' for your browser in Settings.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Install & Open",
    description:
      "Open the downloaded APK file and tap 'Install'. Once done, tap 'Open' to launch Stase.",
    icon: <Download className="h-6 w-6" />,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border/40 bg-background/60 backdrop-blur-2xl px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Smartphone className="h-4 w-4" />
          </div>
          <span className="font-display text-4xl font-bold tracking-tight text-foreground">
            stase
          </span>
        </div>
        <ThemeToggle />
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden pb-24 pt-28 text-center">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        {/* Decorative orbs */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[600px] w-[900px] -z-10 rounded-full bg-primary/6 blur-[100px]" />
        <div className="absolute top-[100px] right-[-200px] h-[300px] w-[300px] -z-10 rounded-full bg-primary/4 blur-[80px]" />

        <div className="relative mx-auto max-w-2xl px-6">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-card/50 backdrop-blur-xl px-5 py-2 text-xs font-semibold text-muted-foreground shadow-sm tracking-wide uppercase">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Beta Build
          </div>

          <h1 className="font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl leading-[1.05]">
            Install <span className="text-gradient">Stase</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground leading-relaxed font-medium">
            Follow the steps below to get the development build running on your
            iPhone or Android device.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="relative mx-auto max-w-4xl space-y-28 px-6 pb-32">
        <DownloadSection />

        {/* iPhone Unavailable Notice */}
        <section className="w-full">
          <div className="mb-10 flex items-center justify-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-sm">
              <FaApple className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">
              iPhone (iOS)
            </h2>
          </div>
          <div className="mx-auto max-w-xl glass-card rounded-2xl p-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <FaApple className="h-8 w-8" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Currently Unavailable
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
              The Stase development build is not currently available for iPhone
              users. We're working on making it accessible — stay tuned for
              updates.
            </p>
          </div>
        </section>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border/60" />
          <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
            or
          </span>
          <div className="h-px flex-1 bg-border/60" />
        </div>

        <PlatformSection
          platform="Android"
          icon={<BsAndroid2 className="h-5 w-5" />}
          steps={androidSteps}
        />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border/40 bg-card/20 backdrop-blur-xl py-10 text-center">
        <p className="text-xs text-muted-foreground tracking-widest font-semibold uppercase">
          Stase · Beta Build · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Index;
