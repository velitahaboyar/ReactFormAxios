import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [result, setResult] = useState();

  // const myButtonClick = async () => {
  //   if (name === "taha" && password === "1234") {
  //     console.log("OK");
  //     setResult("Giriş Başarılı");
  //   } else {
  //     console.log("NOT OK");
  //     setResult("Hatalı kullanıcı adı veya şifre");
  //   }


const myButtonClick = async () => {
  let requestBody = {
    service_val_name: name,
    service_val_password: password,
  };
  const response = await axios.post(
    "https://www.mockachino.com/1b9b9eca-13b9-41/login",
    requestBody
  );
  if (response.data.result == "success") {
    setResult("Giriş Başarılı");
  } else {
    setResult("Hatalı kullanıcı adı veya şifre");
  }

}

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        autoComplete="off"
        type="text"
        name="username"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="password">Last name:</label>
      <input
        autoComplete="off"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <input type="button" value="Gönder" onClick={myButtonClick} />
      <br />
      {name}
      <br />
      {password}
      <br />
      {result}
    </form>
  );
};

export default Login;
