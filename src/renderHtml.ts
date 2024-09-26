import {list2str, str2list} from "./strConverter";

export default function renderHtml(env: Env, contents: Array<object>) {
    let text_body = "";
    /* contents.forEach(e =>{
        text_body += `<h2 name=${e.user_name}> ${e.user_name}</h2>`;
    }); */

    return `
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title>すべあな界隈解読集(β)</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
        body {
            margin-left: 400px;
        }
    </style>
</head>

<body>
    <p>
        <h1>すべあな界隈解読集(β)</h1>
        すべあな界隈の暗号の解読結果の検索や投稿ができます
    </p>
    <p>
        曲の検索：<input></input>
        <select></select>
    </p>
    <p>
        ${text_body}
    </p>
</body>
</html>`;
}