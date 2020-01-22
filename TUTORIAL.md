# チュートリアル

```bash
$ npm i -g @angular/cli@next
（略）
+ @angular/cli@9.0.0-rc.9

$ ng new ikomiki-knowledge-cloud --routing --style scss

```

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-unused-imports husky lint-staged prettier stylelint stylelint-config-prettier stylelint-prettier
```

```bash
ng add @angular/material@next
ng add @scullyio/init

ng g module home --routing && ng g component home/home

ng g @scullyio/init:blog
npm run scully

npm run scully:serve

ng g @scullyio/init:markdown --name=my-test --slug="my slug id"

ng g scullyio/init:post --name="This is my post"
# name 名前(default blog-X)
# target ターゲットディレクトリ(default: blog)
# metaDataFile メタデータ(yaml)のファイル名 (default:undefined)



ng g m blog-list --route blog-list --module app-routing

ng g m shared
ng g m shared/header --module shared && ng g c shared/header

ng g m shared/side-bar --module shared && ng g c shared/side-bar
ng g m shared/blog-cards --module shared && ng g c shared/blog-cards
ng g m shared/head-tabs --module shared && ng g c shared/head-tabs
ng g s shared/blog

```

```bash
ng build --watch #
npm run scully:serve
npx scully watch # ウォッチ

# ソース修正時、ウォッチビルドの完了誤にScullyウォッチの手動更新(g)を実施する

```
