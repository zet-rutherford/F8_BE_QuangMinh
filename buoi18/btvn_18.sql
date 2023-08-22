use database_01_quangminh;
CREATE TABLE courses(
    id int NOT NULL,
    name varchar(100) NOT NULL,
    price float,
    detail text,
    teacher_id int NOT NULL,
    active int,
    created_at timestamp,
    updated_at timestamp
);
ALTER TABLE courses ADD description text AFTER price;
ALTER TABLE courses MODIFY description text NOT NULL;
ALTER TABLE courses RENAME COLUMN description to content;
DESCRIBE courses;

use database_01_quangminh;
CREATE TABLE teacher(
    id int NOT NULL,
    name varchar(100) NOT NULL,
    bio text NULL,
    created_at timestamp,
    updated_at timestamp
);

INSERT INTO teacher(id, name, bio, created_at, updated_at) VALUES
(1, "A", "5 YOE", NOW(), NOW());
INSERT INTO teacher(id, name, bio, created_at, updated_at) VALUES
(2, "B", "7 YOE", NOW(), NOW());
INSERT INTO teacher(id, name, bio, created_at, updated_at) VALUES
(3, "C", "9 YOE", NOW(), NOW());

INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(1, "A1", 1000, "a1a1a1", "a1a1a1a1", 1, 0, NOW(), NOW());
INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(2, "A2", 1500, "a2a2a2", "a2a2a2a2", 1, 0, NOW(), NOW());
INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(3, "A3", 3000, "a3a3a3", "a3a3a3a3", 1, 1, NOW(), NOW());

INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(4, "B1", 1000, "b1b1b1", "b1b1b1b1", 2, 0, NOW(), NOW());
INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(5, "B2", 1500, "b2b2b2", "b2b2b2b2", 2, 1, NOW(), NOW());
INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(6, "B3", 3000, "b3b3b3", "b3b3b3b3", 2, 1, NOW(), NOW());

INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(7, "C1", 1000, "c1c1c1", "c1c1c1c1", 1, 0, NOW(), NOW());
INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(8, "C2", 1500, "c2c2c2", "c2c2c2c2", 1, 0, NOW(), NOW());
INSERT INTO courses(id, name, price, content, detail, teacher_id, active, created_at, updated_at) VALUES
(9, "C3", 3000, "c3c3c3", "c3c3c3c3", 1, 1, NOW(), NOW());


SELECT * FROM courses

SELECT * FROM teacher