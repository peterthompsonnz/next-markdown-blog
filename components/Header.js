import Link from 'next/link'


export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
        <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 0;                
          background-color: rgb(51, 51, 51);;
          color: #fafafa;          
        }
        .header a {
          display: inline-block;
          color: rgb(80, 200, 251);
          text-decoration: none;
          padding: 10px 20px;
          margin-right: 20px;
          font-size: 1.25em;
        }
        .header a:hover {
          color: rgb(255, 255, 255);
        }  
      `}</style>
      </header>
    </>
  )
}
 

