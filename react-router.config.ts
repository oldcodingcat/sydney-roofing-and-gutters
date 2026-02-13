import { route as homeRoute } from "./src/routes/home";
import { route as aboutUsRoute } from "./src/routes/about-us";
import { route as aboutRoute } from "./src/routes/about";
import { route as contactUsRoute } from "./src/routes/contact-us";
import { route as contactRoute } from "./src/routes/contact";
import { route as privacyPolicyRoute } from "./src/routes/privacy-policy";
import { route as TermsAndConditionsRoute } from "./src/routes/terms-and-conditions";
// import { route as roofingSydneyCbdRoute } from "./src/routes/roofing-sydney-cbd";
import { route as roofingSydneyCbdRoute } from "./src/routes/locations/sydney-cbd";
import { route as roofingEasternSuburbsRoute } from "./src/routes/locations/eastern-suburbs";
import { route as roofingNorthShoreRoute } from "./src/routes/locations/north-shore";
import { route as roofingNorthernBeachesRoute } from "./src/routes/locations/northern-beaches";
import { route as roofingStGeorgeAreaRoute } from "./src/routes/locations/st-george-area";
import { route as roofingSutherlandShireRoute } from "./src/routes/locations/sutherland-shire";
import { route as roofingSouthWesternSydneyRoute } from "./src/routes/locations/south-western-sydney";
import { route as roofingWesternSydneyRoute } from "./src/routes/locations/western-sydney";
import { route as roofingInnerWestSydneyRoute } from "./src/routes/locations/inner-west-sydney";
import { route as roofingHillsDistrictRoute } from "./src/routes/locations/hills-district";
import { route as roofingMarayongRoute } from "./src/routes/locations/marayong";
import { route as guideRoofLeakCostRoute } from "./src/routes/guides/how-much-does-it-cost-to-fix-a-roof-leak";
import { route as guideRoofSarkingRoute } from "./src/routes/guides/what-is-roof-sarking";
import { route as guideSkillionRoofRoute } from "./src/routes/guides/what-is-a-skillion-roof";
import { route as guideRoofTrussRoute } from "./src/routes/guides/what-is-a-roof-truss";
import { route as guideLongestLastingRoofRoute } from "./src/routes/guides/what-type-of-roof-lasts-the-longest";
import { route as guideRoofInspectionsFrequencyRoute } from "./src/routes/guides/how-often-roof-inspections-should-be-conducted";
import { route as guideCleanMaintainMetalRoofsRoute } from "./src/routes/guides/how-to-clean-and-maintain-metal-roofs";
import { route as guideConcreteTilesLifespanRoute } from "./src/routes/guides/how-long-do-concrete-roof-tiles-last";
import { route as guideHowManyRoofVentsRoute } from "./src/routes/guides/how-many-roof-vents-should-i-have";
import { route as guideTileRoofRepairCostRoute } from "./src/routes/guides/how-much-does-tile-roof-repair-cost";
import { route as guideStopLeakingRoofHeavyRainsRoute } from "./src/routes/guides/how-to-stop-a-leaking-roof-during-heavy-rains";
import { route as guideCommonGutterProblemsRoute } from "./src/routes/guides/6-common-gutter-problems-and-how-to-fix-them";

