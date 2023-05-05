export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-48">
      <h1 className="text-4xl font-bold text-center">
        Tweeter 
      </h1>
      <form className="flex flex-col items-center justify-center">
        <input id="authorname" type="text" placeholder="Author Name" className="border-2 border-gray-300 rounded-md p-2 m-2" />
        <textarea id="tweet" placeholder="Tweet" className="border-2 border-gray-300 rounded-md p-2 m-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tweet
        </button>
      </form>
    </main>
  )
}
