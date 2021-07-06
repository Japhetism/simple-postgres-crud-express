CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  email VARCHAR(30),
  password VARCHAR(30),
  phone VARCHAR(30),
);

INSERT INTO users (firstname, lastname, email, password, phone) VALUES 
    ('Babatunde', 'Ojo', 'babatundeojo30@gmail.com', 'password', '07053579784'),
    ('Grace', 'Ojo', 'grace@gmail.com', 'password', '07053579785')
;