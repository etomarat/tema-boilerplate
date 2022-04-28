import { connectionPr } from './src/app';
import { Admin } from './src/db/admin';

const [email, password] = process.argv.slice(2);

connectionPr.then(async () => {
    const admin = new Admin({ email, password });
    await admin.save();
    // tslint:disable-next-line:no-console
    console.log(`Admin user: ${email} is created`);
    (await connectionPr).disconnect();
    process.exit()
});