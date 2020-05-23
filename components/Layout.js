import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <section className="layout">
        <div className="content">
        {children}        
        </div>
      </section>
      <footer><span>&copy; PeterT 2020 - Built using Next</span></footer>
      <style jsx global>{`
        body {                     
          font-family: helvetica, arial, sans-serif;
          font-size: 1.25rem;
          margin: 0;
          line-height: 1.6;
          background-color: #fafafa;
          color: rgb(51, 51, 51);
        }        
        .layout {            
          margin: 0 auto;
          max-width: 768px;
        }
        a, a:visited {
          color: rgb(0, 109, 221);
        }         
        img {
        	border-radius: 6px;
        	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.35);
        }     
            
      `}</style>
      <style jsx>{`        
        .layout {            
          margin: 0 auto;
          max-width: 768px;
        }
        footer {          
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
    </>
  )
}
