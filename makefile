dcb-dev:
	docker-compose build
dcu-dev:
	docker-compose up -d

backend-ssh:
	docker exec -it nestjs-output-first-crud sh
db-ssh:
	docker exec -it  nestjs-output-first-db /bin/bash


# # DB関連
# ## 初期セットアップ
# db-setup:
# 	make db-migrate && make db-seed
# # マイグレーション
# db-migrate:
# 	docker exec -it nestjs_output_with_crud_backend sh -c "npm run migrate"
# # シーディング
# db-seed:
# 	docker exec -it nestjs_output_with_crud_backend sh -c "npm run seed"
