import { useForm } from "react-hook-form"

type RegisterFormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmpassword:string
}
const Register = () => {
    const { register,watch,handleSubmit,formState:{errors} } = useForm<RegisterFormData>()
    
    const onSubmit =handleSubmit((data)=>{
        console.log(data);
        
    })
    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Create an Account</h2>

            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input className="border rounded w-full py-1 px-2 font-normal"
                        {...register("firstName", { required: "This Field is Required" })}
                    />
                    {errors.firstName &&(
                        <span className="text-red-500">{errors.firstName.message}</span>
                    )}
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input className="border rounded w-full py-1 px-2 font-normal"
                        {...register("lastName", { required: "This Field is Required" })}
                    />
                     {errors.lastName &&(
                        <span className="text-red-500">{errors.lastName.message}</span>
                    )}
                </label>
            </div>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input className="border rounded w-full py-1 px-2 font-normal"
                    {...register("email", { required: "This Field is Required" })}
                />
                {errors.email &&(
                        <span className="text-red-500">{errors.email.message}</span>
                    )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Password
                <input className="border rounded w-full py-1 px-2 font-normal"
                    {...register("password", { required: "This Field is Required",minLength:{value:6,message:"Password Must Be Atleast 6 Characters"} })}
                />
                {errors.password &&(
                        <span className="text-red-500">{errors.password.message}</span>
                    )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Confirm Password
                <input className="border rounded w-full py-1 px-2 font-normal"
                    {...register("confirmpassword", { 
                        validate:(val)=>{
                            if(!val){
                                return "This field is Required"
                            }
                            else if(watch("password") !==val){
                                return "Your passwords Do Not Match"
                            }
                        }
                    })}
                />
                {errors.confirmpassword &&(
                        <span className="text-red-500">{errors.confirmpassword.message}</span>
                    )}
            </label>
                    <span>
                       <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">Create Account</button>  
                    </span>
        </form>
    )
}
export default Register