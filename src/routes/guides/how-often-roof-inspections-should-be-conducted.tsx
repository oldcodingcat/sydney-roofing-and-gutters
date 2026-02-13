import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("how-often-roof-inspections-should-be-conducted");
if (!data) throw new Error("Missing guide config: how-often-roof-inspections-should-be-conducted");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
