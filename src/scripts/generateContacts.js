import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const createFakeContact = (number) => {
        const contacts = [];

        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }
        return contacts;
    }

    try {
        const oldContacts = await fs.readFile(PATH_DB, 'utf8');
        const parseContacts = JSON.parse(oldContacts);

        const newContacts = createFakeContact(number);

        const updContacts = [...parseContacts, ...newContacts];

        await fs.writeFile(PATH_DB, JSON.stringify(updContacts, null, 2), 'utf8');

        console.log(`${number} контактів додано успішно.`);
    } catch (err) {
        console.error('Помилка при генеруванні контактів:', err);
    }
};

await generateContacts(5);
