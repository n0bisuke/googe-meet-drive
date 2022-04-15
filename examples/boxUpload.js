
const GmeetDrive = require(`google-meet-drive`);

const gparams = {
    credentials: process.env.credentials,
    accessToken: process.env.accessToken,
    destination_folder_id: process.env.destination_folder_id,
}

const gmDrive = new GmeetDrive(gparams);

const boxsdk = require(`box-sdk`);
const _boxUpload = async () => {

}

const main = async () => {    
    const files = await gmDrive.ls();
    
    for (let i = 0, len = file.length ;i < len; i++) {

        const file = await gmDrive.getOne(files[0].id);
        const done = await _boxUpload(file);
        
        if(!done) return;
        await gmDrive.rename({file: file, name: `${file.name}_boxdone`});
    }
    
}

main();
