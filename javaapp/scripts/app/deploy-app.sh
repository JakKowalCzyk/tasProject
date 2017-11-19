docker rm -f angular-app
docker run -d -p 8999:80 -m 150m  --name angular-app kowkowal/angularapp