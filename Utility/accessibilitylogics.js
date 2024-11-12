const bcrypt = require('bcrypt');

class AccessLogics {
    constructor(password, saltRounds  ) {
        this.password = password;
        this.saltRounds= saltRounds
    }

    async hashPassword() {
        this.password = await bcrypt.hash(this.password, this.saltRounds);

        return this;
    }
    async deCryptPassword(userPassword){
    const ismatch=  await  bcrypt.compare(this.password, userPassword);

    return ismatch;
    }
}


module.exports = AccessLogics;
