import { createBook } from "../actions/actions";

const addBookThunk = (book) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        book,
        completed: false,
      }),
    });
    const data = await response.json();
    dispatch(createBook(data.book));
  };
};

export default addBookThunk;
