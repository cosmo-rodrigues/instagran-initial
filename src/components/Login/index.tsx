export function Login() {
  return (
    <section className='container'>
      <div className='login-container'>
        <figure>
          <img src='./images/instagram_logo.png' alt='Instagram' />
        </figure>
        <form>
          <label id='user_name' aria-label='user_name'>
            <input type='text' placeholder='Telefone, nome de usuário ou email' />
          </label>
          <label id='user_pass' aria-label='user_pass'>
            <input type='password' placeholder='Senha' />
          </label>
          <label id='button' aria-label='button'>
            <button>Entrar</button>
          </label>
        </form>
        <div>
          <div></div>
          <div>OU</div>
          <div></div>
        </div>
        <div>
          <button>Entrar com o Facebook</button>
        </div>
        <div>
          <p>Esqueceu a senha</p>
        </div>
      </div>

      <div className='logon-container'>
        <p>Não tem uma conta?</p> <button>Cadastre-se</button>
      </div>

      <div className='app-download-container'>
        <p>Obtenha o aplicativa.</p>
        <div className='app-store'>
          <button>Apple</button>
          <button>Google</button>
        </div>
      </div>
    </section>
  );
}
