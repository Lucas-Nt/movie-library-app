import { MovieMapper } from './mappers/movie.mapper';
import { YearOnlyPipe } from './pipes/year-only.pipe';
import { RuntimePipe } from './pipes/runtime.pipe';
import { DialogBaseModule } from './components/dialog-base/dialog-base.module';
import { SafePipe } from './pipes/safe.pipe';

export const PIPES = [
  YearOnlyPipe,
  RuntimePipe,
  SafePipe
];

export const MAPPERS = [
  MovieMapper
];

export const COMPONENTS = [
  DialogBaseModule
];
