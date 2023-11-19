import React, { useCallback, useState } from 'react';
import { FilmsList } from './components/films-list/films-list';
import { GenreList } from './components/genre-list/genre-list';
import { useAppSelector } from '../../hooks/store';
import { Button } from '../button/button';

const DEFAULT_LIST_LENGTH = 8;

interface Props {
  withoutGenre?: boolean;
  withoutButton?: boolean;
  listLength?: number;
}

export const Catalog: React.FunctionComponent<Props> = ({
  withoutGenre = false,
  withoutButton = false,
  listLength,
}) => {
  const stateGenreFilms = useAppSelector((state) => state.genreFilms);
  const [maxLength, setMaxLength] = useState(listLength || DEFAULT_LIST_LENGTH);

  const handleClick = useCallback(()=>{
    setMaxLength((prev) => prev + DEFAULT_LIST_LENGTH);
  },[]);

  const showButton = !withoutButton && stateGenreFilms.length >= maxLength;
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {!withoutGenre ? <GenreList /> : null}

      <FilmsList length={maxLength} />

      {showButton ? (
        <div className="catalog__more">
          <Button label="Show more" className="catalog__button" type="button" onClick={handleClick}/>
        </div>
      ) : null}
    </section>
  );
};
