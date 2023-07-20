# Frontend (React) ビルドステージ
FROM node:14 as frontend-builder

WORKDIR /app

# 必要なパッケージのインストール
COPY test-app/package*.json ./
RUN npm install

# Reactアプリのビルド
COPY test-app/ ./
RUN npm run build

# Backend (Django) ビルドステージ
FROM python:3.9 as backend-builder

WORKDIR /app

# 必要なパッケージのインストール
RUN pip install --upgrade pip
COPY mytiteapi/requirements.txt ./
RUN pip install -r requirements.txt

# Djangoアプリのコピー
COPY mytiteapi/ ./

# ポートの公開
EXPOSE 8000

# Reactアプリのビルド結果をDjangoの静的ファイルディレクトリにコピー
COPY --from=frontend-builder /mytiteapi/ /app/

# Djangoサーバの起動
CMD ["python", "./mytiteapi/manage.py", "runserver", "0.0.0.0:8000"]