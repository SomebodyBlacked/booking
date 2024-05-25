export default function BookCard({ book }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-white">
      <img
        src={book.cover}
        alt={book.title}
        className="w-32 h-48 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold mt-4">{book.title}</h2>
      <p className="text-gray-500 mt-2">Release Date: {book.releaseDate}</p>
      <p className="text-gray-500 mt-2">Pages: {book.pages}</p>
    </div>
  );
}
