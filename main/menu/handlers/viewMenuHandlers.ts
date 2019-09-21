import { MenuItem, BrowserWindow, KeyboardEvent } from "electron";

export const mnuViewConfigPropertySetClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id);
};

export const mnuViewResetPropertySetClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id);
};

export const mnuRefreshClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id);
};
