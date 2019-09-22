import { ipcMain } from "electron-better-ipc"
import { ExchangeService, ExchangeVersion, Uri, WellKnownFolderName, FolderView, WebCredentials } from "ews-javascript-api"

export default () => {
    ipcMain.answerRenderer("validate-cred", async (form: any) => {
        try {
            const svc = new ExchangeService(ExchangeVersion[form.exchangeVersion as string])
            svc.Url = new Uri(form.url)
            svc.Credentials = new WebCredentials(form.userName, form.password)
            const folders = await svc.FindFolders(WellKnownFolderName.MsgFolderRoot, new FolderView(2))
            console.log(folders.Folders)
            return true
        } catch (error) {
            console.log(error)
            return error.message
        }
    })
}
