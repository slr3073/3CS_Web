#Do not excute this script it wont work, just excute commands step by step

#To execute on machine
docker volume create db_volume
docker volume ls
docker run -it -v db_volume:/data alpine

#To excute on db_volume
cd data
echo "Some text information" > file.txt
exit

#To execute on machine
docker run -it -v db_volume:/data alpine

#To excute on db_volume
more data/file.txt
exit

