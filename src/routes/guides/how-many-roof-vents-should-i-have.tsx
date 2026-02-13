import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("how-many-roof-vents-should-i-have");
if (!data) throw new Error("Missing guide config: how-many-roof-vents-should-i-have");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
