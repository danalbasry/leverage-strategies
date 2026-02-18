import type { ResearchArticle } from "@/lib/types";

export const aiSalesPlaybook: ResearchArticle = {
  slug: "ai-sales-playbook",
  title: "How to Actually Use AI If You Carry a Quota",
  subtitle: "The AI Sales Playbook for Individual Contributors",
  description:
    "Every rep has access to AI tools. Few have a system. This is the field manual: Claude as a persistent sales OS, a three-tool stack that saves 11+ hours a week, four AI teammates, and seven copy-paste playbooks.",
  category: "framework",
  date: "2026-02-15",
  readTime: "20 min read",
  author: "Dan Albasry",
  thumbnailUrl: "/images/article-sales.png",
  coverBg: "#1a2f2b",
  keyTakeaways: [
    "Sales professionals who use AI daily are 2x more likely to hit quota, and save 11+ hours per week. The gap is already visible in pipeline metrics.",
    "The system runs on three tools costing ~$50/month: Claude as your persistent sales workspace, Perplexity as your live research engine, and voice dictation as the speed multiplier.",
    "Building a Claude Sales OS means creating a Project with custom instructions and a knowledge base that retains your ICP, product positioning, competitors, and writing voice across every conversation.",
    "Four AI teammates handle the work: The Researcher (5-minute pre-call prep), The Prospector (personalized outbound at scale), The Deal Desk (post-call processing in 60 seconds), and The Coach (private strategic advisor for career navigation).",
    "A 30-day implementation plan gets you from zero to a fully operational AI sales system, with seven copy-paste playbooks for cold outbound, pre-call prep, proposals, pipeline review, and more.",
    "Reps who build their system this month will have three months of compounding context and refined workflows by the time their peers start taking this seriously. That gap does not close easily.",
  ],
  executiveSummary:
    "The playbook that built most sales careers, memorize the pitch, send the sequences, grind the phones, is being replaced by something fundamentally different. This is not a list of AI tools to evaluate. It is a step-by-step guide to building a personal AI sales operating system using Claude as your primary workspace, Perplexity as your live research engine, and voice dictation as the connective tissue that makes the whole system fast enough to use between calls. Inside: four AI teammates with exact workflows, ten copy-paste playbooks, a 30-day implementation plan, and the data showing AI-native reps are already pulling ahead in pipeline, quota attainment, and career trajectory.",
  sections: [
    {
      id: "carry-a-number",
      title: "If You Carry a Number in 2026",
      content: `<p>Your quota went up. Your territory might have gotten smaller. You have access to fourteen tools, nine of which have an AI feature you have never opened. Meanwhile, the rep sitting next to you, the one who seems to have more hours in the day, is using AI differently. Not better tools. A different approach.</p>
<p>They have built a system: a personal operating environment where AI does the research, drafts the outreach, preps the calls, updates the CRM, and coaches them on what is working. They are doing in four hours what used to take eight. And their pipeline shows it.</p>
<div class="stat-callout">
  <div class="stat-item"><span class="stat-number">11+</span><span class="stat-label">Hours saved per rep per week</span><span class="stat-source">HubSpot, 2024</span></div>
  <div class="stat-item"><span class="stat-number">44%</span><span class="stat-label">Higher productivity with AI tools</span><span class="stat-source">Salesforce, 2025</span></div>
  <div class="stat-item"><span class="stat-number">2x</span><span class="stat-label">More likely to hit quota (AI power users)</span><span class="stat-source">LinkedIn, 2025</span></div>
</div>
<p>Sales professionals who use AI daily are twice as likely to reach quota. Reps save over eleven hours per week. Productivity increases by 44%. New reps ramp 30 to 40% faster. These are not projections; these are measurements from 2025 and early 2026 deployments.</p>`,
    },
    {
      id: "ai-stack",
      title: "Your AI Stack: Claude, Perplexity, and Voice",
      content: `<p>Before you build anything, you need to understand how the three tools in your stack work together. Each one does something the others cannot. Using all three costs about $40 to $50 per month. That investment buys you roughly ten extra hours per week. There is no tool in sales with a better return.</p>
<h3>Claude Is Your Primary Workspace</h3>
<p>Claude is where you think, plan, write, and build. It is not a chatbot you visit when you need a quick answer. It is a persistent environment that knows your territory, your ICP, your product, your competitors, your tone of voice, and your deal history. Claude's Projects feature gives you a 200,000-token context window that retains your documents, custom instructions, and conversation history, large enough to hold your entire sales knowledge base.</p>
<h3>Perplexity Is Your Research Engine</h3>
<p>Perplexity does one thing Claude cannot: search the live web with citations. The handoff pattern is simple: Perplexity gathers, Claude synthesizes. You use Perplexity to pull raw research, then drop it into Claude where it gets combined with your knowledge base, matched to your voice, and turned into something you can actually use.</p>
<h3>Voice Is Your Speed Multiplier</h3>
<p>Speaking is three to four times faster than typing. More importantly, you will say things you would never type. A sixty-second voice debrief after a call captures richer context than you would ever bother typing into a CRM field. The rule is simple: if it takes more than thirty seconds to type, talk instead.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Tool</th><th>Role</th><th>When to Use</th></tr></thead>
  <tbody>
    <tr><td><strong>Claude</strong></td><td>Primary workspace: thinks, writes, remembers, builds</td><td>Research synthesis, email drafting, call prep, proposals, coaching</td></tr>
    <tr><td><strong>Perplexity</strong></td><td>Live research engine: finds and cites current info</td><td>Account research, news, hiring signals, competitive intel</td></tr>
    <tr><td><strong>Voice</strong></td><td>Speed multiplier: 3 to 4x faster than typing</td><td>Post-call debriefs, CRM updates, long prompts, on-the-go strategy</td></tr>
  </tbody>
</table></div>`,
    },
    {
      id: "claude-sales-os",
      title: "Building Your Claude Sales OS",
      content: `<p>This is the section that separates people who <em>use</em> AI from people who have an AI <em>system</em>. You are going to build a Claude Project that functions as your personal sales operating system.</p>
<p><strong>Step 1: Create Your Sales Project.</strong> Name it something specific: "Q2 Mid-Market AE: Enterprise SaaS" or "Strategic Accounts: Manufacturing."</p>
<p><strong>Step 2: Write Custom Instructions.</strong> This is the most important step. Include your role, quota, average deal size, sales cycle, writing voice preferences, and how you want Claude to behave. The more specific, the better.</p>
<p><strong>Step 3: Build Your Knowledge Base.</strong> Upload product positioning, ICP and personas, competitive intel, objection handling, case studies, and 10 to 15 of your best emails/posts.</p>
<p><strong>Step 4: Train Your Voice.</strong> Ask Claude to analyze your best writing and summarize your style. Save that summary as part of your Project instructions.</p>
<p><strong>Step 5: Build Account Workspaces.</strong> For strategic accounts, create dedicated conversation threads that accumulate context over time.</p>
<blockquote>Context compounds. Every piece of information you feed Claude makes every future output better. The rep who has been running a Claude Sales OS for three months has an assistant that knows their territory better than any human colleague.</blockquote>`,
    },
    {
      id: "four-ai-teammates",
      title: "Your Four AI Teammates",
      content: `<p>Your Claude Sales OS gives you four AI teammates, each handling a different part of the selling job.</p>
<h3>The Researcher</h3>
<p>Five-minute pre-call prep: pull the prospect's LinkedIn, their company page, recent news via Perplexity, tech stack, then paste everything into Claude and ask for a synthesized brief. Five minutes gives you a brief that would have taken twenty-five minutes to assemble manually.</p>
<h3>The Prospector</h3>
<p>Handles identifying targets, personalizing outreach, managing multi-touch sequences, and following up. Claude does not just write a better email; it writes a better email because it knows your ICP, your product, the prospect's context, and your voice.</p>
<h3>The Deal Desk</h3>
<p>After every call, dictate a sixty to ninety second debrief. Claude turns it into: CRM-ready notes, a follow-up email draft, a list of action items, and an update to your account workspace. Done before your next meeting starts.</p>
<h3>The Coach</h3>
<p>The most underused AI capability in sales. Claude becomes a strategic advisor for career navigation: mapping power dynamics, preparing for performance reviews, navigating internal politics, and building your narrative for promotion. Every rep has access to this. The ones using it have a structural advantage.</p>`,
    },
    {
      id: "ten-playbooks",
      title: "Ten Playbooks You Can Steal",
      content: `<p>Each playbook is a complete workflow: situation, tools needed, steps, and an example prompt you can adapt immediately.</p>
<ol>
  <li><strong>Cold Outbound Engine:</strong> Perplexity identifies ICP signals, Claude drafts personalized first-touch messages, feed responses back to refine.</li>
  <li><strong>Five-Minute Pre-Call Prep:</strong> Perplexity rapid research, paste into Claude for a one-page brief with discovery questions and objection prep.</li>
  <li><strong>Warm Inbound Speed-to-Lead:</strong> Sub-five-minute personalized response. Speed to response increases conversion up to 10x.</li>
  <li><strong>Closed-Lost Deal Revival:</strong> Check closed-lost deals for new signals, draft re-engagement messages referencing the trigger.</li>
  <li><strong>Multi-Threading a Live Deal:</strong> Map the buying committee, research each stakeholder, draft personalized outreach without undermining your champion.</li>
  <li><strong>Expansion Play from Usage Data:</strong> Identify expansion signals, draft outreach, build a one-page business case.</li>
  <li><strong>Proposal and SOW in Minutes:</strong> Voice-dictate deal terms, Claude produces a structured proposal: exec summary, solution, investment, timeline.</li>
  <li><strong>Pipeline Review Prep:</strong> Claude flags stale deals, missing next steps, single-threaded accounts, and recommends your narrative.</li>
  <li><strong>Executive-Ready Deal Memo:</strong> Voice-dictate the full context, Claude produces a concise internal memo: problem, opportunity, ask, timeline.</li>
  <li><strong>Personal Brand to Pipeline Flywheel:</strong> Turn deal wins and insights into LinkedIn posts, convert engagement into pipeline.</li>
</ol>`,
    },
    {
      id: "voice-as-weapon",
      title: "Voice as a Weapon",
      content: `<p>Most of the workflows in this playbook involve feeding Claude rich, detailed context. The problem is that typing rich, detailed context is slow and most reps will not do it. Voice solves this.</p>
<h3>The Three Voice Workflows</h3>
<p><strong>Post-Call Debrief (60 to 90 seconds):</strong> Immediately after every call, dictate what happened. Claude produces CRM notes, a follow-up email, a task list, and an account workspace update.</p>
<p><strong>Long Prompts on the Move:</strong> On your commute, between meetings, voice-dictate strategy and thinking into Claude. You would never type that paragraph. You will absolutely say it in forty-five seconds.</p>
<p><strong>Micro-Communications:</strong> Slack messages, internal updates, LinkedIn comments, quick emails: dictate, let Claude clean up, send. Small savings that compound across dozens of daily communications.</p>
<blockquote>If it takes more than thirty seconds to type, talk instead. Voice is not a convenience feature. It is a force multiplier that determines whether your AI system is something you use occasionally or something woven into every hour of your selling day.</blockquote>`,
    },
    {
      id: "building-tools",
      title: "Building Your Own Tools",
      content: `<p>One of Claude's most underused capabilities is building functional tools from plain English. You do not need to know how to code. You describe what you want, and Claude builds it.</p>
<h3>Three Tools You Can Build in Twenty Minutes</h3>
<p><strong>ROI Calculator:</strong> Describe your pricing model and value metrics. Claude builds a web application where you enter a prospect's numbers and it calculates ROI with a clean visual output.</p>
<p><strong>Deal Scoring Model:</strong> Describe the criteria that predict close rates. Claude builds a scoring tool that flags deals needing attention.</p>
<p><strong>Discovery Question Generator:</strong> Describe your methodology and buyer personas. Claude builds a tool that generates tailored discovery questions by persona and deal stage.</p>
<p>The principle: keep the scope tight, test with real data, iterate. A simple tool you use every day is worth more than a complex tool that sits in a folder.</p>`,
    },
    {
      id: "operating-rhythm",
      title: "The Daily, Weekly, and Monthly Rhythm",
      content: `<p>A system is only as good as the routine that sustains it.</p>
<h3>Daily: The Rep's Rhythm</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Time</th><th>What You Do</th><th>AI Role</th></tr></thead>
  <tbody>
    <tr><td>Morning (15 min)</td><td>Review signals, prep meetings, prioritize outreach</td><td>Claude surfaces priorities, Perplexity pulls signals, pre-call briefs generated</td></tr>
    <tr><td>Prospecting (60 min)</td><td>Run outbound, respond to inbound, qualify leads</td><td>Claude drafts personalized outreach. You review, edit, send.</td></tr>
    <tr><td>After each call</td><td>Voice debrief, follow-up, CRM update</td><td>60-second voice note into Claude. Notes, email, tasks generated.</td></tr>
    <tr><td>End of day (10 min)</td><td>Review pipeline, prep tomorrow</td><td>Claude summarizes activity, flags critical actions.</td></tr>
  </tbody>
</table></div>
<h3>Weekly: Manager's Rhythm</h3>
<p>Pipeline review with AI-generated risk flags. Call review for coaching moments. Outbound experiments with variant creation and measurement.</p>
<h3>Monthly: Leadership View</h3>
<p>The system produces where the team is winning and losing, which motions produce the best return, which segments are responding, and where to invest or cut.</p>`,
    },
    {
      id: "thirty-days",
      title: "Thirty Days to AI-Native",
      content: `<p>The week-by-week implementation plan. By the end of thirty days, you will have a fully operational Claude Sales OS.</p>
<h3>Week 1: Foundation</h3>
<p>Create your Claude Sales Project. Write custom instructions. Upload your knowledge base. Train Claude on your voice. Set up Perplexity and voice dictation. Practice the five-minute research workflow.</p>
<h3>Week 2: Core Workflows</h3>
<p>Build account workspace threads for your top five accounts. Run the Prospector workflow for ten prospects. Use Deal Desk after every call. Measure time saved.</p>
<h3>Week 3: Playbooks and Tools</h3>
<p>Work through three playbooks from your current priorities. Build one tool with Claude (ROI calculator, deal scorer, or discovery generator). Use it in a real conversation.</p>
<h3>Week 4: Rhythm and Measurement</h3>
<p>Lock in the daily rhythm. Measure results against your pre-AI baseline: time on research, emails per hour, pipeline created, response rates, meetings booked. Refine and share what is working with your team.</p>
<div class="stat-callout">
  <div class="stat-item"><span class="stat-number">45%</span><span class="stat-label">More deals closed with AI/ML tools</span><span class="stat-source">Salesforce, 2025</span></div>
  <div class="stat-item"><span class="stat-number">27%</span><span class="stat-label">Shorter sales cycles</span><span class="stat-source">McKinsey, 2025</span></div>
  <div class="stat-item"><span class="stat-number">40%</span><span class="stat-label">More time actually selling</span><span class="stat-source">Bain & Company, 2025</span></div>
</div>`,
    },
    {
      id: "the-gap",
      title: "The Gap Is Already Visible",
      content: `<p>The difference between AI-native sellers and everyone else is not subtle anymore. It shows up in pipeline reviews, in the speed of follow-ups, in the quality of proposals, in the depth of account knowledge, and in the number of hours left at the end of a week.</p>
<p>Reps using AI systems are 44% more productive and twice as likely to hit quota. They ramp 30 to 40% faster. They close 45% more deals. They report being 2.4 times less likely to feel overworked.</p>
<p>The question is not whether AI will change how selling works. It already has. The question is whether you are building a system or still treating AI as a chatbot you visit when you cannot think of a subject line.</p>
<blockquote>The best time to build your AI sales system was six months ago. The second best time is this afternoon. Create your first Claude Sales Project, pick one workflow from this playbook, and use it on your next call. That is all it takes to start. The compound effect handles the rest.</blockquote>`,
    },
  ],
  pdfUrl: "/pdfs/ai-sales-playbook.pdf",
  metaTitle:
    "How to Actually Use AI If You Carry a Quota | Leverage Strategies",
  metaDescription:
    "The AI sales playbook for AEs, SDRs, and account managers. Claude as a persistent sales OS, a $50/month stack that saves 11+ hours a week, four AI teammates, and ten copy-paste playbooks.",
  keywords: [
    "AI sales playbook",
    "Claude sales",
    "AI for sales reps",
    "sales AI system",
    "AI SDR",
    "Claude Projects",
    "sales productivity AI",
    "AI quota attainment",
  ],
  relatedSlugs: [
    "ai-roi-playbook",
    "non-technical-builders-playbook",
    "openai-frontier-playbook",
    "blockchain-gtm-playbook",
    "ai-powered-gtm-playbook-2026",
    "what-ai-agents-actually-are",
  ],
};
