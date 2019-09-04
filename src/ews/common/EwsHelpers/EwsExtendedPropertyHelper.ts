// export class EwsExtendedPropertyHelper {
    
//   public static GetExtendedProp_DateTime_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oDateTime: DateTime;
//       let sReturn: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oDateTime)) {
//               if ((oDateTime == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = oDateTime.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   // public static string GetExtendedProp_DateTime_AsString(Item oItem, ExtendedPropertyDefinition oExtendedPropertyDefinition)
//   // {
//   //     DateTime oDateTime;
//   //     string sReturn = "";
//   //     try
//   //     {  
//   //     if (oItem.TryGetProperty(oExtendedPropertyDefinition, out oDateTime))
//   //     {
//   //         if (oDateTime == null)
//   //             sReturn = "";
//   //         else
//   //             sReturn = oDateTime.ToString();
//   //     }
//   //     else
//   //         sReturn = "";
//   //     }
//   //     catch (InvalidCastException ex)
//   //     {
//   //         string sError = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}\r\nError: {2}",
//   //                     oExtendedPropertyDefinition.PropertySetId,
//   //                     oExtendedPropertyDefinition.Id,
//   //                     ex.Message);
//   //         MessageBox.Show(sError, "Casting Error");
//   //         throw ex;
//   //     }
//   //     return sReturn;
//   // }
//   public static GetExtendedProp_Byte_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let bytearrVal: number[];
//       let sReturn: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */bytearrVal)) {
//               if ((bytearrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = Convert.ToBase64String(bytearrVal);
//               }
              
//               //  reverse: Convert.FromBase64String(string data)
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_String_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let sString: string = string.Empty;
//       let sReturn: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */sString)) {
//               if ((sString == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = sString;
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Int_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let lVal: number = 0;
//       // long x = 0;
//       let sReturn: string = "";
//       try {
//           if ((oExtendedPropertyDefinition.Id == 33285)) {
//               Console.WriteLine("");
//           }
          
