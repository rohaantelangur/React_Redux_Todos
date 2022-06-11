import React, { useEffect, useState } from "react";

const Total = () => {
  const [show, setshow] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todosdb")
      .then((r) => r.json())
      .then((e) => setshow(e));
  }, []);

  return (
    <div>
      <h2>Total</h2>
      <div className="totaltodosbox">
        {show.map((el) => (
          <div key={el.id} className="totaltodos">
            <h2>{el.value}</h2>
            {/* <h2>{el.isCompleted === false ? el.value: ""}</h2> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Total;
