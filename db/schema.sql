    CREATE TABLE employees (
        id INTEGER AUTO_INCREMENT PRIMARY KEY, 
        first_name VARCHAR(30) NOT NULL,    
        last_name VARCHAR (30) NOT NULL,   
        role_id INT,  
        manager_id   
        INT); 

    CREATE TABLE role ( 
        id INT PRIMARY KEY, 
        title VARCHAR(30) NOT NULL, 
        salary INT NOT NULL, 
        department_id INT   
    );

     CREATE TABLE department (  
            id INT PRIMARY KEY,  
            dpName VARCHAR(30) NOT NULL    
        );