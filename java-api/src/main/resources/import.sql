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
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power,production_date, photo) VALUES ('s60', 1, '100', 100000, 'PB', 'AWD', 'SEDAN', TRUE , TRUE , TRUE , TRUE , FALSE , TRUE, 140, 2004, 'https://upload.wikimedia.org/wikipedia/commons/f/f0/2000-2004_Volvo_S60_sedan_01.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power,production_date, photo) VALUES ('s80', 1, '250', 2000, 'LPG', 'FWD', 'SEDAN', TRUE , FALSE , TRUE , FALSE , TRUE, TRUE, 170, 2008, 'https://www.autocentrum.pl/ac-file/gallery-photo/58931c79582c7df5d5a1091a.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('ceed', 2, '200', 8823, 'DIESEL', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , FALSE , FALSE , 80, 2010, 'https://upload.wikimedia.org/wikipedia/commons/9/91/Kia_cee%27d_silver.JPG');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('Astra', 3, '150', 21333, 'DIESEL', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , TRUE, TRUE, 85, 2012, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Opel_Astra_1.6_CDTI_ecoFLEX_Dynamic_%28K%29_%E2%80%93_Frontansicht%2C_23._Dezember_2016%2C_D%C3%BCsseldorf.jpg/280px-Opel_Astra_1.6_CDTI_ecoFLEX_Dynamic_%28K%29_%E2%80%93_Frontansicht%2C_23._Dezember_2016%2C_D%C3%BCsseldorf.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('Insignia', 3, '200', 80433, 'PB', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , TRUE, TRUE, 110, 2015, 'https://www.google.pl/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwiHrqjGovPWAhUDL1AKHQ0dDkoQjBwIBA&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F83%2FOpel_Insignia_CDTI_rear_20100926.jpg&psig=AOvVaw3RXNGmYZ40X91Qd2HyFTqs&ust=1508178947761070');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('M3', 4, '800', 10000, 'PB', 'RWD', 'SPORT', TRUE , TRUE , FALSE , TRUE , TRUE , TRUE, 420, 2015, 'https://media.ed.edmunds-media.com/bmw/m3/2015/oem/2015_bmw_m3_sedan_base_fq_oem_9_1280.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('RS6', 5, '1000', 3000, 'PB', 'AWD', 'SPORT', FALSE , TRUE , TRUE , TRUE , TRUE , TRUE, 650, 2016, 'https://otomotopl-imagestmp.akamaized.net/images_otomotopl/849221871_3_1080x720_avant-performance-40-tfsi-quattro-445-kw-605-km-tiptronic-osobowe_rev001.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('Discovery', 14, '250', 150000, 'DIESEL', 'AWD', 'SUV', FALSE , TRUE , TRUE , TRUE , TRUE , TRUE, 250, 2014, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2012_Land_Rover_Discovery_4_%28L319_MY12%29_TDV6_wagon_%282015-08-07%29_01.jpg/280px-2012_Land_Rover_Discovery_4_%28L319_MY12%29_TDV6_wagon_%282015-08-07%29_01.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('Defender', 14, '200', 250000, 'LPG', 'AWD', 'SUV', TRUE , FALSE , FALSE , FALSE , FALSE , FALSE, 180, 2000 , 'http://pictures.trader.pl/eurotax/pictures/0/00/bc5dc0ecc0d20c001ec3a2df26180cbb.jpg');
insert into car(name, brand_id, price_per_day, millage, fuel_type, drive_type, category_type, has_manual_gearbox, has_sunroof, has_radio, has_electric_window, has_navi, has_air_conditioning, power, production_date,photo) VALUES ('Megane', 19, '100', 80000, 'DIESEL', 'FWD', 'CITY', TRUE , FALSE , TRUE , TRUE , FALSE , TRUE, 120, 2014 , 'https://upload.wikimedia.org/wikipedia/commons/8/85/Renault_M%C3%A9gane_III_Coup%C3%A9_rear_20100529.jpg');
