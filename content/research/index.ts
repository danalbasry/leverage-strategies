import type { ResearchArticle } from "@/lib/types";
import { gtmPlaybook } from "./ai-powered-gtm-playbook-2026";
import { aiAgentsArticle } from "./what-ai-agents-actually-are";
import { aiSalesPlaybook } from "./ai-sales-playbook";
import { blockchainGtmPlaybook } from "./blockchain-gtm-playbook";
import { openaiFrontierPlaybook } from "./openai-frontier-playbook";
import { nonTechnicalBuildersPlaybook } from "./non-technical-builders-playbook";
import { aiRoiPlaybook } from "./ai-roi-playbook";
import { unlimitedDevCapacityPlaybook } from "./unlimited-dev-capacity-pm-playbook";

export const allResearch: ResearchArticle[] = [
  unlimitedDevCapacityPlaybook,
  aiRoiPlaybook,
  nonTechnicalBuildersPlaybook,
  openaiFrontierPlaybook,
  blockchainGtmPlaybook,
  aiSalesPlaybook,
  gtmPlaybook,
  aiAgentsArticle,
];
