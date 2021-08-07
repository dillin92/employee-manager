class Department {
    constructor(id='', dpName='') {
        this.id =id;
        this.dpName = dpName;
    }

     getId(){ return this.id; }

    getName() { return this.dpName;}
};

module.exports = Department;