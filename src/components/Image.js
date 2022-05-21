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
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0001), RESET",
  },
  {
    name: "AND",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0010), RESET",
  },
  {
    name: "MOV",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(L), B(E), RESET",
  },
  {
    name: "MVI",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2: PC(E), MAR(E,L)",
    3: "T3: PC(I)",
    4: "T4:",
    5: "T5:",
    6: "T6: A(L), RAM(E), RESET",
  },
  {
    name: "INR",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5: A(E,L), B(E), ALU(0100), RESET",
    6: "T6: A(E,L), B(E), ALU(0011), RESET",
  },
  {
    name: "DCR",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0100), RESET",
  },
  {
    name: "CMP",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0101), RESET",
  },
  {
    name: "CLR",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0110), RESET",
  },
  {
    name: "CMA",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0111), RESET",
  },
  {
    name: "SWP",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4: B(E), TMP(L)",
    5: "T5: A(E), B(L)",
    6: "T6: A(L), TMP(E), RESET",
  },
  {
    name: "FLP",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1000), RESET",
  },
  {
    name: "SQR",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1001), RESET",
  },
  {
    name: "SQT",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1010), RESET",
  },
  {
    name: "LCM",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1011), RESET",
  },
  {
    name: "TCA",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1100), RESET",
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
      const s = resultCode["ins"];

      for (var i = 0; i < instruction.length; i++) {
        const item = instruction[i];
        if (item["name"] === s) {
          setOutput(item[`${t}`]);
          break;
        }
      }
    }
  }, [t]);
  React.useEffect(() => {
    if (resultCode["ins"] !== undefined) {
      if (resultCode["ins"] === "MOV") {
        setAout(B);
        setBout(B);

        setPC(PC + 1);
        setComments("Move Content of register B to register A");
      }
      if (resultCode["ins"] === "MVI") {
        setAout(resultCode["y"]);
        // setBout(B);
        setPC(PC + 2);
        setComments("Move data input to register A");
      }
      if (resultCode["ins"] === "ADD") {
        setAout(decToBin(binToDec(A) + binToDec(B)));
        setBout(B);

        setPC(PC + 1);
        setComments("Add content of two registers");
      }
      if (resultCode["ins"] === "AND") {
        setAout(decToBin(binToDec(A) & binToDec(B)));
        setBout(B);
        setComments("Find bitwise and operation between A and B");
        setPC(PC + 1);
      }
      if (resultCode["ins"] === "INR") {
        setAout(decToBin(binToDec(A) + 1));
        setComments("Increment value of register A");
        setPC(PC + 1);
        // setComments("Increment content of resistor");
      }
      if (resultCode["ins"] === "DCR") {
        setAout(decToBin(binToDec(A) - 1));
        setComments("Decrement value of register A");
        setPC(PC + 1);
        // setComments("Decrement content of resistor");
      }
      if (resultCode["ins"] === "CMP") {
        let carry = 0,
          zero = 0;
        if (binToDec(A) > binToDec(B)) {
          carry = 1;
        }
        if (binToDec(A) === binToDec(B)) {
          zero = 1;
        }
        if (binToDec(A) < binToDec(B)) {
          carry = 1;
          zero = 1;
        }

        setPC(PC + 1);
        setComments(
          `Compare content of registers A and B \n` + carry
            ? `Carry flag: ${carry} and A > B\n`
            : " " + zero
            ? `Zero flag: ${zero} \n`
            : " "
        );
      }
      if (resultCode["ins"] === "CLR") {
        setAout(binToDec(0));

        setPC(PC + 1);
        setComments("Clear content of register A");
      }
      if (resultCode["ins"] === "CMA") {
        setAout(decToBin(~binToDec(A)));

        setPC(PC + 1);
        setComments("Complement content of register A");
      }
      if (resultCode["ins"] === "SWP") {
        setAout(B);
        setBout(A);
        setPC(PC + 1);
        setComments("Swap content of register A and B");
      }
      if (resultCode["ins"] === "FLP") {
        setAout(decToBin(reverseBits(binToDec(A))));
        setPC(PC + 1);
        setComments("Flip content of register A");
      }
      if (resultCode["ins"] === "SQR") {
        //square the binary string a
        setAout(decToBin(binToDec(A) * binToDec(A)));
        setPC(PC + 1);
        setComments("Find Square of content of register A");
      }
      if (resultCode["ins"] === "SQT") {
        //square root the binary string a
        setAout(decToBin(Math.sqrt(binToDec(A))));
        setPC(PC + 1);
        setComments("Find Square root of content of resistor");
      }
      if (resultCode["ins"] === "LCM") {
        //find least common multiple of binary strings a and b
        setAout(decToBin(lcmoftwo(binToDec(A), binToDec(B))));

        setPC(PC + 1);
        setComments("Find least common multiple of registers A and B");
      }
    }
  }, [execute]);

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
          label="Input Instruction"
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
            setExecute(!execute);
          }}
        >
          Execute
        </Button>
        <Button
          disabled={!execute}
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
            console.log(t);
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
        variant="outlined"
        multiline
        rows={4}
        style={{ width: "50%", marginTop: "20px" }}
        InputLabelProps={{ style: { fontSize: 20 } }}
        value={output}
      />
    </div>
  );
};

export default Image;
