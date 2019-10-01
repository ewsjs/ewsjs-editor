// tslint:disable: member-ordering
import { EOL } from "os"
import { promises } from "fs"
import { DateTime, StringHelper, Exception, AutodiscoverLocalException, ServiceResponseException, AutodiscoverRemoteException, ServiceResponse, ServiceError } from "ews-javascript-api"
import { GlobalSettings } from "../Settings/GlobalSettings"

//#region DebugLogType
/** @internal */
export enum DebugLogType {
  EwsTrace,
  Error,
  Information,
  Verbose,
}
//#endregion;

//#region DebugLogItem
/** @internal */
export class DebugLogItem {
  private logid: number
  private type: DebugLogType
  private time: DateTime
  private title: string
  private data: string
  private source: string

  get Logid(): number {
    return this.logid
  }

  get Type(): DebugLogType {
    return this.type
  }

  get Time(): DateTime {
    return this.time
  }

  get Title(): string {
    return this.title
  }

  get Data(): string {
    return this.data
  }

  get Source(): string {
    return this.source
  }

  /** @internal @private */
  constructor()
  /** @internal */
  constructor(logId: number, time: DateTime, source: string, type: DebugLogType, title: string, data: string)
  constructor(logId: number = 0, time: DateTime = DateTime.Now, source: string = null, type: DebugLogType = DebugLogType.EwsTrace, title: string = null, data: string = null) {
    this.logid = logId
    this.type = type
    this.time = time
    this.source = source
    this.title = title
    this.data = data
  }

  public ToString(): string {
    let sb = ""
    sb += this.Time.Format("s")
    sb += "|"
    sb += DebugLogType[this.Type]
    sb += "|"
    sb += this.Source
    sb += "|"
    sb += this.Title
    sb += "\r\n"

    if (!StringHelper.IsNullOrEmpty(this.Data)) {
      sb += this.Data
    }

    return sb
  }
  public toString(): string {
    return this.ToString()
  }
}
//#endregion

/** @internal */
export class DebugLog {

  private static LogFile: string = GlobalSettings.LogFilePath
  private static ShouldSaveDebugOutput: boolean = GlobalSettings.ShouldSaveLogToFile

  private static DebugLogDiskCommitEnabled: boolean = true

  private static LogItems: DebugLogItem[] = []

  /** @internal */
  static get DebugLogItems(): DebugLogItem[] {
    return DebugLog.LogItems
  }

  /* @internal */
  public static WriteException(title: string, ex: Exception | AutodiscoverLocalException) {
    DebugLog.WriteLogItem(DateTime.Now, ex.stack.substr(0, 10), DebugLogType.Error, title, DebugLog.ExceptionToString(ex))
  }

  /* @internal */
  public static WriteInfo(title: string, ...lines: string[]) {
    const stack = new Error().stack
    let combinedLines: string = ""
    for (const line of lines) {
      combinedLines += line + EOL
    }

    DebugLog.WriteLogItem(DateTime.Now, stack.substr(0, 10), DebugLogType.Information, title, combinedLines)
  }

  /* @internal */
  public static WriteVerbose(title: string, ex: Exception)
  public static WriteVerbose(...lines: string[])
  public static WriteVerbose(title: string, exOrLine: string | Exception, ...remainingLines: string[]) {
    const stack = new Error().stack
    if (typeof exOrLine !== "string") {
      DebugLog.WriteLogItem(DateTime.Now, stack.substr(0, 10), DebugLogType.Verbose, title, DebugLog.ExceptionToString(exOrLine))
      return
    }
    let lines = []
    if (title) {
      lines.push(title)
    }
    if (exOrLine) {
      lines.push(exOrLine)
    }
    lines = [...lines, ...remainingLines]
    let builder: string = ""
    for (const line of lines) {
      builder += line + EOL
    }

    DebugLog.WriteLogItem(DateTime.Now, stack.substr(0, 10), DebugLogType.Verbose, "", builder)
  }

  /* @internal */
  public static WriteEwsLog(traceType: string, traceMessage: string) {
    const stack = new Error().stack
    // for (let frame: StackFrame in stack.GetFrames()) {
    //   if (((frame != stack.GetFrame(0))
    //     && ((frame != stack.GetFrame(1))
    //       && frame.GetMethod().DeclaringType.FullName.Contains("EWSEditor")))) {
    //     DebugLog.WriteLogItem(DateTime.Now, frame.GetMethod().Name, DebugLogType.EwsTrace, traceType, traceMessage)
    //     return
    //   }

    // }

    DebugLog.WriteLogItem(DateTime.Now, "TODO: FIX this - WriteEwsLog in DebugLog.ts", DebugLogType.EwsTrace, traceType, traceMessage)

  }

