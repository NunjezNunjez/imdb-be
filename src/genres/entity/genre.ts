import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from '../../movies/entities/movie';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @OneToMany(() => Movie, (movie: Movie) => movie.genre)
  movie: Movie[];
}
