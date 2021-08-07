class Employee {
    constructor(first_name = '', last_name='', role_id = '', manager_id ='') {
   
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    getId() { return this.id; }

    getFirstName() { return this.first_name; }

    getLAstName() { return this.last_name; }

    getRole() { return this.role; }

    getManager() { return this.manager_id; }

};


module.exports = Employee;