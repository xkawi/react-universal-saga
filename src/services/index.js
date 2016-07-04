import * as _api from './api';
import { browserHistory as _history } from 'react-router';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

export const api = _api;
export const history = useScroll(() => _history)();
