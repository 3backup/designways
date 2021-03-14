import React from "react";
import Image from "next/image";

export const ContentAddEvent = () => {
  return (
    <div className='container container__addEvent form__container'>
      <div className='form__backButtonContainer'>
        <button className='form__backButton'>
          <Image
            src='/images/back-icon.svg'
            alt='Przycisk powrotu'
            width={20}
            height={20}
          />
          <span className='form__backButton__text'>Wróć do strony głównej</span>
        </button>
      </div>
      <div className='form__title'>
        Dodaj swoje wydarzenie na DesignWays Hub
      </div>
      <form action='' className='form__form'>
        <div className='form__inputContainer'>
          <div className='form__number'>1</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Nazwa</div>
            <input
              className='form__input'
              placeholder='np. Testy użyteczności: od koncepcji do scenariusza '
              type='text'
            />
          </div>
        </div>
        <div className='form__inputContainer'>
          <div className='form__number'>2</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Prowadzący</div>
            <input
              className='form__input'
              placeholder='np. Marek Urban'
              type='text'
            />
          </div>
        </div>
        <div className='form__inputContainer'>
          <div className='form__number'>3</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Link do wydarzenia</div>
            <input
              className='form__input'
              placeholder='np. https://designways.io'
              type='text'
            />
          </div>
        </div>{" "}
        <div className='form__inputContainer'>
          <div className='form__number'>4</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Ilość miejsc uczestników</div>
            <input
              className='form__input form__input--short'
              placeholder='np. 14 '
              type='text'
            />
          </div>
        </div>
        <div className='form__inputContainer'>
          <div className='form__number'>5</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Grafika wydarzenia</div>
            <input
              className='form__input form__input--short'
              placeholder='np. 14 '
              type='text'
            />
          </div>
        </div>
        <div className='form__inputContainer'>
          <div className='form__number'>6</div>
          <div className='form__singleInputWithLabel form__singleInputWithLabel--row'>
            <div className='form__label'>Data rozpoczęcia</div>
            <div className='form__twoInputs'>
              <input
                className='form__input form__input--short'
                placeholder='DD-MM-RRRR'
                type='text'
              />
              <input
                className='form__input form__input--shorter'
                placeholder='00:00 h'
                type='text'
              />
            </div>
          </div>
        </div>{" "}
        <div className='form__inputContainer'>
          <div className='form__number'>7</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Stopień zaawansowania</div>
            <input
              className='form__input form__input--short'
              placeholder='np. 14 '
              type='text'
            />
          </div>
        </div>{" "}
        <div className='form__inputContainer'>
          <div className='form__number'>8</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Określ tematykę (maks 4 tagi)</div>
            <input
              className='form__input form__input--short'
              placeholder='np. 14 '
              type='text'
            />
          </div>
        </div>
        <div className='form__inputContainer'>
          <div className='form__number'>9</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Cena</div>
            <input
              className='form__input form__input--short'
              placeholder='np. 14 '
              type='text'
            />
          </div>
        </div>
        <div className='form__inputContainer'>
          <div className='form__number'>10</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>Lokalizacja</div>
            <input
              className='form__input form__input--short'
              placeholder='np. 14 '
              type='text'
            />
          </div>
        </div>
        <div className='form__inputContainer'>
          <div className='form__number'>11</div>
          <div className='form__singleInputWithLabel'>
            <div className='form__label'>
              Czy uczestnicy otrzymają certifikat po zakończeniu wydarzenia?
            </div>
            <input
              className='form__input form__input--short'
              placeholder='np. 14 '
              type='text'
            />
          </div>
        </div>
        <button>Wyślij do weryfikacji </button>
      </form>
    </div>
  );
};
