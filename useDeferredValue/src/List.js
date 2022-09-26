import { useMemo, useDeferredValue, useEffect } from "react";

function List({ input }) {
  const LIST_SIZE = 15000;
  // await the input to complete load to list it useDeferred
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(()=>{
console.log(`my input is ${input},\n my deferredInput is: ${deferredInput}`)
  },[input, deferredInput])

  return list;
}

export default List;
