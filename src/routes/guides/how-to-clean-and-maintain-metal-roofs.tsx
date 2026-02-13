import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("how-to-clean-and-maintain-metal-roofs");
if (!data) throw new Error("Missing guide config: how-to-clean-and-maintain-metal-roofs");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
