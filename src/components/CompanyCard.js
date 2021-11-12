const CompanyCard = (props) => {
  return (
    <>
      <h4 className='main__list--item__title'>{props.dataCompany.name}</h4>
      <p>{props.dataCompany.founded}</p>
      <div className='main__list--item__div'>
        <p className='main__list--item__div--industry'>
          {props.dataCompany.industry}
        </p>
        <p className='main__list--item__div--size'>{props.dataCompany.size}</p>
      </div>
      <a
        href={'http://' + props.dataCompany.website}
        target='_blank'
        className='main__list--item__web'
      >
        WebSite
      </a>
    </>
  );
};

export default CompanyCard;
