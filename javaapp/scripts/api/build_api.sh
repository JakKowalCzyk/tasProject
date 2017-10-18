cd ~/komis/code/tasProject/javaapp/java-api

git pull https://github.com/JakKowalCzyk/tasProject docker

mvn install dockerfile:build
mvn  dockerfile:push

docker rmi $(docker images -q)
