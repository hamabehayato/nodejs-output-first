# ベースのDockerイメージ定義。
# Alpine Linuxをベースにした軽量なNode.jsのイメージ
FROM node:20-alpine

# 作業ディレクトリを backendディレクトリ に設定
# ここで指定したディレクトリにコピーする
WORKDIR /backend

# 現在のディレクトリをコンテナ内の /backend ディレクトリにコピー
COPY . .
# COPY package.json ./backend

# アプリの依存関係をインストール
RUN npm install

# express 起動コマンド
CMD ["npm", "start"]
