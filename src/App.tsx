import React, { FC } from 'react';
import Header from './components/organisms/Header';
import Form from './components/organisms/Form/container';
import BookItems from './components/organisms/BookItems/container';

const App: FC = () => {
  return (
    <>
      <Header />
      <Form term={''} changeTerm={() => {}} requestBooks={() => {}} />
      <BookItems books={null} />
    </>
  );
};

export default App;
