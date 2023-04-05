export const htmlAsStringFormate = (st) => {
    let result = "";
    if (st) {
      result = st
        .replace(/<[^>]*>?/gm, "")
        .replace(/(\r\n|\n|\\n|\r)/gm, " ")
        .replace(/\&nbsp;/g, " ")
        .replace(/\amp;/g, " ");
    } else {
      result = "";
    }
  
    return result;
  };