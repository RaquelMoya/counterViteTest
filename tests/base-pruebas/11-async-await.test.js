import { getImagen } from "../../src/base-pruebas/11-async-await";


describe ('Pruebas con async-await', () => {
    test('debe de retornar un url', async() => {
        const resp = await getImagen();
        expect( resp ).toBe('No existe');
    })
})