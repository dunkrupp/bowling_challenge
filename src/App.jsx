import {useReducer, useState} from "preact/hooks";

export default function App() {
  const [rollInput, setRollInput] = useState('');
  const [state, dispatch] = useReducer(
    () => {},
    {}
  );

  return (
    <></>
  )
}
