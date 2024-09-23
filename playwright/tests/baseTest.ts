import { test as base } from "@playwright/test";

import TestManager from "./testManager";

export const test = base.extend<{ app: TestManager }>({
  app: async function ({ page }, use) {
    const app = new TestManager(page);
    await use(app);
  },
});
