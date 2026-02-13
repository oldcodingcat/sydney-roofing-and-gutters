import { createGuideRoute } from "@/routes/guides/GuideTemplate";
import { getGuideConfig } from "@/content/guides/guides";

const data = getGuideConfig("6-common-gutter-problems-and-how-to-fix-them");
if (!data) throw new Error("Missing guide config: 6-common-gutter-problems-and-how-to-fix-them");

const { Page, route } = createGuideRoute(data.config, data.content);

export { route };
export default Page;