  /* @internal */
  public static WriteLogItem(time: DateTime, source: string, type: DebugLogType, title: string, data: string) {
    // INFO: no thread safety needed in nodejs
    try {
      const logid: number = DebugLog.LogItems.length
      const item: DebugLogItem = new DebugLogItem(logid, time, source, type, title, data)
      DebugLog.TryWriteToMemory(item)
      //  If the user wants to save debug output and we haven't disabled, then commit debug logs
      //  to disk as well
      if ((DebugLog.ShouldSaveDebugOutput && DebugLog.DebugLogDiskCommitEnabled)) {
        if (!DebugLog.TryWriteToDisk(item)) {
          //  Don't keep trying to write to disk if it fails once
          DebugLog.DebugLogDiskCommitEnabled = false
        }

      }

    } catch (ex /*:Exception*/) {
      //  Write some debug output to help troubleshoot this
      console.log(`Exception at WriteTraceMessage: ${ex.Message}`)
    }

  }

  private static TryWriteToMemory(item: DebugLogItem): boolean {
    try {
      DebugLog.LogItems.push(item)
      return true
    } catch (ex /*:Exception*/) {
      //  Write some debug output to help troubleshoot this
      console.log("Exception at TryWriteDebugLogToMemory: " + ex.Message)
      return false
    }

  }

  private static TryWriteToDisk(item: DebugLogItem): boolean {
    try {
      let sb: string = ""
      sb += item.Time.Format("s")
      sb += "|"
      sb += DebugLogType[item.Type]
      sb += "|"
      sb += item.Source
      sb += "|"
      sb += item.Title
      sb += "|"
      sb += EOL
      if (!StringHelper.IsNullOrEmpty(item.Data)) {
        sb += item.Data
        sb += EOL
      }

      //  Write the debug log to the output file
      const LogEntry: string = sb
      promises.appendFile(DebugLog.LogFile, LogEntry)
      return true
    } catch (ex /*:Exception*/) {
      //  Write some debug output to help troubleshoot this
      console.log("Exception at TryWriteDebugLogToDisk: " + ex.Message)
      return false
    }

  }

  private static ExceptionToString(ex: Exception): string {
    //  Create the exception detail text
    let details: string = ""
    let currentException: Exception = ex
    do {
      details += "TODO: fix this" + EOL
      details += "Exception details:" + EOL
      details += `Message: ${currentException.Message}${EOL}`
      details += `Type: ${currentException.stack}${EOL}`
      details += `Source: ${currentException.stack}${EOL}`
      //  Add exception type specific details
      if ((currentException instanceof ServiceResponseException)) {
        details += DebugLog.AppendServiceResponseExceptionDetail(currentException)
      } else if ((currentException instanceof AutodiscoverRemoteException)) {
        details += DebugLog.AppendAutodiscoverRemoteExceptionDetail(currentException)
      }

      details += "Stack Trace:" + EOL
      details += currentException.stack + EOL
      currentException = currentException.InnerException || null
    } while (currentException != null)

    return details
  }

  /** @internal */
  public static AppendServiceResponseExceptionDetail(srex: ServiceResponseException) {
    if ((srex != null)) {
      return DebugLog.AppendServiceResponse(srex.Response)
    }
    return ""
  }

  /** @internal */
  public static AppendServiceResponse(response: ServiceResponse) {
    let details: string = ""
    if ((response != null)) {
      details += `ErrorCode: ${ServiceError[response.ErrorCode]}${EOL}`
      if ((response.ErrorDetails.Count > 0)) {
        details += "ErrorDetails:${EOL}"
        for (const key of response.ErrorDetails.Keys) {
          details += `key: ${response.ErrorDetails[key]}${EOL}`
        }

      }

      details += `ErrorMessage: ${response.ErrorMessage}`
      if ((response.ErrorProperties.length > 0)) {
        details += "ErrorProperties:${EOL}"
        for (const prop of response.ErrorProperties) {
          // details += PropertyInterpretation.GetPropertyName(prop)
        }

      }

    }
    return details
  }

  /* @internal */
  public static AppendAutodiscoverRemoteExceptionDetail(arex: AutodiscoverRemoteException) {
    let details: string = ""
    if (arex != null || arex.Error != null) {
      details += `AutodiscoverError: ${EOL}`
      details += `" DebugData: ${arex.Error.DebugData}${EOL}`
      details += `" ErrorCode: ${arex.Error.ErrorCode}${EOL}`
      details += `" Id: ${arex.Error.Id}${EOL}`
      details += `" Message: ${arex.Error.Message}${EOL}`
      details += `" Time: ${arex.Error.Time}${EOL}`
    }
    return details
  }
}
