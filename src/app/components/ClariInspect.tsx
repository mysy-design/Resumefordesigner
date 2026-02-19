import React from 'react';
import demoFlowsImage from '../../assets/0aa12068f97f5c6b24d375792ed06bb5f8a754aa.png';
import usabilityTestImage from '../../assets/a35d5a3eb1e7eca7b9a25c57042e7bcabe1e71d1.png';
import designOpportunitiesImage from '../../assets/ba1f1fcb39ada4458f90e1699a9f9a2361a09ba9.png';
import irisDesignSystemImage from '../../assets/4b869af23f6c7c97495fc8903cc8727a3fa34867.png';
import beforeIrisImage from '../../assets/fea84ee8933ccb0e990f3ef173ff43481c176f27.png';
import afterIrisImage from '../../assets/45703138588baa2dbfc0fd01b2b76737674d1620.png';
import inlineEditingImage from '../../assets/f6e425edff364cc7cd50ba1f74bfc30bf3db5ec6.png';
import detailPanelImage from '../../assets/79e63a1d22d5667699b96a19a5c8428139d88c4d.png';
import savedViewImage from '../../assets/0aeab7d4f182c40087086a3783548432d6dadfda.png';
import inspectAnythingImage from '../../assets/de93007e81a93a9f4f2830ab2bbe3f481ac01efb.png';
import adoptionRateChart from '../../assets/ef69127d71a414cc81a8ee24801079604380e5d3.png';
import linkedInPost from '../../assets/8dc52a220068a6d1f11c22cb0a6994e090c75941.png';

