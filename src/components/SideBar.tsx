import { useState } from "react";
import { Button } from "./Button";
interface SideBarProps {
  genres: GenreResponseProps[];
  changeGenre: (genre: number) => void;
  selectedGenre: GenreResponseProps;
}
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function SideBar(props: SideBarProps) {
  function handleClickButton(id: number) {
    props.changeGenre(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {props.genres.map((genre: GenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenre.id === genre.id}
            />
            ))}
      </div>
    </nav>
  );
}