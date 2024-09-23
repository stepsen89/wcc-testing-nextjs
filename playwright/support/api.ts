import { Page, Route } from "@playwright/test";

export async function mockApiCall(page: Page) {
  await page.route(/api\/\quotes/, async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        _id: "VDDodhULiss2",
        content: "It is through science that we prove, but through intuition that we discover.",
        author: "Henri Poincaré",
      }),
    });
  });
}
