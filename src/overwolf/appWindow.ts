import { OWWindow } from "@overwolf/overwolf-api-ts";

export class AppWindow {
  protected mainWindow: OWWindow;
  protected currWindow: OWWindow;

  constructor(windowName: string) {
    this.mainWindow = new OWWindow("background");
    this.currWindow = new OWWindow(windowName);
  }

  public async getWindowState() {
    return await this.currWindow.getWindowState();
  }
}
