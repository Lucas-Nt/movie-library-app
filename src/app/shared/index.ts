import { DialogBaseModule } from './components/dialog-base/dialog-base.module';
import { MovieMapper } from './mappers/movie.mapper';
import { RuntimePipe } from './pipes/runtime.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { YearOnlyPipe } from './pipes/year-only.pipe';

export const PIPES = [
  TruncateTextPipe,
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
