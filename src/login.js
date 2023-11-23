// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [name1, SetName] = useState("");
//   const navig = useNavigate();

//   const nav = () => {
//     const temp = "login";
//     navig("/user", { state: { name1, temp } });
//   }

//   return (
//     <>
//       <h1>LOGIN</h1>
//       <form>
//         <input type="text" placeholder="enter name to login" onChange={(e) => SetName(e.target.value)} />
//         <button onClick={nav}>login</button>
//       </form>
//     </>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState("");
  const navig = useNavigate();

  const nav = () => {
    const temp = "login";
    navig("/user", { state: { username: name, comp: temp } });
  }

  return (
    <>
      <h1>LOGIN</h1>
      <form>
        <input type="text" placeholder="enter name to login" onChange={(e) => setName(e.target.value)} />
        <button onClick={nav}>login</button>
      </form>
    </>
  );
}

export default Login;

