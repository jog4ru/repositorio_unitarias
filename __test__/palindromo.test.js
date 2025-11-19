const palindromo = require('../utils/palindromo');

test("Es_palindromo", () => {
        expect(palindromo("ana")).toBe("ana");
}) 

test("No_palindromo", () => {
        expect(palindromo("juan")).toBe("nauj");
}) 

/*test("No_palindromo", () => {
        //este tiene que fallar ya que lo que se espera no es lo que esta puesto
        expect(palindromo("supercalifragilistoespialidoso")).toBe("no voy a ponerlo al reves");
})*/ 


