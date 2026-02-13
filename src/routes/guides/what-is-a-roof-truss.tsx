import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("what-is-a-roof-truss");
if (!data) throw new Error("Missing guide config: what-is-a-roof-truss");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
