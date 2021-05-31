CREATE DATABASE IF NOT EXISTS delilah_resto;

USE delilah_resto;

CREATE TABLE IF NOT EXISTS users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  phone INT(11) NOT NULL,
  adress VARCHAR(45) NOT NULL,
  roles_id INT(11) NOT NULL,
  orders_id INT(11) NOT NULL,
  PRIMARY KEY (id, orders_id),
  FOREIGN KEY (roles_id) REFERENCES delilah_resto.roles (id)
  FOREIGN KEY (orders_id) REFERENCES delilah_resto.orders (id)
  )

CREATE TABLE IF NOT EXISTS products (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  price DOUBLE NOT NULL,
  url_img VARCHAR(45) NOT NULL,
  PRIMARY KEY (id, url_img))

CREATE TABLE IF NOT EXISTS roles (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id))

CREATE TABLE IF NOT EXISTS orders (
  id INT(11) NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  total DOUBLE NULL DEFAULT NULL,
  status_id INT(11) NOT NULL,
  users_id INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (id),
  INDEX fk_orders_status1_idx (status_id ASC) VISIBLE,
  CONSTRAINT fk_orders_status1
    FOREIGN KEY (status_id)
    REFERENCES status (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)

CREATE TABLE IF NOT EXISTS status (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id))

CREATE TABLE IF NOT EXISTS orders_has_products (
  orders_id INT(11) NOT NULL,
  products_id INT(11) NOT NULL,
  amount INT(11) NOT NULL,
  PRIMARY KEY (orders_id, products_id),
  INDEX fk_orders_has_products_products1_idx (products_id ASC) VISIBLE,
  INDEX fk_orders_has_products_orders1_idx (orders_id ASC) VISIBLE,
  CONSTRAINT fk_orders_has_products_orders1
    FOREIGN KEY (orders_id)
    REFERENCES orders (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_orders_has_products_products1
    FOREIGN KEY (products_id)
    REFERENCES products (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
