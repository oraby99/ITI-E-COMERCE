export class CompanyInfo {
   // name:string | undefined;
   // logo:string | undefined;
    //services:string[] | undefined;
    constructor(public name:string,public logo:string ,public services:string[],  
                public capital?: number, public establisdate?: Date
               )
    {
        
    }

}
