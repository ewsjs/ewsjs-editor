import { MenuItem, BrowserWindow, KeyboardEvent } from "electron";

export const mnuAboutClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id);
};
