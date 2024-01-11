function ad_d(a, b) {
  return a + b;
}

// function Samplex({ name, age }) {
//   // console.log(props.name);
//   // const {name, age} = props;
//   return (
//     <div className="">
//       <div>{ad_d(10, age)}</div>
//       <div> {name} from sample </div>
//       {/* <div>{ad_d(5, props.age)}</div>
//       <div> {props.name} from sample </div> */}
//     </div>
//   );
// }

function Samplex({ ex_obj }) {
  // const {ex_obj} = props;
  
  const converted_obj = Object.entries(ex_obj.seatNo);
  
  return (
    <div className="">

      <div>{ad_d(10, ex_obj.age)}</div>

      <div> {ex_obj.name} from sample </div>

      {/* from sample array */}
      {/* <div>{ex_obj.seatNo}</div>
      <div>{ex_obj.seatNo[2]+' | '+ ex_obj.seatNo[4]}</div> */}

      {/* from sample object */}

      <div>{ex_obj.seatNo.b + " | " + ex_obj.seatNo.d} </div>

      <div>
        {ex_obj.fruits.map(
          fruit=><ul key={fruit}>{fruit +'|'}</ul>

        )}
      </div>

      <div>

        {converted_obj.map(([key, value])=>(
              <ul key={key}>
                {key} = {value}
              </ul>
            )
          )
        }

      </div>      
      
    </div>

  );
}

export default Samplex;
