//数列をハイフン区切りの文字列に変換する
export function list2str(list: Array<number>, sep: string): string{
    let result: string = "";
    for(let i = 0; i < list.length; ++i){
        if(i != 0) result += sep;
        result += list[i].toString();
    }
    return result;
}

export function str2list(str: string, sep: string): Array<number>{
    let result: Array<number> = [];
    str.split(sep).forEach(e => {
        result.push(parseInt(e));
    });
    return result;
}