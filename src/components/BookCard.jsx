export default function BookCard({ book }) {
  return (
    <div className="flex flex-row w-[80vw] h-52 my-3 rounded-lg shadow-lg gap-3 cursor-pointer">
      <img
        src={book.cover}
        alt={book.title}
        className="w-32 h-52 object-cover rounded-lg"
      />
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mt-4 text-wrap">{book.title}</h2>
        <p className="text-sm text-gray-600 mt-2 text-wrap h-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {book.description}
        </p>
        <div className="flex flex-row self-end items-end gap-3 font-medium bg-red-500">
          <p className="text-gray-900 bg-gray-300 px-2 py-1 rounded-lg">
            {book.releaseDate}
          </p>
          <p className="text-gray-900 bg-gray-300 px-2 py-1 rounded-lg">
            {book.pages}
          </p>
        </div>
      </div>
    </div>
  );
}
