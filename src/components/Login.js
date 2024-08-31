import Styles from '../components/Login.module.css'
import useState from 'react'

function Login() {
    function clickbutton(e){
        e.preventDefault()
        
    }
    
    return (
        <section className={Styles.container}>
            <div className={Styles.boxrelative}>
                <div className={Styles.boxform}>
                    <div className={Styles.rigth}>
                        <h1>
                            tenho uma conta?
                        </h1>

                        <p>
                            acesse sua conta para entrar!
                        </p>

                        <button>
                            login
                        </button>
                    </div>

                    <div className={Styles.left}>
                        <h1>
                            não tenho uma conta?
                        </h1>

                        <p>
                            crie uma conta para entrar!
                        </p>

                        <button>
                            sign up
                        </button>
                    </div>

                </div>

                <form className={Styles.form}>
                    <div className={Styles.boxcontentform}>
                        <h2>
                            login
                        </h2>

                        <div className={Styles.boxinput}>
                            <label for="email" name="email">
                                email
                            </label>
                            <input type="email" id="email" />
                        </div>

                        <div className={Styles.boxinput}>
                            <label for="password" name="password">
                                password
                            </label>
                            <input type="password" id="password" />
                        </div>

                        <button onClick={clickbutton} className={Styles.btnform}>login</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default Login