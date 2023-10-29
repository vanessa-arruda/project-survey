import logoUrl from '../../public/horrortech-logo.png';

export const Header = () => {
  return (
    <div className="header-container">
        <img src={logoUrl} className="header-img"/>
        <h1>Custom Surveys</h1>
    </div>
  )
};
