import React from 'react';
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Foorter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
