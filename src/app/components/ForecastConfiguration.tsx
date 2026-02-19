import React from 'react';
import caseVolumeImage from '../../assets/d39fe774e3fc4e4ebbf81136036d53f82efe230d.png';
import readOnlyUIImage from '../../assets/ba8dec68151efb5d6818b4310a07c4e3b97586e1.png';
import workflowDiagramImage from '../../assets/6f8a7ca6e30734b2b5c479086f7ccda85974bc31.png';
import designFlow1Image from '../../assets/132c8568735bf92cf9469e36ffdbab7e7cba8e85.png';
import designFlow2Image from '../../assets/c36483c2a01dfce15bf5c37b78510cfc4ed1133f.png';
import jsonConfigImage from '../../assets/f76d5f084e46d9deb84996db3511a6c78b51ffa0.png';
import editFieldSettingsImage from '../../assets/6d02d63e3e02e9608742e446b77037a091608453.png';
import readOnlyFieldImage from '../../assets/f72f255e79c7d3dfe0b55c3a6893b33f971bf4a3.png';
import reviewChangesImage from '../../assets/b2c9c93d845872cf691817c75b450ec2f35ef670.png';
import guardrailsWarningImage from '../../assets/f865610b6b820d0dd7b7a7dcc53a66ace32954ba.png';

