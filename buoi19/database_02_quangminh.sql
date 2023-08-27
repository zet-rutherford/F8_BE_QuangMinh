USE database_02_quangminh;
CREATE TABLE customers(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    CONSTRAINT customers_email_phone_unique UNIQUE (email, phone)
);

CREATE TABLE products(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    price FLOAT NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE orders(
    id INT NOT NULL PRIMARY KEY,
    customer_id INT,
    total_quantity INT,
    total_price INT,
    status ENUM('preparing', 'delivering', 'success', 'cancelled') NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    CONSTRAINT forkey_orders_customers_id FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_detail (
    order_id INT NOT NULL,
    customer_id INT NOT NULL,
    product_id INT NOT NULL,
    order_status ENUM('preparing', 'delivering', 'success', 'cancelled') NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP ,
    CONSTRAINT forkey_detail_order_customer_id FOREIGN KEY (customer_id) REFERENCES customers(id),
    CONSTRAINT forkey_detail_order_product_id FOREIGN KEY (product_id) REFERENCES products(id)
);