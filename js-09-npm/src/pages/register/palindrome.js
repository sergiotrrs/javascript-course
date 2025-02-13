/**
 Palíndromo: palabra que se lee igual de izquierda a derecha
  y viceversa.

  Ejemplo: oso, Anita lava la tina
*/
const palindrome = (phrase) => {

  if(phrase === undefined || phrase === null || phrase === "" || phrase === " "){
    return false;
  };

  phrase = phrase.toUpperCase(); // ANITA LAVA LA TINA
  const phraseWithoutSpaces = phrase.replaceAll( " ", "" ); // ANITALAVALATINA
  const splitPhrase = phraseWithoutSpaces.split(""); // [A, N, I, T, A, L, A, V, A, L, A, T, I, N, A]
  const reversePhrase = splitPhrase.reverse(); // [A, N, I, T, A, L, A, V, A, L, A, T, I, N, A]
  const joinReversePhrase = reversePhrase.join(""); // ANITALAVALATINA

  return phraseWithoutSpaces === joinReversePhrase;

};

export { palindrome };
