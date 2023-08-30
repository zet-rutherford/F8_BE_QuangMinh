
create database database_03_quangming;
use database_03_quangming;
CREATE TABLE `products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `sku` VARCHAR(10) NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `category_id` INT,
  `original_price` FLOAT DEFAULT 0,
  `sell_price` FLOAT DEFAULT 0,
  `description` TEXT,
  `quantity` INT DEFAULT 0,
  `instruction` TEXT,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

CREATE TABLE `attribute` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `category_id` INT,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

CREATE TABLE `categories` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

CREATE TABLE `product_attribute` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT,
  `attribute_id` INT NOT NULL,
  `attribute_value` FLOAT,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

ALTER TABLE `attribute` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `product_attribute` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);


INSERT INTO categories(name, created_at, updated_at)
values ('Camera', now(), now());
INSERT INTO categories(name, created_at, updated_at)
values ('Flycam', now(), now());
INSERT INTO categories(name, created_at, updated_at)
values ('Lens', now(), now());



insert into attribute(name, category_id, created_at, updated_at)
values('Resolution', 1, now(), now());
insert into attribute(name, category_id, created_at, updated_at)
values('Memory-card Type', 1, now(), now());
insert into attribute(name, category_id, created_at, updated_at)
values('Max height', 2, now(), now());
insert into attribute(name, category_id, created_at, updated_at)
values('Radius', 2, now(), now());
insert into attribute(name, category_id, created_at, updated_at)
values('Focal length', 3, now(), now());
insert into attribute(name, category_id, created_at, updated_at)
values('Aperture', 3, now(), now());

use database_03_quangming;
insert into products(sku, name, category_id, original_price, sell_price, description, quantity, instruction, created_at, updated_at)
values ("camera001", "Nikon Z6", 1, 2000, 2400, "des1", 10, "ins1", now(), now());
insert into products(sku, name, category_id, original_price, sell_price, description, quantity, instruction, created_at, updated_at)
values ("flycam001", "Mavic 2 Pro", 2, 3000, 3500, "des2", 15, "ins2", now(), now());
insert into products(sku, name, category_id, original_price, sell_price, description, quantity, instruction, created_at, updated_at)
values ("lens001", "Nikkor 85 F1.2 S", 3, 2500, 3000, "des3", 0, "ins3", now(), now());
use database_03_quangming;
insert into product_attribute(product_id, attribute_id, attribute_value, created_at, updated_at)
values(1,1,24, now(),now());
insert into product_attribute(product_id,attribute_id,attribute_value,created_at,updated_at)
values(1,2,2, now(),now());
insert into product_attribute(product_id,attribute_id,attribute_value,created_at,updated_at)
values(2,3,500, now(),now());
insert into product_attribute(product_id,attribute_id,attribute_value,created_at,updated_at)
values(2,4,10000, now(),now());
insert into product_attribute(product_id,attribute_id,attribute_value,created_at,updated_at)
values(3,5,85, now(),now());
insert into product_attribute(product_id,attribute_id,attribute_value,created_at,updated_at)
values(3,6,12, now(),now());

use database_03_quangming;
select * from products;
select attribute_id, attribute_value from product_attribute where product_id=1;
select * from products where quantity>0;