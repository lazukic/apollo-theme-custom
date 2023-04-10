import { makeStyles } from '@material-ui/core';
import { mergeDeepRight } from 'ramda';
import { chartStyles } from '../charts.styles';

export default makeStyles((theme) => mergeDeepRight(
  chartStyles(theme),
  {
    chartLegend: {
      marginLeft: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    legendSquare: {
      borderRadius: '8px',
    },
  },
));
