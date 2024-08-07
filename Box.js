const Box = () => {
  //1. css를 js화 할 때에는 중괄호가 2개 필요

  const greenbox = {
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    border: "1px soild black",
  };

  const bluebox = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    border: "1px soild black",
  };

  const redcircle = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    borderRadius: "9999px",
    border: "1px soild black",
  };

  const yellowcircle = {
    width: "100px",
    height: "100px",
    backgroundColor: "yellow",
    borderRadius: "9999px",
    border: "1px soild black",
  };

  return (
    <div>
      <div style={greenbox}></div>
      <div style={bluebox}></div>
      <div style={redcircle}></div>
      <div style={yellowcircle}></div>
    </div>
  );
};

export default Box;