//           // if (oItem.TryGetProperty(oExtendedPropertyDefinition, out x))
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */lVal)) {
//               if ((lVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = lVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//           if ((sReturn == null)) {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           //  One EWS int prop gets retured as a string  - this is a workaround.
//           if (((oExtendedPropertyDefinition.Id == 33285) 
//                       && ((oExtendedPropertyDefinition.PropertySet == DefaultExtendedPropertySet.Appointment) 
//                       || (oExtendedPropertyDefinition.PropertySetId == new Guid("00062002-0000-0000-c000-000000000046"))))) {
//               for (let ep: ExtendedProperty in oItem.ExtendedProperties) {
//                   if (((ep.PropertyDefinition.Id == 33285) 
//                               && ((ep.PropertyDefinition.PropertySet == DefaultExtendedPropertySet.Appointment) 
//                               || (ep.PropertyDefinition.PropertySetId == new Guid("00062002-0000-0000-c000-000000000046"))))) {
//                       try {
//                           let sVal: string = ep.Value.ToString();
//                           return sVal;
//                       }
//                       catch (ex_swap /*:Exception*/) {
//                           let sError_Swap: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", ep.PropertyDefinition.PropertySetId, ep.PropertyDefinition.Id, ex_swap.Message);
//                           MessageBox.Show(sError_Swap, "Casting Error");
//                       }
                      
//                   }
                  
//               }
              
//               let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//               MessageBox.Show(sError, "Casting Error");
//               throw ex;
//           }
          
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Long_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let lVal: number = 0;
//       let sReturn: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */lVal)) {
//               if ((lVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = lVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Float_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let fVal: number = 0;
//       let sReturn: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */fVal)) {
//               if ((fVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = fVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Short_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let iVal: Int16 = 0;
//       let sReturn: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */iVal)) {
//               if ((iVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = iVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Bool_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let bVal: boolean = false;
//       let sReturn: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */bVal)) {
//               if ((bVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = bVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   //  Folders
//   public static GetExtendedProp_DateTime_AsString(oFolder: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oDateTime: DateTime;
//       let sReturn: string = "";
//       try {
//           if (oFolder.TryGetProperty(oExtendedPropertyDefinition, /* out */oDateTime)) {
//               if ((oDateTime == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = oDateTime.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Byte_AsString(oFolder: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let bytearrVal: number[];
//       let sReturn: string = "";
//       try {
//           if (oFolder.TryGetProperty(oExtendedPropertyDefinition, /* out */bytearrVal)) {
//               if ((bytearrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = Convert.ToBase64String(bytearrVal);
//               }
              
//               //  reverse: Convert.FromBase64String(string data)
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_String_AsString(oFolder: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let sString: string = string.Empty;
//       let sReturn: string = "";
//       try {
//           if (oFolder.TryGetProperty(oExtendedPropertyDefinition, /* out */sString)) {
//               if ((sString == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = sString;
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Int_AsString(oFolder: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let lVal: number = 0;
//       let sReturn: string = "";
//       try {
//           if (oFolder.TryGetProperty(oExtendedPropertyDefinition, /* out */lVal)) {
//               if ((lVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = lVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//           if ((sReturn == null)) {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Long_AsString(oFolder: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let lVal: number = 0;
//       let sReturn: string = "";
//       try {
//           if (oFolder.TryGetProperty(oExtendedPropertyDefinition, /* out */lVal)) {
//               if ((lVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = lVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Short_AsString(oFolder: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let iVal: Int16 = 0;
//       let sReturn: string = "";
//       try {
//           if (oFolder.TryGetProperty(oExtendedPropertyDefinition, /* out */iVal)) {
//               if ((iVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = iVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Float_AsString(oFolder: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let fVal: number = 0;
//       let sReturn: string = "";
//       try {
//           if (oFolder.TryGetProperty(oExtendedPropertyDefinition, /* out */fVal)) {
//               if ((fVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = fVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_Bool_AsString(oFolder: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let bVal: boolean = false;
//       let sReturn: string = "";
//       try {
//           if (oFolder.TryGetProperty(oExtendedPropertyDefinition, /* out */bVal)) {
//               if ((bVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   sReturn = bVal.ToString();
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: 0x{1:X}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   //  ======================================================================
//   //  Item Array props
//   public static GetExtendedProp_DateTimeArr_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: DateTime[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: DateTime[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       //  *
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_LongArr_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       //  *
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_ByteArr_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let bytearrVal: number[,];
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */bytearrVal)) {
//               if ((bytearrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oByteArray: number[] in bytearrVal) {
//                       s = Convert.ToBase64String(oByteArray);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//                   // sReturn = Convert.ToBase64String(sEntry);  // reverse: Convert.FromBase64String(string data)
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_StringArr_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: string[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: string[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       //  *
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_IntArr_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_DoubleArr_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_ShortArr_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_FloatArr_AsString(oItem: Item, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   //  ======================================================================
//   //  Folder Array props
//   public static GetExtendedProp_DateTimeArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: DateTime[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: DateTime[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       //  *
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_LongArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       //  *
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_ByteArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let bytearrVal: number[,];
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */bytearrVal)) {
//               if ((bytearrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oByteArray: number[] in bytearrVal) {
//                       s = Convert.ToBase64String(oByteArray);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//                   // sReturn = Convert.ToBase64String(sEntry);  // reverse: Convert.FromBase64String(string data)
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_StringArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: string[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: string[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       //  *
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_BoolArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: boolean[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: boolean[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_IntArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_DoubleArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_ShortArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   public static GetExtendedProp_FloatArr_AsString(oItem: Folder, oExtendedPropertyDefinition: ExtendedPropertyDefinition): string {
//       let oArrVal: number[,];
//       //  *
//       let sReturn: string = "";
//       let sEntry: string = "";
//       try {
//           if (oItem.TryGetProperty(oExtendedPropertyDefinition, /* out */oArrVal)) {
//               if ((oArrVal == null)) {
//                   sReturn = "";
//               }
//               else {
//                   let s: string = string.Empty;
//                   sEntry = string.Empty;
//                   for (let oVal: number[] in oArrVal) {
//                       let oFromVal: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                       s = Convert.ToBase64String(oFromVal);
//                       sEntry = (sEntry 
//                                   + (s + ","));
//                   }
                  
//                   sEntry = sEntry.Remove((sEntry.Length - 1), 1);
//                   //  get rid of last comma;
//                   //  Base64 encode final results.
//                   let oFromBytes: number[] = System.Text.ASCIIEncoding.ASCII.GetBytes(sEntry);
//                   sReturn = System.Convert.ToBase64String(oFromBytes);
//               }
              
//           }
//           else {
//               sReturn = "";
//           }
          
//       }
//       catch (ex /*:InvalidCastException*/) {
//           let sError: string = string.Format("Error casting extended property.  GUID: {0} Property ID: {1}
// Error: {2}", oExtendedPropertyDefinition.PropertySetId, oExtendedPropertyDefinition.Id, ex.Message);
//           MessageBox.Show(sError, "Casting Error");
//           throw ex;
//       }
      
//       return sReturn;
//   }
  
//   //         case MapiPropertyType.IntegerArray:
//   //     sExtendedValue = EwsExtendedPropertyHelper.GetExtendedProp_IntArray_AsString(oItem, oEPD);
//   //     break;
//   // case MapiPropertyType.StringArray:
//   //     sExtendedValue = EwsExtendedPropertyHelper.GetExtendedProp_StringArray_AsString(oItem, oEPD);
//   //     break;
//   // case MapiPropertyType.BinaryArray:
//   //     sExtendedValue = EwsExtendedPropertyHelper.GetExtendedProp_ByteArrArray_AsString(oItem, oEPD);
//   //     break;
//   // case MapiPropertyType.LongArray:
//   //     sExtendedValue = EwsExtendedPropertyHelper.GetExtendedProp_LongArray_AsString(oItem, oEPD);
//   //     break;
//   // case MapiPropertyType.SystemTimeArray:
//   //     sExtendedValue = EwsExtendedPropertyHelper.GetExtendedProp_DateTimeArray_AsString(oItem, oEPD);
//   //     break;
//   // case MapiPropertyType.ShortArray:
//   //     sExtendedValue = EwsExtendedPropertyHelper.GetExtendedProp_ShortArray_AsString(oItem, oEPD);
//   //     break;
//   public static TrySwapGuidForPropSetName(sPropertySetName: string, oPropertyId: number, oPropertyType: string, sUseLine: string, iLine: number): string {
//       let sGuid: string = null;
//       switch (sPropertySetName.Trim().ToUpper()) {
//           case "PS_PUBLIC_STRINGS":
//               sGuid = "00020329-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_COMMON":
//               sGuid = "00062008-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_ADDRESS":
//               sGuid = "00062004-0000-0000-C000-000000000046";
//               break;
//           case "PS_INTERNET_HEADERS":
//               sGuid = "00020386-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_APPOINTMENT":
//               sGuid = "00062002-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_MEETING":
//               sGuid = "6ED8DA90-450B-101B-98DA-00AA003F1305";
//               break;
//           case "PSETID_LOG":
//               sGuid = "0006200A-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_MESSAGING":
//               sGuid = "41F28F13-83F4-4114-A584-EEDB5A6B0BFF";
//               break;
//           case "PSETID_NOTE":
//               sGuid = "0006200E-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_POSTRSS":
//               sGuid = "00062041-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_TASK":
//               sGuid = "00062003-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_UNIFIEDMESSAGING":
//               sGuid = "4442858E-A9E3-4E80-B900-317A210CC15B";
//               break;
//           case "PS_MAPI":
//               sGuid = "00020328-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_AIRSYNC":
//               sGuid = "71035549-0739-4DCB-9163-00F0580DBBDF";
//               break;
//           case "PSETID_SHARING":
//               sGuid = "00062040-0000-0000-C000-000000000046";
//               break;
//           case "SHARING":
//               sGuid = "00062040-0000-0000-C000-000000000046";
//               break;
//           case "PSETID_XMLEXTRACTEDENTITIES":
//               sGuid = "23239608-685D-4732-9C55-4C95CB4E8E33";
//               break;
//           case "PSETID_CALENDARASSISTANT":
//               sGuid = "11000E07-B51B-40D6-AF21-CAA85EDAB1D0";
//               break;
//           default:
//               sGuid = sPropertySetName;
//               if (((sGuid.Length != 36) 
//                           && (sGuid.Length != 0))) {
//                   let s: string = string.Format("On Line {0} : Unknown Property set name or GUID a of the wrong length: ""{1}"".
// ", iLine, sGuid);
//                   s = (s + string.Format("A property set GUID should have 36 characters; however this one has {0} characters. 
// ", sGuid.Length.ToString()));
//                   s = (s + string.Format("See line {0}: 
// {1}
// ", iLine, sUseLine));
//                   throw new Exception(s);
//               }
              
//               // string s = sGuid.Length.ToString();
//               break;
//       }
      
//       return sGuid;
//   }
// }