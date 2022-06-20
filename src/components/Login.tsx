import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { BlockUI } from "primereact/blockui";
import React, { useEffect, useState } from "react";
import { preProcessFile } from "typescript";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [blockedPanel, setBlockedPanel] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://food-health-be.herokuapp.com/api/ping")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const handleClick = () => {
    //console.log(password);
    setLoading1(true);
    setBlockedPanel(true);
  };

  return (
    <>
      <BlockUI
        blocked={blockedPanel}
        template={<i className="pi pi-lock" style={{ fontSize: "3rem" }} />}
      >
        <Fieldset
          legend={
            "Login (" +
            process.env.NODE_ENV +
            " " +
            process.env.REACT_APP_APP_VER +
            ")"
          }
        >
          <h5>User</h5>
          <span className="p-input-icon-left">
            <i className="pi pi-user" />
            <InputText
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="user name"
            />
          </span>

          <h5>Password</h5>
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
          />
        </Fieldset>
      </BlockUI>

      <Button
        label="Submit"
        loading={loading1}
        className="p-button-info"
        onClick={handleClick}
        style={{ marginTop: "10px" }}
      />
    </>
  );
}

export default Login;
