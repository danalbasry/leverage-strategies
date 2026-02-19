import type { ResearchArticle } from "@/lib/types";

export const nonTechnicalBuildersPlaybook: ResearchArticle = {
  slug: "non-technical-builders-playbook",
  title: "The Non-Technical Builder's Playbook",
  subtitle:
    "How to Use Claude Code, VS Code, and Google AI Studio to Build Your Own AI Tools",
  description:
    "Most people paste into ChatGPT and call it AI. This playbook is for anyone ready to build real tools: apps that persist, run without you, and other people can use. Inside: how to set up Claude Code and Google AI Studio, the mindset shift from using to building, six profession-specific stories, and a sprint framework to go from zero to shipping. No coding required.",
  category: "framework",
  date: "2026-02-16",
  readTime: "22 min read",
  author: "Dan Albasry",
  thumbnailUrl: "/images/article-builders.png",
  coverBg: "#d97757",
  keyTakeaways: [
    "Using AI means re-explaining what you want every time and losing the work when you close the tab. Building with AI means creating tools that persist, produce consistent results, and other people can use, and the cost to start is $0.",
    "You do not need to learn to code. You need to learn to describe your work as a workflow: what goes in, what comes out, what are the rules, and who else will use it. Plain English is the only language required.",
    "Two tools cover everything: Claude Code (inside VS Code) for tools that process data and run automatically, and Google AI Studio for visual apps you can build and share in under an hour, with zero installation.",
    "Six profession-specific builder stories show exactly what to build: a physiotherapist's clinical note generator, a lawyer's contract reviewer, an HR onboarding engine, an artist's client brief system, an admin's meeting intelligence tool, and a sales leader's weekly report automation.",
    "The 30-Day Builder Sprint takes you from setup to shipping: Week 1 install and observe, Week 2 build your first personal tool, Week 3 share and automate, Week 4 multiply and teach someone else.",
    "Start read-only (tools that read data and produce reports), keep scope tight (one tool, one job), test with sample data first, and never paste passwords or secrets into AI. These are safety guardrails that let non-technical builders move fast without breaking things."
  ],
  executiveSummary:
    "Most people paste into ChatGPT and call it AI. This playbook is for anyone ready to build real tools: apps that persist, run without you, and other people can use. Inside: how to set up Claude Code and Google AI Studio, the mindset shift from using to building, six profession-specific stories (healthcare, legal, HR, creative, admin, sales), and a 30-day sprint framework to go from zero to shipping. No coding required. Just clarity about what you do and willingness to describe it. The only language you need is English.",
  sections: [
    {
      id: "the-new-builder-moment",
      title: "The New Builder Moment",
      content: `<p>You probably already use AI. You paste a document into ChatGPT and ask for a summary. You drop a messy email into Claude and ask it to clean up the language. That is useful. But it is not building. It is having a conversation, and the conversation disappears the moment you close the tab.</p>
<p>Building is different. Building means you create a tool that works the same way every time, that other people can use without knowing anything about AI, and that runs whether you are paying attention or not.</p>
<p>Using AI means re-explaining what you want every time. The output is inconsistent. Nobody else can use it. The moment you close the chat, the work is gone.</p>
<p>Building with AI means tools that persist, tools that other people can use, tools that produce consistent results without you writing a new prompt every time, tools that run in the background while you do your actual job.</p>
<div class="stat-callout">
  <div class="stat-item"><span class="stat-number">$0</span><span class="stat-label">Cost to start building with these tools</span></div>
  <div class="stat-item"><span class="stat-number">Days</span><span class="stat-label">Learning curve, not semesters</span></div>
  <div class="stat-item"><span class="stat-number">English</span><span class="stat-label">The only language you need</span></div>
</div>`,
    },
    {
      id: "understanding-claude",
      title: "Understanding Claude",
      content: `<p>Claude is an AI made by Anthropic. You may already know ChatGPT from OpenAI. Claude and ChatGPT are similar in that you can talk to both in plain English and they will help you think, write, and solve problems. But they are different tools with different strengths, and for building, Claude is the better choice.</p>
<p>You can use Claude in two ways. The first is through the website, claude.ai, where you type messages in a chat window. The second, and the one this playbook focuses on, is through Claude Code, which puts Claude directly inside a code editor so it can create files, write scripts, and build tools for you.</p>
<h3>Getting Started</h3>
<p><strong>Step 1: Create an Anthropic Account.</strong> Go to claude.ai, click Sign up. You can sign up with your email or a Google account. Once signed in, you will see a chat interface. Take a moment to say hello and confirm it works.</p>
<p><strong>Step 2: Understand the Plans.</strong> Claude has a free tier with limited messages per day. For serious building, Claude Pro costs $20 per month. Start free while following this playbook. Upgrade when you hit limits.</p>
<p><strong>Step 3: Get Your API Key.</strong> Go to console.anthropic.com. Sign in. Click API Keys, then Create Key. Name it My Builder Key. Copy it and save it somewhere safe. You will paste this into VS Code in a few minutes.</p>
<p>API usage is pay-as-you-go, separate from the $20/month Pro subscription. For building small tools, expect to spend $5 to $15 per month on API usage. You can set spending limits in the console so you never get surprised.</p>
<blockquote>ChatGPT is a great conversational assistant. Claude Code is a builder. When you want to have a conversation, either one works. When you want to create a tool that lives on your computer, that other people can use, and that you can improve over time, Claude Code is the right choice.</blockquote>`,
    },
    {
      id: "vs-code-setup",
      title: "Visual Studio Code: Setup Guide",
      content: `<p>VS Code is a free application made by Microsoft. It is a text editor designed for working with files and code. But you are not going to write code. You are going to use it as a workspace where Claude writes code for you while you direct the work in plain English.</p>
<p>Go to code.visualstudio.com. The website automatically detects your operating system. Download the installer. Run it. When the installation is complete, open VS Code.</p>
<h3>The Interface</h3>
<p><strong>The Sidebar</strong> (left edge): A vertical strip of icons. The Explorer icon shows your files and folders. The Extensions icon lets you install add-ons like Claude Code.</p>
<p><strong>The Editor Area</strong> (center): The large blank area where files open. You can have multiple files open in tabs, just like browser tabs.</p>
<p><strong>The Terminal</strong> (bottom): Press Ctrl+\` on Windows or Cmd+\` on Mac. When Claude tells you to run a command, you paste it here and press Enter.</p>
<h3>Installing Claude Code</h3>
<p>Before installing Claude Code, create your workspace folder. In your file manager, navigate to your Desktop or Documents folder. Create a new folder called AI-Tools. In VS Code, click File, then Open Folder. Select the AI-Tools folder. This is your workspace. Everything you build will live inside this folder.</p>
<p><strong>Step 1:</strong> In VS Code, click the Extensions icon in the sidebar. Search for Claude Code. You will see a result from Anthropic. Click Install.</p>
<p><strong>Step 2:</strong> A new Claude icon will appear in your sidebar. Click it. It will ask you to sign in or enter an API key. Paste the API key you created earlier.</p>
<p><strong>Step 3:</strong> Test it. In the chat panel, type "Hello, I just set up Claude Code. Can you see my AI-Tools folder?" If Claude responds and confirms it can see your workspace, you are ready to build.</p>`,
    },
    {
      id: "google-ai-studio",
      title: "Google AI Studio: Build Apps Without Code",
      content: `<p>Google AI Studio is a free, browser-based tool from Google that lets you build working applications by describing them in plain English. It is powered by Gemini. You do not need to install anything. You do not need a credit card. You type what you want, and Gemini builds a working app in under a minute.</p>
<p>Open your web browser and go to aistudio.google.com. Sign in with any Google account. Click Build, then New App. You will see a large text box where you describe what you want. That is it.</p>
<h3>When to Use Each Tool</h3>
<p>When you need something quick and visual, start in AI Studio. When you need something that processes data, runs automatically, or does something AI Studio cannot handle, use Claude Code. As you get comfortable, you will move between them naturally.</p>
<p>Some tools use both: Claude Code for the logic, AI Studio for the interface. Think of Claude Code as the backend engine and AI Studio as the frontend that people interact with.</p>
<h3>What You Can Build</h3>
<p><strong>Document processors:</strong> paste any document and get a structured summary, risk flags, or action items extracted. <strong>Draft generators:</strong> input context and key details, get a polished first draft. <strong>Data analyzers:</strong> upload a spreadsheet, ask questions in plain English, get charts and insights.</p>
<p><strong>Intake and forms:</strong> a structured app where someone inputs information and gets a formatted output. <strong>Content creators:</strong> describe the topic and format, get a first draft.</p>
<h3>Workspace Studio: Automations That Run Themselves</h3>
<p>Google Workspace Studio creates automations that run automatically inside Gmail, Calendar, Drive, and Chat. Templates include summarizing unread emails, notifying about messages from key people, labeling emails with action items, and generating daily digests.</p>
<p>Think of Workspace Studio as your always-on assistant. AI Studio builds tools you use on demand. Workspace Studio builds tools that run in the background and bring information to you.</p>`,
    },
    {
      id: "how-to-think-like-a-builder",
      title: "How to Think Like a Builder",
      content: `<p>The only skill you need to learn: how to describe your work as a workflow. Not in technical terms. In plain English. The way you would explain your job to a smart new hire on their first day.</p>
<h3>The Core Shift: From Doing to Describing</h3>
<p>When you do your job, you operate on autopilot. You open a spreadsheet, scan the columns, mentally filter out the rows that do not matter, calculate a number, paste it somewhere. An AI cannot read your autopilot. It needs you to describe what you do as a sequence of explicit steps.</p>
<h3>The Everything List</h3>
<p>Before you build anything, you need to know what to build. Get a piece of paper. Write down every single thing you do in a day. Do not filter. Circle everything that is repetitive, follows roughly the same pattern, and that you wish you could hand off to someone.</p>
<h3>The Job Story Formula</h3>
<p>Every tool starts with a job story: When does this happen? What do I do? What are the specific steps? How long does it take? What is the annoying part?</p>
<p>For example: Every Monday, I download a CSV from our system. I open it in Excel, delete the first three rows of headers, filter for active accounts only, calculate the total by region, and paste the results into a slide deck. It takes ninety minutes. I do the exact same steps every single week.</p>
<h3>The Four Questions That Turn Any Task Into a Tool</h3>
<p>Before you ask Claude to build anything, answer these:</p>
<p><strong>1. What goes in?</strong> A file? A block of text? A URL? Be specific: a CSV with columns for name, email, company, deal stage, and amount.</p>
<p><strong>2. What comes out?</strong> A formatted report? A summary? An email draft? Describe the output the way you would describe it to someone who has never seen it.</p>
<p><strong>3. What are the rules?</strong> What logic determines the output? If the deal is over $50K, flag it as enterprise. If the status is inactive for 90+ days, highlight it in red.</p>
<p><strong>4. Who else will use this?</strong> Just you? Your team? Your clients?</p>
<h3>Builder Tips</h3>
<p><strong>Talk too much, not too little.</strong> The biggest mistake non-technical builders make is being too brief. Do not write a prompt. Write a monologue. Talk the way you would talk to a colleague at a whiteboard. Ramble. Be redundant.</p>
<p><strong>Use dictation, not typing.</strong> Every phone and most computers have speech-to-text. Talk about what you want for two or three minutes straight. You will naturally produce a detailed description far better than anything you would have typed.</p>
<p><strong>Screenshot and paste.</strong> Found a tool or app that looks the way you want? Take a screenshot and paste it directly into Claude. Say: Make it look like this.</p>
<p><strong>Never start over, always iterate.</strong> When the output is wrong, say: Keep everything but change the header layout. Claude remembers the entire conversation. Starting over throws that context away.</p>
<p><strong>Paste error messages without understanding them.</strong> When something breaks, copy the entire error message, paste it to Claude, and say: Fix this and tell me what changed in plain English.</p>
<blockquote>The Emotional Reality of Building: Things will break. Frequently. Breaking things is the process. Professional developers break things constantly. Your only job when something breaks is to tell Claude what happened and ask it to fix it.</blockquote>`,
    },
    {
      id: "who-this-is-for",
      title: "Who This Is For",
      content: `<p>Six people who could use this playbook. If you recognize yourself, you are in the right place.</p>
<h3>Healthcare Professional</h3>
<p>You spend as much time on documentation as on patients. Tools you could build in a weekend: a clinical note generator from voice or shorthand notes, a patient intake form that pre-populates from referral information, an exercise prescription builder, a follow-up email drafter.</p>
<h3>Legal or Compliance Professional</h3>
<p>You review the same document types hundreds of times. Tools you could build: a contract clause reviewer that flags non-standard terms, a compliance checklist generator, a case brief summarizer, a document comparison tool.</p>
<h3>Business or Sales Professional</h3>
<p>You live in spreadsheets, your CRM, and your inbox. Tools you could build: a weekly report generator that cleans and formats data exports automatically, a pre-meeting research brief builder, a proposal draft generator, a lead scoring calculator.</p>
<h3>HR or People Operations Professional</h3>
<p>Every new hire means the same twenty tasks in the same order, done manually. Tools you could build: an onboarding checklist generator customized per role, an interview question bank, a policy document summarizer, a training completion tracker.</p>
<h3>Creative Professional</h3>
<p>Your creative work is what you love. The business side drains you. Tools you could build: a client brief intake app, an invoice generator from project details, a content calendar builder, a portfolio description writer.</p>
<h3>Manager or Admin Professional</h3>
<p>You make everything run. Tools you could build: a meeting prep briefing, a weekly status report assembler, an email digest that highlights what needs attention, a decision log that turns meeting notes into tracked action items.</p>
<div class="stat-callout">
  <div class="stat-item"><span class="stat-number">48hrs</span><span class="stat-label">To build your first useful tool</span></div>
  <div class="stat-item"><span class="stat-number">5-10</span><span class="stat-label">Iterations to get it right</span></div>
  <div class="stat-item"><span class="stat-number">Zero</span><span class="stat-label">Lines of code written by you</span></div>
</div>`,
    },
    {
      id: "claude-code-your-personal-engineer",
      title: "Claude Code: Your Personal Engineer",
      content: `<p>Every project you build should start with a file called CLAUDE.md. This is a plain text file that tells Claude who you are, what your job is, and what you are trying to build. Claude reads this file every time you start a conversation in that folder.</p>
<p>Write it in your own words for your own role. Include your job title, what you want Claude to help you build, your frustrations with current tools, and how you want Claude to communicate with you. This is the single most important thing you can do to get good results.</p>
<h3>Plan Mode</h3>
<p>Before any code is written, ask Claude to plan. Say: "I want to build a tool that does X. Before you write any code, plan the approach. What files will you create? What will each one do? Walk me through the plan step by step."</p>
<h3>Build Mode</h3>
<p>Once the plan is solid, say: "The plan looks good. Build it." Claude will create the files, explain each one, and tell you how to run them. If something does not work, paste the error message back and say: "Fix this and tell me what changed in plain English."</p>
<h3>Three Patterns</h3>
<p><strong>Pattern 1: Explore and Understand.</strong> Use when you want to understand what a script does. Tell Claude: "Explain this project to me as if I am completely new."</p>
<p><strong>Pattern 2: New Tool from a Job Story.</strong> Start with the story: "Every week I do X, then Y, then Z, and it takes me two hours." Claude will propose, plan, build, and explain.</p>
<p><strong>Pattern 3: Fix and Improve.</strong> Paste the error or describe what you want to change. Claude fixes it and explains what changed.</p>`,
    },
    {
      id: "google-ai-studio-build-apps",
      title: "Google AI Studio: Build Apps Without Code",
      content: `<p>Go to aistudio.google.com. Click Build, then New App. Type a description of the app you want, as if explaining it to a colleague. Hit Build. Wait thirty seconds to a minute. Gemini creates a working application.</p>
<p>Test it by pasting real content. If something is not right, use the chat sidebar to refine: Make the output shorter. Add a field for client name. Change the format to bullet points. Each change updates the app in real time.</p>
<h3>App Types You Can Build</h3>
<p><strong>Document processors:</strong> paste any document and get a structured summary, risk flags, or action items extracted.</p>
<p><strong>Draft generators:</strong> input context and key details, get a polished first draft.</p>
<p><strong>Data analyzers:</strong> upload a spreadsheet, ask questions in plain English, get charts and insights.</p>
<p><strong>Intake and forms:</strong> a structured app where someone inputs information and gets a formatted output.</p>
<p><strong>Content creators:</strong> describe the topic and format, get a first draft.</p>`,
    },
    {
      id: "six-builder-stories",
      title: "Six Builder Stories",
      content: `<h3>Story 1: The Physiotherapist's Clinical Notes</h3>
<p><strong>Before:</strong> After every patient, you spend fifteen to twenty minutes writing clinical notes. By your sixth patient, the notes from patient one are fuzzy. You stay late to finish documentation.</p>
<p><strong>After:</strong> You dictate shorthand notes during or right after the session. A tool converts your shorthand into structured SOAP-format documentation. The format is consistent every time.</p>
<p><strong>How to build it:</strong> Create a CLAUDE.md describing your role. Ask Claude to plan a script that takes shorthand input and produces SOAP-format notes. Then create an AI Studio app for mobile use between patients.</p>
<h3>Story 2: The Lawyer's Contract Reviewer</h3>
<p><strong>Before:</strong> You review NDAs and service agreements manually, looking for non-standard clauses. Each review takes thirty to sixty minutes.</p>
<p><strong>After:</strong> You paste the contract into an AI Studio app. It highlights every non-standard clause, flags risk areas, and compares key terms against your standard positions. What took an hour takes five minutes for the initial scan.</p>
<p><strong>How to build it:</strong> Build the app in AI Studio. Describe the clause types you look for and what standard looks like. Upload examples of good and bad contracts. Refine until the output matches your judgment.</p>
<h3>Story 3: The HR Manager's Onboarding Engine</h3>
<p><strong>Before:</strong> Every new hire means twenty tasks tracked in a spreadsheet. Things get missed. The experience is inconsistent.</p>
<p><strong>After:</strong> You enter the new hire's name, role, department, and start date into an app. It generates a complete onboarding checklist, drafts the welcome email, prepares the equipment request, and produces a week-one schedule.</p>
<p><strong>How to build it:</strong> Build the front end in AI Studio. Use Claude Code for the logic that customizes checklists by department and role. Set up Workspace Studio automations for timed emails.</p>
<h3>Story 4: The Artist's Client Brief System</h3>
<p><strong>Before:</strong> Clients describe what they want in rambling emails and voice messages. You spend thirty minutes per commission just organizing what they need.</p>
<p><strong>After:</strong> You send clients a link to an AI Studio app. They fill in structured fields. The app produces a formatted brief both of you can review. No more chasing information across five channels.</p>
<p><strong>How to build it:</strong> Build entirely in AI Studio. Describe the fields you need, the format of the output brief, and any conditional logic. Test with a real client.</p>
<h3>Story 5: The Admin's Meeting Intelligence</h3>
<p><strong>Before:</strong> You attend five to eight meetings a day. After each one, you spend time writing up notes and identifying action items. By late afternoon, you are behind.</p>
<p><strong>After:</strong> You paste the transcript or your raw notes into an AI Studio app. It produces a clean summary, bullet-point action items with owners, decisions made, and open questions. What took twenty minutes takes two.</p>
<h3>Story 6: The Sales Leader's Weekly Report</h3>
<p><strong>Before:</strong> Every Monday you export a spreadsheet, spend an hour cleaning data, calculating metrics, and formatting for the leadership presentation.</p>
<p><strong>After:</strong> You drop the export into a folder. A script Claude built cleans the data, calculates every metric, and produces a formatted summary. An AI Studio app lets any team member upload the file and get the same output. Monday prep went from two hours to five minutes.</p>`,
    },
    {
      id: "builder-operating-model",
      title: "The Builder Operating Model",
      content: `<h3>Organizing Your Tools</h3>
<p>Inside your AI-Tools folder, create one sub-folder for each tool you build. Every folder should have three things: CLAUDE.md (the instructions file), examples/ (sample inputs and expected outputs), and scripts/ (the code Claude generates).</p>
<p>In Google AI Studio, name your apps clearly: Clinical Note Generator, Contract Clause Reviewer, Monday Report Builder. Not "App 4" or "Test thing." You will forget what "Test thing" does in a week.</p>
<h3>Safety Guardrails</h3>
<p><strong>Start read-only.</strong> Your first tools should read data and produce summaries, suggestions, or reports. They should not send emails, modify databases, or change records automatically. Read-only tools cannot break anything.</p>
<p><strong>Do not connect to production systems without IT.</strong> Processing an exported file is safe. Writing directly to a live system is not something you should do alone.</p>
<p><strong>Never paste passwords, keys, or secrets into Claude or Gemini.</strong> If a tool needs authentication, ask IT to help you set up environment variables.</p>
<p><strong>Test with sample data first.</strong> Before running any tool on real data, especially anything involving client information, patient data, or financial records, test it with sample data. Claude can generate test data for you.</p>
<p><strong>Keep scope tight.</strong> Build small tools that do one thing well. A tool that formats clinical notes is better than a tool that formats notes, books appointments, sends referrals, and orders supplies. Start small. Add features later.</p>
<p><strong>Know your compliance obligations.</strong> If you work in healthcare, law, finance, or any regulated field, check with your compliance team before deploying tools that process sensitive data.</p>`,
    },
    {
      id: "thirty-day-builder-sprint",
      title: "The 30-Day Builder Sprint",
      content: `<p>By the end of thirty days, you will have built and shared real tools.</p>
<h3>Week 1: Install and Observe</h3>
<p><strong>Days 1-2:</strong> Set up everything. Install VS Code. Install Claude Code. Create your AI-Tools folder. Create your first CLAUDE.md file. Go to aistudio.google.com and confirm access.</p>
<p><strong>Days 3-5:</strong> Observe, do not build. Spend three days just talking to Claude about your work. Describe your daily workflows and ask Claude to identify which ones are automatable. By Friday, you should have a list of at least five workflows ranked by how much time they waste.</p>
<h3>Week 2: Your First Personal Tool</h3>
<p><strong>Days 6-8:</strong> Build with Claude Code. Pick the easiest workflow from your list. Something with a clear input and clear output. Follow the Plan-then-Build pattern. By day 8, you should have a working tool.</p>
<p><strong>Days 9-10:</strong> Build the same thing in AI Studio. Take the same idea and build it as a web app. Compare the two approaches. You now understand when to use each tool.</p>
<h3>Week 3: Share and Automate</h3>
<p><strong>Days 11-13:</strong> Polish one AI Studio app so a colleague can use it without explanation. Test it with someone who was not involved in building it. Watch where they get confused. Fix those parts. Share the link.</p>
<p><strong>Days 14-15:</strong> Try one Workspace Studio automation. Start with a template: daily email summary, meeting recap, or action item extraction. Let it run for a few days.</p>
<h3>Week 4: Multiply</h3>
<p><strong>Days 16-20:</strong> Build your second tool. Pick a harder workflow. By now you will be faster. The CLAUDE.md file and Plan Mode prompts will feel natural.</p>
<p><strong>Days 21-25:</strong> Teach one person. Sit down with a colleague. Ask them what slows them down. Build a tiny tool together using AI Studio. The best way to learn this is to teach it.</p>
<p><strong>Days 26-30:</strong> Document and reflect. Write down what you built, how you built it, and what you learned. Two to three pages with screenshots. This is your portfolio.</p>
<blockquote>The people who build useful tools are not smarter. They are simply willing to say "change this" fifteen times until it is right. Building is not about technical skill. It is about persistence, clarity, and the willingness to iterate.</blockquote>`,
    }
  ],
  pdfUrl: "/pdfs/non-technical-builders-playbook.pdf",
  metaTitle:
    "The Non-Technical Builder's Playbook | Leverage Strategies",
  metaDescription:
    "How to use Claude Code, VS Code, and Google AI Studio to build your own AI tools. No coding required. A step-by-step playbook for anyone ready to stop using AI and start building with it.",
  keywords: [
    "non-technical AI builder",
    "Claude Code tutorial",
    "Google AI Studio",
    "build AI tools",
    "no-code AI",
    "AI for non-developers",
    "builder playbook",
    "VS Code Claude",
    "AI automation",
    "citizen developer AI"
  ],
  relatedSlugs: [
    "ai-roi-playbook",
    "openai-frontier-playbook",
    "what-ai-agents-actually-are",
    "ai-sales-playbook"
  ],
};
