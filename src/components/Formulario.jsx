import { useForm } from "react-hook-form"

const Formulario = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return <div>
        <h2>Formulario de Inscripción</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>Cedula</label>
                <input type="text" {...register('cedula', {
                    required: true,
                    minLength: 10
                })} />
                {errors.cedula?.type == 'required' && <p>El campo cedula es requerido</p>}
                {errors.cedula?.type == 'minLength' && <p>Debe ingresar una cedula correcta</p>}
            </div>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true
                })} />
                {errors.nombre?.type == 'required' && <p>El campo nombre es requerido</p>}
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /\S+@\S+\.\S+/
                })} />
                {errors.email?.type == 'required' && <p>El campo cedula es requerido</p>}
                {errors.email?.type == 'pattern' && <p>Correo electronico incorrecto</p>}
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
}
export default Formulario;