// import React from "react";
// import { useDispatch } from "react-redux/es/hooks/useDispatch";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { postRends } from "../../features/RendSlice";

// const Services = ({services} ) => {
// const servicess = useSelector(state => state.rends.services)

// const [services, setServices] = useState([]);

// console.log(servicess);
// const dispatch = useDispatch();

// const handleAddService = (id) => {
//     // dispatch(postRends())
//     setServices([...services, id]);
// }


//   return services.map((item) => {
//     return (
//       <div key={item._id} className="services">
//         <div onClick={() => handleAddService(item._id)}  className="certain_service">{item.title} {item.price}</div>
//       </div>
//     );
//   });
// };

// export default Services;
