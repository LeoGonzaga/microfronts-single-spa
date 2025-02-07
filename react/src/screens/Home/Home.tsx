import { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { emitEvent } from "../../utils/customEvent";

export const Home = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  const handleChangeValue = () => {
    emitEvent({ name: "@mfe/react-counter", data: counter + 1 });
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Micro front 1</h1>
      <p>{counter}</p>

      <button onClick={handleChangeValue}>Add</button>

      <Parcel
        config={() =>
          Promise.resolve({
            bootstrap: () => import("@mfe/app2").then((mod) => mod.bootstrap),
            mount: (props) =>
              import("@mfe/app2").then((mod) => mod.mount(props)),
            unmount: (props) =>
              import("@mfe/app2").then((mod) => mod.unmount(props)),
          })
        }
      />
    </div>
  );
};
