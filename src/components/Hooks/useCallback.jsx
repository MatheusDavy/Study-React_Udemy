import React, { useCallback, useState } from "react";

// Rect.memo = o component só será renderizado se ele mudar, se os elementos pais dele mudar, ele não será renderizado
const Button = React.memo(({ amounIncrement }) => {
  console.log('Filho Renderizou')
  return (
    <button
      onClick={() => {
        amounIncrement(20);
      }}
    >
      Click to increment more 20
    </button>
  );
});

export function UseCallbackComponent() {

  const [amount, setAmount] = useState(0);

    /*
        Recebe como argumentos, um callback e um array. 
        useCallback retornará uma versão memorizada do 
        callback que só muda se uma das entradas tiverem 
        sido alteradas.
    */
  const amounIncrement = useCallback((num) => {
    setAmount((prevState) => prevState + num);
  }, []);

  console.log('Pai Renderizou')
  
  return (
    <>
      <p>{amount}</p>
      <br />
      <br />
      <Button amounIncrement={amounIncrement} />
    </>
  );
}
