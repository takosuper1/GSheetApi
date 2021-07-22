const {google} = require('googleapis');
const keys = require('./keys.json')

const client = new google.auth.JWT(
    keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens){
    if (err){
        console.log(err);
        return;
    } else {
        console.log('connected')

    }
} )


async function gsrun(cl){

    const gsapi = google.sheets({version:'v4', auth: cl });

    const opt = {
        spreadsheetId: '1tY0wP6tQFIFmzlmURzgzKSshjc9xcP1-fvfXSj5hJh4',
        range: 'A2:C2'
    };
try {
    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values);  
} catch (error) {
    console.log(error);
}


}

gsrun(client);