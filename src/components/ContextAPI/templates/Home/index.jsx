import { useCounterContext } from "../../context/CounterContext";
import "./styles.css";
import { Button } from "../../components/Button";

export function ContextAPIHome() {
  const [state, actions] = useCounterContext();

  return (
    <main style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          margin: "auto auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Actions</h1>
        <h4> 
          {state.loading ? 
            <span>Loading ...</span>
          :
            <span>Counter : {state.counter}</span>
          }
          
        </h4>

        <br />
        <br />

        <div style={{ display: "flex", gap: `30px` }}>
          <Button onButtonClick={() => actions.increase()}children={`Increase`}/>

          <Button onButtonClick={() => actions.decrease()} children={`Decrease`}/>

          <Button onButtonClick={() => actions.reset()} children={`Reset`} />

          <Button onButtonClick={() => actions.setCounter({counter: 1000})} children={`SetCounter to 1000`} />

          <Button onButtonClick={() => actions.asyncIncrease()} children={`Async Increase`} />

          <Button onButtonClick={() => actions.asyncDecrease()} children={`Async Decrease`} />

        </div>
      </div>
    </main>
  );
}
