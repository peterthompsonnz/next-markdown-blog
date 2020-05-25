import Link from 'next/link'


export default function Footer() {
  return (
    <>
      <footer className="footer">
        <footer><span>&copy; PeterT 2020 - Built using Next</span></footer>
        <style jsx>{`
          .footer {          
            width: 100%;             
            display: flex;
            justify-content: center;
            padding-bottom: 20px;
            margin-top: 60px;
          }
          footer span {
            display: inline-block;
            font-size: 0.85em;          
            border-top: 1px solid rgb(51, 51, 51);
            padding-top: 10px;    
          }
      `}</style>
      </footer>
    </>
  )
}
 

