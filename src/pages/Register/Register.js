import styles from "./Register.module.css"
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se</h1>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder="Nome do usuário" />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="E-mail do usuário" />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Senha do usuário" />
        </label>
        <label>
          <span>Confirmação da senha:</span>
          <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha" />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
