import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("how-much-does-tile-roof-repair-cost");
if (!data) throw new Error("Missing guide config: how-much-does-tile-roof-repair-cost");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
