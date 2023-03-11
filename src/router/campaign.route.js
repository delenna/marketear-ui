import ListCampaign from "@/views/campaign/pages/ListCampaign";
import DetailCampaign from "@/views/campaign/pages/DetailCampaign";
const route = [
    {
        path: "/campaign",
        name: "Campaign",
        component: ListCampaign
    },
    {
        path: "/campaign/detail",
        name: "Campaign Detail",
        component: DetailCampaign
    }
]

export default route;