
const GmeetDrive = require(`google-meet-drive`);

const gparams = {
    credentials: process.env.credentials,
    accessToken: process.env.accessToken,
    destination_folder_id: process.env.destination_folder_id,
}

const gmDrive = new GmeetDrive(gparams);

const main = async () => {
    await gmDrive.list();
    await gmDrive.ytUpload();
}

main();
