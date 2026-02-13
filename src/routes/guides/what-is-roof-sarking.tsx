import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("what-is-roof-sarking");
if (!data) throw new Error("Missing guide config: what-is-roof-sarking");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
