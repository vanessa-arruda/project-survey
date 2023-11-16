import logoUrl from '../../public/horrortech-logo.jpeg';

export const Header = () => {
  return (
    <div className="header-container">
        <img src={logoUrl} alt="ghost logo" className="header-img"/>
        <h1>Custom Surveys</h1>
    </div>
  )
};
