import { Button, TextField } from "@mui/material";
import React from "react";

const Image = () => {
  const [code, setCode] = React.useState("");
  const [resultCode, setResultCode] = React.useState([]);

  React.useEffect(() => {
    console.log(resultCode);
  }, [resultCode]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
          width: "25%",
        }}
      >
        <TextField
          id="outlined-multiline"
          label="Code Area"
          variant="outlined"
          multiline
          rows={12}
          value={code}
          InputLabelProps={{style: {fontSize: 20}}}
          onChange={(e) => {
            setCode(e.target.value);
            const result = e.target.value.split("\n");
            result.map((item, index) => {
              const resultItem = item.split(" ");
              resultCode.ins = resultItem[0];

              // resultCode.=resultItem[1];
              return null;
            });
            setResultCode(e.target.value.split("\n"));
          }}
        />
        <Button
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "20px",
            backgroundColor: "teal",
          }}
        >
          Load
        </Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "25%" }}>
        <TextField
          id="outlined-multiline"
          label="Output Clock Cycles"
          disabled
          variant="outlined"
          multiline
          rows={12}
          InputLabelProps={{style: {fontSize: 20}}}
        />
        <Button
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "20px",
            backgroundColor: "teal",
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Image;
