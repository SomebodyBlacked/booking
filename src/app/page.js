import BookCard from "@/components/BookCard";

async function getBooks() {
  const response = await fetch(
    "https://potterapi-fedeperin.vercel.app/es/books"
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const books = await getBooks();

  return (
    <main className="container my-6 mx-8">
      <h1 className="text-3xl font-bold">Booking</h1>
      <div className="flex flex-wrap">
        {books.map((book) => (
          <BookCard key={book.index} book={book} />
        ))}
      </div>
    </main>
  );
}
