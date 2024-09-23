import { mockApiCall } from "../../support/api";
import { test } from "../baseTest";

test.describe("@integration Quote Page", () => {
  test.beforeEach(async ({ page }) => {
    await mockApiCall(page);
  });

  test.skip("Has correct title", async ({ app: { getQuotesPage } }) => {});
});
