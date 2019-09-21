import { MenuItem, BrowserWindow, KeyboardEvent } from "electron"
import { openModalWindow } from "../../window-manager"

export const DebugLogVeiwerMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
  browserWindow.webContents.send("open-dialog", "ews-log")
}

export const OptionsMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
  browserWindow.webContents.send("open-dialog", "global-options")
}

export const mnuToolsDiscoveryAutodiscoverViewerClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuToolsDiscoveryDomainSettingsClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuToolsDiscoveryScpLookupsClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuEwsPostClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const TimeZonemenuitemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuResolveNameClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuResolveExPropClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuToolsNotificationsPullNotificationsViewerClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuToolsNotificationsStreamingNotificationsViewerClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuToolsNotificationsItemSynchronizationViewerClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuUserSettingsUserOofSettingsClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuUserSettingsUserAvailabilityClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuUserSettingsUserRetentionTagsClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuUserSettingsUserConfigurationClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const checkForErrorsLoadingPropertiesOnFolderToolStripMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuDisplayDelegatesClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const MeetingRoomsMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const DistributionListMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const InboxRulesMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const ConvertIdMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const serverTimeZoneToolStripMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const eDiscoverySearchToolStripMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mailAppsToolStripMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuMailTipsClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const mnuSearchForSearchFoldersClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}

export const developerToolsTestWindowToolStripMenuItemClick = (menuItem: MenuItem, browserWindow: BrowserWindow, event: KeyboardEvent) => {
  console.log(menuItem.id)
}
