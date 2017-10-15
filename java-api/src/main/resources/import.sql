insert into user_bo(email, name, city, role_type, hash_password) VALUES ('beufort@o2.pl', 'kuba 2', 'poznan', 'ROLE_USER', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(email, name, city, role_type, hash_password) VALUES ('krz.jozef.owicz@gmail.com', 'Krzychu 2', 'poznan1', 'ROLE_USER', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(email, name, city, role_type, hash_password) VALUES ('kow.jakub.kowalczyk@gmail.com', 'Jakub Kowalczyk', 'Poznań', 'ROLE_ADMIN', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(email, name, city, role_type, hash_password) VALUES ('krz.jozefowicz@gmail.com', 'Krzysztof Józefowicz', 'Poznań', 'ROLE_ADMIN', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(email, name, city, role_type, hash_password) VALUES ('barszu3@st.amu.edu.pl', 'Bartosz Szukała', 'Przeźmierowo', 'ROLE_ADMIN', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into brand(name) VALUES ('Volvo'); --1
insert into brand(name) VALUES ('KIA');--2
insert into brand(name) VALUES ('Opel');--3
insert into brand(name) VALUES ('BMW');--4
insert into brand(name) VALUES ('Audi');--5
insert into brand(name) VALUES ('Chevrolet');--6
insert into brand(name) VALUES ('Citroen');--7
insert into brand(name) VALUES ('Dacia');--8
insert into brand(name) VALUES ('Dodge');--9
insert into brand(name) VALUES ('Fiat');--10
insert into brand(name) VALUES ('Honda');--11
insert into brand(name) VALUES ('Jaguar');--12
insert into brand(name) VALUES ('Jeep');--13
insert into brand(name) VALUES ('Land Rover');--14
insert into brand(name) VALUES ('Lexux');--15
insert into brand(name) VALUES ('Mazda');--16
insert into brand(name) VALUES ('Nissan');--17
insert into brand(name) VALUES ('Peugeot');--18
insert into brand(name) VALUES ('Renault');--19
insert into brand(name) VALUES ('Seat');--20
insert into brand(name) VALUES ('Skoda');--21
insert into brand(name) VALUES ('Tesla');--22
insert into brand(name) VALUES ('Volswagen');--23
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power,production_date, photo) VALUES ('s60', 1, '100', 100000, 'PB', 'AWD', 'SEDAN', TRUE , TRUE , TRUE , TRUE , FALSE , FALSE, 200, 2004, 'https://upload.wikimedia.org/wikipedia/commons/f/f0/2000-2004_Volvo_S60_sedan_01.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power,production_date, photo) VALUES ('s80', 1, '250', 2000, 'LPG', 'FWD', 'SEDAN', TRUE , FALSE , TRUE , FALSE , TRUE, FALSE, 200, 2008, 'https://www.autocentrum.pl/ac-file/gallery-photo/58931c79582c7df5d5a1091a.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('ceed', 2, '200', 8823, 'DIESEL', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , FALSE , FALSE, 200, 2010, 'https://upload.wikimedia.org/wikipedia/commons/9/91/Kia_cee%27d_silver.JPG');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('Astra', 3, '150', 21333, 'DIESEL', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , TRUE, FALSE, 200, 2012, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Opel_Astra_1.6_CDTI_ecoFLEX_Dynamic_%28K%29_%E2%80%93_Frontansicht%2C_23._Dezember_2016%2C_D%C3%BCsseldorf.jpg/280px-Opel_Astra_1.6_CDTI_ecoFLEX_Dynamic_%28K%29_%E2%80%93_Frontansicht%2C_23._Dezember_2016%2C_D%C3%BCsseldorf.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('M3', 4, '800', 10000, 'PB', 'AWD', 'SPORT', TRUE , TRUE , FALSE , TRUE , FALSE , FALSE, 200, 2015, 'https://media.ed.edmunds-media.com/bmw/m3/2015/oem/2015_bmw_m3_sedan_base_fq_oem_9_1280.jpg');