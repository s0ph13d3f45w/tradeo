class Auth {
    constructor(){
        this.aunthenticated = false
    }

    login(){
        this.aunthenticated = true
    }

    logout(){
        this.aunthenticated = false
    }

    isAunthenticated(){
        return this.aunthenticated
    }
}

export default new Auth()