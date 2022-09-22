import {getUser} from "../../src/base-pruebas/05-funciones";
import {getUsuarioActivo} from "../../src/base-pruebas/05-funciones";

describe ('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    });
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'Fernando';
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    }
    );
});