/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './login.css';
export default function Login () {
    return (
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required= { true }/>
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required= { true }/>
              <label>Senha</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ENTRAR
            </a>
          </form>
        </div>
    )

}