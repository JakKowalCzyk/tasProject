export AMAZON_ID = $1
export AMAZON_SECR = $2
export BUCKET_IMAGE_NAME = $3
export BUCKET_RESIZED_IMAGE_NAME = $4
docker-compose pull
sh deploy_api.sh