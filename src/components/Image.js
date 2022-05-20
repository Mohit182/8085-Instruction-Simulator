import { Button, TextField } from "@mui/material";
import React from "react";

const binToDec = (bin) => {
  return parseInt(bin, 2);
};

const decToBin = (dec) => {
  return parseInt(dec, 10).toString(2);
};

const instruction = [];
const reverseBits = (n) => {
  let rev = 0;

  while (n > 0) {
    rev <<= 1;
    if ((n & 1) == 1) rev ^= 1;

    n >>= 1;
  }

  return rev;
};
const gcd = (a, b) => {
  if (b == 0) return a;
  return gcd(b, a % b);
};

// Function to return LCM of two numbers
const lcmoftwo = (a, b) => {
  return (a / gcd(a, b)) * b;
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
  const [t, setT] = React.useState(-1);

  React.useEffect(() => {
    console.log(resultCode);
    if (resultCode.length > 0) {
      console.log("resultCode.ins", resultCode[0].ins);
    }

    if (t > -1) {
      for (var i = 0; i < instruction.length; i++) {
        if (instruction[i]["name"] === resultCode["ins"].toUpperString()) {
          setOutput(instruction[i].t);
          break;
        }
      }
    }
  }, [resultCode, t]);

  const mov = (a, b) => {
    setAout(b);
    setBout(B);

    setPC(PC + 1);
    setComments(
      "Move Content of one resistor with respect to another resistor"
    );
  };

  const mvi = (a, b) => {
    setAout(b);
    setBout(B);

    setPC(PC + 2);
    setComments("Move immediate to given resistor");
  };

  const add = (a, b) => {
    setAout(decToBin(binToDec(A) + binToDec(B)));
    setBout(B);

    setPC(PC + 1);
    setComments("Add content of two resistors");
  };

  const and = (a, b) => {
    setAout(decToBin(binToDec(A) & binToDec(B)));
    setBout(B);

    setPC(PC + 1);
  };

  const inr = (a) => {
    setAout(decToBin(binToDec(A) + 1));

    setPC(PC + 1);
    setComments("Increment content of resistor");
  };

  const dcr = (a) => {
    setAout(decToBin(binToDec(A) - 1));

    setPC(PC + 1);
    setComments("Decrement content of resistor");
  };

  //check
  const cmp = (a, b) => {
    // if (A == a) {
    //   setAout(binToDec(A) - binToDec(B));
    // }
    // if (B == a) {
    //   setBout(binToDec(A) - binToDec(B));
    // }
    setPC(PC + 1);
    setComments("Compare content of two resistors");
  };

  const clr = (a) => {
    setAout(binToDec(0));

    setPC(PC + 1);
    setComments("Clear content of resistor");
  };

  const cma = (a) => {
    setAout(decToBin(~binToDec(A)));

    setPC(PC + 1);
    setComments("Complement content of resistor");
  };

  const swp = (a, b) => {
    setAout(B);
    setBout(A);
    setPC(PC + 1);
    setComments("Swap content of two resistors");
  };

  const flp = (a) => {
    setAout(decToBin(reverseBits(binToDec(A))));
    setPC(PC + 1);
    setComments("Flip content of resistor");
  };

  const sqr = (a) => {
    //square the binary string a
    setAout(decToBin(binToDec(A) * binToDec(A)));
    setPC(PC + 1);
    setComments("Square content of resistor");
  };

  const sqt = (a) => {
    //square root the binary string a
    setAout(decToBin(Math.sqrt(binToDec(A))));
    setPC(PC + 1);
    setComments("Square root content of resistor");
  };

  const lcm = (a, b) => {
    //find least common multiple of binary strings a and b
    setAout(decToBin(lcmoftwo(binToDec(A), binToDec(B))));

    setPC(PC + 1);
    setComments("Find least common multiple of two resistors");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        marginTop: "25px",
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
                style={{ padding: "5px", width: "50%" }}
                id="outlined"
                label="A"
                variant="outlined"
              />
              <TextField
                style={{ padding: "5px", width: "50%" }}
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
                style={{ padding: "5px", width: "50%" }}
                id="outlined"
                label="A"
                variant="outlined"
              />
              <TextField
                disabled
                style={{ padding: "5px", width: "50%" }}
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
          marginTop: "20px",
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
            const resultItem = result.split(" ");
            const ins = resultItem[0];
            const x = resultItem[1];
            if (resultItem.length > 2) {
              const y = resultItem[2];
              setResultCode({
                ins,
                x,
                y,
              });
            } else {
              setResultCode({
                ins,
                x,
              });
            }
          }}
        >
          Execute
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
          onClick={() => {
            setT(t + 1);
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
          onClick={() => {
            setPC(0);
            setAout("");
            setBout("");
            setA("");
            setB("");
            setOutput("");
            setComments("");
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
        style={{ width: "50%", marginTop: "20px" }}
        InputLabelProps={{ style: { fontSize: 20 } }}
      />
    </div>
  );
};

export default Image;
