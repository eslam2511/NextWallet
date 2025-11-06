import { Shield, Zap, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your funds are protected with military-grade encryption and biometric authentication.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send and receive money in seconds, not days. Experience the speed of digital finance.",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Pay anyone, anywhere in the world with support for 150+ currencies.",
  },
  {
    icon: Smartphone,
    title: "Easy to Use",
    description: "Intuitive interface designed for everyone. Managing money has never been simpler.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take control of your financial future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border/50 backdrop-blur-xl bg-glass-bg/30 hover:bg-glass-bg/50 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
