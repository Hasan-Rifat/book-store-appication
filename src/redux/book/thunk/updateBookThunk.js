import { updateBook } from "../actions/actions";

const updateBookThunk = (id, book) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        book,
      }),
    });
    const data = await response.json();
    dispatch(updateBook(data.id, data.book));
  };
};

export default updateBookThunk;
