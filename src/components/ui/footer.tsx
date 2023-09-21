const Footer = () => {
  return (
    <div className="bg-basic ">
      <footer className="container m-auto flex flex-row justify-between items-center">
        <img src="/logo.png" alt="" />
        <div className="flex flex-row space-x-2">
          <img src="/apple.png" alt="" />
          <img src="/google.png" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
