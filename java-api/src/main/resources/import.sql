insert into user_bo(email, name, city, role_type, hash_password) VALUES ('email', 'kuba', 'poznan', 'ADMIN', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(email, name, city, role_type, hash_password) VALUES ('email1', 'kuba1', 'poznan1', 'ADMIN', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into brand(name) VALUES ('Volvo');
insert into brand(name) VALUES ('KIA');
insert into car(name, brand_id, price_per_day, millage) VALUES ('s60', 1, '20000', 200);
insert into car(name, brand_id, price_per_day, millage) VALUES ('s80', 1, '200002', 200);
insert into car(name, brand_id, price_per_day, millage) VALUES ('ceed', 2, '200000', 200000);