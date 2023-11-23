// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Singin = () => {
//   const [name, SetName] = useState("");
//   const navig = useNavigate();

//   const nav = () => {
//     const temp = "sing";
//     navig("/user", { state: { name, temp } });
//   }

//   return (
//     <>
//       <h1>SING</h1>
//       <form>
//         <input type="text" placeholder="enter your name" onChange={(e) => SetName(e.target.value)} />
//         <button onClick={nav}>singin</button>
//       </form>
//     </>
//   );
// }

// export default Singin;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Singin = () => {
  const [name, setName] = useState("");
  const navig = useNavigate();

  const nav = () => {
    const temp = "sign";
    navig("/user", { state: { username: name, comp: temp } });
  }

  return (
    <>
      <h1>SING</h1>
      <form>
        <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />
        <button onClick={nav}>singin</button>
      </form>
    </>
  );
}

export default Singin;

