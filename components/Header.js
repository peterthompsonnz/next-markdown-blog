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
          background-color: rgb(51, 51, 51);                    
        }
        .header a {
          display: inline-block;
          color: rgb(0,191,255);
          text-decoration: none;
          padding: 10px 20px;
          margin-right: 20px;
          font-size: 1.25em;
          border-bottom: 2px solid transparent;
        }
        .header a:hover {
          color: rgb(255, 255, 255);          
        }  
      `}</style>
      </header>
    </>
  )
}
 

