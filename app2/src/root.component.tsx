import { useEffect, useState } from "react";

export default function Root(props) {
  const [counter, setCounter] = useState<number>(0);
  console.log("Rerender");

  useEffect(() => {
    window.addEventListener("@mfe/react-counter", (event: any) => {
      setCounter(event.detail);
    });

    return () => {
      window.removeEventListener("@mfe/react-counter", (event: any) => {
        setCounter(event.detail);
      });
    };
  }, []);

  return (
    <section>
      <h1>Microfront sendo utilizado como parcel</h1> {counter}
    </section>
  );
}
