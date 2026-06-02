import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Download, FileText, Lock } from "lucide-react";

export default function DownloadsPage() {
  const categories = [
    {
      id: "materials",
      title: "Campaign Material",
      desc: "Standardized templates and structural blueprints for field operations and digital syndication.",
      files: [
        { name: "Field Mobilization Framework (v2.1)", type: "PDF", size: "2.4 MB" },
        { name: "Crisis Response Matrix", type: "PDF", size: "1.8 MB" }
      ]
    },
    {
      id: "assets",
      title: "Briefing Assets",
      desc: "Declassified slide decks and presentation structures for executive-level political strategy.",
      files: [
        { name: "Q1 Macro Sentiment Overview", type: "PPTX", size: "8.2 MB" },
        { name: "Algorithmic Suppression Defense", type: "PPTX", size: "14.5 MB" }
      ]
    },
    {
      id: "pdfs",
      title: "Whitepapers & Reports",
      desc: "Comprehensive multi-year analyses and structural methodologies.",
      files: [
        { name: "The Death of the Swing Voter", type: "PDF", size: "4.1 MB" },
        { name: "Demographic Polling Fallacies", type: "PDF", size: "3.7 MB" }
      ]
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
              Resource Library
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-pit-white mb-6">
            Downloads
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl">
            Access our repository of declassified methodologies, campaign templates, and structural blueprints. Some internal-style resources require clearance.
          </p>
          
          <div className="space-y-16">
            {categories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                <h2 className="text-2xl font-serif font-bold text-pit-white mb-4">{category.title}</h2>
                <p className="text-white/70 mb-8">{category.desc}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.files.map((file, idx) => (
                    <div key={idx} className="surface-blue-tint border-2 border-pit-dark p-6 shadow-[6px_6px_0px_rgba(10,10,10,1)] flex items-center justify-between group hover:-translate-y-1 hover:shadow-pit-subtle transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-pit-black border border-[rgba(0,0,0,0.1)] flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-pit-cyan" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-pit-white group-hover:text-pit-blue transition-colors line-clamp-1">{file.name}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{file.type} • {file.size}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-pit-dark flex items-center justify-center group-hover:bg-pit-blue group-hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <section id="internal" className="scroll-mt-32">
              <div className="surface-3 p-10 border-2 border-pit-dark shadow-[12px_12px_0px_rgba(10,10,10,1)] flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-5 h-5 text-[var(--color-gold)]" />
                    <h2 className="text-2xl font-serif font-bold text-white">Classified Internal Resources</h2>
                  </div>
                  <p className="text-[rgba(255,255,255,0.7)] max-w-xl">
                    Executive-level algorithmic models, real-time crisis containment grids, and proprietary polling API access require verified clearance and active engagement status.
                  </p>
                </div>
                <button className="btn-gold shrink-0">
                  Request Clearance
                </button>
              </div>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

