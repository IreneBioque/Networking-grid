import CompanyCard from './CompanyCard';

const CompanyList = (props) => {
  const company = props.data.map((singleCompany, i) => {
    return (
      <li key={i} className='list__element'>
        <CompanyCard dataCompany={singleCompany} />
      </li>
    );
  });
  return (
    <main className='main'>
      <ul className='main__list'>{company}</ul>
    </main>
  );
};
export default CompanyList;
