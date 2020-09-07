import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

import { FETCH_USER_WITH_PHONE_NUMBERS  } from '../DB/queries/fetchUserPhoneNumber';

const table = 'users';
   

    export async function getAll() {
       const {rows} = await connection.raw(FETCH_USER_WITH_PHONE_NUMBERS );
       return camelize(rows);
   }

   export async function getById(id) {
       const [result] = await connection.select('*').from(table).where({id}).where('is_active', true);

       return result ? camelize(result) : null;
    }

    export async function create(params) {
       const [data] = await connection.insert(snakeize(params)).into(table).returning('*');

       return camelize(data);
    }
    export async function remove(userId) {
      const [data] = await connection(table).update({ 'is_active' : false}).where({id: userId});
            
   }