export default function ClariInspect({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        
        {/* Back Link */}
        <button onClick={onBack} className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm mb-8 sm:mb-12 inline-block">
          ← Back to work
        </button>

        {/* Project Title */}
        <div className="mb-16 sm:mb-20">
          <div className="text-[#999999] text-sm mb-4">Clari Core · 2025</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Inspect UX Audit & Core Enhancements
          </h1>
          <p className="text-lg sm:text-xl text-[#666666] leading-relaxed">
            Improving usability and adoption across a complex revenue intelligence platform
          </p>
        </div>

        {/* SECTION 1: OVERVIEW */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#1a1a1a]">
            Overview
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-4 max-w-3xl">
            Inspect is one of Clari's core products used by revenue teams to evaluate deal and account health. Unlike Studio products, Inspect serves a distinct user base with different workflows and expectations, which required a fresh understanding of their needs.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-3xl">
            I started with a comprehensive UX audit to identify high-impact usability gaps, align the experience with evolving user needs, and propose actionable improvements with clear ROI.
          </p>
        </section>

        {/* SECTION 2: AUDIT GOALS */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 text-[#1a1a1a]">
            Audit Goals
          </h2>

          {/* Goals List */}
          <div className="space-y-6 max-w-3xl">
            <div className="flex gap-4">
              <div className="text-[#3700ff] font-medium text-sm mt-0.5">01</div>
              <p className="text-[#666666] text-sm leading-relaxed flex-1">
                Enhance overall usability and user satisfaction
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-[#3700ff] font-medium text-sm mt-0.5">02</div>
              <p className="text-[#666666] text-sm leading-relaxed flex-1">
                Identify key friction points across critical flows
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-[#3700ff] font-medium text-sm mt-0.5">03</div>
              <p className="text-[#666666] text-sm leading-relaxed flex-1">
                Propose and prioritize top high-ROI design opportunities
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: AUDIT PROCESS */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#1a1a1a]">
            Audit Process
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-8 sm:mb-12 max-w-3xl">
            To build a grounded understanding of the product, I combined qualitative and collaborative approaches:
          </p>

          {/* Process List */}
          <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6 sm:p-8 mb-8">
            <ul className="space-y-3 text-[#666666] text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#3700ff] mt-0.5">•</span>
                <span>Reviewed and critiqued existing key flows with the product design & engineering team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3700ff] mt-0.5">•</span>
                <span>Facilitated FigJam sessions to align on pain points and mental models</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3700ff] mt-0.5">•</span>
                <span>Analyzed usability testing results across different user personas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3700ff] mt-0.5">•</span>
                <span>Gathered input from cross-functional stakeholders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3700ff] mt-0.5">•</span>
                <span>Listened to customer calls related to Inspect usage and feedback</span>
              </li>
            </ul>
          </div>

          {/* Demo & Key Flows */}
          <div className="mb-8">
            <img src={demoFlowsImage} alt="Demo and key flows review session" className="w-full rounded-lg" />
            <p className="text-[#999999] text-sm mt-3">
              Conducted FigJam sessions with key stakeholders to review flows, align on pain points, and gather feedback
            </p>
          </div>

          {/* Usability Testing */}
          <div className="mb-8">
            <div className="relative">
              <img 
                src={usabilityTestImage} 
                alt="Baseline usability test summary" 
                className="w-full rounded-lg"
              />
              {/* Blur overlay only on the right side (white content area) */}
              <div 
                className="absolute top-0 bottom-0 rounded-r-lg"
                style={{ 
                  left: '20%',
                  right: 0,
                  backdropFilter: 'blur(1.5px)',
                  WebkitBackdropFilter: 'blur(1.5px)'
                }}
              ></div>
            </div>
            <p className="text-[#999999] text-sm mt-3">
              Collaborated with UX researcher to establish baseline understanding from key personas
            </p>
          </div>

          {/* Design Opportunities */}
          <div className="mb-8">
            <img src={designOpportunitiesImage} alt="Top 10 design opportunities" className="w-full rounded-lg" />
            <p className="text-[#999999] text-sm mt-3 mb-6">
              Identified top 10 design opportunities based on user feedback, usability testing, and cross-functional input
            </p>
            
            {/* Prioritization scores */}
            <div className="bg-[#fafafa] border border-[#e0e0e0] rounded-lg p-6">
              <h4 className="text-[#1a1a1a] text-sm font-medium mb-4">Impact vs Effort Scoring</h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">1. Iris Integration</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 9</span>
                    <span className="text-[#666666]">Effort: 3</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">2. Inline Editing</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 8</span>
                    <span className="text-[#666666]">Effort: 4</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">3. Saved Views</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 7</span>
                    <span className="text-[#666666]">Effort: 3</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">4. Detail Panel Editing</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 7</span>
                    <span className="text-[#666666]">Effort: 5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">5. Inspect Anything</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 10</span>
                    <span className="text-[#666666]">Effort: 9</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">6. Nested Relationships</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 9</span>
                    <span className="text-[#666666]">Effort: 6</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">7. Search Enhancement</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 6</span>
                    <span className="text-[#666666]">Effort: 4</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">8. Bulk Actions</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 6</span>
                    <span className="text-[#666666]">Effort: 5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">9. Data Export</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 5</span>
                    <span className="text-[#666666]">Effort: 3</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded">
                  <span className="text-[#666666]">10. Column Customization</span>
                  <div className="flex gap-2">
                    <span className="text-[#3700ff] font-medium">Impact: 5</span>
                    <span className="text-[#666666]">Effort: 2</span>
                  </div>
                </div>
              </div>
              <p className="text-[#999999] text-xs mt-4">Scored with PM and engineering on a 1-10 scale for both Impact and Effort</p>
            </div>
          </div>

          <div className="bg-[#3700ff]/10 border border-[#3700ff]/30 rounded-lg p-6">
            <p className="text-[#1a1a1a] text-sm leading-relaxed">
              After scoring each opportunity, we prioritized quick wins (high impact, low effort) like Iris Integration and Inline Editing, while big bets like "Inspect Anything" were scoped for future roadmap. Below are the key improvements we implemented following the audit.
            </p>
          </div>
        </section>

        {/* SECTION 4: KEY DESIGN OUTCOMES */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 text-[#1a1a1a]">
            Key Design Outcomes
          </h2>
          
          <div className="space-y-12">
            {/* Outcome 1: Design System Alignment */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6 sm:p-8">
              <h3 className="text-[#1a1a1a] text-lg mb-4">1. Nested Account & Deal Relationships with Iris Integration</h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-4">
                When Clari's Iris design system launched, Inspect wasn't integrated with the latest components. But beyond visual consistency, the real unlock was enabling nested account and deal relationships directly within the interface.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed mb-6">
                Previously, users had to jump between multiple pages to understand the relationship breakdown between accounts and deals. The new implementation allows users to see hierarchical breakdowns in context, supports more diverse business models, and eliminates the friction of constant navigation. This wasn't just a design system update — it was a fundamental improvement in how users explore and understand their revenue data.
              </p>
              
              {/* Iris Design System */}
              <div className="mb-6">
                {/* Stacked pages effect - like a book */}
                <div className="relative w-full max-w-2xl mx-auto">
                  {/* Back page 4 - furthest back */}
                  <div className="absolute top-4 right-[-8px] w-full h-full bg-[#f8f8f8] border border-[#e3e3e3] rounded-lg"></div>
                  {/* Back page 3 */}
                  <div className="absolute top-3 right-[-6px] w-full h-full bg-[#fafafa] border border-[#e5e5e5] rounded-lg"></div>
                  {/* Back page 2 */}
                  <div className="absolute top-2 right-[-4px] w-full h-full bg-[#fcfcfc] border border-[#e8e8e8] rounded-lg"></div>
                  {/* Back page 1 - middle */}
                  <div className="absolute top-1 right-[-2px] w-full h-full bg-[#fdfdfd] border border-[#ebebeb] rounded-lg"></div>
                  {/* Front page */}
                  <div className="relative bg-white border border-[#d0d0d0] rounded-lg overflow-hidden shadow-md">
                    <img src={irisDesignSystemImage} alt="Iris Design System" className="w-full rounded-lg" />
                  </div>
                </div>
                <p className="text-[#999999] text-sm mt-4 text-center">
                  Clari's Iris Design System — a comprehensive component library for consistent user experiences
                </p>
              </div>

              {/* Before/After Comparison */}
              <div className="space-y-6">
                <div>
                  <div className="text-[#666666] text-sm font-medium mb-3">Before</div>
                  <img src={beforeIrisImage} alt="Before Iris Integration" className="w-full rounded-lg" />
                  <p className="text-[#999999] text-xs mt-2">Inconsistent UI patterns</p>
                </div>
                
                {/* Divider with Arrow */}
                <div className="flex items-center gap-4 py-4">
                  <div className="flex-1 h-px bg-[#e0e0e0]"></div>
                  <div className="flex items-center gap-2 text-[#3700ff] text-sm font-medium whitespace-nowrap">
                    <span>↓</span>
                    <span>Nested Relationships + Iris Integration</span>
                    <span>↓</span>
                  </div>
                  <div className="flex-1 h-px bg-[#e0e0e0]"></div>
                </div>
                
                <div>
                  <div className="text-[#666666] text-sm font-medium mb-3">After</div>
                  <img src={afterIrisImage} alt="After Iris Integration" className="w-full rounded-lg" />
                  <p className="text-[#999999] text-xs mt-2">In-context breakdown, supports diverse business models</p>
                </div>
              </div>
            </div>

            {/* Outcome 2: Inline & Detail Panel Editing */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6 sm:p-8">
              <h3 className="text-[#1a1a1a] text-lg mb-4">2. Inline & Detail Panel Editing</h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-4">
                Low adoption was driven in part by fragmented editing workflows. Some actions were editable in Inspect, while others required switching back to Salesforce or external tools.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed mb-4">
                We enabled inline editing and detail panel editing to:
              </p>
              <ul className="space-y-2 text-[#666666] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Reduce context switching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Improve data hygiene</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Support faster, more confident updates directly within Inspect</span>
                </li>
              </ul>

              {/* Inline Editing */}
              <div className="mt-8">
                <img src={inlineEditingImage} alt="Inline editing example" className="w-full rounded-lg" />
                <p className="text-[#999999] text-sm mt-3">
                  Inline editing allows users to make quick changes without leaving the current context
                </p>
              </div>

              {/* Detail Panel Editing */}
              <div className="mt-6">
                <img src={detailPanelImage} alt="Detail panel editing example" className="w-full rounded-lg" />
                <p className="text-[#999999] text-sm mt-3">
                  Detail panel editing provides a dedicated space for more complex updates
                </p>
              </div>
            </div>

            {/* Outcome 3: Saved View Creation */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6 sm:p-8">
              <h3 className="text-[#1a1a1a] text-lg mb-4">3. Saved View Creation & Management</h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-4">
                Users frequently customize filters and columns, but the existing saved view flow was hard to discover and confusing.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed mb-4">
                We redesigned the view creation experience to:
              </p>
              <ul className="space-y-2 text-[#666666] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Make customization more intuitive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Clearly guide users through saving and reusing views</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Support personalized workflows with less friction</span>
                </li>
              </ul>

              {/* Saved View Image */}
              <div className="mb-6">
                <img src={savedViewImage} alt="Saved view creation example" className="w-full rounded-lg" />
                <p className="text-[#999999] text-sm mt-3">
                  Redesigned saved view creation and management to enhance user experience
                </p>
              </div>
            </div>

            {/* Outcome 4: Inspect Anything */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6 sm:p-8">
              <h3 className="text-[#1a1a1a] text-lg mb-4">4. Expanding Inspect Beyond CRM Data</h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-4">
                Through audit findings and customer feedback, we identified a growing limitation: users rely on multiple tools (e.g. spreadsheets, BI tools) to understand their revenue context.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed">
                This led to early concept exploration around <span className="font-medium">"Inspect Anything"</span> — a vision for inspecting any object or data source, combining CRM and third-party data to reduce tool switching and provide a more complete revenue picture.
              </p>
              <div className="mt-6">
                <img src={inspectAnythingImage} alt="Inspect Anything concept" className="w-full rounded-lg" />
                <p className="text-[#999999] text-sm mt-3">
                  Early concept for "Inspect Anything" — combining CRM and third-party data
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: IMPACT */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-2xl sm:text-3xl mb-8 text-[#1a1a1a]">
            Impact
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 rounded-lg">
              <p className="text-[#666666] text-sm leading-relaxed">Improved usability and clarity across core Inspect surfaces</p>
            </div>
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 rounded-lg">
              <p className="text-[#666666] text-sm leading-relaxed">Increased adoption through reduced friction and in-context editing</p>
            </div>
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 rounded-lg">
              <p className="text-[#666666] text-sm leading-relaxed">Established a prioritized roadmap of high-ROI design improvements</p>
            </div>
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 rounded-lg">
              <p className="text-[#666666] text-sm leading-relaxed">Created a foundation for expanding Inspect beyond traditional CRM use cases</p>
            </div>
          </div>

          {/* Adoption Rate Chart */}
          <div className="mb-8">
            <img src={adoptionRateChart} alt="Adoption rate chart" className="w-full rounded-lg" />
            <p className="text-[#999999] text-sm mt-3">
              Adoption rate chart showing the increase in Inspect usage after design improvements
            </p>
          </div>

          {/* LinkedIn Post */}
          <div className="mb-8">
            <img src={linkedInPost} alt="LinkedIn post" className="w-full rounded-lg" />
            <p className="text-[#999999] text-sm mt-3">
              Clari's LinkedIn promotion of Inspect's enhanced capabilities
            </p>
          </div>
        </section>

        {/* SECTION 6: REFLECTION */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl mb-8 text-[#1a1a1a]">
            Reflection
          </h2>
          
          <p className="text-[#666666] text-lg leading-relaxed italic border-l-2 border-[#e0e0e0] pl-6">
            This project reinforced the importance of stepping back before designing forward. By auditing real workflows and aligning closely with users, PMs, and engineers, we were able to focus design effort where it mattered most — improving clarity, confidence, and adoption in a highly complex product.
          </p>
        </section>

        {/* Navigation */}
        <div className="pt-12 border-t border-[#e0e0e0]">
          <button onClick={onBack} className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm">
            ← Back to all work
          </button>
        </div>
      </div>
    </div>
  );
}