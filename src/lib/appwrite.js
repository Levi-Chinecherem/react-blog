import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6630b1000036526ea2e0'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
