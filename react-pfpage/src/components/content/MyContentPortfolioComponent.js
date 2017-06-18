import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import screenPage from '../../assets/static/images/screen_page.png'
import screenQuote from '../../assets/static/images/screen_quote.png'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  }
}

const tilesData = [
  {
    img: screenPage,
    title: 'Tribute Page',
    src: 'https://github.com/4edorov/onepage'
  },
  {
    img: screenQuote,
    title: 'Random Quote Machine',
    src: 'https://github.com/4edorov/my-quote-generator'
  }
]

const MyContentPortfolioComponent = () => {
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        <Subheader>freeCodeCamp Projects</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            actionIcon={
              <IconButton
                iconClassName="fa fa-github"
                href={tile.src}
              />
            }
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
 )
}

export default MyContentPortfolioComponent
