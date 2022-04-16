import React, { useEffect, useState } from 'react';
import { usePersistedState } from '../../hooks/usePersistedState';
import { languages } from './mock/languages';

export function Footer() {
  const [ language, setLanguage ] = usePersistedState('language', 'Português (Brasil)')

  function handleLanguage(language: string) {
    setLanguage(language)
  }

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
          <select
            defaultValue={language}
            onChange={({ target }) => handleLanguage(target.value)}
            name='language'
            id='language'
          >
            {languages.map((country) => {
              return (
                <>
                  <option id={`${country.name}`}>{country.name}</option>
                </>
              );
            })}
          </select>
          <p>&copy; {new Date().getFullYear()} Instagram from Meta</p>
        </div>
      </div>
    </footer>
  );
}
