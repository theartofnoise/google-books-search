import React from "react";
import Book from "../Book/Book"

const Results = (props) =>  {

        return (
            <div>
                <h3>
                    Results
                </h3>

                {props.books.map(book =><Book book={book} />)}
            </div>
        );
    }


export default Results;