import { route as blogRoute } from "./src/routes/blog";
import { route as galleryRoute } from "./src/routes/gallery";
import { route as locationsRoute } from "./src/routes/locations";
import { route as projectsRoute } from "./src/routes/projects";
import { route as roofRepairsRoute } from "./src/routes/roof-repairs";
import { route as roofReplacementRoute } from "./src/routes/roof-replacement";
import { route as roofRestorationRoute } from "./src/routes/roof-restoration";
import { route as newRoofInstallationRoute } from "./src/routes/new-roof-installation";
import { route as emergencyRoofRepairsRoute } from "./src/routes/emergency-roof-repairs";
import { route as roofInspectionsRoute } from "./src/routes/roof-inspections";
import { route as gutterRepairsRoute } from "./src/routes/gutter-repairs";
import { route as leakDetectionRoute } from "./src/routes/leak-detection";
import { route as roofInstallationRoute } from "./src/routes/roof-installation";
import { route as roofInspectionRoute } from "./src/routes/roof-inspection";
import { route as roofPaintingRoute } from "./src/routes/roof-painting";
import { route as roofMaintenanceRoute } from "./src/routes/roof-maintenance";
import { route as roofCleaningRoute } from "./src/routes/roof-cleaning";
import { route as metalRoofingRoute } from "./src/routes/services/metal-roofing";
import { route as residentialRoofingRoute } from "./src/routes/services/residential-roofing";
import { route as commercialRoofingRoute } from "./src/routes/commercial-roofing";
import { route as skylightRepairRoute } from "./src/routes/skylight-repair";
import { route as gutterRepairRoute } from "./src/routes/gutter-repair";
import { route as roofersAdamstownHeightsRoute } from "./src/routes/roofers-adamstown-heights";
import { route as roofersBarBeachRoute } from "./src/routes/roofers-bar-beach";
import { route as roofersCarringtonRoute } from "./src/routes/roofers-carrington";
import { route as roofersCatherineHillBayRoute } from "./src/routes/roofers-catherine-hill-bay";
import { route as roofersCoalPointRoute } from "./src/routes/roofers-coal-point";
import { route as roofersCooksHillRoute } from "./src/routes/roofers-cooks-hill";
import { route as roofersFingalBayRoute } from "./src/routes/roofers-fingal-bay";
import { route as roofersGeorgetownRoute } from "./src/routes/roofers-georgetown";
import { route as roofersHamiltonRoute } from "./src/routes/roofers-hamilton";
import { route as roofersHamiltonEastRoute } from "./src/routes/roofers-hamilton-east";
import { route as roofersHamiltonSouthRoute } from "./src/routes/roofers-hamilton-south";
import { route as roofersIslingtonRoute } from "./src/routes/roofers-islington";
import { route as roofersJesmondRoute } from "./src/routes/roofers-jesmond";
import { route as roofersKotaraRoute } from "./src/routes/roofers-kotara";
import { route as roofersLambtonRoute } from "./src/routes/roofers-lambton";
import { route as roofersMayfieldRoute } from "./src/routes/roofers-mayfield";
import { route as roofersMerewetherRoute } from "./src/routes/roofers-merewether";
import { route as roofersMerewetherHeightsRoute } from "./src/routes/roofers-merewether-heights";
import { route as roofersNewLambtonRoute } from "./src/routes/roofers-new-lambton";
import { route as roofersNewcastleEastRoute } from "./src/routes/roofers-newcastle-east";
import { route as roofersRedheadRoute } from "./src/routes/roofers-redhead";
import { route as roofersSoldiersPointRoute } from "./src/routes/roofers-soldiers-point";
import { route as roofersStocktonRoute } from "./src/routes/roofers-stockton";
import { route as roofersTheHillNewcastleRoute } from "./src/routes/roofers-the-hill-newcastle";
import { route as roofersTheJunctionNewcastleRoute } from "./src/routes/roofers-the-junction-newcastle";

const config = {
  ssr: false,
  routes: [
    homeRoute,
    aboutUsRoute,
    contactUsRoute,
    contactRoute,
    privacyPolicyRoute,
    TermsAndConditionsRoute,
    roofingSydneyCbdRoute,
    roofingMarayongRoute,
    roofingEasternSuburbsRoute,
    roofingNorthShoreRoute,
    // roofingSydneyCbdRoute,
    roofingNorthernBeachesRoute,
    roofingStGeorgeAreaRoute,
    roofingSutherlandShireRoute,
    roofingSouthWesternSydneyRoute,
    roofingWesternSydneyRoute,
    roofingInnerWestSydneyRoute,
    roofingHillsDistrictRoute,
    guideRoofLeakCostRoute,
    guideRoofSarkingRoute,
    guideSkillionRoofRoute,
    guideRoofTrussRoute,
    guideLongestLastingRoofRoute,
    guideRoofInspectionsFrequencyRoute,
    guideCleanMaintainMetalRoofsRoute,
    guideConcreteTilesLifespanRoute,
    guideHowManyRoofVentsRoute,
    guideTileRoofRepairCostRoute,
    guideStopLeakingRoofHeavyRainsRoute,
    guideCommonGutterProblemsRoute,
    blogRoute,
    galleryRoute,
    locationsRoute,
    projectsRoute,
    roofRepairsRoute,
    roofReplacementRoute,
    roofRestorationRoute,
    newRoofInstallationRoute,
    emergencyRoofRepairsRoute,
    roofInspectionsRoute,
    gutterRepairsRoute,
    leakDetectionRoute,
    roofInstallationRoute,
    roofInspectionRoute,
    roofPaintingRoute,
    roofMaintenanceRoute,
    roofCleaningRoute,
    metalRoofingRoute,
    residentialRoofingRoute,
    commercialRoofingRoute,
    skylightRepairRoute,
    gutterRepairRoute,
    roofersAdamstownHeightsRoute,
    roofersBarBeachRoute,
    roofersCarringtonRoute,
    roofersCatherineHillBayRoute,
    roofersCoalPointRoute,
    roofersCooksHillRoute,
    roofersFingalBayRoute,
    roofersGeorgetownRoute,
    roofersHamiltonRoute,
    roofersHamiltonEastRoute,
    roofersHamiltonSouthRoute,
    roofersIslingtonRoute,
    roofersJesmondRoute,
    roofersKotaraRoute,
    roofersLambtonRoute,
    roofersMayfieldRoute,
    roofersMerewetherRoute,
    roofersMerewetherHeightsRoute,
    roofersNewLambtonRoute,
    roofersNewcastleEastRoute,
    roofersRedheadRoute,
    roofersSoldiersPointRoute,
    roofersStocktonRoute,
    roofersTheHillNewcastleRoute,
    roofersTheJunctionNewcastleRoute,
  ],
};

export default config;
