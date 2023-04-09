function compareVersion(version1:string,version2:string):number
{
    const v1:number[]=version1.split('.').map((item)=>Number.parseInt(item));
    const v2:number[]=version2.split('.').map((item)=>Number.parseInt(item));
    
    return compare(v1,v2); 
}


function compare(v1:number[],v2:number[]):number
{
    let max:number=Math.max(v1.length,v2.length);
    
    for(let i=0;i<max;i++)
    {
        let current1:number=v1[i] || 0;
        let current2:number=v2[i] || 0;

        if(current1>current2)
        {
            return 1;
        }
        
        if(current1<current2)
        {
            return -1;
        }
    }
    
    return 0;
}

export {compareVersion};