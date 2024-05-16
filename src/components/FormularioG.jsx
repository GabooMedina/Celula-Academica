import { useForm } from "react-hook-form"
import Formulario from "./Formulario";

const FormularioG = () => {
    const { register, formState: { errors },watch, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirIntegrante=watch("agintegrant");
    return <div>
        <h2>Formulario de Inscripción Grupal</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>Nombre Del Equipo</label>
                <br />
                <input type="text" {...register('nomequipo', {
                    required: true,
                    maxnLength: 30,
                    minLength:4
                })} />
                {errors.nomequipo?.type == 'required' && <p>Se debe ingresar el nombre del equipo</p>}
                {errors.nomequipo?.type == 'maxLength' && <p>Nombre del equipo incorrecto</p>}
                {errors.nomequipo?.type== 'minLength'&& <p>Nombre de equipo incorrecto</p>}
            </div>
            <div>
                <label>Lider</label>
                <br/>
                <input type="text" {...register('nombre', {
                    required: true
                })} />
                {errors.nombre?.type == 'required' && <p>El campo nombre es requerido</p>}
            </div>
            <div>
                <label center>Cedula</label>
                <br />
                <input type="text" {...register('cedula', {
                    required: true,
                    minLength: 10
                })} />
                {errors.cedula?.type == 'required' && <p>El campo cedula es requerido</p>}
                {errors.cedula?.type == 'minLength' && <p>Debe ingresar una cedula correcta</p>}
            </div>
            <div>
                <label>Email</label>
                <br />
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /\S+@\S+\.\S+/
                })} />
                {errors.email?.type == 'required' && <p>El campo cedula es requerido</p>}
                {errors.email?.type == 'pattern' && <p>Correo electronico incorrecto</p>}
            </div>
            <div>
                <label >Agregar Integrante</label>
                <input type="submit" value={"+"} onClick={nuevoForm()} {...register('agintegrante')} />
            </div>

            {incluirIntegrante &&(
             <div>
             <label>Cedula</label>
             <input type="text" {...register('cedula', {
                 required: true,
                 minLength: 10
             })} />
             {errors.cedula?.type == 'required' && <p>El campo cedula es requerido</p>}
             {errors.cedula?.type == 'minLength' && <p>Debe ingresar una cedula correcta</p>}
         </div>
            )}
        </form>
    </div>
}

export default FormularioG;

function nuevoForm(){
    <div >
      <Formulario/>
    </div>
    
}