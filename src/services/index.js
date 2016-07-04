import * as _api from './api';
import { browserHistory } from 'react-router';
import withScroll from 'scroll-behavior';

export const api = _api;
export const history = withScroll(browserHistory);
