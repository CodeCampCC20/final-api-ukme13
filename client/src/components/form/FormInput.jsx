function FormInput({ name, register, errors, type = "text" }) {
  return (
    <div>
      <input
        className="border w-full rounded-md p-2 px-4 border-black/12 focus:outline focus:outline-sky-500"
        type={type}
        name=""
        id={name}
        placeholder={name}
        {...register(name)}
      />

      {/* แจ้งเตือน errors */}
      <p className="text-red-500 text-sm mt-1">
        {errors[name] && <>{errors[name].message}</>}
      </p>
    </div>
  );
}
export default FormInput;
