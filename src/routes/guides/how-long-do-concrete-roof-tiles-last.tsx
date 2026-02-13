import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("how-long-do-concrete-roof-tiles-last");
if (!data) throw new Error("Missing guide config: how-long-do-concrete-roof-tiles-last");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
