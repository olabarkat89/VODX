export interface call{
    status:string,
    data:callInterface[]
}
export interface callInterface{
    name:string,
    status:string,
    date:string,
    duration:string
}

export interface callType{
    status:string,
    data:calltypeInterface[]
}
export interface calltypeInterface{
    type:string,
    value:string,
}