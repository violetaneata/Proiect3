# bdsa-product-catalog

#1 git clone

git clone https://github.com/eduardbudacu/bdsa-product-catalog.git

cd bdsa-product-catalog

npm install

#2 install mysql
mysql-ctl start

mysql -u root

source ~/workspace/bdsa-product-catalog/sql/catalog.sql

INSERT INTO categories (`name`, `description`) VALUES ('Carti','Cele mai tari carti');

#3 run server.js