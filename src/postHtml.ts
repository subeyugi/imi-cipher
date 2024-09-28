import {list2str, str2list} from "./strConverter";
import onClickPreview from "./postTools";

export default function renderHtmlPost() {
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
            margin-left: 200px;
        }
    </style>
</head>

<body>
    <p>
        <h1>すべあな界隈解読集(β) 投稿ツール</h1>
        すべあな界隈の暗号の解読結果の投稿ができます
    </p>
    <p>
    <form method="POST" action="functions/api/submit">
        <input></input>
        <button type="submit">送信</button>
    </form>
</body>
</html>`;
}