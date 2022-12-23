enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod',
    qa_environment = 'qa'
}

class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else if (this.environment === Environments.dev_environment) {
            return 8082;
        } else if (this.environment == Environments.local_environment) {
            return 8083
        } else {
            return 3000;
        }
    }

    getDBStringConnection(): string {

        if (this.environment === Environments.prod_environment) {
            return 'prod_connection_string';
        } else if (this.environment === Environments.dev_environment) {
            return 'dev_connection_string';
        } else if (this.environment == Environments.local_environment) {
            return 'local_connection_string'
        } else {
            return 'qa_connection_string';
        }
    }
}

export default new Environment(Environments.local_environment);