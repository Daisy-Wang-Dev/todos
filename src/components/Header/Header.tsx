import "./Header.scss";

const Header: React.FC = () => {
  const today: Date = new Date();

  return (
    <>
      <header className="header">
        <h1 className="header__name">HAVE-TO-DOS!</h1>
        <h4 className="header__date" data-testid="date">
          {today.getFullYear()}/{today.getMonth() + 1}/{today.getDate()}
          <span> {today.toLocaleDateString("en-US", { weekday: "long" })}</span>
        </h4>
      </header>
    </>
  );
};

export default Header;
