import Styles from '../components/Login.module.css'

 function Login(){
    return(
        <section className={Styles.container}>
             <div className={Styles.boxrelative}>
                <div className={Styles.boxform}>
                    <div className={Styles.rigth}>
                        <h1>
                            tenho uma conta?
                        </h1>

                        <p>
                            acesse sua conta para entrar
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
                            crie uma conta para entrar
                        </p>
                        
                        <button>
                            sign up
                        </button>
                    </div>      

                </div>
             </div>
        </section>
    )
 }


 export default Login