class User {

    constructor(public id: number, 
                public name: string, 
                public email: string, 
                public active: boolean) {

    }

    public getAsTable() {

        return `
            User: ${ this.name }
            Email: ${ this.email }
            Active: ${ this.active ? "Active": "Inactive" }
        
        `;
    }
    /*
    // member variables
    public id: number;
    public name: string;
    public email: string;
    public active: boolean;

    // member functions

    // constructor
    public constructor(id: number, 
                       name:string, 
                       email: string, 
                       active: boolean) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.active = active;
    }
    */

}

export default User;