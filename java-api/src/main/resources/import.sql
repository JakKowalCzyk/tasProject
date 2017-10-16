insert into user_bo(id, email, name, city, role_type, hash_password) VALUES (1, 'beufort@o2.pl', 'kuba 2', 'poznan', 'ROLE_USER', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(id, email, name, city, role_type, hash_password) VALUES (2, 'krz.jozef.owicz@gmail.com', 'Krzychu 2', 'poznan1', 'ROLE_USER', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(id, email, name, city, role_type, hash_password) VALUES (3,'kow.jakub.kowalczyk@gmail.com', 'Jakub Kowalczyk', 'Poznań', 'ROLE_ADMIN', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(id, email, name, city, role_type, hash_password) VALUES (4, 'krz.jozefowicz@gmail.com', 'Krzysztof Józefowicz', 'Poznań', 'ROLE_ADMIN', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into user_bo(id, email, name, city, role_type, hash_password) VALUES (5, 'barszu3@st.amu.edu.pl', 'Bartosz Szukała', 'Przeźmierowo', 'ROLE_ADMIN', '$2a$10$GQszpTccOl74I7uyZ7AVvuq9gZ1BSfI6oI3qkQDLbzteXXdCWm41S');
insert into brand(id, name) VALUES (1,'Volvo');
insert into brand(id, name) VALUES (2,'KIA');
insert into brand(id, name) VALUES (3,'Opel');
insert into brand(id, name) VALUES (4,'BMW');
insert into brand(id, name) VALUES (5,'Audi');
insert into brand(id, name) VALUES (6,'Chevrolet');
insert into brand(id, name) VALUES (7,'Citroen');
insert into brand(id, name) VALUES (8,'Dacia');
insert into brand(id, name) VALUES (9,'Dodge');
insert into brand(id, name) VALUES (10,'Fiat');
insert into brand(id, name) VALUES (11,'Honda');
insert into brand(id, name) VALUES (12,'Jaguar');
insert into brand(id, name) VALUES (13,'Jeep');
insert into brand(id, name) VALUES (14,'Land Rover');
insert into brand(id, name) VALUES (15,'Lexux');
insert into brand(id, name) VALUES (16,'Mazda');
insert into brand(id, name) VALUES (17,'Nissan');
insert into brand(id, name) VALUES (18,'Peugeot');
insert into brand(id, name) VALUES (19,'Renault');
insert into brand(id, name) VALUES (20,'Seat');
insert into brand(id, name) VALUES (21,'Skoda');
insert into brand(id, name) VALUES (22,'Tesla');
insert into brand(id, name) VALUES (23,'Volswagen');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power,production_date, photo) VALUES (1,'s60', 1, '100', 100000, 'PB', 'AWD', 'SEDAN', TRUE , TRUE , TRUE , TRUE , FALSE , TRUE, 140, 2004, 'https://upload.wikimedia.org/wikipedia/commons/f/f0/2000-2004_Volvo_S60_sedan_01.jpg');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power,production_date, photo) VALUES (2,'s80', 1, '250', 2000, 'LPG', 'FWD', 'SEDAN', TRUE , FALSE , TRUE , FALSE , TRUE, TRUE, 170, 2008, 'https://www.autocentrum.pl/ac-file/gallery-photo/58931c79582c7df5d5a1091a.jpg');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES (3,'ceed', 2, '200', 8823, 'DIESEL', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , FALSE , FALSE , 80, 2010, 'https://upload.wikimedia.org/wikipedia/commons/9/91/Kia_cee%27d_silver.JPG');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES (4,'Astra', 3, '150', 21333, 'DIESEL', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , TRUE, TRUE, 85, 2012, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Opel_Astra_1.6_CDTI_ecoFLEX_Dynamic_%28K%29_%E2%80%93_Frontansicht%2C_23._Dezember_2016%2C_D%C3%BCsseldorf.jpg/280px-Opel_Astra_1.6_CDTI_ecoFLEX_Dynamic_%28K%29_%E2%80%93_Frontansicht%2C_23._Dezember_2016%2C_D%C3%BCsseldorf.jpg');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES (5,'Insignia', 3, '200', 80433, 'PB', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , TRUE, TRUE, 110, 2015, 'https://www.google.pl/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwiHrqjGovPWAhUDL1AKHQ0dDkoQjBwIBA&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F83%2FOpel_Insignia_CDTI_rear_20100926.jpg&psig=AOvVaw3RXNGmYZ40X91Qd2HyFTqs&ust=1508178947761070');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES (6,'M3', 4, '800', 10000, 'PB', 'RWD', 'SPORT', TRUE , TRUE , FALSE , TRUE , TRUE , TRUE, 420, 2015, 'https://media.ed.edmunds-media.com/bmw/m3/2015/oem/2015_bmw_m3_sedan_base_fq_oem_9_1280.jpg');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES (7,'RS6', 5, '1000', 3000, 'PB', 'AWD', 'SPORT', FALSE , TRUE , TRUE , TRUE , TRUE , TRUE, 650, 2016, 'https://otomotopl-imagestmp.akamaized.net/images_otomotopl/849221871_3_1080x720_avant-performance-40-tfsi-quattro-445-kw-605-km-tiptronic-osobowe_rev001.jpg');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES (8,'Discovery', 14, '250', 150000, 'DIESEL', 'AWD', 'SUV', FALSE , TRUE , TRUE , TRUE , TRUE , TRUE, 250, 2014, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2012_Land_Rover_Discovery_4_%28L319_MY12%29_TDV6_wagon_%282015-08-07%29_01.jpg/280px-2012_Land_Rover_Discovery_4_%28L319_MY12%29_TDV6_wagon_%282015-08-07%29_01.jpg');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES (9,'Defender', 14, '200', 250000, 'LPG', 'AWD', 'SUV', TRUE , FALSE , FALSE , FALSE , FALSE , FALSE, 180, 2000 , 'http://pictures.trader.pl/eurotax/pictures/0/00/bc5dc0ecc0d20c001ec3a2df26180cbb.jpg');
insert into car(id,name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES (10,'Megane', 19, '100', 80000, 'DIESEL', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , FALSE , TRUE, 120, 2014 , 'https://upload.wikimedia.org/wikipedia/commons/8/85/Renault_M%C3%A9gane_III_Coup%C3%A9_rear_20100529.jpg');
