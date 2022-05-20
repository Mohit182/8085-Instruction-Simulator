import { Button, TextField } from "@mui/material";
import React from "react";

const binToDec = (bin) => {
  return parseInt(bin, 2);
};

const Image = () => {
  const [code, setCode] = React.useState("");
  const [resultCode, setResultCode] = React.useState([]);
  const [A, setA] = React.useState("");
  const [B, setB] = React.useState("");
  const [Aout, setAout] = React.useState("");
  const [Bout, setBout] = React.useState("");
  const [PC, setPC] = React.useState(0);
  const [comments, setComments] = React.useState("");
  const [output, setOutput] = React.useState("");

  React.useEffect(() => {
    console.log(resultCode);
    if (resultCode.length > 0) {
      console.log("resultCode.ins", resultCode[0].ins);
    }
  }, [resultCode]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        marginTop: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <TextField
          id="outlined-multiline"
          label="Code Area"
          variant="outlined"
          multiline
          rows={10}
          value={code}
          InputLabelProps={{
            style: { fontSize: 20, borderColor: "teal !important" },
          }}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3>Input</h3>
              <TextField
                style={{ padding: "1px", width: "40%" }}
                id="outlined"
                label="A"
                variant="outlined"
              />
              <TextField
                style={{ padding: "1px", width: "40%" }}
                id="outlined"
                label="B"
                variant="outlined"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3>Output</h3>
              <TextField
                disabled
                style={{ padding: "5px", width: "40%" }}
                id="outlined"
                label="A"
                variant="outlined"
              />
              <TextField
                disabled
                style={{ padding: "5px", width: "40%" }}
                id="outlined"
                label="B"
                variant="outlined"
              />
            </div>
          </div>
          <TextField
            disabled
            style={{ padding: "5px", width: "40%" }}
            id="outlined"
            label="PC"
            variant="outlined"
          />
        </div>
        <TextField
          id="outlined-multiline"
          label="Comments"
          variant="outlined"
          multiline
          rows={10}
          value={code}
          InputLabelProps={{
            style: { fontSize: 20, borderColor: "teal !important" },
          }}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          style={{
            width: "50%",
            margin: "5px",
            marginTop: "20px",
            backgroundColor: "teal",
          }}
          onClick={() => {
            const result = code.split("\n");
            setResultCode([]);
            result.map((item, index) => {
              const resultItem = item.split(" ");
              const ins = resultItem[0];
              const x = resultItem[1];
              if (resultItem.length > 2) {
                const y = resultItem[2];
                setResultCode((prev) => [
                  ...prev,
                  {
                    ins,
                    x,
                    y,
                  },
                ]);
              } else {
                setResultCode((prev) => [
                  ...prev,
                  {
                    ins,
                    x,
                  },
                ]);
              }
              return null;
            });
          }}
        >
          Load
        </Button>
        <Button
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          style={{
            width: "50%",
            margin: "5px",
            marginTop: "20px",
            backgroundColor: "teal",
          }}
        >
          Next
        </Button>
        <Button
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          style={{
            width: "50%",
            margin: "5px",
            marginTop: "20px",
            backgroundColor: "teal",
          }}
        >
          Reset
        </Button>
      </div>

      <TextField
        id="outlined-multiline"
        label="Output Clock Cycles"
        disabled
        variant="outlined"
        multiline
        rows={8}
        style={{ width: "50%" }}
        InputLabelProps={{ style: { fontSize: 20 } }}
      />
    </div>
  );
};

export default Image;
