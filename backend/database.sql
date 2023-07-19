-- CREATE TABLE item (
--   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE foods (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  img VARCHAR(255),
  vote INT DEFAULT (1)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE users (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE KEY,
  password VARCHAR(255) NOT NULL,
  role INT(1) NOT NULL DEFAULT (0),
  createdDate DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO foods (title, img) VALUES 
('Pho', 'pho.jpg'), ('Ramen', 'ramen.jpg'), ('Burger', 'burger.jpg'), ('Sushi', 'sushi.jpg'), ('Pizza', 'pizza.jpg'), ('Kebab', 'kebab.jpg'), ('Boeuf bourguignon', 'boeuf-bourguignon.jpg');

INSERT INTO users (email, password, role) VALUES ('admin@admin.com', '123456', 1);