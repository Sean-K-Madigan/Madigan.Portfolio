export default function Header({onPageChange}) {
  return (
    <>
      <header>

            <h2 id="header-paragraph">Hi I'm Sean Madigan. I invite you to join me in shaping the future of the web, one line of code at a time.</h2>
            <h1 className="main-title"><a onClick={() => onPageChange('About')}>.Madigan</a></h1>
        </header>
    </>
  );
}

// title click navigation not working