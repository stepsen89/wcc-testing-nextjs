import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class CalculatorPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
