import { useForm } from "react-hook-form";
import './contact-form.scss';

const ContactForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
    });
    const onSubmit = data => console.log(data);

    let nameReg = register('name', {
        required: true,
        maxLength: {
            value: 25,
        },
    })

    let emailReg = register('email', {
        required: true,
        maxLength: {
            value: 25,
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Ingresá un e-mail válido"
          }
    })

    let phoneReg = register('phone', {
        required: true,
        maxLength: {
            value: 15,
        },
        pattern: {
            value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
            message: "Ingresá un teléfono válido"
        },
    })

    let messageReg = register('message', {
        required: true,
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h2 className="contact-title">Contacto</h2>
        <div className="input-group">
            <label htmlFor="name">Nombre</label>
            <input 
                type="text"
                id="name"
                name="name"
                className={errors.name ? 'required' : ''}
                {...nameReg}
            />
           {errors.name && errors.name.type === 'required' &&  <p className="error-message">Este campo es obligatorio</p>}
           {errors.name && errors.name.type === 'maxLength' &&  <p className="error-message">Escribí menos de 25 caracteres</p>}
        </div>
        <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input 
                type="text"
                id="email"
                name="email"
                className={errors.email ? 'required' : ''}
                {...emailReg}
            />
           {errors.email && errors.email.type === 'required' &&  <p className="error-message">Este campo es obligatorio</p>}
           {errors.email && errors.email.type === 'maxLength' &&  <p className="error-message">Escribí menos de 25 caracteres</p>}
           {errors.email && errors.email.type === 'pattern' && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <input 
                type="number"
                id="phone"
                name="phone"
                className={errors.phone ? 'required' : ''}
                {...phoneReg}
            />
           {errors.phone && errors.phone.type === 'required' &&  <p className="error-message">Este campo es obligatorio</p>}
           {errors.phone && errors.phone.type === 'maxLength' &&  <p className="error-message">Escribí menos de 15 caracteres</p>}
           {errors.phone && errors.phone.type === 'pattern' && <p className="error-message">{errors.phone.message}</p>}
        </div>
        <div className="input-group">
            <label htmlFor="message">Mensaje</label>
            <textarea 
                name="message"
                type="text"
                id="message"
                cols="30"
                rows="3"
                className={errors.message ? 'required' : ''}
                {...messageReg}>
            </textarea>
            {errors.message &&  <p className="error-message">Este campo es obligatorio</p>}
        </div>
        <div className="input-group">
            <input type="submit" value="Enviar" className="btn-submit btn btn-success" />
        </div>    
        </form>
    )
}

export default ContactForm;