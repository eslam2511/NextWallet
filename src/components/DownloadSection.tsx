import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, Sparkles } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 backdrop-blur-xl bg-glass-bg/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Available now</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Your Financial Life?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join millions of users who trust NexWallet for their daily transactions. Download now and get started in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity min-w-[200px]">
              <Apple className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 backdrop-blur-xl bg-glass-bg/30 hover:bg-glass-bg/50 min-w-[200px]">
              <PlayCircle className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl border border-border/50 backdrop-blur-xl bg-glass-bg/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                4.9
              </div>
              <div className="text-sm text-muted-foreground">App Store Rating</div>
            </div>
            <div className="p-6 rounded-2xl border border-border/50 backdrop-blur-xl bg-glass-bg/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                2M+
              </div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="p-6 rounded-2xl border border-border/50 backdrop-blur-xl bg-glass-bg/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
