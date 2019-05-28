import React from 'react';
import AllBooks from '../containers/AllBooks';
import CreateBook from '../containers/CreateBook';

export default function Home() {
  return (
    <>
     <CreateBook />
     <AllBooks />
     </>
  );
}
