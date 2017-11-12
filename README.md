# bdsa-product-catalog

# git clone

git clone https://github.com/eduardbudacu/bdsa-product-catalog.git

cd bdsa-product-catalog

npm install

# install mysql

mysql-ctl start

mysql -u root

source ~/workspace/bdsa-product-catalog/sql/catalog.sql

INSERT INTO categories (name, description) VALUES ('Carti','Cele mai tari carti');

INSERT INTO categories (name, description, category_id, price) VALUES ('Clean Code', 'Make code great again!', 1, 100);

exit

#3 run server.js

