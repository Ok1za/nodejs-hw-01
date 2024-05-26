import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        const parseOldContacts = [];
        await fs.writeFile(PATH_DB, JSON.stringify(parseOldContacts), 'utf8');
        console.log('Контакти успішно видалено.');
    } catch (error) {
        console.error('Помилка видалення контактів:', error);
    }
};

await removeAllContacts();
