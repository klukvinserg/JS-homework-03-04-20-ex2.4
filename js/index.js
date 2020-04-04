let style;

audit();

function audit() {
  for (; true; ) {
    style = prompt("Enter CSS style");
    if (style.includes("-")) {
      break;
    } else {
      alert("Incorrect");
      continue;
    }
  }
}

function result(style) {
  let arr;
  arr = style.split("-");
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    result += arr[i];
  }

  return result;
}

document.write(`Style CSS: ${style}<br> Style "CamelCase": ${result(style)}`);
