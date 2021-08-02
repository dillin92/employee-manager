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
        salary DECIMAL, 
        department_id INT   
    );

     CREATE TABLE department (  
            id INT PRIMARY KEY,  
            name VARCHAR(30) NOT NULL    
        );