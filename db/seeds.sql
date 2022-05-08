INSERT INTO departments (name)
VALUES
("Providers"),
("Management"),
("Administration");

INSERT INTO roles (title, salary, department_id)
VALUES
("Dentist", "300000", "1"),
("Hygienist", "90000", "1"),
("Assistant", "65000", "1"),
("Office Manager", "70000", "2"),
("Receptionist", "50000", "3");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Harry", "Potter", 1, NULL),
("Ron", "Weasley", 2, 3),
("Hermione", "Granger", 1, 3),
("Ginny", "Weasley", 4, 1),
("Draco", "Malfoy", 2, 3),
("Neville", "Longbottom", 2, 3),
("Luna", "Lovegood", 2, 3),
("Alastor", "Moody", 2, 3),
("Dudley", "Dursley", 3, 3),
("Peter", "Pettigrew", 3, 3),
("Dolores" "Umbrdige", 3, 3),
("Severus", "Snape", 5, 3),
("Bellatrix", "Lestrange", 5, 3);
