// export class RecipeintHelper {
    
//   public static SetAppointmentRecipientsFromString(/* ref */oAppointment: Appointment, sRecipeintLine: string, sAddressString: string): boolean {
//       let bRet: boolean = false;
//       let oAttendee: Attendee = null;
//       let arrAddressDelimiter: string[] = [
//               ';'];
//       let sAddresses: string[] = sAddressString.Split(arrAddressDelimiter);
//       let sSmtpAddress: string = string.Empty;
//       let sRecipientName: string = string.Empty;
//       let sWork: string = string.Empty;
//       let carrEndAddress: string[] = [
//               '>',
//               ')'];
//       let carrStartAddress: string[] = [
//               '<',
//               ')'];
//       let junk: string[] = [
//               '<',
//               '>',
//               '(',
//               ' ',
//               ';'];
//       let iEndAddress: number = 0;
//       let iStartAddress: number = 0;
//       let sCurrentAddress: string = string.Empty;
//       try {
//           for (let sAddress: string in sAddresses) {
//               sCurrentAddress = sAddress;
//               iStartAddress = sAddress.IndexOfAny(carrStartAddress);
//               iEndAddress = sAddress.IndexOfAny(carrEndAddress);
//               sSmtpAddress = string.Empty;
//               sRecipientName = string.Empty;
//               if ((sAddress.Contains('>') || sAddress.Contains(')'))) {
//                   sWork = sAddress.Substring(iStartAddress, (iEndAddress - iStartAddress));
//                   sSmtpAddress = sWork.Trim(junk);
//                   sWork = sWork.Substring(0, iStartAddress);
//                   sRecipientName = sWork.Trim(junk);
//               }
//               else {
//                   sWork = sAddress.Trim(junk);
//                   if ((sWork.Length != 0)) {
//                       sSmtpAddress = sAddress.Trim(junk);
//                   }
                  
//               }
              
//               if ((sRecipientName.Length != 0)) {
//                   if ((sSmtpAddress.Length != 0)) {
//                       switch (sRecipeintLine) {
//                           case "Required":
//                               oAttendee = oAppointment.RequiredAttendees.Add(sRecipientName, sSmtpAddress);
//                               break;
//                           case "Optional":
//                               oAttendee = oAppointment.OptionalAttendees.Add(sRecipientName, sSmtpAddress);
//                               break;
//                           case "Resource":
//                               oAttendee = oAppointment.Resources.Add(sRecipientName, sSmtpAddress);
//                               break;
//                       }
                      
//                   }
                  
//               }
//               else if ((sSmtpAddress.Length != 0)) {
//                   switch (sRecipeintLine) {
//                       case "Required":
//                           oAttendee = oAppointment.RequiredAttendees.Add(sSmtpAddress);
//                           break;
//                       case "Optional":
//                           oAttendee = oAppointment.OptionalAttendees.Add(sSmtpAddress);
//                           break;
//                       case "Resource":
//                           oAttendee = oAppointment.Resources.Add(sSmtpAddress);
//                           break;
//                   }
                  
//               }
              
//               oAttendee = null;
//           }
          
//       }
//       catch (ex /*:Exception*/) {
//           MessageBox.Show((ex.Message + ("

// Address: " + sCurrentAddress)), "Error Parsing Address");
//       }
      
//       oAttendee = null;
//       bRet = true;
//       return bRet;
//   }
// }