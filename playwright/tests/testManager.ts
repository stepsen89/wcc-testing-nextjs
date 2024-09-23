import { Page } from "@playwright/test";

import { QuotesPage } from "../support/pages";

export default class TestManager {
  readonly getQuotesPage: QuotesPage;

  constructor(page: Page) {
    this.getQuotesPage = new QuotesPage(page);
  }
}
