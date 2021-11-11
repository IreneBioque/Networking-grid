import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import callToApi from '../services/api';
import CompanyList from './CompanyList';
import Header from './Header';

const App = () => {
  const [company, setCompany] = useState([]);
  const [industry, setIndustry] = useState('all');
  const [hidden, setHidden] = useState('hidden');
  const [titleHidden, setTitleHidden] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setCompany(response);
    });
  }, []);
  const filteredData = company.filter(
    (data) => industry === 'all' || data.industry === industry
  );
  const handleSearchIndustry = (value) => {
    setIndustry(value);
  };
  const handleAll = () => {
    setIndustry('all');
  };

  const handleHidden = () => {
    if (hidden === '') {
      setHidden('hidden');
      setTitleHidden('');
    } else {
      setHidden('');
      setTitleHidden('hidden');
    }
  };

  return (
    <div>
      <Header
        handleHidden={handleHidden}
        data={company}
        handleSearchIndustry={handleSearchIndustry}
        hidden={hidden}
        handleAll={handleAll}
        titleHidden={titleHidden}
      />

      <CompanyList data={filteredData} />
    </div>
  );
};

export default App;
