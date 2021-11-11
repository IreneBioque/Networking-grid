const CompanyCard = (props) => {
  return (
    <>
      <h4 className='list__element--text'>{props.dataCompany.name}</h4>
      <p>{props.dataCompany.founded}</p>
      <p>{props.dataCompany.industry}</p>
      <p>{props.dataCompany.size}</p>
      <a href={'http://' + props.dataCompany.website} target='_blank'>
        WebSite
      </a>
    </>
  );
};

export default CompanyCard;
