import Default from "../views/dashboards/Default.vue";
import Illustration from "../views/auth/signin/Illustration.vue";
import SignupIllustration from "../views/auth/signup/Illustration.vue";
import Error404 from "../views/auth/error/Error404.vue";
import Error500 from "../views/auth/error/Error500.vue";
import CampaignRoute from "./campaign.route";

const routes = [
  ...CampaignRoute,
  {
    path: "/",
    name: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Default
  },
  
  {
    path: "/signin",
    name: "signin",
    component: Illustration
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupIllustration
  },
  {
    path: "/authentication/error/error404",
    name: "Error Error404",
    component: Error404
  },
  {
    path: "/authentication/error/error500",
    name: "Error Error500",
    component: Error500
  }
];

export default routes;