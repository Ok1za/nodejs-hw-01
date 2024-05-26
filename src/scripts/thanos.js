import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);

        const updContacts = contacts.filter(() => Math.random() >= 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(updContacts, null, 2), 'utf8');
        console.log('Контакти оновлено.');
    } catch (error) {
        console.error('Помилка при оновленні контактів:', error);
    }
};

await thanos();
