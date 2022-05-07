import "./style.css";
import { users } from "./data";

const container = document.querySelector(".container");

const createHtmlBlock = ({
  id,
  name,
  age,
  email,
  country,
  company,
  birthday,
}) =>
  `
           <span> № ${id} </span>
           <span> <b> name: </b>${name} </span>
           <span> <b> age: </b>${age} </span>
           <span> <b> email: </b>${email} </span>
           <span> <b> country: </b>${country} </span>
           <span> <b> company: </b>${company} </span>
           <span> <b> birthday: </b> <time>${birthday}</time> </span>
`;

const render = () => {
  const rows = users.map((user) => {
    const row = document.createElement("div");
    row.className = "userRow";
    row.innerHTML = createHtmlBlock(user);

    return row;
  });

  container.append(...rows);
};

render();
