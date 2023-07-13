describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

// CREAR DOS TEST
// Si no sabés por dónde arrancar, te damos algunas ideas:

// Un Arreglo desordenado que termine ordenado.
// Un Arreglo ordenado que debe mantenerse ordenado.
// Un Arreglo a la inversa ([3,2,1]) que termine ordenado.

//Si espiamos sobre bubbleSort, nos dirá cuántas veces la llamamos.
//Sin embargo, no nos devolverá cuántas veces hicimos un swap.
//para contar cuántos intercambios sucedieron en nuestra Función global swap, usá spyOn.
