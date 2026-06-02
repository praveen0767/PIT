import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TeamSection } from "@/components/sections/TeamSection";
import { ArrowRight, ShieldCheck, Target, Activity } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-pit-black">
      <Header />
      <main className="flex-1 relative z-10 w-full pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-pit-charcoal"></div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
              Corporate Intelligence
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-pit-white mb-12">
            About PIT
          </h1>
          
          <div className="space-y-24">
            
            <section id="story">
              <h2 className="text-3xl font-serif font-bold text-pit-white mb-8 border-b-2 border-pit-dark pb-4">Our Story</h2>
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    Founded over a decade ago, the Political Intelligence Team (PIT) emerged from a critical gap in high-level strategic advisory: the need for strictly empirical, data-driven campaign architecture devoid of conventional political bias.
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    Political consulting has historically relied on intuition, historical precedent, and charismatic guesswork. We recognized that in rapidly evolving demographic and informational ecosystems, intuition is a liability. 
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Today, we operate strictly behind the scenes. We are the premier architectural intelligence unit for national leaders facing severe electoral volatility or complex legislative rollouts. We engineer outcomes through mathematical precision and algorithmic targeting.
                  </p>
                </div>
                <div className="md:col-span-4 flex items-center justify-center p-8 surface-2 border-2 border-pit-dark shadow-pit-subtle">
                  <span className="font-serif italic text-2xl text-pit-white font-bold text-center">
                    "Intuition is a liability in a quantitative ecosystem."
                  </span>
                </div>
                <div className="md:col-span-12 mt-4">
                  <div className="w-full h-96 bg-pit-charcoal relative overflow-hidden border-2 border-pit-dark shadow-[12px_12px_0px_rgba(10,10,10,1)]">
                    <div className="absolute inset-0 bg-pit-blue opacity-20 mix-blend-multiply pointer-events-none z-10"></div>
                    <img src="/photos/group.jpeg" alt="PIT Core Team" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              </div>
            </section>

            <section id="vision">
              <h2 className="text-3xl font-serif font-bold text-pit-white mb-8 border-b-2 border-pit-dark pb-4">Vision</h2>
              <div className="surface-3 p-10 md:p-14 border-2 border-pit-dark shadow-[12px_12px_0px_rgba(10,10,10,1)] relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-64 h-64 border border-[rgba(255,255,255,0.1)] rounded-full pointer-events-none"></div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 leading-relaxed relative z-10">
                  To introduce absolute structural certainty into environments characterized by extreme political and legislative volatility.
                </h3>
                <p className="text-[rgba(255,255,255,0.8)] text-lg leading-relaxed relative z-10 max-w-2xl">
                  We believe that clarity of intelligence dictates certainty of execution. The modern political landscape is not won by the loudest voice, but by the most structurally sound strategy.
                </p>
              </div>
            </section>

            <section id="principles">
              <h2 className="text-3xl font-serif font-bold text-pit-white mb-8 border-b-2 border-pit-dark pb-4">Operating Principles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="pit-card">
                  <ShieldCheck className="w-8 h-8 text-pit-cyan mb-6" />
                  <h3 className="font-serif font-bold text-xl text-pit-white mb-3">Compartmentalized Secrecy</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We maintain strict non-disclosure firewalls. Our clients' strategic vulnerabilities are secured under executive-level intelligence protocols.
                  </p>
                </div>
                <div className="pit-card">
                  <Activity className="w-8 h-8 text-pit-cyan mb-6" />
                  <h3 className="font-serif font-bold text-xl text-pit-white mb-3">Empirical Supremacy</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Every strategic recommendation is backed by proprietary quantitative modeling. If it cannot be measured, it cannot be managed.
                  </p>
                </div>
                <div className="pit-card">
                  <Target className="w-8 h-8 text-pit-cyan mb-6" />
                  <h3 className="font-serif font-bold text-xl text-pit-white mb-3">Decisive Architecture</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We are not passive commentators. We design, deploy, and direct end-to-end strategic architectures engineered to produce specific results.
                  </p>
                </div>
              </div>
            </section>

            <section id="solutions">
              <h2 className="text-3xl font-serif font-bold text-pit-white mb-8 border-b-2 border-pit-dark pb-4">What PIT Solves</h2>
              <div className="space-y-6">
                
                <div className="flex gap-6 items-start border border-white/5 p-6 hover:surface-2 transition-colors">
                  <div className="w-12 h-12 surface-3 text-white flex items-center justify-center shrink-0 border border-pit-dark shadow-[4px_4px_0px_rgba(10,10,10,1)] font-serif font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-pit-white mb-2">Narrative Collapse & Trust Deficits</h3>
                    <p className="text-white/70 leading-relaxed">
                      When institutions face severe backlash or plummeting approval ratings, we deploy localized polling and algorithmic sentiment tracking to isolate the core vulnerability and engineer a stabilization strategy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start border border-white/5 p-6 hover:surface-2 transition-colors">
                  <div className="w-12 h-12 surface-3 text-white flex items-center justify-center shrink-0 border border-pit-dark shadow-[4px_4px_0px_rgba(10,10,10,1)] font-serif font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-pit-white mb-2">Electoral Reversals</h3>
                    <p className="text-white/70 leading-relaxed">
                      For campaigns operating from a structural disadvantage, we abandon broad-spectrum messaging and construct highly targeted micro-cohort engagement models to surgically flip key districts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start border border-white/5 p-6 hover:surface-2 transition-colors">
                  <div className="w-12 h-12 surface-3 text-white flex items-center justify-center shrink-0 border border-pit-dark shadow-[4px_4px_0px_rgba(10,10,10,1)] font-serif font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-pit-white mb-2">Policy Rollout Hostility</h3>
                    <p className="text-white/70 leading-relaxed">
                      We mitigate hostility toward critical legislative maneuvers by pre-testing narratives and structuring a phased communication deployment that controls the informational ecosystem before opposition forms.
                    </p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
        
        {/* Inject Team Section Here */}
        <TeamSection />
        
      </main>
      <Footer />
    </div>
  );
}

