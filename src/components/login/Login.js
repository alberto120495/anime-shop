import { useHistory } from "react-router-dom";
import { UserIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import { LockClosedIcon } from "@heroicons/react/outline";
import { auth } from "../../firebase/firebase-config";
import Swal from "sweetalert2";

import useForm from "../../hooks/useForm";

function Login() {
  const history = useHistory();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/admin");
      })
      .catch((error) =>
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Continue",
        })
      );
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-tr from-space ">
      <div className="relative h-auto p-5 glassEffect">
        <div className="absolute right-0 left-0 flex flex-col  items-center -top-5">
          <UserIcon className="h-10 w-10 text-white rounded-full bg-space p-2 opacity-80" />
          <h3 className="text-gray-500 text-xl mb-5">Sign In</h3>
        </div>

        <form className="flex flex-col space-y-4 mt-12" onSubmit={handleLogin}>
          <div className="inputBox">
            <UserCircleIcon className="inputIcon" />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="inputBox">
            <LockClosedIcon className="inputIcon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-space py-2 shadow-md rounded-md hover:shadow-xl transition duration-150 outline-none"
            onSubmit={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
