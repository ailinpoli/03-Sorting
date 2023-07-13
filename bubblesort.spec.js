describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

it("Un Arreglo desordenado que termine ordenado", function () {
  expect(bubbleSort([5, 8, 3, 1, 9])).toEqual([1, 3, 5, 8, 9]);
});

it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
  expect(bubbleSort([2, 6, 7, 9])).toEqual([2, 6, 7, 9]);
});

it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado.", function () {
  expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
});

//Si espiamos sobre bubbleSort, nos dirá cuántas veces la llamamos.
//Sin embargo, no nos devolverá cuántas veces hicimos un swap.
//para contar cuántos intercambios sucedieron en nuestra Función global swap, usá spyOn.

// describe("bubbleSort spies", function () {
//   it("un arreglo de 5 elementos debe hace exactamente 4 swap", function () {
//     spyOn(window, "swap").and.callThrough();
//     // callThrough le dice al spy que utilice el método original chocolate['masticar'],
//     // mientras que `callFake` haría una copia.
//     window.swap([5, 8, 3, 1, 9]);
//     expect(window.swap.calls.count()).toEqual(4);
//   });
// });
