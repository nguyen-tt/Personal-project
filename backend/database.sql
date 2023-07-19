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

INSERT INTO foods (title, img, vote) VALUES 
('Pho', 'pho.jpg', 50), ('Ramen', 'ramen.jpg', 40), ('Burger', 'burger.jpg', 30), ('Sushi', 'sushi.jpg', 20), ('Pizza', 'pizza.jpg', 100), ('Kebab', 'kebab.jpg', 5), ('Boeuf bourguignon', 'boeuf-bourguignon.jpg', 3);

INSERT INTO users (email, password, role) VALUES ('admin@admin.com', '123456', 1);