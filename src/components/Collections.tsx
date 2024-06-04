import { useContext } from "react";
import { Mycontext } from "../App";
function Collections() {
  const context = useContext(Mycontext);
  console.log(context);
  return (
    <div>
      {context.useData.products.map((e, index: number) => {
        return (
          <div key={index}>
            <h1 onClick={() => context.navigate(`/${e.id}`)}>{e.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Collections;
