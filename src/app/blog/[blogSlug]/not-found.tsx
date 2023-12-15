import Link from "next/link"

const NotFound = () => {
  return (
    <div className="max-w-sm px-6 py-64 mx-auto">
        <h1 className="mb-2">Page not found :(</h1>
        <p>I don&apos;t know what are you looking for. <br/><b>GO BACK HOME</b></p>
        <Link href={`/home`} className="my-3 btn-blue-500">Home</Link>
    </div>
  )
}

export default NotFound