INSERT INTO employees (first_name,last_name, role_id, manager_id)
VALUES 
('Dillin', 'Helsley', 1, 2),
('Kelsi', 'Helsley',1, 0),
('Kris', 'Tyler', 2, 1), 
('Taylor', 'Gossage', 2, 1),
('James', 'Oakes', 3, 4),
('Nathan','Shepherd',3, 4),
('Riece', 'Hover', 3, 5),
('Cayden', 'Biggs', 4, 4),
('Ezrith', 'Biggs', 4, 5);

INSERT INTO department (id, dpName)
VALUES 
(1,'Owner'),
(2, 'Manager'),
(3, 'Engineer'),
(4, 'Intern');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'Owner', '162000', 1),
(2, 'Manager', '85000', 2),
(3, 'Engineer', '60000', 3),
(4, 'Intern', '45000', 4);
