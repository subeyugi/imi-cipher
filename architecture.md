# すべあな界隈解読集　設計概略
Created by: Penta-te  
Thanks: Cloudflare workersとD1のwebサービスを利用しています

## データベース d1-imicipher
### cipher_methods (解読タグ)
* id (INTERGER PRIMARY KEY)
    * 解読タグ固有のid
* 
### composers (作曲者)
* id (INTERGER PRIMARY KEY) 
    * 作曲/暗号作成者固有の番号
* name (TEXT):
    * 作曲/暗号作成者名
* song_ids (TEXT):
    * 投稿された曲のid
    * 複数存在する場合は```-```区切りで連結した文字列が入る

### decipherers (解読者)
* id (INTERGER PRIMARY KEY) 
    * 解読者固有の番号
* name (TEXT):
    * 解読者名
* song_ids (TEXT):
    * 解読した曲のid
    * 複数存在する場合は```-```区切りで連結した文字列が入る

### decode_posts (解読ポスト)
* id (INTERGER PRIMARY KEY)
* song_id (INTERGER)
* decipherer_ids (TEXT)
* date_deciphered (TEXT)
    * 解読日
    * yyyy-mm-dd形式
* date_posted (TEXT)
    * 解読集への投稿日
    * yyyy-mm-dd形式
* name (TEXT)
    * 解読タイトル
    * 1曲に暗号が大量にある場合は「第〇暗号-××」のようにすると、タイトルでソートできるので見やすいかも
* tag_ids (TEXT)
    * 解読タグのid
    * 複数存在する場合は```-```区切りで連結した文字列が入る

### songs


ex)
|id|user_name|song_ids|
|----|----|----|
|1|全てあなたの所為です。|1-3-7|
