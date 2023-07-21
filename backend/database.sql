-- CREATE TABLE item (
--   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE foods (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  img VARCHAR(255),
  vote INT DEFAULT (0)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE users (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE KEY,
  password VARCHAR(255) NOT NULL,
  role INT(1) NOT NULL DEFAULT (0),
  createdDate DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO foods (title, img, vote) VALUES 
('Bibimbap', 'Bibimbap.svg', 1000), ('Burger', 'Burger.svg', 950), ('Burito', 'Burito.svg', 900), ('Canard laqué', 'Canard-laqué.svg', 850), ('Dumplings', 'Dumplings.svg', 800), ('Frites', 'Frites.png', 750), ('Gaspacho', 'Gaspacho.svg', 700), ('Gyoza', 'Gyoza.svg', 650), ('Hot Dog', 'Hot-Dog.svg', 600), ('Lasagne','Lasagne.svg', 550), ('Nachos', 'Nachos.svg', 500), ('Nuggets', 'Nuggets.svg', 450), ('Onigiri', 'Onigiri.svg', 400), ('Paella', 'Paella.svg', 350), ('Pates', 'Pates.svg', 300), ('Pho', 'Pho.svg', 250), ('Pizza', 'Pizza.svg', 200), ('Ramen', 'Ramen.svg', 150), ('Corndog', 'Corndog.svg', 570), ('Soupe Miso', 'Soupe-miso.svg', 100), ('Sushi', 'Sushi.svg', 80), ('Taco', 'Taco.svg', 60), ('Takoyaki', 'Takoyaki.svg', 50), ('Tempura', 'Tempura.svg', 20);

INSERT INTO users (email, password, role) VALUES ('admin@admin.com', '123456', 1);