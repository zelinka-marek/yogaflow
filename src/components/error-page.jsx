import { useRouteError } from "react-router-dom";
import { getErrorMessage } from "../utils/misc.js";

export function ErrorPage() {
  let error = useRouteError();

  let errorMessage = getErrorMessage(error);
  console.error(errorMessage);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900">Whoopsy Daisy!</h1>
      <p className="mt-6 text-sm text-gray-500">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="mt-6 text-sm text-gray-500">
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
