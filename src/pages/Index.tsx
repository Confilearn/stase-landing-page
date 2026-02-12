import { Smartphone, Download, Globe, Settings, Shield, QrCode, Apple, TabletSmartphone } from "lucide-react";
import PlatformSection from "@/components/PlatformSection";

const iosSteps = [
  {
    title: "Open the Link",
    description: "Tap the install link sent to you via email or message. It will open in Safari.",
    icon: <Globe className="h-7 w-7" />,
  },
  {
    title: "Install Profile",
    description: "When prompted, tap 'Install' to add the development provisioning profile to your device.",
    icon: <Shield className="h-7 w-7" />,
  },
  {
    title: "Trust the Developer",
    description: "Go to Settings → General → VPN & Device Management and trust the developer certificate.",
    icon: <Settings className="h-7 w-7" />,
  },
];

const androidSteps = [
  {
    title: "Open the Link",
    description: "Tap the install link you received. It will download the APK file to your device.",
    icon: <Globe className="h-7 w-7" />,
  },
  {
    title: "Allow Install",
    description: "If prompted, enable 'Install from unknown sources' for your browser in Settings.",
    icon: <Shield className="h-7 w-7" />,
  },
  {
    title: "Install & Open",
    description: "Open the downloaded APK file and tap 'Install'. Once done, tap 'Open' to launch Stase.",
    icon: <Download className="h-7 w-7" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden pb-16 pt-20 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 to-background" />
        <div className="mx-auto max-w-2xl px-6">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg">
            <Smartphone className="h-8 w-8" />
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Install <span className="text-secondary">Stase</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Follow the steps below to get the development build running on your device.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl space-y-20 px-6 pb-24">
        <PlatformSection
          platform="iPhone (iOS)"
          icon={<Apple className="h-5 w-5" />}
          steps={iosSteps}
        />

        <div className="mx-auto h-px w-32 bg-border" />

        <PlatformSection
          platform="Android"
          icon={<TabletSmartphone className="h-5 w-5" />}
          steps={androidSteps}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>Stase · Development Build</p>
      </footer>
    </div>
  );
};

export default Index;
