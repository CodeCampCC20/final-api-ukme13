import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/auth-store";
import FormInput from "../../components/form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validator";
import Buttons from "../../components/form/Buttons";

function Login() {
  const navigate = useNavigate;
  const actionLoginWithZustand = useAuthStore(
    (state) => state.actionLoginWithZustand
  );

  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isSubmitting, errors } = formState;

  const hdlSubmit = async (value) => {
    console.log(value)
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    const res = await actionLoginWithZustand(value);
    console.log(res);
    if (res.success) {
      alert("success", "Welcome Back");
    } else {
      alert("error", res.message);
    }
  };

  return (
    <div className="flex-1 flex">
      <div className="bg-blue-600 flex-1 m-6 rounded-xl">
        <div>
          <img src="" alt="" srcset="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="px-6 max-h-120 h-full w-full max-w-md flex flex-col gap-4">
          {/* Logo */}
          <div>
            <div></div>
            EMERX
          </div>
          {/* Card */}
          <div>
            <div className="font-bold text-2xl">Hola,</div>
            <div className="font-medium">Welcome back</div>
          </div>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(hdlSubmit)}
          >
            <FormInput register={register} name="username" errors={errors} />
            <FormInput
              register={register}
              name="password"
              errors={errors}
              type="password"
            />
            <div className="flex justify-center mt-4">
              <Buttons isSubmitting={isSubmitting} label="Login" />
            </div>
            <div className="mt-4 text-black/40 text-sm">
              Don't have an account?&nbsp;<a href="/register">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
