import { app, MenuItem, BrowserWindow, KeyboardEvent, ipcMain } from "electron"
import { openModalWindow } from "../../window-manager"

export const mnuNewBindingClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
  openModalWindow("FolderTree", browserWindow)
  // browserWindow.webContents.send('open-dialog', "new-service");
}

export const mnuOpenDefaultBindingClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
  openModalWindow("simple")

}

export const mnuCloseBindingClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuOpenProfileClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuSaveProfileClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}
