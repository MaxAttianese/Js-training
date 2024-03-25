/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3" */

function rgb(r, g, b) {
  let hex1;
  let hex2;
  let hex3;

  if (r >= 255) {
    hex1 = "FF";
  } else if (r == 0 || r < 0) {
    hex1 = "00";
  } else {
    hex1 = r.toString(16).toUpperCase();
  }

  if (g >= 255) {
    hex2 = "FF";
  } else if (g == 0 || g < 0) {
    hex2 = "00";
  } else {
    hex2 = g.toString(16).toUpperCase();
  }

  if (b >= 255) {
    hex3 = "FF";
  } else if (b == 0 || b < 0) {
    hex3 = "00";
  } else {
    hex3 = b.toString(16).toUpperCase();
  }

  if (hex1.length == 1) {
    hex1 = `0${hex1}`;
  }
  if (hex2.length == 1) {
    hex2 = `0${hex2}`;
  }
  if (hex3.length == 1) {
    hex3 = `0${hex3}`;
  }
  const hex = `#${hex1}${hex2}${hex3}`;
  return hex;
}

console.log(rgb(255, 255, 255));
//console.log(rgb(255, 255, 300));
//console.log(rgb(0, 0, 0));
//console.log(rgb(148, 0, 211));
//console.log(rgb(173, 255, 47));
