#To execute on machine
sudo docker volume create db_volume
sudo docker volume ls
sudo docker run -it -v db_volume:/data alpine