import { useRouteError } from 'react-router-dom';


const Error = () => {
    const error: any = useRouteError();
    console.log(error);   // check the console to see the full contents of the error object

    return (
        <div>
            <h1>Page not found</h1>
            <p>{error.data}</p>
        </div>
    );
}

export default Error;