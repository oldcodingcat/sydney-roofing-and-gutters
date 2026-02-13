import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("how-to-stop-a-leaking-roof-during-heavy-rains");
if (!data) throw new Error("Missing guide config: how-to-stop-a-leaking-roof-during-heavy-rains");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
