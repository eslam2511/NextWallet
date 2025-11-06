import { Wallet, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 backdrop-blur-xl bg-glass-bg/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-secondary">
                <Wallet className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                NexWallet
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The future of digital payments, available today.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 NexWallet. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg hover:bg-glass-bg/50 transition-colors">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-glass-bg/50 transition-colors">
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-glass-bg/50 transition-colors">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
