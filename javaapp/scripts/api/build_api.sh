cd ~/komis/code/tasProject/javaapp

git pull https://github.com/JakKowalCzyk/tasProject docker

docker build -t kowkowal/komisapi .
docker push kowkowal/komisapi