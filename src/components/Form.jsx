import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Form.css"

export const Form = () => {
  const schema = yup.object().shape({
    username: yup.string().required("You must input a username"),
    email: yup.string().email("This is not a valid email").required("You must input an email"),
    age: yup.number().integer("Age must be integer").min(18, "You must be at least 18 years old").required("You must input an age"),
    password: yup.string().max(20, "Max password length is 20 characters").required("You must input a password"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("You must confirm your password"),
  })

  const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Username" {...register("username")} />
          {errors.username && <p className="form-error">{ errors.username.message }</p>}

          <input type="text" placeholder="Email" {...register("email")} />
          {errors.email && <p className="form-error">{ errors.email.message }</p>}

          <input type="number" placeholder="Age" {...register("age")} />
          {errors.age && <p className="form-error">{ errors.age.message }</p>}

          <input type="password" placeholder="Password" {...register("password")} />
          {errors.password && <p className="form-error">{ errors.password.message }</p>}

          <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="form-error">{ errors.confirmPassword.message }</p>}

          <input type="submit" value="Register"/>
      </form>
    </div>
  );
};
