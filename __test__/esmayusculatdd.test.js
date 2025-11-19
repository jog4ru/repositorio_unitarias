const isUpperCase = require('../utils/esmayuscula');

describe('iteracion', () => {
    test.each`
      firstValue                | expectedResult    
      ${"GRAFBILL"}             | ${true}
      ${"nohaymayusculasaqui"}  | ${false}
      ${" "}                    | ${true}
      ${"Hola"}                 | ${false}
      ${"HOLa "}                | ${false}
    ${"PaPaCHINGO"}             | ${false}

    `('$firstValue should return $expectedResult', ({ firstValue, expectedResult }) => {
        expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
});

