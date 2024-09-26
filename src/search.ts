import {list2str, str2list} from "./strConverter";

export default async function getDecipherFromSongId(env: Env, songIds: Array<number>){
    //songIdsの曲のタイトル、作曲者取得、関連ポストを取得

    //曲idから曲の情報取得
    const {results} = await env.DB.prepare(
        `SELECT * FROM songs WHERE id IN(${list2str(songIds, ",")});`
    ).all();


    let mp = new Map<number, string>();//(composerId, composerName)
    console.log("length = " + results.length);
    for(let i = 0; i < 3; ++i){
        console.log(i + " " + results[i].title);
    //    mp.set(results[i].);
    }
}