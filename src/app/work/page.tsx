import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function WorkPage() {
  const engagements = [
    {
      id: "campaigns",
      title: "National Electoral Reversal",
      region: "Northern Belt",
      type: "Campaign Strategy",
      challenge: "The incumbent administration was facing a 14-point trust deficit according to historical polling models. Broad-spectrum advertising was creating narrative fatigue, and algorithmic suppression was burying core platform messaging.",
      response: "PIT abandoned generalized messaging grids. We deployed a highly compartmentalized narrative architecture targeting 8 specific micro-cohorts across 12 critical districts. Ground mobilization was synchronized via a proprietary data pipeline prioritizing predictive voter turnout over historical models.",
      result: "Engineered a 12-point swing in targeted districts within a 72-hour operational window, securing a decisive supermajority."
    },
    {
      id: "states",
      title: "Legislative Stabilization Initiative",
      region: "Southern Corridor",
      type: "Governance Advisory",
      challenge: "A highly contentious public infrastructure policy rollout triggered immediate, coordinated public backlash, destabilizing the administration's approval rating by 8 points in a single week.",
      response: "We initiated a rapid-response longitudinal polling sequence to isolate the exact source of narrative friction. We designed a counter-narrative syndication matrix deployed across secondary influencer networks, avoiding direct administrative confrontation.",
      result: "Sentiment stabilization achieved in 5 days. Policy rollout proceeded with zero further legislative friction, recovering the approval deficit entirely."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-pit-black">
      <Header />
      <main className="flex-1 relative z-10 w-full pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-pit-charcoal"></div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
              Operational Proof
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-pit-white mb-12">
            Strategic Engagements
          </h1>
          
          <div className="space-y-16">
            {engagements.map((engagement) => (
              <section key={engagement.id} id={engagement.id} className="scroll-mt-32">
                <div className="pit-card">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b-2 border-pit-dark pb-6 gap-4">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-pit-white">{engagement.title}</h2>
                    <div className="flex gap-3">
                      <span className="surface-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-pit-white border border-[rgba(0,0,0,0.1)]">
                        {engagement.region}
                      </span>
                      <span className="surface-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        {engagement.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    
                    <div className="space-y-3">
                      <span className="text-[10px] font-sans font-bold tracking-widest text-pit-blue uppercase">
                        I. The Challenge
                      </span>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {engagement.challenge}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] font-sans font-bold tracking-widest text-pit-blue uppercase">
                        II. Tactical Response
                      </span>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {engagement.response}
                      </p>
                    </div>

                    <div className="space-y-3 surface-2 p-5 border border-[rgba(0,0,0,0.05)] shadow-inner">
                      <span className="text-[10px] font-sans font-bold tracking-widest text-pit-white uppercase">
                        III. Decisive Outcome
                      </span>
                      <p className="text-pit-white font-bold text-sm leading-relaxed">
                        {engagement.result}
                      </p>
                    </div>

                  </div>
                </div>
              </section>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

