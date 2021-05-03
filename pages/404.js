import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>404 - Sorry Page Not Found</h1>
    <Link href="/">
      <a className="hover:text-red-500">
        Go back to post
      </a>
    </Link>
    <div className= "container bg-grey-200">
    
    </div>
  </>
}
