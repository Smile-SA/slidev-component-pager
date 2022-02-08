import { defineAppSetup } from "@slidev/types";
import PagerPlugin from "../src/index";

export default defineAppSetup(({ app }) => {
  app.use(PagerPlugin);
});
