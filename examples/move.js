
const GmeetDrive = require(`google-meet-drive`);

const gparams = {
    credentials: process.env.credentials,
    accessToken: process.env.accessToken,
    meet_folder_id: process.env.meet_folder_id,
    destination_folder_id: process.env.destination_folder_id,
}

const gmeetdrive = new GmeetDrive(gparams);

const main = async () => {
    await gmeetdrive.move();
}

main();
