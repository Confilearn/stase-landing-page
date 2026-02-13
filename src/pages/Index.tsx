import { Smartphone, Download, Globe, Settings, Shield, Apple, TabletSmartphone } from "lucide-react";
import PlatformSection from "@/components/PlatformSection";
import DownloadSection from "@/components/DownloadSection";
import ThemeToggle from "@/components/ThemeToggle";


const androidSteps = [
  {
    title: "Open the Link",
    description: "Tap the install link you received. It will download the APK file to your device.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Allow Install",
    description: "If prompted, enable 'Install from unknown sources' for your browser in Settings.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Install & Open",
    description: "Open the downloaded APK file and tap 'Install'. Once done, tap 'Open' to launch Stase.",
    icon: <Download className="h-6 w-6" />,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border/50 bg-background/70 backdrop-blur-xl px-6 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
            <Smartphone className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">stase</span>
        </div>
        <ThemeToggle />
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden pb-20 pt-24 text-center">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] -z-10 rounded-full bg-primary/8 blur-3xl" />
        
        <div className="relative mx-auto max-w-2xl px-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Development Build
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl leading-[1.1]">
            Install{" "}
            <span className="text-gradient">Stase</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground leading-relaxed">
            Follow the steps below to get the development build running on your iPhone or Android device.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="relative mx-auto max-w-4xl space-y-24 px-6 pb-28">
        <DownloadSection />

        {/* iPhone Unavailable Notice */}
        <section className="w-full">
          <div className="mb-10 flex items-center justify-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-sm">
              <Apple className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">iPhone (iOS)</h2>
          </div>
          <div className="mx-auto max-w-xl glass-card rounded-2xl p-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <Apple className="h-8 w-8" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Currently Unavailable</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
              The Stase development build is not currently available for iPhone users. We're working on making it accessible — stay tuned for updates.
            </p>
          </div>
        </section>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <PlatformSection
          platform="Android"
          icon={<TabletSmartphone className="h-5 w-5" />}
          steps={androidSteps}
        />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm py-8 text-center">
        <p className="text-xs text-muted-foreground tracking-wide">
          Stase · Development Build · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Index;
