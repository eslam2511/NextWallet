import { Button } from "@/components/ui/button";
import { Apple, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-wallet.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-shimmer bg-[length:200%_200%]" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                The Future
              </span>
              <br />
              <span className="text-foreground">of Digital Payments</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Experience seamless, secure, and lightning-fast transactions with NexWallet. Your money, reimagined.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group">
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="border-border/50 backdrop-blur-xl bg-glass-bg/30 hover:bg-glass-bg/50">
                <PlayCircle className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  2M+
                </div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="h-12 w-px bg-border/50" />
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  50M+
                </div>
                <div className="text-sm text-muted-foreground">Transactions</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-50" />
              <img 
                src={heroImage} 
                alt="Futuristic digital wallet interface" 
                className="relative rounded-3xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
