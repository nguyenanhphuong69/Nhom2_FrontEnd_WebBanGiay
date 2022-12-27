import React, { useEffect, useState } from "react";
// import list from "./data";
import Cards from "./Card";
import "../../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  const [empdata, empdatachange] = useState(null);
  console.log(empdata, "hello");
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => {
        console.log(res, "1");
        return res.json();
      })
      .then((resp) => {
        console.log(resp.data, " 2");
        empdatachange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section>
      {empdata &&
        empdata.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      duy
    </section>
  );
};

export default Amazon;
