import React, { startTransition } from 'react';
import { NavLink } from 'react-router-dom';
import { CategoryPageProps } from '../../utils/utils';

const CategoryPage: React.FC<CategoryPageProps> = ({ header, listItems }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        textShadow: '1px 1px 1px indigo',
      }}
    >
      <h1 style={{ fontSize: '3rem' }}>{header}</h1>

      <menu
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '-2.5rem',
        }}
      >
        {listItems.map((listItem, index) => (
          <NavLink
            key={index}
            to={listItem.href}
            onClick={(event) => {
              event.preventDefault();
              startTransition(() => {
                window.location.href = listItem.href;
              });
            }}
            style={{
              color: 'whitesmoke',
              fontSize: '2rem',
            }}
          >
            {listItem.content}
          </NavLink>
        ))}
      </menu>
    </div>
  );
};

export default CategoryPage;
