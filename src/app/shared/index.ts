import { DialogBaseModule } from './components/dialog-base/dialog-base.module'
import { RatingCircleModule } from './components/rating-circle/rating-circle.module'
import { MovieTvShowMapper } from './mappers/movie-tv-show.mapper'
import { RuntimePipe } from './pipes/runtime.pipe'
import { SafePipe } from './pipes/safe.pipe'
import { TruncateTextPipe } from './pipes/truncate-text.pipe'
import { YearOnlyPipe } from './pipes/year-only.pipe'

export const PIPES = [TruncateTextPipe, YearOnlyPipe, RuntimePipe, SafePipe]

export const MAPPERS = [MovieTvShowMapper]

export const COMPONENTS = [DialogBaseModule, RatingCircleModule]
