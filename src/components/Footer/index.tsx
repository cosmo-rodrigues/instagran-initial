import React from 'react';

export function Footer() {
  return (
    <footer>
        <div className='content'>
          <ul>
            <li>Meta</li>
            <li>Sobre</li>
            <li>Blog</li>
            <li>Carreiras</li>
            <li>Ajuda</li>
            <li>API</li>
            <li>Privacidade</li>
            <li>Termos</li>
            <li>Principais contas</li>
            <li>Hashtags</li>
            <li>Localizações</li>
            <li>Instagram Lite</li>
            <li>Dança</li>
            <li>Comida e bebida</li>
            <li>Casa e jardim</li>
            <li>Música</li>
            <li>Artes visuais</li>
          </ul>
          <div>
            <select name="language" id="language"></select>
            <p>&copy; {new Date().getFullYear()} Instagram from Meta</p>
          </div>
        </div>
      </footer>
  )
}