export default function Home() {
  return (
    <>
      <div className="absolute w-screen h-screen bg-gray-100 opacity-50 top-0 left-0" style={{
        zIndex: -1
      }}></div>
      <main className="flex min-h-screen flex-col justify-between p-48">
        <div className="absolute top-10 left-0 w-screen">
          <h1 className="text-4xl font-bold text-center">
            Tweeter
          </h1>
        </div>
        <div>
          <div className="w-96 h-48 mt-10 float-left">
            <form className="flex flex-col space-y-3 m-auto">
              <input className="border border-gray-400 rounded-md p-2" type="text" placeholder="Username" />
              <textarea className="border border-gray-400 rounded-md p-2" placeholder="What's happening?" />
              <button className="bg-blue-500 text-white rounded-md p-2">Tweet</button>
            </form>
          </div>
          <div className="w-96 h-1/2 bg-green-500 float-right">
            <h1>Feed</h1>
          </div>
        </div>
      </main>
    </>
  )
}
