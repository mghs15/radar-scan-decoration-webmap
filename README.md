# radar-scan-decoration-webmap
レーダー風な装飾のお遊びWeb地図サイト

https://mghs15.github.io/radar-scan-decoration-webmap/

* 上記のデモサイトは基準点をスキャンするようなイメージです。
* もちろん実際はスキャンなんてしていません。
* Web地図としてはたいそう使いにくいです。
* データの一部に[地理院タイル](https://maps.gsi.go.jp/development/ichiran.html)を利用しています。
* ロジックの一部も[地理院地図](https://maps.gsi.go.jp/)や[地理院地図Vector](https://maps.gsi.go.jp/vector/)から持ってきています。
* 表示している数値は雰囲気づくりのためで、一部、利用にそぐわないデータもありますので要注意。
* 臨場感を出すための[疑似チャットモード](https://mghs15.github.io/radar-scan-decoration-webmap/?message=1)も用意しています。中身は、システムにあらかじめ登録されたメッセージを適当に表示させるほか、自分でメッセージの投稿ができます（スクリプト等を含んでいなければ他のサーバには送信されません）。

[![デモサイトイメージ](image.png "デモサイトイメージ")](https://mghs15.github.io/radar-scan-decoration-webmap/#14.09/34.60522/137.12884/34.3)

## 参考文献
* https://developer.mozilla.org/ja/
* https://docs.mapbox.com/
* https://maps.gsi.go.jp/vector/
* https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
* https://www.modis.co.jp/candidate/insight/column_129
* https://www.ipa.go.jp/security/vuln/websecurity-HTML-1_5.html#L3
