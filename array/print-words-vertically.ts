function printVertically(s: string): string[] {
  const result = [];
  s.split(" ").map((value, index) => {
    value.split("").map((value2, index2) => {
      if (!result[index2]) {
        result[index2] = "";
      }
      let length = result[index2].length;
      if (index > length) {
        for (let i = length; i < index; i++) {
          result[index2] += " ";
        }
      }
      result[index2] += value2;
    });
  });

  return result;
}
