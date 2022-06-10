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
("Ginny", "Weasley", 4, 1),
("Ron", "Weasley", 2, 2),
("Hermione", "Granger", 1, 2),
("Draco", "Malfoy", 2, 2),
("Neville", "Longbottom", 2, 2),
("Luna", "Lovegood", 2, 2),
("Alastor", "Moody", 2, 2),
("Dudley", "Dursley", 3, 2),
("Peter", "Pettigrew", 3, 2),
("Dolores", "Umbrdige", 3, 2),
("Severus", "Snape", 5, 2),
("Bellatrix", "Lestrange", 5, 2);
