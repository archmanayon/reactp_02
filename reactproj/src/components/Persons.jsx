import { useState } from "react";

export default function Persons(props) {
  // const handleClick = (e) => console.log(e.type + " | " + e.target);

  const [getSelection, setGetSelection] = useState(-1);
  // const sampleClick = (person) => {
  //   console.log("e=", person.name);
  // };

  return (
    <>
      {/* <div>
        <ul>
          {props.persons.map((p, index) => (
            <li onClick={() => sampleClick(p)} key={p.name + index}>
              {p.name}
            </li>
          ))}
        </ul>
      </div> */}
      <ul className="">
        {props.persons.map((person, index) => (
          <div key={person.height}>
            
              <li className="list-group-item">
                {person.name}

                <button
                  onClick={(e) => {
                    setGetSelection(index);
                    props.consLogFunction(
                      person.name
                        // +" | " +
                        // e.type +
                        // " | " +
                        // e.target +
                        // " | " +
                        // index
                    );
                  }}
                  className={
                    index === getSelection
                      ? "btn btn-info btn-sm"
                      : index === 0
                      ? "btn-primary btn-sm"
                      : index === 1
                      ? "btn-secondary btn-sm"
                      : index === 2
                      ? "btn-success btn-sm"
                      : ""
                  }
                >
                  {"|index = " + index}
                </button>
              </li>
            
          </div>
        ))}
      </ul>

      {/* <li key={props.persons[0].name}>
            {props.persons[0].name}
        </li>

        <li key={props.persons[1].name}>
            {props.persons[1].name}
        </li>

        <li key={props.persons[2].name}>
            {props.persons[2].name}
        </li> */}
    </>
  );
}
