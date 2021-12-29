import React from "react";
import { render,fireEvent } from "../../../test-utils";
import MovieList from "../movieList";
import {store} from "../../../store";
import { STORE_MOVIE_DETAILS } from "../../../reducers/movieReducer";

let sampleData = {
    "type": "top-5-movies",
    "components":
        [
            {
                "type": "order-select",
                "items": [
                    {
                        "label": "Rank",
                        "valueToOrderBy": "rank"
                    }
                ]
            },
            {
                "type": "movie-list",
                "items":
                    [
                        {
                            "id": 3,
                            "type": "poster",
                            "rank": 4,
                            "synopsis": "Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust. Sarah is targeted because Skynet knows that her unborn son will lead the fight against them. With the virtually unstoppable Terminator in hot pursuit, she and Kyle attempt to escape.",
                            "title": "The Terminator",
                            "imageUrl": "https://m.media-amazon.com/images/I/A1wiVBc2VLL._SL1500_.jpg",
                            "releaseDate": 1984
                          }, 
                        {
                            "id": 4,
                            "type": "poster",
                            "rank": 1,
                            "synopsis": "Deckard (Harrison Ford) is forced by the police Boss (M. Emmet Walsh) to continue his old job as Replicant Hunter. His assignment: eliminate four escaped Replicants from the colonies who have returned to Earth. Before starting the job, Deckard goes to the Tyrell Corporation and he meets Rachel (Sean Young), a Replicant girl he falls in love with.",
                            "title": "Blade Runner",
                            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlo05IpmO384-4atlrs5ARqW9WZty41T7323uE1l2RILPjSTXUt9R6rZRBIIsPLQJd4c&usqp=CAU",
                            "releaseDate": 1982
                        }
                    ]
            }
        ]
};

describe("MovieList Component", () => {
    test("Renders Movielist", () => {
        store.dispatch({type:STORE_MOVIE_DETAILS,payload:sampleData});
        let container = render(<MovieList />);
        expect(container.getByText("Blade Runner")).toBeInTheDocument();
        fireEvent.click(container.getByTestId("1-card-item"));
        expect(store.getState().modalData.title).toBe("Blade Runner");
        expect(store.getState().modalState).toBe(true);
    });
});