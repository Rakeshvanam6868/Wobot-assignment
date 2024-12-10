import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
     <div className="error-page">
        <h1>Ooppps!!</h1>
        <h2>Page is not Found!!</h2>
        <h3>{err.status}:{err.statusText}</h3>
     </div>
    );
}

export default Error;