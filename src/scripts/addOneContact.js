import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    const addContact = createFakeContact();
    contacts.push(addContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Додано новий контакт.');
};

await addOneContact();
