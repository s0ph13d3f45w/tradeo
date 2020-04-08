class Auth {
    constructor(){
        this.aunthenticated = false
    }

    login(){
        this.aunthenticated = true
    }

    logout(cb){
        this.aunthenticated = false
        cb()
    }

    isAunthenticated(){
        return this.aunthenticated
    }
}

export default new Auth()