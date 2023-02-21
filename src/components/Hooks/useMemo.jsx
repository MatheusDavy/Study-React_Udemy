import React, { useCallback, useState, useMemo } from "react";

// useMemo = o component só será renderizado se ele mudar, se os components pais dele mudar, ele não será renderizado

const Button = ({ amounIncrement }) => {
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
};

export function UseMemoComponent() {

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

  const btn = useMemo(()=>{
    return  <Button amounIncrement={amounIncrement} />
  }, [amounIncrement])
  
  return (
    <>
      <p>{amount}</p>
      <br />
      <br />
      {btn}
    </>
  );
}
