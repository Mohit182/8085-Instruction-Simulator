import { Button, TextField } from "@mui/material";
import React from "react";

const binToDec = (bin) => {
  return parseInt(bin, 2);
};

const decToBin = (dec) => {
  return parseInt(dec, 10).toString(2);
};

const instruction = [
  {
    name: "ADD",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(0001), RESET",
  },
  {
    name: "AND",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(0010), RESET",
  },
  {
    name: "MOV",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(L), B(E), RESET",
  },
  {
    name: "MVI",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "PC(E), MAR(E,L)",
    3: "PC(I)",
    4: "",
    5: "",
    6: "A(L), RAM(E), RESET",
  },
  {
    name: "INR",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(0011), RESET",
  },
  {
    name: "DCR",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(0100), RESET",
  },
  {
    name: "CMP",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(0101), RESET",
  },
  {
    name: "CLR",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(0110), RESET",
  },
  {
    name: "CMA",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(0111), RESET",
  },
  {
    name: "SWP",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "B(E), TMP(L)",
    5: "A(E), B(L)",
    6: "A(L), TMP(E), RESET",
  },
  {
    name: "FLP",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(1000), RESET",
  },
  {
    name: "SQR",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(1001), RESET",
  },
  {
    name: "SQT",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(1010), RESET",
  },
  {
    name: "LCM",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(1011), RESET",
  },
  {
    name: "TCA",
    0: "PC(E), MAR(E,L)",
    1: "PC(I), RAM(E), IR(L)",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "A(E,L), B(E), ALU(1100), RESET",
  },
];
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
  const [resultCode, setResultCode] = React.useState({});
  const [A, setA] = React.useState("");
  const [B, setB] = React.useState("");
  const [Aout, setAout] = React.useState("");
  const [Bout, setBout] = React.useState("");
  const [PC, setPC] = React.useState(0);
  const [comments, setComments] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [t, setT] = React.useState(-1);
  const [execute, setExecute] = React.useState(false);

  React.useEffect(() => {
    if (t > -1) {
      for (var i = 0; i < instruction.length; i++) {
        if (instruction[i]["name"] === resultCode["ins"].toUpperString()) {
          setOutput(instruction[i].t);
          break;
        }
      }
    }

    if (execute) {
      if (resultCode["ins"] === "MOV") {
        setAout(B);
        setBout(B);

        setPC(PC + 1);
        setComments(
          "Move Content of one resistor with respect to another resistor"
        );
      }
      if (resultCode["ins"] === "MVI") {
        setAout(resultCode["y"]);
        // setBout(B);
        setPC(PC + 2);
        setComments(
          "Move Content of one resistor with respect to another resistor"
        );
      }
      if (resultCode["ins"] === "ADD") {
        setAout(decToBin(binToDec(A) + binToDec(B)));
        setBout(B);

        setPC(PC + 1);
        setComments("Add content of two resistors");
      }
      if (resultCode["ins"] === "AND") {
        setAout(decToBin(binToDec(A) & binToDec(B)));
        setBout(B);

        setPC(PC + 1);
      }
      if (resultCode["ins"] === "INR") {
        setAout(decToBin(binToDec(A) + 1));

        setPC(PC + 1);
        setComments("Increment content of resistor");
      }
      if (resultCode["ins"] === "DCR") {
        setAout(decToBin(binToDec(A) - 1));

        setPC(PC + 1);
        setComments("Decrement content of resistor");
      }
      if (resultCode["ins"] === "CMP") {
        let carry = 0,
          zero = 0;
        if (binToDec(A) > binToDec(B)) {
          carry = 1;
        }
        if (binToDec(A) == binToDec(B)) {
          zero = 1;
        }
        if (binToDec(A) < binToDec(B)) {
          carry = 1;
          zero = 1;
        }

        setPC(PC + 1);
        setComments(
          `Compare content of two resistors \n` + carry
            ? `Carry flag: ${carry} \n`
            : " " + zero
            ? `Zero flag: ${zero} \n`
            : " "
        );
      }
      if (resultCode["ins"] === "CLR") {
        setAout(binToDec(0));

        setPC(PC + 1);
        setComments("Clear content of resistor");
      }
      if (resultCode["ins"] === "CMA") {
        setAout(decToBin(~binToDec(A)));

        setPC(PC + 1);
        setComments("Complement content of resistor");
      }
      if (resultCode["ins"] === "SWP") {
        setAout(B);
        setBout(A);
        setPC(PC + 1);
        setComments("Swap content of two resistors");
      }
      if (resultCode["ins"] === "FLP") {
        setAout(decToBin(reverseBits(binToDec(A))));
        setPC(PC + 1);
        setComments("Flip content of resistor");
      }
      if (resultCode["ins"] === "SQR") {
        //square the binary string a
        setAout(decToBin(binToDec(A) * binToDec(A)));
        setPC(PC + 1);
        setComments("Square content of resistor");
      }
      if (resultCode["ins"] === "SQT") {
        //square root the binary string a
        setAout(decToBin(Math.sqrt(binToDec(A))));
        setPC(PC + 1);
        setComments("Square root content of resistor");
      }
      if (resultCode["ins"] === "LCM") {
        //find least common multiple of binary strings a and b
        setAout(decToBin(lcmoftwo(binToDec(A), binToDec(B))));

        setPC(PC + 1);
        setComments("Find least common multiple of two resistors");
      }
    }
  }, [t, execute]);

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
                value={A}
                InputLabelProps={{
                  style: { fontSize: 20, borderColor: "teal !important" },
                }}
                onChange={(e) => {
                  setA(e.target.value);
                }}
              />
              <TextField
                style={{ padding: "5px", width: "50%" }}
                id="outlined"
                label="B"
                variant="outlined"
                value={B}
                InputLabelProps={{
                  style: { fontSize: 20, borderColor: "teal !important" },
                }}
                onChange={(e) => {
                  setB(e.target.value);
                }}
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
                value={Aout}
                InputLabelProps={{
                  style: { fontSize: 20, borderColor: "teal !important" },
                }}
              />
              <TextField
                disabled
                style={{ padding: "5px", width: "50%" }}
                id="outlined"
                label="B"
                variant="outlined"
                value={Bout}
                InputLabelProps={{
                  style: { fontSize: 20, borderColor: "teal !important" },
                }}
              />
            </div>
          </div>
          <TextField
            disabled
            style={{ padding: "5px", width: "40%" }}
            id="outlined"
            label="PC"
            variant="outlined"
            value={PC}
            InputLabelProps={{
              style: { fontSize: 20, borderColor: "teal !important" },
            }}
          />
        </div>
        <TextField
          id="outlined-multiline"
          disabled
          label="Comments"
          variant="outlined"
          multiline
          rows={10}
          value={comments}
          InputLabelProps={{
            style: { fontSize: 20, borderColor: "teal !important" },
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
            let result = code.split("\n");
            setResultCode({});
            console.log(result);
            let resultItem = result[0].split(" ");
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
            setExecute(true);
          }}
        >
          Execute
        </Button>
        <Button
          disabled={execute}
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
            setT(-1);
            setExecute(false);
            setCode("");
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
        value={output}
      />
    </div>
  );
};

export default Image;
