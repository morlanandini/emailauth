import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_fCIKTJCSV",
    ClientId :"62v8p9d7ikfe5rlkl75lp5sk1l"
}

export default new CognitoUserPool(poolData);