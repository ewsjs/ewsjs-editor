import { MenuItem, BrowserWindow, KeyboardEvent } from "electron";

export const menuClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id);
};