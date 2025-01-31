import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from '../../genres/entity/genre';

@Entity('movies') //ime tabele
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  release_date: Date;
  @Column()
  rating: number;

  @ManyToOne(() => Genre, (genre) => genre.movie, { nullable: false })
  @JoinColumn({ name: 'genres_id' })
  genre: Genre;
}