export default function ForecastConfiguration({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        
        {/* Back Link */}
        <button onClick={onBack} className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm mb-8 sm:mb-12 inline-block">
          ← Back to work
        </button>

        {/* Project Title */}
        <div className="mb-16 sm:mb-20">
          <div className="text-[#999999] text-sm mb-4">Clari Studio · 2023</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Forecast Configuration
          </h1>
          <p className="text-lg sm:text-xl text-[#666666] leading-relaxed">
            Scaling a complex, support-led system into a self-service admin experience
          </p>
        </div>

        {/* SECTION 1: CONTEXT & PROBLEM */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#1a1a1a]">
            Forecast configuration didn't scale as Clari's customer base grew.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-8 sm:mb-12 max-w-3xl">
            Before this product, all forecast configuration changes were handled by internal teams through manual workflows.
            As demand increased, the process became time-intensive, error-prone, and difficult to scale.
          </p>

          {/* Key Metrics Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 rounded-lg">
              <div className="text-3xl text-[#1a1a1a] mb-2">4–8 hrs/week</div>
              <p className="text-[#666666] text-sm">Spent by consultants on configuration work</p>
            </div>
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 rounded-lg">
              <div className="text-3xl text-[#1a1a1a] mb-2">1–7 days</div>
              <p className="text-[#666666] text-sm">Average turnaround per request</p>
            </div>
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 rounded-lg">
              <div className="text-3xl text-[#1a1a1a] mb-2">Growing</div>
              <p className="text-[#666666] text-sm">Month-over-month increase in requests</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: BEFORE */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#1a1a1a]">
            A workflow optimized for safety, not speed or clarity
          </h2>
          <ul className="text-base sm:text-lg text-[#666666] leading-relaxed space-y-2 mb-8 sm:mb-12 list-disc list-inside">
            <li>Configuration handled exclusively by Professional Services & Support</li>
            <li>Changes required meetings, manual edits, and careful validation</li>
            <li>Small mistakes could break forecasting logic</li>
          </ul>

          {/* Admin Workflow Diagram */}
          <div className="mb-8">
            <img src={workflowDiagramImage} alt="Admin workflow diagram" className="w-full rounded-lg" />
            <p className="text-[#999999] text-sm mt-3">
              A time-intensive workflow relying on templates, duplication, and manual validation.
            </p>
          </div>

          {/* JSON Screenshot */}
          <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-4 sm:p-6">
            <img src={jsonConfigImage} alt="JSON configuration" className="w-full rounded-lg mb-3" />
            <p className="text-[#999999] text-sm">
              Configuration changes required direct JSON edits by internal experts.
            </p>
          </div>
        </section>

        {/* SECTION 3: DESIGN STRATEGY */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#1a1a1a]">
            A phased approach toward self-service
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-6 sm:mb-8 max-w-3xl">
            Full self-service editing wasn't feasible from day one due to system complexity and risk.
            We aligned on a phased rollout that prioritized clarity first, then safe editing.
          </p>
          <div className="space-y-4">
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-4 sm:p-6 rounded-lg">
              <div className="text-[#1a1a1a] font-medium mb-1">Phase 1: Read-only visibility</div>
              <p className="text-[#666666] text-sm">Give customers clarity before control</p>
            </div>
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-4 sm:p-6 rounded-lg">
              <div className="text-[#1a1a1a] font-medium mb-1">Phase 2: Editing with guardrails</div>
              <p className="text-[#666666] text-sm">Enable safe configuration changes</p>
            </div>
          </div>
        </section>

        {/* SECTION 4: PHASE 1 */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#1a1a1a]">
            Clarity before control
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-8 sm:mb-12 max-w-3xl">
            Read-only access allowed customers to clearly see their existing configuration.
            This alone reduced miscommunication and eliminated many meeting-based requests.
          </p>

          {/* Read-Only UI */}
          <div>
            <img src={readOnlyUIImage} alt="Read-only forecasting admin UI" className="w-full rounded-lg" />
            <p className="text-[#999999] text-sm mt-3">
              Read-only access gave customers visibility without risking system integrity.
            </p>
          </div>
        </section>

        {/* SECTION 5: PHASE 2 */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#1a1a1a]">
            Designing for complex dependencies
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-8 sm:mb-12 max-w-3xl">
            Editing introduced deep dependencies between fields and formulas.
            Through close collaboration with engineering, we designed a draft-based model that surfaced conflicts before publish.
          </p>

          {/* Request Type Analysis */}
          <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-4 sm:p-6 md:p-8 mb-8">
            <h3 className="text-[#1a1a1a] text-base sm:text-lg mb-4 sm:mb-6">Configuration Request Analysis</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left: Request breakdown */}
              <div className="md:col-span-2 space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Change Formulas</span>
                    <span className="text-[#3700ff] text-sm font-medium">33.3%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#3700ff] rounded-full" style={{ width: '33.3%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Add/Change Fields</span>
                    <span className="text-[#4d1aff] text-sm font-medium">26.4%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#4d1aff] rounded-full" style={{ width: '26.4%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Create New Tab(s)</span>
                    <span className="text-[#6633ff] text-sm font-medium">12.9%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#6633ff] rounded-full" style={{ width: '12.9%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Change Labels</span>
                    <span className="text-[#7c4dff] text-sm font-medium">6.5%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#7c4dff] rounded-full" style={{ width: '6.5%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Other</span>
                    <span className="text-[#9966ff] text-sm font-medium">6.5%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9966ff] rounded-full" style={{ width: '6.5%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Mass Updates</span>
                    <span className="text-[#999999] text-sm">4.0%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full" style={{ width: '4.0%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Remove Fields</span>
                    <span className="text-[#999999] text-sm">3.0%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full" style={{ width: '3.0%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Update Existing Models</span>
                    <span className="text-[#999999] text-sm">2.5%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full" style={{ width: '2.5%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#666666] text-sm">Create New Models</span>
                    <span className="text-[#999999] text-sm">2.0%</span>
                  </div>
                  <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full" style={{ width: '2.0%' }}></div>
                  </div>
                </div>
              </div>

              {/* Right: Summary stats */}
              <div className="space-y-4">
                <div className="bg-[#3700ff]/10 border border-[#3700ff]/30 p-4 rounded-lg">
                  <div className="text-[#666666] text-xs uppercase tracking-wider mb-1">Total Requests</div>
                  <div className="text-[#1a1a1a] text-3xl font-medium">201</div>
                </div>
                <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-4 rounded-lg">
                  <div className="text-[#666666] text-xs uppercase tracking-wider mb-1">Time Period</div>
                  <div className="text-[#1a1a1a] text-xl">23 days</div>
                </div>
                <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-4 rounded-lg">
                  <div className="text-[#666666] text-xs uppercase tracking-wider mb-1">Avg/Day</div>
                  <div className="text-[#1a1a1a] text-xl">~9 requests</div>
                </div>
              </div>
            </div>

            {/* Priority callout */}
            <div className="mt-8 pt-6 border-t border-[#e0e0e0]">
              <h4 className="text-[#1a1a1a] text-sm font-medium mb-3">Impact on Phase 2 Priorities</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#3700ff]/10 border border-[#3700ff]/30 p-4 rounded-lg">
                  <div className="text-[#7c7cff] text-xs uppercase tracking-wider mb-2">Priority 1</div>
                  <div className="text-[#1a1a1a] text-sm">Formula Editing</div>
                  <div className="text-[#666666] text-xs mt-1">33% of requests</div>
                </div>
                <div className="bg-[#4d1aff]/10 border border-[#4d1aff]/30 p-4 rounded-lg">
                  <div className="text-[#9d9dff] text-xs uppercase tracking-wider mb-2">Priority 2</div>
                  <div className="text-[#1a1a1a] text-sm">Field Management</div>
                  <div className="text-[#666666] text-xs mt-1">26% of requests</div>
                </div>
                <div className="bg-[#6633ff]/10 border border-[#6633ff]/30 p-4 rounded-lg">
                  <div className="text-[#b399ff] text-xs uppercase tracking-wider mb-2">Priority 3</div>
                  <div className="text-[#1a1a1a] text-sm">Tab Creation</div>
                  <div className="text-[#666666] text-xs mt-1">13% of requests</div>
                </div>
              </div>
            </div>

            <p className="text-[#999999] text-sm mt-6">
              Analysis of 201 configuration requests over 23 business days informed Phase 2 feature prioritization, 
              focusing first on formula editing and field management capabilities.
            </p>
          </div>

          {/* Design Flows */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-[#1a1a1a] text-lg mb-4">Workflow design for engineering alignment</h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-6 max-w-3xl">
                Flowcharts became our primary communication tool with engineering. These diagrams helped us identify edge cases, 
                validate logic paths, and build shared understanding of complex workflows before writing code.
              </p>
            </div>

            {/* Workflow 1: Simple and Straightforward */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6">
              <img src={designFlow1Image} alt="Workflow 1: Simple and straightforward" className="w-full rounded-lg mb-3" />
              <p className="text-[#999999] text-sm">
                Workflow #1: Simple and straightforward - mapping the happy path for single field edits
              </p>
            </div>

            {/* Workflow 2: OOTB Templates */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6">
              <img src={designFlow2Image} alt="Workflow 2: OOTB Templates" className="w-full rounded-lg mb-3" />
              <p className="text-[#999999] text-sm">
                Workflow #2: OOTB Templates - handling complex branching logic for out-of-the-box template workflows
              </p>
            </div>

            {/* Decision to Start Simple */}
            <div className="bg-[#3700ff]/10 border border-[#3700ff]/30 rounded-lg p-6 mt-6">
              <h5 className="text-[#1a1a1a] text-sm font-medium mb-3">Decision: Start simple, then scale complexity</h5>
              <p className="text-[#666666] text-sm leading-relaxed mb-3">
                After reviewing both workflows with the engineering team, we decided to launch <span className="font-medium">Workflow #1 first</span> (simple, single-field editing). 
                This approach allowed us to:
              </p>
              <div className="space-y-2 text-[#666666] text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Ship faster with lower technical complexity and risk</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Address the majority of support tickets (60%+ were single-field changes)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Learn from real usage before tackling multi-field dependencies</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#7c7cff] mt-0.5">→</span>
                  <span>Build user confidence with a simpler, safer initial release</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 Product Screenshots */}
          <div className="mt-12 space-y-8">
            <h3 className="text-[#1a1a1a] text-xl mb-6">Phased rollout: From simple to complex</h3>
            
            {/* Single Edit - Phase 2.1 */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6">
              <img src={editFieldSettingsImage} alt="Single field editing interface" className="w-full rounded-lg mb-3" />
              <p className="text-[#999999] text-sm">
                Phase 2.1: Single field editing launched first—lower risk, no complex guardrails needed. This alone covered the majority of support tickets.
              </p>
            </div>

            {/* Transition to Bulk Edit */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6 my-8">
              <h4 className="text-[#1a1a1a] text-sm font-medium mb-3">Next challenge: Bulk editing with guardrails</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                With single-field editing shipped, we moved to Phase 2.2: enabling users to edit multiple fields at once. 
                This introduced complex dependencies—changing one field could break formulas or create conflicts across the configuration. 
                We needed intelligent guardrails to catch these issues before users published.
              </p>
            </div>

            {/* Bulk Edit Interface */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6">
              <img src={readOnlyFieldImage} alt="Bulk editing interface" className="w-full rounded-lg mb-3" />
              <p className="text-[#999999] text-sm">
                Phase 2.2 bulk editing interface: Users can now edit multiple fields simultaneously, with clear visual indicators for editable fields
              </p>
            </div>

            {/* Multi-field Edit with Guardrails */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6">
              <img src={guardrailsWarningImage} alt="Guardrails warning" className="w-full rounded-lg mb-3" />
              <p className="text-[#999999] text-sm">
                Intelligent guardrails detect conflicts and dependencies across multiple fields, preventing configuration errors before publish
              </p>
            </div>

            {/* User Testing Insights */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-8 mt-12">
              <h4 className="text-[#1a1a1a] text-lg mb-6">Usability Testing: Capability vs. Confidence</h4>
              
              <div className="space-y-6">
                {/* Testing Overview */}
                <p className="text-[#666666] text-sm leading-relaxed">
                  After implementing all guardrails for bulk editing, we conducted moderated usability tests with 6 participants 
                  (internal power users and customer-facing team members) to validate the workflow. While task completion rates were high, 
                  behavioral observations revealed a critical gap between capability and confidence.
                </p>

                {/* Task Completion Table */}
                <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6">
                  <h5 className="text-[#1a1a1a] text-sm font-medium mb-4">Task Completion</h5>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-[#e0e0e0]">
                          <th className="text-left text-[#666666] font-normal pb-3 pr-4">Participant</th>
                          <th className="text-left text-[#666666] font-normal pb-3 pr-4">Role</th>
                          <th className="text-center text-[#666666] font-normal pb-3">Completed</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#666666]">
                        <tr className="border-b border-[#e0e0e0]">
                          <td className="py-3 pr-4">P1</td>
                          <td className="py-3 pr-4">Customer Success Manager</td>
                          <td className="text-center py-3"><span className="text-green-400">11/11</span></td>
                        </tr>
                        <tr className="border-b border-[#e0e0e0]">
                          <td className="py-3 pr-4">P2</td>
                          <td className="py-3 pr-4">Support Engineer</td>
                          <td className="text-center py-3"><span className="text-green-400">11/11</span></td>
                        </tr>
                        <tr className="border-b border-[#e0e0e0]">
                          <td className="py-3 pr-4">P3</td>
                          <td className="py-3 pr-4">Senior Product Manager</td>
                          <td className="text-center py-3"><span className="text-amber-400">10/11</span></td>
                        </tr>
                        <tr className="border-b border-[#e0e0e0]">
                          <td className="py-3 pr-4">P4</td>
                          <td className="py-3 pr-4">Solutions Consultant</td>
                          <td className="text-center py-3"><span className="text-green-400">11/11</span></td>
                        </tr>
                        <tr className="border-b border-[#e0e0e0]">
                          <td className="py-3 pr-4">P5</td>
                          <td className="py-3 pr-4">Implementation Specialist</td>
                          <td className="text-center py-3"><span className="text-green-400">11/11</span></td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4">P6</td>
                          <td className="py-3 pr-4">Technical Account Manager</td>
                          <td className="text-center py-3"><span className="text-amber-400">9/11</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-[#999999] text-xs mt-4">
                    Average completion rate: 94% (62/66 tasks completed)
                  </p>
                </div>

                {/* Key Finding */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                  <div className="text-amber-400 text-xs uppercase tracking-wider mb-3">Critical Insight</div>
                  <p className="text-[#1a1a1a] text-sm leading-relaxed">
                    Despite high task completion, participants exhibited significant hesitation before publishing changes—
                    especially when multiple fields were edited. The system was <span className="italic">usable</span>, but users lacked <span className="italic">confidence</span>.
                  </p>
                </div>

                {/* User Quotes */}
                <div>
                  <h5 className="text-[#1a1a1a] text-sm font-medium mb-3">What we heard</h5>
                  <div className="space-y-3">
                    <div className="bg-[#f5f5f5] border-l-2 border-[#999999] pl-4 py-3">
                      <p className="text-[#666666] text-sm italic">"I'm not sure what I just changed... can I see a summary?"</p>
                      <p className="text-[#999999] text-xs mt-1">— P2, after editing 3 fields</p>
                    </div>
                    <div className="bg-[#f5f5f5] border-l-2 border-[#999999] pl-4 py-3">
                      <p className="text-[#666666] text-sm italic">"What if I broke something? Is there an undo?"</p>
                      <p className="text-[#999999] text-xs mt-1">— P4, hovering over publish button</p>
                    </div>
                    <div className="bg-[#f5f5f5] border-l-2 border-[#999999] pl-4 py-3">
                      <p className="text-[#666666] text-sm italic">"I wish I could review everything before it goes live."</p>
                      <p className="text-[#999999] text-xs mt-1">— P1, requesting feature</p>
                    </div>
                  </div>
                </div>

                {/* Observed Behaviors */}
                <div>
                  <h5 className="text-[#1a1a1a] text-sm font-medium mb-3">Observed behaviors</h5>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-[#f5f5f5] rounded-lg p-4">
                      <div className="text-[#666666] text-xs mb-2">5 of 6 participants</div>
                      <p className="text-[#666666] text-sm">Re-checked changes multiple times before publishing</p>
                    </div>
                    <div className="bg-[#f5f5f5] rounded-lg p-4">
                      <div className="text-[#666666] text-xs mb-2">All participants</div>
                      <p className="text-[#666666] text-sm">Paused 5-10 seconds before clicking "Publish"</p>
                    </div>
                    <div className="bg-[#f5f5f5] rounded-lg p-4">
                      <div className="text-[#666666] text-xs mb-2">3 of 6 participants</div>
                      <p className="text-[#666666] text-sm">Verbally expressed anxiety about breaking forecasts</p>
                    </div>
                    <div className="bg-[#f5f5f5] rounded-lg p-4">
                      <div className="text-[#666666] text-xs mb-2">All participants</div>
                      <p className="text-[#666666] text-sm">Requested a way to preview all changes together</p>
                    </div>
                  </div>
                </div>

                {/* Design Implication */}
                <div className="pt-6 border-t border-[#e0e0e0]">
                  <div className="bg-[#3700ff]/10 border border-[#3700ff]/30 rounded-lg p-4">
                    <div className="text-[#7c7cff] text-xs uppercase tracking-wider mb-2">Design Response</div>
                    <p className="text-[#1a1a1a] text-sm leading-relaxed">
                      Users needed confidence, not just capability. We introduced <span className="font-medium">draft mode</span>—
                      a review step that lets users see all pending changes in one place before publishing, 
                      transforming anxiety into control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Iteration Section */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-8 mt-8">
              <h4 className="text-[#1a1a1a] text-lg mb-6">From Insight to Solution</h4>
              
              <div className="space-y-6">
                {/* Problem Reframe */}
                <div>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    The usability testing revealed that users could complete tasks, but lacked confidence in their changes. 
                    We brought these findings to the product and engineering team to explore solutions.
                  </p>
                </div>

                {/* Options Considered */}
                <div>
                  <h5 className="text-[#1a1a1a] text-sm font-medium mb-3">Solutions considered</h5>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="text-[#666666] mt-1">•</div>
                      <div>
                        <div className="text-[#666666] text-sm font-medium">Real-time validation warnings</div>
                        <p className="text-[#666666] text-xs mt-1">Show warnings as users edit, but this added cognitive load during editing</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-[#666666] mt-1">•</div>
                      <div>
                        <div className="text-[#666666] text-sm font-medium">Confirmation dialog before publish</div>
                        <p className="text-[#666666] text-xs mt-1">Simple to implement, but didn't address the core issue of change visibility</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-[#3700ff] mt-1">✓</div>
                      <div>
                        <div className="text-[#1a1a1a] text-sm font-medium">Draft mode with review step</div>
                        <p className="text-[#666666] text-xs mt-1">Let users accumulate changes and review them together before committing—giving them both visibility and control</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Draft Mode */}
                <div className="bg-[#3700ff]/10 border border-[#3700ff]/30 rounded-lg p-4">
                  <h5 className="text-[#1a1a1a] text-sm font-medium mb-2">Why draft mode won</h5>
                  <div className="space-y-2 text-[#666666] text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-[#7c7cff] mt-0.5">→</span>
                      <span>Addressed the "what did I change?" concern by showing all edits in one place</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#7c7cff] mt-0.5">→</span>
                      <span>Allowed users to edit at their own pace without publish anxiety</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#7c7cff] mt-0.5">→</span>
                      <span>Enabled safer workflows for complex multi-field changes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#7c7cff] mt-0.5">→</span>
                      <span>Aligned with existing mental models (like "draft emails")</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Draft Mode - Solution */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-6 mt-8">
              <img src={reviewChangesImage} alt="Review changes dialog" className="w-full rounded-lg mb-3" />
              <p className="text-[#999999] text-sm">
                Draft mode: Users can review all pending changes in one place before publishing, transforming anxiety into confidence
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: IMPACT */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl mb-8 text-[#1a1a1a]">
            Measurable operational impact
          </h2>
          
          {/* Case Volume Trend Chart */}
          <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg p-8 mb-8">
            <h3 className="text-[#1a1a1a] text-lg mb-6">Configuration Request Volume Over Time</h3>
            
            <img src={caseVolumeImage} alt="Case Volume Trend" className="w-full rounded-lg mb-3" />
            
            <p className="text-[#999999] text-sm">
              Configuration-related support requests dropped significantly after product launch, with continued decline as adoption increased.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-8 rounded-lg">
              <div className="text-4xl text-[#1a1a1a] mb-3">~80%</div>
              <p className="text-[#666666]">Reduction in configuration-related support tickets</p>
            </div>
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-8 rounded-lg">
              <div className="text-4xl text-[#1a1a1a] mb-3">Faster</div>
              <p className="text-[#666666]">Turnaround for common requests</p>
            </div>
          </div>

          <p className="text-[#666666] text-lg leading-relaxed italic border-l-2 border-[#e0e0e0] pl-6">
            This project showed that improving visibility can unlock scale even before full self-service is introduced.
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