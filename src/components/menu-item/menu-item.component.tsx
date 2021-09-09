import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';

import "./menu-item.styles.scss"

interface MenuItemProps extends RouteComponentProps  {
  title: String,
  imageUrl: String,
  size: String,
  linkUrl: String
}

const MenuItem = ({title, imageUrl, size, history, linkUrl, match } : MenuItemProps) => {
  return (
    <div 
      className={`${size} menu-item`} 
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='background-image'style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="content">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitles'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);
