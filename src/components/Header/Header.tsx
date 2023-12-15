import "./Header.scss";

const Header: React.FC = () => {
  const today = new Date();
  return (
    <>
      <header className="header">
        <h1 className="header__name">HAVE-TO-DOS!</h1>
        <h4 className="header__date">
          {today.getFullYear()}/ {today.getMonth()}/ {today.getDay()}
        </h4>
      </header>
    </>
  );
};

export default Header;
