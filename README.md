# jack-web version3

## 環境構築

### 推奨環境

- node : v20.10.0
- npm : 10.4.0

### セットアップ

1. このリポジトリをクローンする
2. クローンしたディレクトリに移動し、`npm install`を実行
3. `cp .env.example .env.local`を実行し、他の開発メンバーから教えてもらった各環境変数を`.env.local`に書き加える。
4. その後、`npm run dev`を実行して、`http://localhost:3000/`にアクセスできればOK

## 各種コマンド

### [storybook](https://storybook.js.org/)

コンポーネントに対してプレビューを作成することができます。以下のコマンドで立ち上げてください。

```
npm run storybook
```

### [plop](https://plopjs.com/)

コンポーネントの雛形を作成することができます。以下のコマンドを実行してください。

```
npm run plop
```
