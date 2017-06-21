import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { PORTFOLIO_WORKS } from '../../config/AppConfig';


const styleSheet = createStyleSheet('ContentPortfolioComponent', {
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  cards: {
    textAlign: 'center',
    maxWidth: 345,
  }
});

const ContentPortfolioComponent = (props) => {
  const classes = props.classes;

  return (
    <div id="portfolio" className={classes.root}>
      <Grid container gutter={24}>
        {PORTFOLIO_WORKS.map(work => (
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardMedia>
                <img src={work.imgSrc} alt={work.title} />
              </CardMedia>
              <CardContent>
                <Typography type="headline">
                  {work.title}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton href={work.openLink.git}>
                  <Icon clssName={work.iconType.git} />
                </IconButton>
                <IconButton href={work.openLink.codepen}>
                  <Icon clssName={work.iconType.codepen} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

ContentPortfolioComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentPortfolioComponent);
